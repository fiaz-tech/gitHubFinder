import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import  NotFound from './components/pages/NotFound';

import Home from './components/pages/Home';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

    return (
      <GithubState>
      <AlertState>
      <Router>
        <div className='App'>
        <Navbar/>
        <div className="container">
        <Alert  />

        <Routes>
        <Route exact path='/' element={<Home /> }    />
        <Route path='/About' element={<About /> } />
        <Route exact path='/user/:username' element={<User />} />
        <Route component={NotFound} />

        </Routes>
        
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
