# 使用するベースイメージ
FROM golang:1.22.2 as builder

# 作業ディレクトリの設定
WORKDIR /app

# ソースコードをコピー
COPY . .

# 依存関係をインストール
RUN go mod download

# アプリケーションをビルド
RUN CGO_ENABLED=0 GOOS=linux go build -v -o server ./api/cmd/main.go

# 実行イメージ
FROM alpine:latest
RUN apk --no-cache add ca-certificates

WORKDIR /root/

# ビルドした実行ファイルとスクリプトをコピー
COPY --from=builder /app/server .

# ポートを公開
EXPOSE 8080

# アプリケーションの実行
CMD ["./server"]