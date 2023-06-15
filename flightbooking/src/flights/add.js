import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function AddFlight() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
       id: "",
        from_location:"",
        to_location:"",
        flightDate: "",
        depature_time:"",
        arrival_time:"",
        amount:""


    });

   

     const{id,from_location,to_location,flightDate,depature_time,arrival_time,amount}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.post("http://localhost:9001/flight/add", user);
        navigate("/flight/findall")
    };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Register Flights</u></h2>

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
                        <label htmlFor="from_location" className="form-label">
                            <b> From_location</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter from_location"
                            name="from_location"
                            value={from_location}
                            onChange={(e)=>onInputChange(e)}
                            id="from_location"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to_location" className="form-label">
                            <b> To_location</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter to_location"
                            name="to_location"
                            value={to_location}
                            onChange={(e)=>onInputChange(e)}
                            id="to_location"
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
                        <label htmlFor="depature_time" className="form-label">
                            <b> Departure_time</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter departure_time"
                            name="depature_time"
                            value={depature_time}
                            onChange={(e)=>onInputChange(e)}
                            id="departure_time"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="arrival_time" className="form-label">
                            <b> Arrival_time</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter arrival_time"
                            name="arrival_time"
                            value={arrival_time}
                            onChange={(e)=>onInputChange(e)}
                            id="arrival_time"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">
                            <b> Amount</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter amount"
                            name="amount"
                            value={amount}
                            onChange={(e)=>onInputChange(e)}
                            id="amount"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary" >Submit</button>
                    <Link to="/flight/findall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
