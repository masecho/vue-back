let http = require('http');
let users = [{ id: 1, name: '1111' }, { id: 2, name: '2222' }, { id: 3, name: '333333' }];
let server = http.createServer(function (req, res) {
  console.log(req.method, req.url);
  if (req.url == '/api/users') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(users));
  } else {
    res.end('Now Found!');
  }
});
server.listen(8800, () => {
  console.log('服务正在8800端口上启动!');
});
