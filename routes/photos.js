'use strict';
// Expressのモジュールの読み込み
const express = require('express');
// Routerオブジェクトのを呼び出す
// Application オブジェクトにセットすることによって、特定のパスへの HTTP へのアクセスを処理する
const router = express.Router();

// GET メソッドで / というルートのパスにアクセスがあった時に、
// views/index.jade のテンプレートを利用して、
// render 関数を呼び、 HTML 形式の文字列を作って、レスポンスとして返す
// パス以下のパスを記述すればよい('/')
router.get('/', (req, res, next) => {
  res.send('Some photos');
});

router.param('title', (req, res, next, id) => {
  res.send(id);
  next();
});

router.get('/:title', (req, res, next) => {
  res.end();
});

// Routerオブジェクト自身をモジュールとして提供する
module.exports = router;
