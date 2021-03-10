import "./app.css";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React, {Component} from "react";

export default class App extends Component{
    state = {
        deals: [
            {label: "Buy Azelit", important: false, id: 1},
            {label: "Buy sunflowers oil", important: false, id: 2},
            {label: "Build React App", important: true, id: 3},
            {label: "Buy a chocolate for my future wife", important: true, id: 4},
        ]
    }

    deleteItem = (id) => {
        this.setState( ({deals}) => {
            return {
                deals: deals.filter(item => item.id !== id)
            };
        } );
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todoDeals={this.state.deals}
                    onDeleted = { this.deleteItem } />
            </div>
        );
    }
}