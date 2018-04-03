
const person = {
    first: 'Tammy',
    last: 'Smith'
};

const { first, last } = person;

const first = person.first;
const last = person.last;



function printName({ first, last }) {
    console.log(`${first} ${last}`)
}

const name = 'bob';
const age = 12;

const personES3 = { 
    name: name, 
    age: age,
    speak: function() {
        return this.name;
    }
};

const personES5 = { 
    name, 
    age,
    speak() {
        return this.name;
    }
};
const { first, last } = person;
