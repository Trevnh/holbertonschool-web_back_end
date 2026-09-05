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
        const field = data1.map((row) => row[3]);
        const nameField = data1.map((row) => [row[0], row[3]]);
        const uniqueFields = [...new Set(field)];
        uniqueFields.forEach((element) => {
          const list = [];
          nameField.forEach((e) => {
            if (e[1] === element) {
              list.push(e[0]);
            }
          });
          output += `Number of students in ${element}: ${list.length}. List: ${list.join(', ')}\n`;
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
