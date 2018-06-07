const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log('Result', result);
// });

Todo.findByIdAndRemove('5b16ceebbf7ee919786d245c').then((todo) => {
    console.log(`${todo.text} has been removed.`);
});