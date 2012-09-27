module.exports = function (room) {
  room.listen(function (message) {
    if (message.body == 'ping') {
      room.speak('pong');
    }
  });
};
