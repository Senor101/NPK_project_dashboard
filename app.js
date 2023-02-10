const WebSocket = require('ws');
const express = require('express');

// const app = express();

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
  console.log('Client connected');

  // let LED_DATA;
  let datareceived = false;

  socket.on('message', (message) => {
    // Parse the incoming JSON string
    if(!datareceived){
    const data = JSON.parse(message);
    // const sensor1 = data1
    // Access the values of the sensor1 and sensor2 keys
    console.log(data);
    datareceived = true;
  }
  });

  // app.use('/',(req,res) => {
  //   req.json(data);
  // })

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});
