const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// importing sequelize model and database connection
const {Sample,sequelize} = require('./models/samples.model');

// importing routes
const indexRouter = require('./routes/index.router');
const sampleRouter = require('./routes/sample.router');
const indexController = require('./routes/index.controller')


let sensorDataObj = {
  LED_BLUE : 0,
  LED_GREEN : 0,
  LED_RED : 0
}


// implementing ejs templating engine
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));


// handling get request from nodemcu and getting data
app.get('/data', async (req, res) => {
  try
  {
    console.log('get data')
    let data1 = await req.query.data1;
    sensorDataObj.LED_GREEN = data1;
    let data2 = await req.query.data2;
    sensorDataObj.LED_BLUE = data2;
    let data3 = await req.query.data3;
    sensorDataObj.LED_RED = data3;
    const sample = await Sample.create(sensorDataObj);
    console.log(sample);
    console.log("Data stored in Database");
  } catch (err) {
    console.log(err);
  }
});

app.use('/',indexRouter);
app.use('/sample',sampleRouter);
app.use(indexController.get404);
// routes

async function startServer() {
  try
  {
    await sequelize.authenticate()
    console.log('DB connected');
    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();