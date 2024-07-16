# --- フロントエンドのビルドステージ ---
FROM node:latest as frontend

# 作業ディレクトリの設定
WORKDIR /app

# パッケージファイルをコピー
COPY frontend/package*.json ./

RUN npm install

COPY ./frontend .

RUN npm run build

# --- バックエンドのビルドステージ ---

# 使用するベースイメージ
FROM golang:1.22.3 as builder

# 作業ディレクトリの設定
WORKDIR /app

# ソースコードをコピー
COPY ./backend .

# フロントエンドのビルド結果をコピー
COPY --from=frontend /app/dist ./public

# 依存関係をインストール
RUN go mod download

# アプリケーションをビルド
RUN CGO_ENABLED=0 GOOS=linux go build -v -o server ./api/cmd/main.go

# 実行イメージ
FROM alpine:latest
RUN apk --no-cache add ca-certificates

WORKDIR /root

# ビルドした実行ファイルとスクリプトをコピー
COPY --from=builder /app/server .

# public ディレクトリの内容をコピー
COPY --from=builder /app/public ./public

# ポートを公開
EXPOSE 8080

# タイムゾーンの適用
RUN apk --update add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata && \
    rm -rf /var/cache/apk/*


# アプリケーションの実行
CMD ["./server"]
