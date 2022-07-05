var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

router.get('/', function(req, res, next) {
    res.render('contacto', { isContacto: true });
  });


router.post('/', async function(req,res,next) {

var nombre = req.body.nombre;
var email = req.body.email;
var tel = req.body.tel;
var comentarios = req.body.comentarios;
var obj = {
  to:'ricardo@gmail.com',
  subject:'Contacto desde la pagina web',
  html:nombre + " se contacto a desde la web de Geri, el correo del contacto es: " + email + "<br> Telefono de contacto: " + tel + " <br> Dejo la siguiente consulta: " + comentarios
}

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user:process.env.SMTP_USER,
      pass:process.env.SMTP_PASS
    }

  });

  var info = await transport.sendMail(obj)

  res.render('contacto', {
    message: 'Gracias por enviar su consulta',
    isContacto: true
  })


});

module.exports = router;

