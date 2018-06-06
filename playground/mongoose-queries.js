const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5b11ea6d700063223846de31';

if(!ObjectID.isValid(id)){
    return console.log('Invalid todo');
}

Todo.findById(id).then((todo) => {
     console.log('Todo by id', todo);    
}).catch((e) => console.log(e));

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });