import React, {useState, useEffect} from 'react';
import './Gallery.css';

function Gallery() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Array of image sources
    const imageSources = [
      require('./../../assets/animal_15.jpg'),
      require('./../../assets/animal_18.jpg'),
      require('./../../assets/animal_17.jpg'),
      require('./../../assets/animal_20.jpg'),
      require('./../../assets/animal_1.webp'),
      require('./../../assets/animal_12.webp'),
      require('./../../assets/animal_3.webp'),
      require('./../../assets/animal_11.jpg'),
      require('./../../assets/animal_4.webp'),
      require('./../../assets/animal_19.webp'),
      require('./../../assets/animal_14.jpg'),
      require('./../../assets/animal_7.webp'),
      require('./../../assets/animal_9.webp'),
      require('./../../assets/animal_13.webp'),
      require('./../../assets/animal_2.webp'),
      require('./../../assets/animal_10.jpg'),
      require('./../../assets/animal_16.jpg'),
      require('./../../assets/animal_6.jpeg'),
      require('./../../assets/animal_8.webp'),
      require('./../../assets/animal_5.webp'),
    ];

    // Shuffle the array randomly
    const shuffledImages = imageSources.sort(() => Math.random() - 0.5);

    // Set the shuffled images as the state
    setImages(shuffledImages);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const handleImgClick = (src) => {
    setSelectedImg(src);
    setShowModal(true);
  }

  const closeModal = () => {
    setSelectedImg('');
    setShowModal(false);
  }

  return (
    <div className='gallery-container'>
      {showModal && (
        <div className='modal' onClick={closeModal}>
          <img src={selectedImg} alt='Full size' />
        </div>
      )}
      
      <div className="gallery-images">
        {images.map((src, index) => (
          <div key={index} className={`gallery-image image-${index}`}>
            <img src={src}               
              src={src.default}
              alt={`Image ${index}`}
              onClick={() => handleImgClick(src.default)}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery