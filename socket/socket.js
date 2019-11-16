


function socket(app) {
  const server = require('http').createServer(app.callback());
  const io = require('socket.io')(server)

  var clients = [];
  io.on("connection", function (socket) {
    clients.push(socket);
    console.log(clients.length);
    socket.send({count:clients.length});
    broadcast();
    socket.on('message', function (data) {
      //收到消息
      broadcast(data);

    });
    socket.on('disconnect', function () {
      clients = clients.splice(clients.indexOf(socket), 1)
      console.log(`${socket.id} 离开了`);
      // console.log(clients);
      broadcast();
    })
  });
  function broadcast(data) {
    for (var i = 0; i < clients.length; i++) {
      clients[i].send({
        count: clients.length,
        info: data
      });
    }
  }
  return server;
}
module.exports = socket;

