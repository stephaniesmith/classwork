
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    return this.name;
};

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `I ${this.getVerb()} ${this.name}`;
    }

    getVerb() {
        return 'am';
    }
}

class SuperHero extends Person {
    constructor(name, power) {
        super(name);
        this.power = power;
    }

    fightVillian() {

    }

    getVerb() {
        return 'are';
    }

    sayHello() {
        return `${super.sayHello()}, my power is ${this.power}`; 
    }
}

class Dialog extends React.Component {
    
}