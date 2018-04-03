

let obj1 = { name: 'bluey' };

let obj2 = obj1;

let obj3 = { name: 'bluey' };

console.log('1 and 2', obj1 === obj2);
console.log('1 and 3', obj1 === obj3);
console.log('2 and 3', obj2 === obj3);

function printPerson(person) {
    person.name = 'freddie';
}

printPerson(obj1);
console.log('after function call', obj1);