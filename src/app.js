const Person = require('./Person');

const person = new Person('Basia');
document.querySelector('#app').textContent = person.greet();