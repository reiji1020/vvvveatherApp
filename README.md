# vvvveatherApp

[Yahoo天気API](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/weather.html)を叩いて，天気情報を取得するためのAPIコード

# version
1.1.0

# License
MIT

# How to use

```
# プロジェクトのクローン
$ git clone https://github.com/reiji1020/vvvvetherApp.git

# yarn install
$ cd path/to/vvvveatherApp
$ yarn

# make your .env
$ cp .env_sample .env
$ vi .env

NODE_APP_ID = (Your AppId)

:wq

# Please run
$ yarn start
yarn run v1.3.2
$ node ./bin/www <- Success!
```

`http://localhost:3000/weather/getWeather`にGETメソッドを使ってアクセスをすれば，東京都港区の降水予測情報を得ることができます.(座標を変更することで，好きな地点の降水予想情報を取得できます)