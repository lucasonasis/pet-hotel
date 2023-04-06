import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Home from './pages/home/Home';
import Other from './pages/other/Other';
import About from './pages/about/About';
import Dogs from './pages/dogs/Dogs';
import Cats from './pages/cats/Cats';
import Contact from './pages/contact/Contact';

function AppRouter() {
  return (
        <Routes>
            <Route exact path='/' element={ <Home/> } />
            <Route exact path='/about' element={ <About/> } />
            <Route exact path='/dogs' element={ <Dogs/> } />
            <Route exact path='/cats' element={ <Cats/> } />
            <Route exact path='/other' element={ <Other/> } />
            <Route exact path='/contact' element={ <Contact/> } />
        </Routes>
  )
}

export default AppRouter