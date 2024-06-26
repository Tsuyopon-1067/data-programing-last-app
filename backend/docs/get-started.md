# Get started with backend

## ビルドと実行の手順
1. Dockerデーモンを起動しておきます．
2. カレントディレクトリを`backend`にします．
3. 以下のコマンドを実行します．
```
docker-compose build
docker-compose up
```
4. バックエンドのコードを更新した際は毎回ビルドをしてください．

## テストの実行方法
1. ```localhost:8080```に接続します．
2. ユーザ名を入力しなければ，自動的に「風吹けば名無し」が入力されます．
