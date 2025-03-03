import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Folder.css'

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/appointments', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className='signin'> 
      <h1>Here Is Your Appointment History!...</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              Date: {appointment.date}, Time: {appointment.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentHistory;