import React from 'react';
import Navbar from './components/navbar/Navbar.js'
import {Switch, Route} from 'react-router-dom'
import Home from './components/body/Home'
import Profile from './components/body/Profile'
import Skills from './components/body/Skills'
import Projects from './components/body/Projects'
import Contact from './components/body/Contact'
import Footer from './components/footer/Footer'
import './App.css';
import './hover.css'
// import ParticlesBg from 'particles-bg'


function App(props) {

  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>

      <div className={'content'}>
        <Switch>      
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/profile'>
            <Profile />
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

      {/* <ParticlesBg color={'random'} type="polygon" bg={true}/> */}
      <Footer/>
    </div>
  );
}

export default App;
