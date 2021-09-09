const text = require("./textResponses");

const getTimeString = () =>{
  const d = new Date();
  const dateString = `${d.toTimeString().split(' ')[0]}`
  return dateString
}

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello
  }
  const stringMessage = JSON.stringify(helloJSON)
  response.writeHead(200, { 'content-type': 'application/json' });
  response.write(stringMessage);
  response.end();
}

const getTimeJSON = (request, response) => {
  const timeJSON = {
    message: text.getTimeString()
  }
  const stringMessage = JSON.stringify(timeJSON)
  response.writeHead(200, { 'content-type': 'application/json' });
  response.write(stringMessage);
  response.end();
}

module.exports = {
  getHelloJSON: getHelloJSON,
  getTimeJSON: getTimeJSON,
};