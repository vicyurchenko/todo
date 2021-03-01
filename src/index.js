import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';
import TodoList from './components/todo-list';

const App = () => {

  const deals = [
    {label: "Buy Azelit", important: false},
    {label: "Buy sunflowers oil", important: false},
    {label: "Build React App", important: true},
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