import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import './App.css';
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import AppRouter from './AppRouter';

const App = () => {
  return (
    <div className='App'>
      <div className="app-gradient">
        <Navbar/>
      </div>
      <AppRouter/>
    </div>

  )
}

export default App