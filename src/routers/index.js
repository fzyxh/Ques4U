const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
var UserModel = require('../models/UserModel');

router.use((req, res, next) => {
  console.log(`路由执行成功啦~~~`, Date.now());
  next()
})

router.get(`/`, (req, res, next) => {
  res.json({
    status: 200,
    data: `请求成功`
  })
})

router.get(`/data`, (req, res, next) => {
  res.json({
    status: 200,
    data: [1, 2, 3, 4, 5, 6, 7]
  })
})

router.post(`/auth`, function(req, res, next) {
    UserModel.find(req.body.useremail,function(err, user){
        if (err) throw err;
        if (!user) {
            res.json({ success: false, message: '认证失败，用户名找不到' });
        } 
        else if (user) {
            // 检查密码
            if (user.user_password != req.body.password) {
                res.json({ success: false, message: '认证失败，密码错误' });
            } 
            else {
                // 创建token
                var token = jwt.sign(user, 'app.get(superSecret)', {
                    'expiresIn': "1h" // 设置过期时间
                });

                // json格式返回token
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        }
    });
});

module.exports = router