import React from "react";
import TodoListItem from './todo-list-item'

const TodoList = ({todoDeals}) => {

  const elements = todoDeals.map((item) => {
    return (
      <li>
        <TodoListItem { ...item } />
      </li>
    );
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;