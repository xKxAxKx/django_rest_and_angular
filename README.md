# django_rest_and_angular
## これはなにか？
* Django REST FrameworkでAPIを出力
* AngularでAPIをレンダリングしてアレする

## git cloneしたらやること
### Djangoのマイグレーション
```
$ python manage.py migrate
```

### npmのインストール
```
$ npm install
$ npm install --save intl@1.2.5 bootstrap@3.3.7 ng2-bootstrap@1.1.14
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
