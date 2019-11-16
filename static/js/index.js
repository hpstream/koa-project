	var socket = io.connect('/');

	socket.on('message', function (data) {
	  //收到消息
	  console.log(data);
	  
  });
  