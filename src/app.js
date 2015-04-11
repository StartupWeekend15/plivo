var express    = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {
  console.log(req.body);
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address,
      port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
