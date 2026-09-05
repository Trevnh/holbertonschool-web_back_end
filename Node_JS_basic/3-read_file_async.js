const fs = require('node:fs');

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
        console.log(`Number of students: ${objArray.length}`);
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
          console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
        resolve(objArray);
      }
    });
  });
  return promise;
}

module.exports = countStudents;
