// node.js의 http모듈을 변수 http로 추출합니다.
var http = require('http');

// http모듈의 createServer 함수를 호출하여 서버를 생성합니다.
// req: request. 웹 요청 매개변수, res: response. 웹 응답 매개변수
http.createServer(function(request, response) {
    // writeHead: 응답 헤더를 작성합니다.
    // 200: 응답 성공, text/html: html문서
    response.writeHead(200, {'Content-Type':'text/html'});
    // end: 응답 본문을 작성합니다.
    response.end('Hello World');
    // listen: 매개변수로 포트와 호스트를 지정합니다.
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
