import React, { useState } from 'react'
function Book() {
    const [refnum, setrefnum] = useState();

    function generateRef(){
        const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result='';
        for (let i=0;i<6;i++){
           result+=chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;

    }

    function handleBooking(){
        const refnum=generateRef();
        setrefnum({
            refnum:refnum
        })
    }
    return ( 



        <div>

            <h1>Hi cs</h1>
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
{refnum &&  <div>
    <h1>Booking Confirmed. Please save the Refnumber to Checkin</h1>
<h2>The Refnum is {refnum}</h2>
</div>

}
        </div>
     );
}

export default Book;