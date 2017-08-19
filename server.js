
var restify = require('restify'),

server = restify.createServer();

server.get('/', function (req, res, cb) {
  res.send("LOL");
  return cb();
});
server.listen(process.env.PORT || 5000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
