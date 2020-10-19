import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './scss/main.scss'

import Nav from './components/global/nav/index';
import Footer from './components/global/footer/index';
import Home from './components/home/index';


function App() {
  return (
    <Router>
      <Nav />
      <Route exact path='/' component={Home} />
      <Footer />
    </Router>
  );
}

export default App;
