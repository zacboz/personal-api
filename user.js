var user = {
  name: 'Jon Snow',
  location: 'The Wall',
  occupations: ['Knight-commander', 'Wildling', 'Nights Watch'],
  hobbies: [
    {
      name: 'hunting',
      type: 'sport'
    },
    {
      name: 'swordmanship',
      type: 'combat'
    },
    {
      name: 'stategy',
      type: 'combat'
    }
  ],
  family: [
    {
      name: 'Sansa Stark',
      relation: 'half-sister',
      gender: 'female'
    },
    {
      name: 'Arya Stark',
      relation: 'half-sister',
      gender: 'female'
    },{
      name: 'Rhaegar Targaryen',
      relation: 'father',
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: 'Striking Snake',
      type: 'Dornish',
      rating: 5
    },
    {
      name: 'Horses Tail',
      type: "Dothraki",
      rating: 1
    },
    {
      name: 'Sleeping Giant',
      type: 'Andal',
      rating: 4
    }
  ]
};

module.exports = user;
