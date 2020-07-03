import React from 'react';
import Navbar from './components/navbar/Navbar.js'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Home from './components/body/Home'
import About from './components/body/About'
import Skills from './components/body/Skills'
import Projects from './components/body/Projects'
import Contact from './components/body/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/about'>
          <About/>
        </Route>

        <Route path='/skills'>
          <Skills/>
        </Route>

        <Route path='/projects'>
          <Projects/>
        </Route>

        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
