const http = require('http');
const fs = require('fs');
const textResponse = require('./textResponses');
const jsonResponse = require('./jsonResponses');
const htmlResponse = require('./htmlResponses');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const index2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const port = process.env.PORT || process.env.NODE_PORT || 3000;
// console.log(index);
const onRequest = (request, response) => {
  const { url } = request;

  console.log(`url: ${request.url}`);
  if (url === '/') {
    // console.log("url: "+request.url);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(index);
    response.end();
  } else if (url === '/page2') {
    // console.log("url: "+request.url);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(index2);
    response.end();
  } else if (url === '/hello') {
    // console.log("url: "+request.url);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(textResponse.hello);
    response.end();
  } else if (url === '/time') {
    // console.log("url: "+request.url);
    // console.log(textResponse.time);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(textResponse.time);
    response.end();
  } else if (url === '/timeJSON') {
    // console.log("url: "+request.url);
    // console.log(textResponse.time);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(jsonResponse.time);
    response.end();
  } else if (url === '/helloJSON') {
    // console.log("url: "+request.url);
    // console.log(textResponse.time);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(jsonResponse.hello);
    response.end();
  } else if (url === '/meme') {
    // console.log("url: "+request.url);
    // console.log(textResponse.time);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(htmlResponse.meme);
    response.end();
  } else {
    // console.log("url: "+request.url);
    // console.log(textResponse.time);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(index);
    response.end();
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
