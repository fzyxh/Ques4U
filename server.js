/*
server.js是./src/app.js的测试用代码
在大部分功能整理完毕后会迁移至app.js
即调试时请使用server.js启动
发布后请使用app.js启动
*/


// var http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./src/routers/index');  //  引入路由

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

app.use(bodyParser.urlencoded({
    extends: true
}));

//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", '3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//  使用路由 /index 是路由指向名称
app.use('/index',router);

//配置服务端口 
var server = app.listen(8888, () => {
    const hostname = 'localhost';
    const port = 8888;
    console.log(`Server running at http://${hostname}:${port}/`);
})

//test------------------------------------------------

// var register_user = require('./src/services/register_user');
// rg_user = new register_user('000001','GayHub','iughakdfgy','114514@admin.com');
// console.log(rg_user.register());

// var delete_group = require('./src/services/delete_group');
// del_group = new delete_group(000001);
// console.log(del_group.delete());

// var register_group = require('./src/services/register_group');
// var null_json = '{"1" : 112}';
// rg_group = new register_group(000001,'GayHub',000001,null_json,null_json);
// console.log(rg_group.register());

//test------------------------------------------------

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');