const standardData = require('../utils/standard');

exports.getHome = (req, res, next) => {
  res.status(200).render('index',{
    title : "Home",
    sensorObj : standardData
  })
}

exports.get404 = (req, res, next) => {
  res.status(404).render('404',{
    title: 'Page not found'
  })
  }