import React, { useState } from 'react';
function BookingConfirmation() {
    const [data, setData] = useState(

        {
            userName:'',
            contactNumber:'',
            refno:''
        }
    );

    function generateRef(){
        const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result='';
        for (let i=0;i<6;i++){
           result+=chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;

    }

    function handleBooking(){
        const refno=generateRef();
        setData({
            userName:'Cs ',
            contactNumber:'u87888877',
            refno:refno
        })
    }

    return (
        <div>
 <h1>Book a Seat</h1>
      <form onSubmit={handleBooking}>
        <label>
          Name:
          <input type="text" name="userName" />
        </label>
        <label>
          Contact Number:
          <input type="text" name="contactNumber" />
        </label>
        <button type="submit">Book Seat</button>
      </form>
      {data.refno && (
        <div>
          <h2>Booking Confirmed</h2>
          <p>Reference Number: {data.refno}</p>
        </div>)}
        </div>
      );
}

export default BookingConfirmation;