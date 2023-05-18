import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Blog from '../../components/blog/Blog';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import MyButton from '../../components/button/MyButton';
import './Booking.css';

function Booking() {
  const [bookingData, setBookingData] = useState(null);
  const apiUrl = 'https://example.com/api/bookings'; // Replace with your API URL

  const handleBooking = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST', // Use the appropriate HTTP method (GET, POST, etc.)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ /* Pass the booking data here */ }),
      });

      if (!response.ok) {
        throw new Error('Booking request failed.');
      }

      const data = await response.json();
      setBookingData(data); // Update state with the response data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <MyButton onClick={handleBooking} />
      <Navbar />
      <Blog />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Booking;
