const fs = require('fs');

const buffer = fs.readFileSync('EDITME.md');

const getChar = char => char.charCodeAt(0);

const charB = getChar('B');
const charb = getChar('b');
const charF = getChar('F');
const charf = getChar('f');

for(let i = 0; i < buffer.length; i++) {
    const number = buffer.readInt8(i);
    if(number === charB) buffer.writeInt8(charF, i);
    else if(number === charb) buffer.writeInt8(charf, i);
}

fs.writeFileSync('EDITME.md', buffer);