module.exports = function ping (room, log) {
  room.on('command', function (message) {
    if (message.indexOf('ping') != -1) {
      room.say('pong');
      log('Ponged a ping');
    }
  });
};
