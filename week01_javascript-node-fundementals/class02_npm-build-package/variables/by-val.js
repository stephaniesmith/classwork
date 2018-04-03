
let x = 5;

let y = x;

x = 2;

// can be new type
// x = 'hello';

console.log(y);

function add(a, b) {
    a = 12;
    b = 42;
    return a + b;
}

const sum = add(x, y);
console.log('sum', sum);

console.log('x and y after add call', x, y);