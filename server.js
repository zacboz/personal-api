var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware.addHeaders);

//endpoints
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantName);

app.put('/name/:newName', mainCtrl.changeName);
app.put('/location/:newLocation', mainCtrl.changeLocation);

app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurant);

// app.get('/skillz', mainCtrl.getSkillz);
// app.get('/skillz', mainCtrl.getIntermediateSkill);
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);


app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);






//listening
app.listen(port, function(){
  console.log('Listening on port', port);
});
