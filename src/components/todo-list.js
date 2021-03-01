import React from "react";
import TodoListItem from './todo-list-item'

const TodoList = () => {
  const items = ['Buy Azelit', 'Buy sunflowers oil']
  return (
    <ul>
      <li><TodoListItem/></li>
      <li><TodoListItem/></li>
    </ul>
  );
};

export default TodoList;