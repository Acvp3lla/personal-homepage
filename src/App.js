import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar.js';
import {Switch, Route} from 'react-router-dom';
import Home from './components/body/Home';
import Profile from './components/body/Profile';
import Skills from './components/body/Skills';
import Projects from './components/body/Projects';
import Contact from './components/body/Contact';
import Experience from './components/body/Experience';
import Footer from './components/footer/Footer';
// import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import ScrollToBottom from './components/Scroll/ScrollToBottom';
import ScrollToTop from './components/Scroll/scrollToTop'


import './App.css';
import './hover.css';

function App(props) {
  return (
    <div id="app" className="App">
      <Home>
        <ScrollToBottom/>
      </Home>
        <div id='down' className="container-fluid bg-main">
          <div id="main-content" className="row">
            <div className="col-10">
              <div className='content'>
                <Switch>
                  <Route exact path='/'>
                    <Profile />
                  </Route>
                  <Route path='/profile'>
                    <Profile />
                  </Route>
                  <Route path='/experience'>
                    <Experience/>
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
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center">
              <Navbar/>
              <ScrollToTop/>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
