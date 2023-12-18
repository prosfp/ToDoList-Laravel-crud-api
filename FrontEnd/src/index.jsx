import React from 'react';
import ReactDOM from 'react-dom';
import Crud from './components/Crud';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className="m-5 text-3xl font-bold">CRUD App</h1>
      <Crud />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
