import React, { Component } from 'react';

import './App.css';

import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <p>
            :::: THE TO-DO LIST ::::
          </p>
          <TodoList />

          
          
        </header>
      </div>
    );
  }
}

export default App;
