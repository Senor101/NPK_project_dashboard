const express = require('express');
const sequelize = require('sequelize');
const app = express();

let sensorDataObj = {
  LED_BLUE : 0,
  LED_GREEN : 0,
  LED_RED : 0,
}

app.get('/data', async (req, res) => {
  try
  {
    let data1 = await req.query.data1;
    sensorDataObj.LED_GREEN = data1;
    let data2 = await req.query.data2;
    sensorDataObj.LED_BLUE = data2;
    let data3 = await req.query.data3;
    sensorDataObj.LED_RED = data3;
    console.log(data1 + data2 + data3);
  } catch (err) {
    console.log(err);
  }
  res.send("done");
});

// app.get('/data1', (req, res) => {
//   let data = req.query.data;
//   sensorDataObj.LED_BLUE = data;
// });

// app.get('/data2', (req, res) => {
//   let data = req.query.data;
//   sensorDataObj.LED_RED = data;
// });

app.get('/showdata',(req,res) => {
  console.log(sensorDataObj);
  res.json(sensorDataObj);
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
