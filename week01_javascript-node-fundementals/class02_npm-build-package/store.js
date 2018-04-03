

const store = new Store();

const toSave = { 
    name: 'garfield', 
    type: 'orange tabby' 
};

const garfield = store.save(toSave);
// { _id: 123, name 'garfield', type: 'orange tabby' }

const got = store.get(garfield.id);

assert.deepEqual(garfield, got);



store.save({ 
    name: 'felix', 
    type: 'tuxedo' 
});

store.getAll();
// [
//    { name 'garfield', type: 'orange tabby' },
//    { name 'felix', type: 'tuxedo' }
// ]