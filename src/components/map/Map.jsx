import React, { useRef, useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import './Map.css';

function Map() {
  const mapRef = useRef(null);
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyCp5zNHeRDYY3lmxPwZ2eRgDkHUg-TFq8M',
      version: 'weekly',
    });

    loader.load().then(() => {
      setGoogle(window.google);
    });
  }, []);

  useEffect(() => {
    if (google) {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 46.17817195048164, lng: 21.42784268040903 },
        zoom: 10,
      });

      const marker = new google.maps.Marker({
        position: { lat: 46.17817195048164, lng: 21.42784268040903 },
        map: map,
        title: "My Location",
      });
    }
  }, [google, mapRef]);

  return <div className='pet-hotel-map' ref={mapRef}/>;
}

export default Map;


