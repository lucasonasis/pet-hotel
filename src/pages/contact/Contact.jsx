import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Map from '../../components/map/Map';
import './Contact.css'
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { BsFillHouseHeartFill } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';


function Contact() {
  return (
    <div>
      <div className="contact-page-container">
        <div className="contact-page-content">
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti incidunt odit? Unde rem corporis corrupti minus consequatur, dicta, at obcaecati doloribus dolores velit quae harum saepe minima nisi dolorem?</p>
          <div className="contact-page-content-container">
            <div className="contact-page-content-one">
              <div className="contact-page-content-one-icon">
                <FiPhoneCall/>
              </div>
              <div className="contact-page-content-one-tel">
                <p>Tel: 0721 831 958</p>
              </div>
            </div>  
          <div className="contact-page-content-two">	
            <div className="contact-page-content-two-icon">
              <BsFillHouseHeartFill/>
            </div>
            <div className="contact-page-content-two-address">
              Adresa:<br/>
              Sat Suceagu, Strada Principala 261H, jud. Cluj<br/>
              Deschide cu Google Maps<br/>
              Deschide cu Waze<br/>
              GPS: 46.782932, 23.466341<br/>
            </div>
          </div>
          </div>
          <div className="contact-page-content-three">
            <div className="contact-page-content-three-icon">
              <TfiEmail/>
            </div>
            <div className="contact-page-content-three-email">
              <p>Email: contact@pethotel.ro</p>
            </div>
          </div>
        <div className="contact-page-content-social">
          <p><a href="http://facebook.com" target='_blank'><FaFacebook/></a></p>
          <p><a href="http://facebook.com" target='_blank'><FaYoutube/></a></p>
        </div>
        </div>
        <div className="contact-page-map">
          <Map/>
        </div>
      </div>
      <Navbar/>
    </div>

  )
}

export default Contact