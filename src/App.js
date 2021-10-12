import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navBar';
import Register from './contents/register';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <Route exact path='/'>
          <Register />
        </Route>
      </div>
    </Router>
  );
}

export default App;
