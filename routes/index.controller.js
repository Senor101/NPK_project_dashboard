exports.getHome = (req, res, next) => {
  res.status(200).render('index',{
    sensorObj : {
      LED_RED : 965,
      LED_BLUE : 1018,
      LED_GREEN : 1023
    }
  })
}