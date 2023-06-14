import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Blog from '../../components/blog/Blog';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import MyButton from '../../components/button/MyButton';
import './Booking.css';

function Booking() {
  const [bookingData, setBookingData] = useState(null);
  const apiUrl = 'http://localhost:8081/api/bookings';
  const checkUrl = 'http://localhost:8081/api/bookings/check';

  const handleBooking = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomNumber: '123', // Replace with the actual room number
          checkInDate: '2023-06-15', // Replace with the actual check-in date
          checkOutDate: '2023-06-20', // Replace with the actual check-out date
        }),
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

  const handleCheckAvailability = async () => {
    try {
      const response = await fetch(`${checkUrl}?roomNumber=123&checkInDate=2023-06-15&checkOutDate=2023-06-20`);

      if (!response.ok) {
        throw new Error('Availability check request failed.');
      }

      const data = await response.json();
      console.log(data.message); // Log the response message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>

        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
      </div>
      <button onClick={handleBooking}>Book Room</button>
      <button onClick={handleCheckAvailability}>Check Availability</button>
      <Navbar />
      <Blog />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Booking;
