import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Map from '../../components/map/Map';
import './Contact.css'
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { BsFillHouseHeartFill } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import Footer from '../../components/footer/Footer';

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
              <a href="tel:+40741268379"><FiPhoneCall/></a>
              </div>
              <div className="contact-page-content-one-tel">
                <p>Tel:<a href="tel:+40741268379">+40741268379</a> </p>
              </div>
            </div>  
          <div className="contact-page-content-two">	
            <div className="contact-page-content-two-icon">
              <BsFillHouseHeartFill/>
            </div>
            <div className="contact-page-content-two-address">
              <p>Adresa:</p>
              <p>Sat Suceagu, Strada Principala 261H, jud. Cluj</p>
              <p><a href="https://www.google.com/maps/@46.14434,21.474524,11.79z" target='_blank'>Deschide cu Google Maps</a></p>
              <p><a href="https://www.waze.com/en-GB/live-map/directions" target='_blank'>Deschide cu Waze</a></p>         
              <p>GPS: 46.782932, 23.466341</p>
            </div>
          </div>
          </div>
          <div className="contact-page-content-three">
            <div className="contact-page-content-three-icon">
              <TfiEmail/>
            </div>
            <div className="contact-page-content-three-email">
              <p>Email:<a href="mailto:contact@pethotel.ro">contact@pethotel.ro</a></p>
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
      <Footer/>
      <Navbar/>
    </div>

  )
}

export default Contact