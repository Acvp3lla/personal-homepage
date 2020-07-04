import React from 'react';
import Navbar from './components/navbar/Navbar.js'
import {Switch, Route} from 'react-router-dom'
import Home from './components/body/Home'
import About from './components/body/About'
import Skills from './components/body/Skills'
import Projects from './components/body/Projects'
import Contact from './components/body/Contact'
import Footer from './components/footer/Footer'
import './App.css';
import './hover.css'
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div className={'content'}>
        <Switch>
          <Route exact path='/'>
            <Home />
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
      <ParticlesBg type="polygon" bg={true}/>
      <Footer/>
    </div>
  );
}

export default App;
