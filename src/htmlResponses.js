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
  
};
