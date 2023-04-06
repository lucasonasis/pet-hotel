import React from 'react';
import './Gallery.css';


function Gallery() {
  return (
    <div className='gallery-container'>
        <div className="gallery-image image-15"><img src={require("./../../assets/animal_15.jpg")}/> </div>
        <div className="gallery-image image-18"><img src={require("./../../assets/animal_18.jpg")}/> </div>
        <div className="gallery-image image-17"><img src={require("./../../assets/animal_17.jpg")}/> </div>
        <div className="gallery-image image-20"><img src={require("./../../assets/animal_20.jpg")}/> </div>   
        <div className="gallery-image image-1"><img src={require("./../../assets/animal_1.webp")}/> </div>
        <div className="gallery-image image-12"><img src={require("./../../assets/animal_12.webp")}/> </div>
        <div className="gallery-image image-3"><img src={require("./../../assets/animal_3.webp")}/> </div>
        <div className="gallery-image image-11"><img src={require("./../../assets/animal_11.jpg")}/> </div>
        <div className="gallery-image image-4"><img src={require("./../../assets/animal_4.webp")}/> </div>
        <div className="gallery-image image-19"><img src={require("./../../assets/animal_19.webp")}/> </div>
        <div className="gallery-image image-14"><img src={require("./../../assets/animal_14.jpg")}/> </div>
        <div className="gallery-image image-7"><img src={require("./../../assets/animal_7.webp")}/> </div>
        <div className="gallery-image image-9"><img src={require("./../../assets/animal_9.webp")}/> </div>
        <div className="gallery-image image-13"><img src={require("./../../assets/animal_13.webp")}/> </div>
        <div className="gallery-image image-2"><img src={require("./../../assets/animal_2.webp")}/> </div>
        <div className="gallery-image image-10"><img src={require("./../../assets/animal_10.jpg")}/> </div>
        <div className="gallery-image image-16"><img src={require("./../../assets/animal_16.jpg")}/> </div>
        <div className="gallery-image image-6"><img src={require("./../../assets/animal_6.jpeg")}/> </div>
        <div className="gallery-image image-8"><img src={require("./../../assets/animal_8.webp")}/> </div>
        <div className="gallery-image image-5"><img src={require("./../../assets/animal_5.webp")}/> </div>
    </div>
  )
}

export default Gallery