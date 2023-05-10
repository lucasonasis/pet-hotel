import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import MyButton from '../../components/button/MyButton';
import Navbar from '../../components/navbar/Navbar';
import Blog from '../../components/blog/Blog';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import Map from '../../components/map/Map';
import { Loader } from '@googlemaps/js-api-loader';

function Home() {
  return (
    <div className='home-page-container'>
      <div className="home-page-content-container">
        <div className='home-page-content-first'>
          <h1>PET HOTEL</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, aperiam? Sequi, dignissimos totam officiis veniam vel nulla quaerat, perferendis dolorem molestias, minima pariatur soluta? Veritatis consectetur sed voluptatibus blanditiis nam?<br/>
            <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at voluptate doloremque quis, inventore sit vero consequatur aut magni distinctio sequi amet soluta obcaecati eligendi nesciunt assumenda sapiente ex commodi!</p>
        </div>
        <div className="home-page-video">
        <iframe width="420" height="315" src="https://www.youtube.com/embed/je1pgqhvYMU?autoplay=1&mute=1">
        </iframe>
        </div>



        <div className="home-page-services">
            <h1>
                SERVICES
            </h1>
            <p>
            We invite you to enter the sections below to find out what our hotel's services are for dogs, cats and other pets. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos, unde vitae reiciendis dolorum et, maiores qui sequi architecto incidunt cumque neque excepturi rem ratione ipsum corrupti blanditiis dolore quidem?
            </p>
        </div>
        <div className="home-page-links">
                <div className="home-page-links-one">
                    <h1>Dogs</h1>
                    <a href="http://localhost:3000/dogs">More</a>
                </div>
                <div className="home-page-links-two">
                    <h1>Cats</h1>
                    <a href="http://localhost:3000/cats">More</a>
                </div>
        </div>
        <div className="home-page-content-second">
        <img className="home-page-image" src={require("./../../assets/img-second.jpeg")} alt="third"/>
        <div className="home-page-content-second-text">
          <h1>Where to find us?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa reprehenderit blanditiis aspernatur dicta, architecto laboriosam iusto alias excepturi illo nobis voluptate numquam error fuga voluptates mollitia laudantium suscipit possimus animi!</p>
          <br/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aut laborum sequi velit maiores eum assumenda, minima quis officiis repudiandae ipsam tempore quam natus laudantium est earum! Incidunt, sapiente at<a href='http://localhost:3000/contact'>random address.</a></p>
        </div>
        </div>
      </div>
    <MyButton/>
    <Navbar/>
    <Blog/>
    <Gallery/>
    <Footer/>

   </div>
  )
}

export default Home