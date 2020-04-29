/**
 * 
 */
var express = require('express');
var request = require('superagent');
var jwt = require('jsonwebtoken');
var fs = require("fs");
var menu = require('../models/menu')

var router = express.Router();
// 登录接口
router.post('/login', function (req, res) {
  request.get('https://api.weixin.qq.com/sns/jscode2session')
    .query({
      appid: 'wx287f895c20f0e074',
      secret: '1a2aa00ae7259c5e67216d25855ee964',
      js_code: req.body.code,
      grant_type: 'authorization_code'
    }).then(response => {
      const result = JSON.parse(response.text);
      if (result.errcode) {
        res.json({
          code: result.errcode,
          msg: result.errmsg,
          hints: result.hints
        })
      } else {
        // 返回结果包含session_key openid
        let token = jwt.sign({ ...result, code: req.body.code }, 'mykey', {
          expiresIn: 24 * 60 * 60 // 单位s
        }); // 过期时间是1天
        res.json({
          code: 0,
          msg: '请求成功',
          data: {
            token: token
          }
        })

      }
    });
})

module.exports = router;