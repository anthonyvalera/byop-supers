const express = require('express');

const app = express();

app.use(express.json());

let superHeroes = [{
    id: 0,
    name: 'The Flash',
    power: 'Super Speed',
    costumeColor: 'Red'
}, {
    id: 1,
    name: 'Antman',
    power: 'ant stuff',
    costumeColor: 'Red & Black'
  },
  {
    id: 2,
    name: 'Aquaman',
    power: 'aqua stuff',
    costumeColor: 'aqua'
  },
  {
    id: 3,
    name: 'Shuri',
    power: 'beauty & brains',
    costumeColor: 'black & gold'
  },
  {
    id: 4,
    name: 'AK47',
    power: 'wisdom',
    costumeColor: 'blue'
  },
  {
    id: 5,
    name: 'Aflexa',
    power: 'flexing',
    costumeColor: 'none'
  },
  {
    id: 6,
    name: 'Squirrel Girl',
    power: 'squirrels',
    costumeColor: 'brown'
  }
];


app.get('/', (req, res) => {
  res.json(superHeroes)
})

app.post('/newsuper', (req, res) => {
  const {
    name,
    power,
    costumeColor
  } = req.body;
  const newSuperHero = {
    id: superHeroes.length,
    name,
    power,
    costumeColor
  };

  superHeroes.push(newSuperHero);
  res.status(201).send(newSuperHero);
});

app.put('/:id', (req, res) => {
  const { id } = req.params;
  let i = superHeroes.findIndex((s) => s.id == id);

  if (i == -1) {
    return res.send('No super found')
  }
  superHeroes[i] = {
    ...superHeroes[i],
    name: req.body.name || superHeroes[i].name,
    power: req.body.power || superHeroes[i].power,
    costumeColor: req.body.costumeColor || superHeroes[i].costumeColor
  };


  res.status(200).json(superHeroes);
})

app.delete('/:id', (req, res) => {
  const { id } = req.params;

  superHeroes = superHeroes.filter(s => s.id != id);

  res.json(superHeroes);
})

app.listen(9001, () => console.log('this server is running on 9001'))