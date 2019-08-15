## Stub ServerとSwagger UIの使い方
### 起動方法
1. Dockerをダウンロード・インストールし、アカウントを作成する(最初だけ必要)\
[ダウンロードリンク(Docker for Mac)](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
2. Docker内のswaggerネットワークを作成する(最初だけ必要)
```
docker network create swagger_link
```
3. コンテナをバックグラウンドで起動・開始する
```
docker-compose up -d
```
4. コンテナを確認してこうなってたらOK
```
docker-compose ps

    Name                   Command               State               Ports
---------------------------------------------------------------------------------------
swagger-api     /usr/local/bin/apisprout / ...   Up      0.0.0.0:8083->8000/tcp
swagger-nginx   nginx -g daemon off;             Up      80/tcp, 0.0.0.0:8084->8084/tcp
swagger-ui      sh /usr/share/nginx/run.sh       Up      80/tcp, 0.0.0.0:8082->8080/tcp
```

### 使い方
#### Stub Server
[http://127.0.0.1:8084](http://127.0.0.1:8084)のURIでモックAPIが使える\

例. GETメソッドでidが1のfoodを取得したい時\
[http://127.0.0.1:8084/food/1](http://127.0.0.1:8084/food/1)
```
{
  "id": 1,
  "whySale": "本日はゲリラ豪雨により、お客さんがいらっしゃいいらっしゃいませんでした。このあんぱんは渾身のできです。",
  "allergy": "[卵,乳,小麦]",
  "foodIndo": [
    {
      "id": 1,
      "name": "あんぱん",
      "originalPrice": 600,
      "salePrice": 300,
      "startTime": "1300",
      "endTime": "1545",
      "image": "https://dl.dropboxusercontent.com/s/fxss9wae0iq143q/an-pan.jpg"
    }
  ],
  "storeInfo": [
    {
      "id": 1,
      "name": "滝川パン",
      "image": "https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg",
      "openTime": "0800",
      "closeTime": "2000",
      "zip": "860-0801",
      "address": "熊本県熊本市中央区安政町2-34 HILLS KAGOMACHIビル1F",
      "tel": "096-342-4398",
      "holiday": "不定休(店休)",
      "parking": "駐車場 徒歩5分にあり(有料)",
      "access": "通町筋から徒歩10分",
      "map": "[32.815183,130.727428]",
      "url": "http://takigawapan.jp/"
    }
  ]
}
```

#### Swagger UI
[http://127.0.0.1:8082](http://127.0.0.1:8082)のURIでAPIドキュメントが見える
