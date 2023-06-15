import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateBooking() {

    let navigate=useNavigate();

    const {id}=useParams()

    const [user, setUser]=useState({
        from:"",
        to:"",
        flightDate: "",
        userName:"",
        contactNumber:"",
        emailId:"",
        seatnum:""
    });

    const{from,to,flightDate,userName,contactNumber,emailId,seatnum}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    useEffect(()=>{
        loadUser()
    },[]);

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.put(`http://localhost:8888/booking/updatebooking/${id}`, user);
        navigate("/booking/findallbookings")
    };

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8888/booking/findbooking/${id}`);
        setUser(result.data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Update Booking</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
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


                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <Link to="/booking/findallbookings" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
