# vvvveatherApp

[Yahoo天気API](https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/weather.html)を叩いて，天気情報を取得するためのAPIコード

# version
1.2.1

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

`http://localhost:3000/weather/getWeather`にGETメソッドを使ってアクセスをすれば，東京都港区の降水予測情報を得ることができます.

# I/F

|パラメータ名|説明|
|:--|:--|
|longitude|降水予報を取得したい地点の経度|
|latitude|降水予報を取得したい地点の緯度|

## Sample Request

```
// 東京都千代田区丸の内２丁目４−１
http://localhost:3000/weather/getWeather?longitude=35.681235&latitude=139.763995
```

```json
{
    "ResultSet": {
        "name": "地点(35.681235,139.76399)の2018年07月13日 22時35分から60分間の天気情報",
        "geometry": "35.681235,139.763995",
        "longitude": "35.681235",
        "latitude": "139.763995",
        "weatherList": {
            "Weather": [
                { "Type": "observation", "Date": "201807132235" },
                { "Type": "forecast", "Date": "201807132245" },
                { "Type": "forecast", "Date": "201807132255" },
                { "Type": "forecast", "Date": "201807132305" },
                { "Type": "forecast", "Date": "201807132315" },
                { "Type": "forecast", "Date": "201807132325" },
                { "Type": "forecast", "Date": "201807132335" }
            ]
        }
    }
}
```