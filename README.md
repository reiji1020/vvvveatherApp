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

```xml
<?xml version="1.0" encoding="UTF-8"?>
<YDF xmlns="http://olp.yahooapis.jp/ydf/1.0" firstResultPosition="1" totalResultsAvailable="1" totalResultsReturned="1">
	<ResultInfo>
		<Count>1</Count>
		<Total>1</Total>
		<Start>1</Start>
		<Status>200</Status>
		<Latency>0.002758</Latency>
		<Description></Description>
		<Copyright>(C) Yahoo Japan Corporation.</Copyright>
	</ResultInfo>
	<Feature>
		<Id>201806231620_0_139.76399</Id>
		<Name>地点(0,139.76399)の2018年06月23日 16時20分から60分間の天気情報</Name>
		<Geometry>
			<Type>point</Type>
			<Coordinates>0,139.76399</Coordinates>
		</Geometry>
		<Property>
					<WeatherAreaCode >
			<WeatherList>
				<Weather>
					<Type>observation</Type>
					<Date>201806231620</Date>
					<Rainfall >
				</Weather>
				<Weather>
					<Type>forecast</Type>
					<Date>201806231630</Date>
					<Rainfall >
				</Weather>
				<Weather>
					<Type>forecast</Type>
					<Date>201806231640</Date>
					<Rainfall >
				</Weather>
				<Weather>
					<Type>forecast</Type>
					<Date>201806231650</Date>
					<Rainfall >
				</Weather>
				<Weather>
					<Type>forecast</Type>
					<Date>201806231700</Date>
					<Rainfall >
				</Weather>
				<Weather>
					<Type>forecast</Type>
					<Date>201806231710</Date>
					<Rainfall >
				</Weather>
				<Weather>
					<Type>forecast</Type>
					<Date>201806231720</Date>
					<Rainfall >
				</Weather>
			</WeatherList>
		</Property>
	</Feature>
</YDF>
```