# django_rest_and_angular
## これはなにか？
* Django REST FrameworkでAPIを出力
* AngularでAPIをJson形式で受け取って、html出力

## git cloneしたらやること
### Djangoのマイグレーション
```
$ python manage.py migrate
```

### Djangoのadminユーザ作成
```
$ python manage.py createsuperuser
```

### npmのインストール
```
$ npm install
$ npm install --save intl bootstrap ng2-bootstrap
```

### アプリケーションの起動
```
$ python manage.py runserver
```
http://localhost:8000/api でAPIが提供されていることを確認する

```
$ npm start
```
http://localhost:4200/ でアプリケーション起動
