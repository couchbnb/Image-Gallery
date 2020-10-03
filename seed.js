const faker = require('faker');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'couchbnb',
});

connection.connect();
// random city helper function
const address = () => {
  const cities = ['Oceanside', 'Huntington Beach', 'Lake Tahoe', 'Pacifica', 'Wilsonville', 'Fresno', 'Corvallis', 'Blenheim', 'Arcadia'];

  const state = ['Oregon', 'California', 'Jefferson'];

  return `${cities[faker.random.number(8)]}, ${state[faker.random.number(2)]}, United States`;
};

// Random secquental number array generator and shuffle.

const photoSetGen = function () {
  const orderArray = [];
  let max = faker.random.number({ min: 7, max: 15 });

  for (let i = 0; i <= max; i += 1) {
    orderArray.push(i);
  }
  // shuffle array
  const shuffledArr = [];
  const copy = orderArray.slice();

  const min = 0;
console.log(copy,"copy")

  copy.forEach((number, index) => {
    const randomNum = Math.floor((Math.random() * (max - min + 1)));
    var current = copy[index]
    var ranInt = copy[randomNum]
    copy[index] = ranInt;
    copy[randomNum] = current;

  });
  return JSON.stringify(copy);
};

// seeding function takes in "seed" as an argument for the number of amount of records created.
const seeder = (seed) => {
  for (let i = 0; i < seed; i += 1) {
    const param = [null, 'Bobs place', faker.random.number({ min: 1, max: 5 }), faker.random.number(1), faker.random.number(2), address(), faker.random.number({ min: 1, max: 6 }), photoSetGen()];
    console.log(param, typeof faker.random.number());

    connection.query('INSERT INTO gallery VALUES (?,?,?,?,?,?,?,?)', param, (err, sucsess) => {
      if (err) {
        console.log('we had an error :', err);
      } else {
        console.log('sucsess entry added number :', i, sucsess);
      }
    });
  }
};

seeder(100);

console.log(photoSetGen())