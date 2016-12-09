var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {
  getName: function(req, res, next) {
    console.log('getting name');
    res.status(200).json(user.name);
  },

  getLocation: function(req, res, next) {
    console.log('getting location');
    res.status(200).json(user.location);
  },

  getOccupations: function(req, res, next) {
    console.log(req.query);
    if (req.query.order === 'desc'){
      res.status(200).json(user.occupations.sort());
      console.log(user.occupations);
    } else if (req.query.order === 'asc'){
      res.status(200).json(user.occupations.reverse());
      console.log(user.occupations);
    } else {
      console.log('getting occupations');
      res.status(200).json(user.occupations)
    }
  },

  getLatestOccupation: function(req, res, next) {
    user.latestOccupation = user.occupations.slice((user.occupations.length - 1))
    console.log('getting latest occupation');
    res.status(200).json(user.latestOccupation);
  },

  getHobbies: function(req, res, next) {
    console.log('getting hobbies');
    res.status(200).json(user.hobbies);
  },

  getHobbiesType: function(req, res, next) {
    // var sameType = [];
    // for(var i = 0; i < user.hobbies.length; i++) {
    //   if (user.hobbies[i].type === req.params.type){
    //     sameType.push(user.hobbies[i])
    //   }
    // }
    var response = user.hobbies.filter(function (hobby) {
      return hobby.type == req.params.type;
    })
    console.log('filtering hobby by type');
    res.status(200).json(response);
  },

  getFamily: function(req, res, next) {
    if (req.query.relation){
      console.log('getting family relation');
      var relation = user.family.filter(function (person){
      return person.relation == req.query.relation;
      })
      res.status(200).json(relation);
    } else {
      console.log('getting family');
      res.status(200).json(user.family)
    }
  },

  getFamilyGender: function(req, res, next) {
    var gender = user.family.filter(function (person) {
      return person.gender == req.params.gender;
    })
    console.log('filtering by gender');
    res.status(200).json(gender);
  },

  getRestaurants: function(req, res, next) {
    if(req.query.rating) {
      console.log(user.restaurants);
      var rating = user.restaurants.filter(function (restaurant){
      return restaurant.rating >= req.query.rating;
      })
      res.status(200).json(rating);
    } else {
      console.log('getting restaurants');
      res.status(200).json(user.restaurants)
    }
  },

  getRestaurantName: function(req, res, next) {
    console.log(req.params.name);

    var name = user.restaurants.filter(function (restaurant){
    return restaurant.name === req.params.name;
    })
    console.log('getting favorite restaurant by name');
    res.status(200).json(name);
  },

  changeName: function(req, res, next) {
    console.log('updating', req.params.name);
    var newName = req.params.newName;
    user.name = newName;
    res.status(200).json(user.name);
  },

  changeLocation: function(req, res, next) {
    console.log('updating location');
    var newLocation = req.params.newLocation;
    user.location = newLocation;
    res.status(200).json(user.location);
  },

  addHobby: function(req, res, next) {
    console.log('adding new hobby ' + req.body.name + ' to hobbies');
    var newHobby = {
      name: req.body.name,
      type: req.body.type
    };
    user.hobbies.push(newHobby);
    res.status(200).json(user.hobbies);
  },

  addOccupation: function(req, res, next) {
    console.log('adding new occupation');
    var newOccupation = req.body.occupation;
    console.log(req.body.occupation);
    user.occupations.push(newOccupation);
    res.status(200).json(user.occupations);
  },

  addFamily: function(req, res, next) {
    console.log('adding new family member ' + req.body.name + ' to family');
    var newFamily = {
      name: req.body.name,
      relation: req.body.relation,
      gender: req.body.gender
    };
    user.family.push(newFamily);
    res.status(200).json(user.family);
  },

  addRestaurant: function(req, res, next) {
    console.log('adding new restaurant ' + req.body.name + ' to restaurants');
    var newRestaurant = {
      name: req.body.name,
      type: req.body.type,
      rating: req.body.rating
    };
    user.restaurants.push(newRestaurant);
    res.status(200).json(user.restaurants);
  },

  getSkillz: function(req, res, next) {
    console.log('getting skillz');
    res.status(200).json(skillz)
  },

  getIntermediateSkill: function(req, res, next) {
    if (req.query.experience){
      console.log(req.query);
      console.log('getting Intermediate skills');
      var skills = skillz.filter(function (skill){
      return skill.experience == req.query.experience;
      })
      res.status(200).json(skills);
    } else {
      console.log('getting family');
      res.status(200).json(skillz)
    }
  },

  postSkillz: function(req, res, next){
    console.log('adding new skill ' + req.body.name + ' to skillz');
    var newSkill = {
      id: req.body.id,
      name: req.body.name,
      experience: req.body.experience
    };
    skillz.push(newSkill);
    res.status(200).json(skillz);
  },

  getSecrets: function(req, res, next){
    console.log('getting secrets');
    res.status(200).json(secrets);
  }







}
