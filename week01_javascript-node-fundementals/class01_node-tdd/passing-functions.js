
const number = [1, 13, 7];

function square(x) {
    return x * x;
}

// wrap in callback
number.map(n => square(n));

// pass directly
number.map(square);

// (won't work)
number.map(square());

const boxxy = square;
boxxy();