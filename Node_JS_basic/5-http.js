const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const database = process.argv[2];
    res.write('This is the list of our students\n');
    countStudents(database)
      .then((result) => {
        res.end(result.trim());
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

const PORT = 1245;

app.listen(PORT, 'localhost', () => {
});

module.exports = app;
