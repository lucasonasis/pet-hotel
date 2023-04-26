import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';

function Home() {
  return (
    <div className='home-page-container'>

    <div className='home-page-content'>
      <h1>PET HOTEL</h1>
      <p>Suntem primul hotel sau pensiune pentru animale de companie din Cluj. In acelasi timp, suntem una dintre cele mai vechi pensiuni pentru animale din Romania. Experienta noastra de mai bine de 20 ani in ingrijirea animalelor de casa, o punem în serviciul tau.<br/>
      Pachetul de servicii Pet Hotel are in centru bunastarea celui mai bun prieten al tau: caine, pisica sau orice alt animalut de companie.</p>
    </div>




    <div className="home-page-services"></div>
    





    <Navbar/>
    </div>
  )
}

export default Home