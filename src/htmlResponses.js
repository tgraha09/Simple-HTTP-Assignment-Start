const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const index2 = fs.readFileSync(`${__dirname}/../client/client2.html`);




const getIndex = (request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.write(index);
  response.end();
}

const getIndex2 = (request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.write(index2);
  response.end();
}




module.exports = {
  getIndex:getIndex,
  getIndex2: getIndex2,
  other: '',
  meme: '<img src="https://preview.redd.it/1s8mx9v07r331.png?auto=webp&s=e1decdfa675734cc1c2c3bf4a1fbb957aeb49122"></img>',
};
