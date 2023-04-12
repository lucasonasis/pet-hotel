import React from 'react'
import './About.css';
import MyButton from '../../components/button/MyButton';
import { HiOutlinePlus } from 'react-icons/hi';
import Navbar from '../../components/navbar/Navbar';
import Blog from '../../components/blog/Blog';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

function About() {
  return (
    <div className="pages-about">
        <div className="pages-about-first">
            <div className="pages-about-first-content">
                <h1>About Us</h1>
                <p>The Pet Hotel story begins more than 20 years ago, when we were purebred dog breeders. The need for pet boarding services was almost non-existent. At that time, we do not know of any other boarding house or hotel for pets in Romania.</p>
                &nbsp;
                <p>Inspired by the idea of ​​opening a boarding house for animals to serve the city of Cluj-Napoca, we made changes to the house where we lived in order to be able to receive dogs as a boarding house. A few years later, encouraged by the demand for accommodation for cats and modifying other rooms, we managed to put into operation the first boarding house for cats in Cluj-Napoca.</p>
            </div>
            <img className="about-images" src={require("./../../assets/img-first.jpeg")} alt="first"/>
        </div>
        <div className="pages-about-second">

            <img className="about-images" src={require("./../../assets/img-third.jpeg")} alt="second"/>

            <div className="pages-about-second-content">
                <p>Later, at the request of our clients, we diversified the range of services, which we also extended to guinea pigs, rabbits, African hedgehogs, degu squirrels, Canadian squirrels, hamsters, chinchillas/chinchillas, domestic ferrets, gerbils, parrots, parakeets , canaries or turtles.</p>
                &nbsp;
                <p>For almost 10 years I made efforts to open a pet hotel, outside the city, which was becoming more and more crowded. The new hotel for animals in Suceagu offers the best accommodation conditions for dogs, cats and other pets, in a more secluded place, full of greenery, in the immediate vicinity of the city of Cluj-Napoca.</p>
            </div>
        </div>
        <div className="pages-about-third">
        <div className="pages-about-third-content">
                <p>We were motivated primarily by the love for animals. Pets and their owners were the ones who helped us grow. I succeeded thanks to understanding the peculiarities of the breeds of dogs, cats or other pets, their behavioral habits and their desire for affection.</p>
                &nbsp;
                <p>Our commitment is both towards the owner and towards the pets. It consists in offering care services for pets, in a hotel with the highest standards of cleanliness, comfort and safety, customized according to the needs of each pet.</p>
            </div>

            <img className="about-images" src={require("./../../assets/img-second.jpeg")} alt="third"/>

        </div>

        <div className="pages-about-services">
            <h1>
                PET HOTEL SERVICES
            </h1>
            <p>
            We invite you to enter the sections below to find out what our hotel's services are for dogs, cats and other pets. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eos, unde vitae reiciendis dolorum et, maiores qui sequi architecto incidunt cumque neque excepturi rem ratione ipsum corrupti blanditiis dolore quidem?
            </p>
        </div>
        <div className="pages-about-links">
                <div className="pages-about-links-one">
                    <h1>Dogs</h1>
                    <a href="http://localhost:3000/dogs">More</a>
                </div>
                <div className="pages-about-links-two">
                    <h1>Cats</h1>
                    <a href="http://localhost:3000/cats">More</a>
                </div>
                <div className="pages-about-links-three">
                    <h1>Other</h1>
                    <a href="http://localhost:3000/other">More</a>
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

export default About