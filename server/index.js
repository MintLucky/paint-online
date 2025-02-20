const express = require('express');
const app = express();
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();

const PORT = process.env.PORT || 5000;

app.ws('/ws', (ws, req) => {
    ws.on('message', (msg) => {
        msg = JSON.parse(msg);
        switch (msg.method) {
            case 'connection':
                connectionHandler(ws, msg);
                break;
            case 'post':
                ws.send(JSON.stringify({ method: 'post', data: 'Hello from server!' }));
                break;
            default:
                ws.send(JSON.stringify({ method: 'default', data: 'Hello from server!' }));
                break;
        }  
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});  


const connectionHandler = (ws, msg) => {
  msg = JSON.parse(msg);
  ws.id = msg.id;
  broadcastConnection(ws, msg);
}

const broadcastConnection = (ws, msg) => {
  aWss.client.forEach(client => {
      if (client.id === msg.id) {
          client.send(`User ${msg.username} connected`);
      }
  });
}