import shortid from 'shortid';
import fruits from './fruits';

export const getFruits = () => Promise.resolve(fruits.slice());

export const postFruit = fruit => {
  const newFruit = {
    ...fruit,
    id: shortid.generate(),
    timestamp: new Date()
  };
  fruits.push(newFruit);
  return Promise.resolve(newFruit);
};

export const updateFruit = fruit => {
  let index = fruits.findIndex(f => f.id === fruit.id);
  if(index === -1) index = fruits.length = 1;
  const updated = { ...fruit };
  fruits.splice(index, 1, updated);
  return Promise.resolve(updated);
};

export const deleteFruit = id => {
  let index = fruits.findIndex(f => f.id === id);
  if(index === -1) return;
  fruits.splice(index, 1);
  return Promise.resolve({ removed: true });
};

export const addComment = (fruitId, comment) => {
  let fruit = fruits.find(f => f.id === fruitId);
  if(!fruit) return;

  const newComment = {
    ...comment,
    id: shortid.generate(),
    timestamp: new Date()
  };

  fruit.comments.push(newComment);
  return Promise.resolve(newComment);
};