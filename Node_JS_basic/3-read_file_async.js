const fs = require('node:fs');

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
        console.log(`Number of students: ${data1.length}`);
        const fields = {};
        data1.forEach((line) => {
            const firstName = line[0];
            const field = line[3].trim();
            
            if (!fields[field]) {
                fields[field] = [];
            }

            fields[field].push(firstName);
        })
        Object.keys(fields).forEach((field) => {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });
        resolve();
      }
    });
  });
  return promise;
}

module.exports = countStudents;
