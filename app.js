const WebSocket = require('ws');
const express = require('express');
const { Sequelize } = require('sequelize');

//setting up database
const sequelize = new Sequelize(
  'minor_project','root','',{
    host:'localhost',
    dialect : 'mysql'
});



//receiving data from nodemcu
// connection extablished at port 80
const server = new WebSocket.Server({ port: 80 });

const app = express();

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    // parse the incoming json string
    const data = JSON.parse(message);
    // Access the values of sensors
    const LED1 = data.LED1;
    const LED2 = data.LED2;
    const LED3 = data.LED3;

    console.log(`Received Values: ${LED1}, ${LED2}, ${LED3}`);
  });


  socket.on('close', () => {
    console.log('Client Disconnected');
  })
  //socket.send('Welcome to the server!');
});



//handling the datas in our express app

app.use('/',(req,res,next) => {
  res.render()
})

sequelize.authenticate()
.then(res => {
  console.log('Connection established with database');
  app.listen(3000,()=>{
    console.log('server running on 3000');
  })
})
.catch(err => {
  console.log("Connection with database failed");
})