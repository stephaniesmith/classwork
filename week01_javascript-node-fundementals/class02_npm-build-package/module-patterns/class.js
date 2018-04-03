
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    return this.name;
}