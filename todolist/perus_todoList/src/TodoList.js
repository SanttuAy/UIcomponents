import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
           
         // console.log(this.state.items); //mallituloste tulee askeleen myöhässä
             
          e.preventDefault(); //estetään koko sivun freesaus!
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        }); //luodaan taulukko, jossa on kaikki muut itemit paitsi se, joka ollaan poistamassa
       
        this.setState({
          items: filteredItems
        }); //filtteröity taulukko asetetaan uudeksi tilaksi
      }

    render() {
        console.log(this.state.items); //tässä parempi kohta konsoliin tulostamiselle
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                    delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default TodoList;