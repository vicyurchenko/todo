import "./app.css";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React, {Component} from "react";
import AddDealForm from "../add-deal-form";

export default class App extends Component {

  maxId = 100;

  state = {
    deals: [
      this.getNewDeal("Buy Azelit"),
      this.getNewDeal("Buy sunflowers oil"),
      this.getNewDeal("Build React App"),
      this.getNewDeal("Buy a chocolate for my future wife"),
    ],
    matcher: ''
  }

  getNewDeal(label) {
    return {
      id: this.maxId++,
      label: label,
      important: false,
      done: false,
    }
  }

  deleteItem = (id) => {
    this.setState(({deals}) => {
      return {
        deals: deals.filter(item => item.id !== id)
      };
    });
  }

  addItem = (name) => {
    this.setState(({deals}) => {
      return {deals: [...deals, this.getNewDeal(name)]}
    });
  }

  toggleProperty = (arr, id, propName) => {
    let newArr = [...arr];
    const idx = newArr.findIndex((el) => el.id === id);
    let newItem = newArr[idx];
    newArr[idx] = {...newItem, [propName]: !newItem[propName]};
    return newArr;
  }

  onToggleImportant = (id) => {
    this.setState(({deals}) => {
      return {
        deals: this.toggleProperty(deals, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({deals}) => {
      return {
        deals: this.toggleProperty(deals, id, 'done')
      }
    })
  };

  onSearchChange = (el) => {
    this.setState({matcher : el.target.value} )
  }

  search = (deals, matcher) => {
    return deals.filter( (el) => el.label.toLowerCase().indexOf(matcher.toLowerCase()) > -1 );
  }

  render() {

    const {deals, matcher} = this.state;
    const doneCount = this.state.deals.filter( (el) => el.done).length;
    const todoCount = this.state.deals.length - doneCount;

    const visibleItems = this.search(deals, matcher)

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount }/>
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter/>
        </div>
        <TodoList
          todoDeals={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddDealForm onDealAdd={this.addItem}/>
      </div>
    );
  }
}