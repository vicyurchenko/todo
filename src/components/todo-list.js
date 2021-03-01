import React from "react";
import TodoListItem from './todo-list-item'

const TodoList = ({todoDeals}) => {

  const elements = todoDeals.map((item) => {

    const {id, ...itemProps} = item;

    return (
      <li key={id}>
        <TodoListItem { ...itemProps } />
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