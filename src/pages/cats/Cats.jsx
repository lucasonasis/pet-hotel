import React from 'react';
import MyButton from '../../components/button/MyButton';
import Navbar from '../../components/navbar/Navbar';
import Blog from '../../components/blog/Blog';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import './Cats.css';

function Cats() {
  return (
    <div className="pages-cats">
    <div className="pages-cats-first">
            <div className="pages-cats-first-content">
                <h1>CATS SERVICES</h1>
                <p>The Pet Hotel story begins more than 20 years ago, when we were purebred dog breeders. The need for pet boarding services was almost non-existent. At that time, we do not know of any other boarding house or hotel for pets in Romania.</p>
                &nbsp;
                <p>The Pet Hotel story begins more than 20 years ago, when we were purebred dog breeders. The need for pet boarding services was almost non-existent. At that time, we do not know of any other boarding house or hotel for pets in Romania.</p>
                &nbsp;
                <p>Inspired by the idea of ​​opening a boarding house for animals to serve the city of Cluj-Napoca, we made changes to the house where we lived in order to be able to receive dogs as a boarding house. A few years later, encouraged by the demand for accommodation for cats and modifying other rooms, we managed to put into operation the first boarding house for cats in Cluj-Napoca.</p>
            </div>
            <img className="cats-images" src={require("./../../assets/animal_3.webp")} alt="first"/>
      </div>

        <div className="pages-cats-second">
            <img className="cats-images" src={require("./../../assets/animal_2.webp")} alt="second"/>

            <div className="pages-cats-second-content">
                <p>Later, at the request of our clients, we diversified the range of services, which we also extended to guinea pigs, rabbits, African hedgehogs, degu squirrels, Canadian squirrels, hamsters, chinchillas/chinchillas, domestic ferrets, gerbils, parrots, parakeets , canaries or turtles.</p>
                &nbsp;
                <p>For almost 10 years I made efforts to open a pet hotel, outside the city, which was becoming more and more crowded. The new hotel for animals in Suceagu offers the best accommodation conditions for dogs, cats and other pets, in a more secluded place, full of greenery, in the immediate vicinity of the city of Cluj-Napoca.</p>
                &nbsp;
                <p>Inspired by the idea of ​​opening a boarding house for animals to serve the city of Cluj-Napoca, we made changes to the house where we lived in order to be able to receive dogs as a boarding house. A few years later, encouraged by the demand for accommodation for cats and modifying other rooms, we managed to put into operation the first boarding house for cats in Cluj-Napoca.</p>
                &nbsp;
                <p>Inspired by the idea of ​​opening a boarding house for animals to serve the city of Cluj-Napoca, we made changes to the house where we lived in order to be able to receive dogs as a boarding house. A few years later, encouraged by the demand for accommodation for cats and modifying other rooms, we managed to put into operation the first boarding house for cats in Cluj-Napoca.</p>
            </div>
        </div>

        <div className="pages-cats-third">
        <div className="pages-cats-third-content">
                <p>We were motivated primarily by the love for animals. Pets and their owners were the ones who helped us grow. I succeeded thanks to understanding the peculiarities of the breeds of dogs, cats or other pets, their behavioral habits and their desire for affection.</p>
                &nbsp;
                <p>Our commitment is both towards the owner and towards the pets. It consists in offering care services for pets, in a hotel with the highest standards of cleanliness, comfort and safety, customized according to the needs of each pet.</p>
                &nbsp;
                <p>Inspired by the idea of ​​opening a boarding house for animals to serve the city of Cluj-Napoca, we made changes to the house where we lived in order to be able to receive dogs as a boarding house. A few years later, encouraged by the demand for accommodation for cats and modifying other rooms, we managed to put into operation the first boarding house for cats in Cluj-Napoca.</p>
                &nbsp;
                <p>Inspired by the idea of ​​opening a boarding house for animals to serve the city of Cluj-Napoca, we made changes to the house where we lived in order to be able to receive dogs as a boarding house. A few years later, encouraged by the demand for accommodation for cats and modifying other rooms, we managed to put into operation the first boarding house for cats in Cluj-Napoca.</p>
          
            </div>
            <img className="cats-images" src={require("./../../assets/animal_5.webp")} alt="third"/>
        </div>

        <div className="pages-cats-trainers-container">
          <div className="pages-cats-trainers-intro">
            <h1>MEET OUR TRAINERS AND GROOMERS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sed quaerat molestias optio! Expedita dignissimos dolores sed libero. Nisi, iste omnis. Est hic omnis amet voluptate? Iure perspiciatis sequi deleniti.</p>
          </div>

          <div className="pages-cats-trainers-content">
          <div className="pages-cats-trainer-content-one">
            <img src={require("./../../assets/vet_2.jpeg")}/>
            <h2>Lucie Cross</h2>
            <p className="pages-cats-trainer-qualifications">Certified Feline Training and Behavior Specialist</p>
            <p>Bachelor's degree in Animal Behavior</p>
            <ul className="pages-cats-trainer-services">
              <li>Private training sessions</li>
              <li>Behavior modification</li>
              <li>Cat grooming</li>
            </ul>
           </div>

          <div className="pages-cats-trainer-content-two">
            <img src={require("./../../assets/vet_4.jpeg")}/>
            <h2>Darius Grant</h2>
            <p className="pages-cats-trainer-qualifications">Certified Pet Trainer</p>
            <p>Associate's degree in Veterinary Technology</p>
            <ul className="pages-cats-trainer-services">
            <li>Private training sessions</li>
              <li>Behavior modification</li>
              <li>Dog grooming</li>
            </ul>
           </div>

           <div className="pages-cats-trainer-content-three">
            <img src={require("./../../assets/vet_3.jpeg")}/>
            <h2>Thea Hamilton</h2>
            <p className="pages-cats-trainer-qualifications">Certified Animal Behaviorist</p>
            <p>Master's degree in Animal Behavior and Grooming</p>
            <ul className="pages-cats-trainer-services">
            <li>Private training sessions</li>
              <li>Behavior modification</li>
              <li>Dog grooming</li>
            </ul>
           </div>
          </div>
        </div>
        <div className="pages-cats-prices-container">
          <div className="pages-cats-prices">
            <h1>PRICES TO BE ADDED</h1>
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

export default Cats