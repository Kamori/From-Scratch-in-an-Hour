import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList listkey='kamori_fta_list' />
    </div>
  );
}

export default App;
