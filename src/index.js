import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';

const App = () => {

  const deals = [
    {label: "Buy Azelit", important: false, id: 1},
    {label: "Buy sunflowers oil", important: false, id: 2},
    {label: "Build React App", important: true, id: 3},
  ];

  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todoDeals={deals} />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));