import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Addpayment() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
        mobileNumber : "",
        cardno:"",
        ExpiryDetails:"",
        amount: ""
    });


     const{ mobileNumber,cardno, ExpiryDetails,amount}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.post("http://localhost:8888/payment/add", user);
        navigate("/payment/findall")
    };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Payment Blog</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">
                            <b> mobileNumber</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Mobile Number"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={(e)=>onInputChange(e)}
                            id="mobileNumber"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cardno" className="form-label">
                            <b> cardno</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter cardno"
                            name="cardno"
                            value={cardno}
                            onChange={(e)=>onInputChange(e)}
                            id="cardno"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ExpiryDetails" className="form-label">
                            <b> ExpiryDetails</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter expiry details (Optional)" 
                            name="ExpiryDetails"
                            value={ExpiryDetails}
                            onChange={(e)=>onInputChange(e)}
                            id="ExpiryDetails"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <b> amount</b>
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
                    <Link to="/payment/findall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}