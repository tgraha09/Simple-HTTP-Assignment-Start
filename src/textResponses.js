const hello = "Hello"

const getTimeString = () =>{
  const d = new Date();
  const dateString = `${d.toTimeString().split(' ')[0]}`
  return dateString
}

const getHello = (request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.write(hello);
  response.end();
}

const getTime = (request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.write(getTimeString());
  response.end();
}

module.exports = {
  getHello: getHello,
  getTime: getTime,
  getTimeString: getTimeString,
  hello: hello
};