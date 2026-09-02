const fs = require('node:fs');

function countStudents(path) {
  try {
    const data1 = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' })
      .split('\n')
      .map((e) => e.trim())
      .map((e) => e.split(',').map((e) => e.trim()))
      .filter((e) => e.length !== 1);
    data1.shift();
    console.log(`Number of students: ${data1.length}`);
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
      console.log(`Number of students in ${element}: ${list.length}. List: ${list.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
