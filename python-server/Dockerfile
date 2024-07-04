# Python実行サーバーのDockerfile
FROM python:3.11-slim

# 作業ディレクトリを設定
WORKDIR /app

# ソースコードをコピー
COPY main.py .

# Flaskをインストール
RUN pip install flask

# ポートを公開
EXPOSE 8081

CMD ["python3", "main.py"]