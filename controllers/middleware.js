var exports = module.exports = {}
var skillz = require('../skillz.js');



module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },

  generateId: function(req, res, next) {
    req.body.id = skillz.length + 1;
    next();
  },

  verifyUser: function(req, res, next) {
    var error = "username or pin don't match";
    var username = 'zacboz';
    var pin = 8000;
    if ((username == req.params.username) & (pin == req.params.pin)){
      next();
    } else {
      console.log(error);
      res.status(401).json(error);
    }

  },

}
