import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Register from './contents/register';
import List from './contents/list';
import Search from './contents/search';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          Madrasati Single-Page-App Assignment...
        </header>
        <Navbar />
        {/* Route for register.js contents */}
        <Route exact path='/'>
          <Register />
        </Route>

        {/* Route for list.js contents */}
        <Route path='/list'>
          <List />
        </Route>

        {/* Route for search.js contents */}
        <Route path='/search'>
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
