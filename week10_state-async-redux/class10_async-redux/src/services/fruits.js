import shortid from 'shortid';

const key = 'fruits';
let data;

if(window) {
  window.onbeforeunload = () => {
    window.localStorage.setItem(key, JSON.stringify(fruits));
  };
  
  data = window.localStorage.getItem(key);
}

const fruits = (data && data !== 'undefined') ? JSON.parse(data) : initFruits();

export default fruits;

function initFruits() {
  return [{
    id: shortid.generate(),
    name: 'banana', 
    color: 'yellow',
    comments: [
      { id: shortid.generate(), text: 'yummy' },
      { id: shortid.generate(), text: 'slippery' }
    ]
  }, { 
    id: shortid.generate(),
    name: 'orange', 
    color: 'orange', 
    comments: [] 
  }, { 
    id: shortid.generate(),
    name: 'apple', 
    color: 'red', 
    comments: []
  }];
}