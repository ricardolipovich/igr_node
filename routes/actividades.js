var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');

router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('actividades', {
    isActividades: true,
    novedades
  });
});
module.exports = router;