const http = require('http');
const fs = require('fs');

function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        // parse csv into array of arrays
        const data1 = data
          .split('\n')
          .map((e) => e.trim())
          .map((e) => e.split(',').map((e) => e.trim()))
          .filter((e) => e.length !== 1);
        // turn array of arrays into array of objects
        const [headers, ...rows] = data1;
        const objArray = rows.map((row) => row.reduce((obj, val, index) => {
          const updatedObj = { ...obj };
          updatedObj[headers[index]] = val;
          return updatedObj;
        }, {}));
        let output = `Number of students: ${objArray.length}\n`;
        // make an object with key value pair of {field: [firstnames]}
        const fields = {};
        objArray.forEach((e) => {
          if (Object.hasOwn(fields, e.field)) {
            fields[e.field].push(e.firstname);
          } else {
            fields[e.field] = [e.firstname];
          }
        });
        for (const [key, value] of Object.entries(fields)) {
          output += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
        }
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
