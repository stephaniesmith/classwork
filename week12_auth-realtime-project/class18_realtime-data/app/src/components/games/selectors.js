

export const myTurn = ({ board, playerX }, { _id: id }) => {
  const turns = board.filter(letter => letter).length;
  const turn = turns % 2 === 0 ? 'X' : 'O';
  const userIsX = id === playerX;
  return (turn === 'X' && userIsX) || (turn === 'O' && !userIsX); 
};