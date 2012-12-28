module.exports = function ping (client) {
  client.on('.ping', function (command) {
    command.reply('pong');
    console.log('Ponged a ping from ' + command.sender);
  });
  client.on('?ping', function () {
    client.say('ping - ping the bot and get a pong - https://github.com/gsf/n0d3-ping');
  });
};
