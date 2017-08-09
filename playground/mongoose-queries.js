const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '598b5804a9dc4f1cdceac65d11';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userId = '598a2c0c87f93a133825e58e';
// User.findById
User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
