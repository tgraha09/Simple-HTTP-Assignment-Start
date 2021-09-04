module.exports = {
  hello: JSON.stringify({
    message: 'Hello',
  }),
  time: JSON.stringify({
    message: new Date().toTimeString().split(' ')[0],
  }),
};
