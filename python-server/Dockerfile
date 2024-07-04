FROM python:3.11-slim

# 必要な依存関係をインストール
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    libjpeg-dev \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリを設定
WORKDIR /app

# ソースコードをコピー
COPY main.py .
COPY word_cloud/word_cloud.py ./word_cloud/
COPY word_cloud/ipaexg.ttf ./word_cloud/
COPY requirements.txt .

# 必要なライブラリをインストール
RUN pip install -r requirements.txt

# ポートを公開
EXPOSE 8081

CMD ["python3", "main.py"]
