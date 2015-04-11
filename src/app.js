'use strict';

var express    = require('express'),
    bodyParser = require('body-parser'),
    plivo      = require('plivo-node');

var config = require('./config');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {

  // console.log(req.body);
  //
  // { From: '12345555555',
  //   TotalRate: '0.00000',
  //   Text: 'Hello World!',
  //   To: '12345555556',
  //   Units: '1',
  //   TotalAmount: '0.00000',
  //   Type: 'sms',
  //   MessageUUID: '12345678-1234-1234-1234-123456789012' }

  sendSMS(req.body.From, function (status, response) {

    console.log('Plivo Status:' , status);
    console.log('Plivo Response:\n', response);

    res.status(status).json(response);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address,
      port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

function sendSMS(destination, cb) {

  var params = {
    src:  config.src,
    dst:  destination,
    text: 'Hi, thanks for texting!',
    type: 'sms'
  };

  var api = plivo.RestAPI({
    authId:    config.authId,
    authToken: config.authToken
  });

  api.send_message(params, cb);
}
