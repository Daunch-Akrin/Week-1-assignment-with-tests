/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoArray = [];
  }
  add(str) {
    this.todoArray.push(str);
  }
  remove(index) {
    this.todoArray.splice(index,1);
  }
  update(index,str) {
    if(index<this.todoArray.length) {
      this.todoArray.splice(index,1);
      this.todoArray.splice(index,0,str);
    }
  }
  getAll() {
    return this.todoArray;
  }
  get(index) {
    if(index>=this.todoArray.length) {
      return null;      
    }
    else {
      return this.todoArray[index];
    }
  }
  clear() {
    this.todoArray = [];
  }
}

module.exports = Todo;
