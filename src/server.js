const http = require('http');

const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const htmlHandler = require('./htmlResponses.js');
const imageHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
// console.log(index);
const onRequest = (request, response) => {
  const { url } = request;

  console.log(`url: ${request.url}`);
  switch (url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getIndex2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/dankmeme':
      imageHandler.getSpongegar(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
