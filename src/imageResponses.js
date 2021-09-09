const fs = require('fs');
const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);
const getSpongegar = (request, response) => {
  response.writeHead(200, { 'content-type': 'image/png' });
  response.write(image);
  response.end();
}

module.exports = {
  getSpongegar: getSpongegar,

};