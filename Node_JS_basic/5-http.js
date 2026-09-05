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
