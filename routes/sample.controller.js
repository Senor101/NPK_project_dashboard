const {Sample} = require('../models/samples.model');
const standardData = require('../utils/standard');

exports.getAllSample = async (req, res, next) => {
  try {
    const samples = await Sample.findAll();
    res.status(200).render('samples',{
      samples: samples,
      title : 'Samples'
    });
  } catch(err) {
    console.log(err);
  }
}

exports.getSample = async (req, res, next) => {
  try {
    const sampleId = req.params.id;
    const sample = await Sample.findByPk(sampleId);
    res.status(200).render('sample', {
      sample : sample,
      title : `Sample${sampleId}`,
      standard : standardData
    })
  } catch (err) {
    console.log(err);
  }

}