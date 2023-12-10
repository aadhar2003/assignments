/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
list=[];
add(todo) {
  this.list.push(todo);  
}
remove(indexOfTodo){
  if(indexOfTodo<0 || indexOfTodo>this.list.length-1){
    return;
  }
  for(let i=indexOfTodo;i<this.list.length-1;i++){
    this.list[i]=this.list[i+1];
  }
  this.list.pop();
}
update(index, updatedTodo){
  if(index<0 || index>this.list.length-1){
    return;
  }
  this.list[index]=updatedTodo;
}
getAll(){
  return this.list
}
get(indexOfTodo){
  if(indexOfTodo<0 || indexOfTodo>this.list.length-1){
    return null;
  }
  return this.list[indexOfTodo];
}
clear(){
  this.list=[];
}
}


module.exports = Todo;
