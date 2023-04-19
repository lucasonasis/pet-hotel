import React, {useState, useEffect} from 'react';
import './Gallery.css';
import Navbar from '../navbar/Navbar';
import animal_15 from './../../assets/animal_15.jpg';
import animal_18 from './../../assets/animal_18.jpg';
import animal_17 from './../../assets/animal_17.jpg';
import animal_20 from './../../assets/animal_20.jpg';
import animal_1 from './../../assets/animal_1.webp';
import animal_12 from './../../assets/animal_12.webp';
import animal_3 from './../../assets/animal_3.webp';
import animal_11 from './../../assets/animal_11.jpg';
import animal_4 from './../../assets/animal_4.webp';
import animal_19 from './../../assets/animal_19.webp';
import animal_14 from './../../assets/animal_14.jpg';
import animal_7 from './../../assets/animal_7.webp';
import animal_9 from './../../assets/animal_9.webp';
import animal_13 from './../../assets/animal_13.webp';
import animal_2 from './../../assets/animal_2.webp';
import animal_10 from './../../assets/animal_10.jpg';
import animal_16 from './../../assets/animal_16.jpg';
import animal_6 from './../../assets/animal_6.jpeg';
import animal_8 from './../../assets/animal_8.webp';
import animal_5 from './../../assets/animal_5.webp';


function Gallery({ onHideNavbar }) {

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Array of image sources
    const imageSources = [
      animal_15,
      animal_18,
      animal_17,
      animal_20,
      animal_1,
      animal_12,
      animal_3,
      animal_11,
      animal_4,
      animal_19,
      animal_14,
      animal_7,
      animal_9,
      animal_13,
      animal_2,
      animal_10,
      animal_16,
      animal_6,
      animal_8,
      animal_5,
    ];
    

    // Shuffle the array randomly
    const shuffledImages = imageSources.sort(() => Math.random() - 0.5);

    // Set the shuffled images as the state
    setImages(shuffledImages);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const handleImgClick = (src) => {
    document.getElementById('pet-navbar').style.display='none';
    setSelectedImg(src);
    setShowModal(true);
  }

  const closeModal = () => {
    document.getElementById('pet-navbar').style.display='flex';
    setSelectedImg('');
    setShowModal(false);
  }

  return (
    <div className='gallery-container'>
      {showModal && (
        <div className='modal' onClick={closeModal}>
          <button className='modal-exit' onClick={closeModal}>X</button>
          <img src={selectedImg} alt='Full size' />
        </div>
      )}

      <div className="gallery-images">
        {images.map((src, index) => (
          <div key={index} className={`gallery-image image-${index}`}>
            <img             
              src={src}
              alt={`Image ${index}`}
              onClick={() => handleImgClick(src)}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery