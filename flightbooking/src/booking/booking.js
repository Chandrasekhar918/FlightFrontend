import React from "react";

import "./booking.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, Navigate, useNavigate } from 'react-router-dom';
function Booking () {

  
  let navigate=useNavigate();
    let postUser = (registerdata) => {
        console.log(registerdata);
        let requestBody = {
            id:registerdata.id,
       from:registerdata.from,
          to:registerdata.to,
          flightDate:registerdata.flightDate,
          userName:registerdata.userName,

          contactNumber:registerdata.contactNumber,
         emailId :registerdata.emailId ,
           seatnum:registerdata.seatnum,
          
        };
        console.log(requestBody);
        axios
          .post("http://localhost:8888/booking/addbooking", requestBody)
          .then((res) => console.log(res.data));
          navigate("/paymentgate")
          alert("Successfully Booked with ReferenceNumber 406")
      };

      let handleSubmit = (values) => {
        console.log(values);
        postUser(values);
      };





    
    
    return (
        
        
        <React.Fragment>
            <section>
                
                    <div className="hi">
                    
                    <div className="input2">
                    <div>
                      <br></br>
                        <h2 className="ss5"><underline>Flight Booking</underline></h2>
                        </div>
                        <Formik
        initialValues={{
            id:"",
            from:"",
            to:"",
            flightDate:"",
            seatnum:"",
            userName:"",
          contacteNumber: "",
          emailId:"",
     
        }}
        onSubmit={handleSubmit}
        
      >
        {(props)=>(


<Form className='form' >
<div id="input1">
 
  <Field type="text" name="id" id="input-group" placeholder="Flightid" required/>
 
</div>
<div id="input1">
 
  <Field type="text" name="from" id="input-group" placeholder="From" required/>
 
</div>

<div id="input1">
  <Field type="text" name="to" id="input-group" placeholder="To" required/>
</div>
<div id="input1">
  <Field type="date" name="flightDate" id="input-group" placeholder="FlightDate" required/>
</div>
<div id="input1">
  <Field type="number" name="seatnum" id="input-group" placeholder="SeatNumber" required/>
</div>
<div id="input1">
  <Field type="text" name="userName" id="input-group" placeholder="UserName" required/>
</div>
<div id="input1">
  <Field type="text" name="contactNumber" id="input-group" placeholder="contactNumber" required/>
</div>
<div id="input1">
  <Field type="email" name="emailId" id="input-group" placeholder="Email Id" required/>
</div>
<button type="submit" className='bookingbut'>
  SUBMIT FORM
</button><Link to="/payment"></Link>
</Form>

        )}
                        </Formik>
                    </div>
                    </div>
              
            </section>
        </React.Fragment>
        
    );
    

};
export default Booking;