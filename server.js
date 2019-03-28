const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    // http://localhost:9090/index.html
    if (req.url === '/index.html') {
      // 1. 通过 fs 模块将 index.html 的内容给获取到。然后wirte出去
      fs.readFile('./index.html', (err, data) => {
        if (err) {
          res.write('500');
        } else {
          res.write(data)
        }
        res.end();
      })
      
      return;
    }

    // /img/2.jpg
    if (req.url === '/img/2.jpg') {
      // fs
      // !!!!!! 图片文件需要注意 格式问题
      let imgData = fs.readFileSync('./img/2.jpg', 'binary');
      res.write(imgData, 'binary');
      res.end();

      return;
    }

    if (req.url === '/css/common.css') {
      let cssData = fs.readFileSync('./css/common.css');
      res.write(cssData);
      res.end();
      return;
    }

    if (req.url === '/css/reset.css') {
      let cssData = fs.readFileSync('./css/reset.css');
      res.write(cssData);
      res.end();
      return;
    }

    res.write('hello world');
    res.end();
  }
  
});

server.listen(9090);
console.log('服务器启动成功');