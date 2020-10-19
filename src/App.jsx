import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './scss/main.scss'

import Home from './components/home/index';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
