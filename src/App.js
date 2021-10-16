import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navBar';
import Register from './contents/register';
import List from './contents/list';
import Search from './contents/search';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className='App'>
          <header className='App-header'>
            Madrasati Single-Page-App Assignment...
          </header>
          <Navigation />

          <Switch>
            <Route exact path='/' component={Register} />
            <Route path='/search' component={Search} />
            <Route path='/list' component={List} />
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
