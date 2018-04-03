
let x = 5;

function addFive(y) {
    return x + y;
}

setTimeout(() => {
    const added = addFive(2);
    console.log(added);
}, 100);

x = 12;
