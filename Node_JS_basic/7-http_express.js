const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const database = process.argv[2];

function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const data1 = data
          .split('\n')
          .map((e) => e.trim())
          .map((e) => e.split(',').map((e) => e.trim()))
          .filter((e) => e.length !== 1);
        data1.shift();
        let output = `Number of students: ${data1.length}\n`;
        const fields = {};
        data1.forEach((line) => {
          const firstName = line[0];
          const field = line[3].trim();
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });
        Object.keys(fields).forEach((field) => {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });
        resolve(output);
      }
    });
  });
  return promise;
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then((result) => {
      res.type('text/plain');
      res.send(`This is the list of our students\n${result.trim()}`);
    })
    .catch((error) => {
      res.type('text/plain');
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(PORT);

module.exports = app;
