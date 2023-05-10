import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Map from '../../components/map/Map';

function Contact() {
  return (
    <div>
      <div className="contact-page-container">
        <div className="contact-page-content-one">
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi odit quis necessitatibus? Ipsa sapiente laudantium architecto in dicta velit quibusdam doloribus voluptatum, laborum aut, tempora dolore reiciendis pariatur ut.</p>
          
        </div>
        <Map/>
      </div>

      <Navbar/>
    </div>

  )
}

export default Contact