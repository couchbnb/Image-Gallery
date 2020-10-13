const faker = require('faker');
const mysql = require('mysql');
// not setting to connect to db for deployment vs development
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'student',
  database: 'couchbnb',
});

connection.connect();
// random city helper function
const address = () => {
  const cities = ['Oceanside', 'Huntington Beach', 'Lake Tahoe', 'Pacifica', 'Wilsonville', 'Fresno', 'Corvallis', 'Blenheim', 'Arcadia'];

  const state = ['Oregon', 'California', 'Jefferson'];

  return `${cities[faker.random.number(8)]}, ${state[faker.random.number(2)]}, United States`;
};

// property description generator

const description = () => {
  const description = ['Romantic', 'Beach Side', 'Sunny', 'Modern', 'Privet', 'Cozy', 'Secluded'];
  const mid = ['Two Bedroom', 'Fully Loaded', 'Custom Design', 'Entire', '', 'Rustic', 'Country', ''];
  const type = ['Guest House', 'Loft', 'Getaway', 'Tree House', 'Town House', 'Cabin', 'Garden Retreate', 'Unique Stay', 'Hacker House'];
  const end = ['close to Downtown', '', 'With Privet Entrance', '', '', 'Near Attractions', '', ''];
  return `${description[faker.random.number(6)]} ${mid[faker.random.number(7)]} ${type[faker.random.number(8)]} ${end[faker.random.number(7)]}`;
};

// Random secquental number array generator and shuffle.

const photoSetGen = function () {
  const orderArray = [];
  const max = faker.random.number({ min: 7, max: 15 });

  for (let i = 0; i <= max; i += 1) {
    orderArray.push(i);
  }
  // shuffle array
  const shuffledArr = [];
  const copy = orderArray.slice();

  const min = 0;

  copy.forEach((number, index) => {
    const randomNum = Math.floor((Math.random() * (max - min + 1)));
    const current = copy[index];
    const ranInt = copy[randomNum];
    copy[index] = ranInt;
    copy[randomNum] = current;
  });
  return JSON.stringify(copy);
};

// rating generator

const ratingGen = function () {
  const precision = 100; // 2 decimals
  const randomnum = Math.floor(Math.random() * (4 * precision - 1 * precision) + 2 * precision) / (1 * precision);
  return randomnum;
};

// seeding function takes in "seed" as an argument for the number of amount of records created.
const seeder = (seed) => {
  for (let i = 0; i < seed; i += 1) {
    const param = [null, description(), ratingGen(), faker.random.number({ min: 1, max: 150 }), faker.random.number(1), faker.random.number(2), address(), faker.random.number({ min: 1, max: 6 }), photoSetGen()];

    connection.query('INSERT INTO gallery VALUES (?,?,?,?,?,?,?,?,?)', param, (err, sucsess) => {
      if (err) {
        console.log('we had an error :', err);
      } else {
        console.log('sucsess entry added number :', i, sucsess);
      }
    });
  }
};

seeder(100);
