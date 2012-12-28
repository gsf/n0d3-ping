module.exports = function ping (client, n0d3) {
  client.on('.ping', function (command) {
    command.reply('pong');
    n0d3.log('Ponged a ping');
  });
  client.on('?ping', function () {
    client.say('ping - ping the bot and get a pong - https://github.com/gsf/n0d3-ping');
  });
};
