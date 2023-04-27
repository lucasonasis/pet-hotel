import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';

function Home() {
  return (
    <div className='home-page-container'>
      <div className="home-page-content-container">
        <div className='home-page-content-first'>
          <h1>PET HOTEL</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, aperiam? Sequi, dignissimos totam officiis veniam vel nulla quaerat, perferendis dolorem molestias, minima pariatur soluta? Veritatis consectetur sed voluptatibus blanditiis nam?<br/>
            <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at voluptate doloremque quis, inventore sit vero consequatur aut magni distinctio sequi amet soluta obcaecati eligendi nesciunt assumenda sapiente ex commodi!</p>
        </div>
        <div className="home-page-services">

        </div>


      </div>
    <Navbar/>
    </div>
  )
}

export default Home