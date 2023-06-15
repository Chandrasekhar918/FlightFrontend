import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function AddBooking() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
       id: "",
        from:"",
        to:"",
        flightDate: "",
        userName:"",
        contactNumber:"",
        emailId:"",
        seatnum:""


    });

   

     const{id,from,to,flightDate,userName,contactNumber,emailId,seatnum}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.post("http://localhost:8888/booking/addbooking", user);
        navigate("/booking/findallbookings")
    };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Register Booking</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b> FlightID</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter ID"
                            name="id"
                            value={id}
                            onChange={(e)=>onInputChange(e)}
                            id="id"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from" className="form-label">
                            <b> From</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter from_location"
                            name="from"
                            value={from}
                            onChange={(e)=>onInputChange(e)}
                            id="from"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to" className="form-label">
                            <b> To</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter to_location"
                            name="to"
                            value={to}
                            onChange={(e)=>onInputChange(e)}
                            id="to"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="flightDate" className="form-label">
                            <b> FlightDate</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter flightDate"
                            name="flightDate"
                            value={flightDate}
                            onChange={(e)=>onInputChange(e)}
                            id="flightDate"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">
                            <b> username</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter username"
                            name="userName"
                            value={userName}
                            onChange={(e)=>onInputChange(e)}
                            id="userName"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contactNumber" className="form-label">
                            <b> ContactNumber</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter contactNumber"
                            name="contactNumber"
                            value={contactNumber}
                            onChange={(e)=>onInputChange(e)}
                            id="contactNumber"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="emailId" className="form-label">
                            <b> Emailid</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter emailId"
                            name="emailId"
                            value={emailId}
                            onChange={(e)=>onInputChange(e)}
                            id="emailId"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="seatnum" className="form-label">
                            <b> SeatNumber</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter seatnum"
                            name="seatnum"
                            value={seatnum}
                            onChange={(e)=>onInputChange(e)}
                            id="seatnum"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary" >Submit</button>
                    <Link to="/booking/findallbookings" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
