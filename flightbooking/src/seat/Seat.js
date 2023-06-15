import React, { useState } from 'react';
function Seat () {
    const [seats, setSeats] = useState([
        { id: 1, isAvailable: true, isBooked: false },
        { id: 2, isAvailable: true, isBooked: false },
        { id: 3, isAvailable: false, isBooked: true },
        { id: 4, isAvailable: true, isBooked: false },
        { id: 5, isAvailable: true, isBooked: false },
        { id: 6, isAvailable: false, isBooked: true },
      ]);
    
      const handleSeatClick = (id) => {
        const updatedSeats = seats.map((seat) => {
          if (seat.id === id) {
            return {
              ...seat,
              isAvailable: !seat.isBooked,
              isBooked: !seat.isAvailable,
            };
          } else {
            return seat;
          }
        });
        setSeats(updatedSeats);
      };
    
      return (
        <div>
          <h2>Seat Selector</h2>
          {seats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => handleSeatClick(seat.id)}
              disabled={!seat.isAvailable}
              style={{
                backgroundColor: seat.isBooked ? 'red' : seat.isAvailable ? 'green' : 'gray',
                margin: '5px',
                padding: '10px',
                borderRadius: '5px',
                color: 'white',
              }}
            >
              Seat {seat.id}
            </button>
          ))}
        </div>
      );
}

export default Seat ;



