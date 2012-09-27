module.exports = function ping (room, log) {
  room.listen(function (message) {
    if (message.body == 'ping') {
      room.speak('pong');
      log('Ponged a ping');
    }
  });
};
