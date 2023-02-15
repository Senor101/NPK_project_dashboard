const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {Sample,sequelize} = require('./models/samples.model');

let sensorDataObj = {
  LED_BLUE : 0,
  LED_GREEN : 0,
  LED_RED : 0
}


// implementing ejs templating engine
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: false}));


//routes

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
  res.redirect('/sample');
  // res.status(200).json({msg:"Temp object created"});
});


app.get('/sample',async (req,res) => {
  res.render('\index',{
    sensorobj : sensorDataObj
  })
})

app.post('/sample',async (req,res) => {
  try {
  const sample = await Sample.create(sensorDataObj);
  console.log(sample);
  }
  catch(err) {
    console.log(err);
  }

  res.status(201).json({msg:"Data stored in database"})
})

// app.get('/data2', (req, res) => {
//   let data = req.query.data;
//   sensorDataObj.LED_RED = data;
// });

app.get('/showdata',async (req,res) => {
  try{
    const samples = await Sample.findAll();
    console.log(samples);
    res.status(200).json(samples);
  } catch(err) {
    console.log(err);
  }
})

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