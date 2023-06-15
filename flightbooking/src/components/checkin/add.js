import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Addcheckin() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
       refno: "",
        name:"",
       
       
       
    });



     const{refno,name}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.post("http://localhost:8888/checkin/addcheckin", user);
        navigate("/checkin/findall")
    };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u> Checkin Blog </u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b> Reference Number</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Reference number"
                            name="refno"
                            value={refno}
                            onChange={(e)=>onInputChange(e)}
                            id="id"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <b> Name</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter FullName"
                            name="name"
                            value={name}
                            onChange={(e)=>onInputChange(e)}
                            id="name"
                        />
                    </div>
                   
                    
                
                    <button type="submit" className="btn btn-outline-primary" >Submit</button>
                    <Link to="/checkin/findall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}