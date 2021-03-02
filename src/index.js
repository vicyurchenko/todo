import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import "./index.css";

const App = () => {

  const deals = [
    {label: "Buy Azelit", important: false, id: 1},
    {label: "Buy sunflowers oil", important: false, id: 2},
    {label: "Build React App", important: true, id: 3},
    {label: "Buy a chocolate for my future wife", important: true, id: 4},
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <TodoList todoDeals={deals} />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));