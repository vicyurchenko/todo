import React from "react";
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css';

const TodoList = ({todoDeals, onDeleted, onToggleImportant, onToggleDone}) => {

  const elements = todoDeals.map((item) => {

    const {id, ...itemProps} = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
            { ...itemProps }
            onDeleted = { () => onDeleted(id) }
            onToggleImportant = { () => onToggleImportant(id) }
            onToggleDone = { () => onToggleDone(id) }
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;