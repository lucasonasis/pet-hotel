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
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

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
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleImgClick = (src, index) => {
    document.getElementById('pet-navbar').style.display='none';
    document.body.classList.add('modal-open');
    setSelectedImg(src);
    setSelectedImgIndex(index);
    setShowModal(true);
  }

  const handlePrevClick = (e) => {
    e.stopPropagation();
    previousImage();
  }

  const handleNextClick = (e) => {
    e.stopPropagation();
    nextImage();
  }

  const closeModal = () => {
    document.getElementById('pet-navbar').style.display='flex';
    document.body.classList.remove('modal-open');
    setSelectedImg('');
    setSelectedImgIndex(0);
    setShowModal(false);
  }

  const nextImage = () => {
    const nextIndex = selectedImgIndex + 1;
    if (nextIndex < images.length) {
      setSelectedImg(images[nextIndex]);
      setSelectedImgIndex(nextIndex);
    }
  };

  const previousImage = () => {
    const previousIndex = selectedImgIndex - 1;
    if (previousIndex >= 0) {
      setSelectedImg(images[previousIndex]);
      setSelectedImgIndex(previousIndex);
    }
  };

  return (
    <div className='gallery-container'>
      {showModal && (
        <div className='modal' onClick={closeModal}>
          <button className='modal-exit' onClick={closeModal}>X</button>
          <button className='modal-prev' onClick={handlePrevClick}>{'<'}</button>
          <img src={selectedImg} alt='Full size' onClick={(e) => e.stopPropagation()}/>
          <button className='modal-next' onClick={handleNextClick}>{'>'}</button>
      </div>
      )}

      <div className="gallery-images">
        {images.map((src, index) => (
          <div key={index} className={`gallery-image image-${index}`}>
            <img             
              src={src}
              alt={`Image ${index}`}
              onClick={() => handleImgClick(src, index)}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery