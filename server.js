var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

//test------------------------------------------------

// var register_group = require('./src/services/register_group');
// var null_json = '{"1" : 112}';
// rg_group = new register_group(000001,'GayHub',000001,null_json,null_json);
// console.log(rg_group.register());

var delete_group = require('./src/services/delete_group');
del_group = new delete_group(000001);
console.log(del_group.delete());

//test------------------------------------------------

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');