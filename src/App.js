import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import AppRouter from './AppRouter';


const App = () => {
  return (
    <div className='App'>
      <AppRouter/>
    </div>

  )
}

export default App