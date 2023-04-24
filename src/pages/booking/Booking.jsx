import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Blog from '../../components/blog/Blog';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import MyButton from '../../components/button/MyButton';
import './Booking.css';


function Booking () {
  return (
    <div>
      <MyButton/>
      <Navbar/>
      <Blog/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Booking;
