import React from 'react'
import "./admin.css";

export default function Admin() {
  return (
    <div className="container3">
    <div className='hometxt'><img className='homeimg' src="https://t18.pimg.jp/034/667/348/1/34667348.jpg" height="710px"/></div>
    <div className="row homelogin">
      <div className="col-md-4 offset-md-8 border rounded p-4 mt-5 shadow temp" >
        <h2 className='text-centre'>Hello Admin</h2><br></br>
              <a className="btn btn-info btn-lg btn-block " href="/flight/findall">Flights</a><br></br><br></br>
            <a className='btn btn-success btn-lg btn-block' href="booking/findallbookings">Bookings</a><br></br><br></br>
            <a className='btn btn-primary btn-lg btn-block' href="/payment/findall">Payments</a><br></br> <br></br>
            <a className='btn btn-secondary btn-lg btn-block ' href="/checkin/findall">Checkins</a><br></br> <br></br>
   
        </div>
        </div>
    </div>
  )
}