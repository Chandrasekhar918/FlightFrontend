import React from 'react';
import "./checkin.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Checkin() {


  let navigate=useNavigate();

    let postUser = (registerdata) => {
        console.log(registerdata);
        let requestBody = {
        refno:registerdata.refno,
          name:registerdata.name,
          
        };
        console.log(requestBody);
        axios
          .post("http://localhost:8888/checkin/addcheckin", requestBody)
          .then((res) => console.log(res.data));
          navigate("/")
          alert("Successfully checked. Have a Happy Journey")
      };
      const signupSchema = Yup.object().shape({
       name: Yup.string("First name should be a string").required(
          "name is required"
        ),
        refno: Yup.number("refno should be a number").required("number is required"),
       
      
       
      });
    
      let handleSubmit = (values) => {
        console.log(values);
        postUser(values);
      };
  
    return (
        <div className="checkin">

            <div className='heading2'>
              <br/>
<h2 > Online Check-in</h2>

<span class="text-muted">Available 24 hours before your flight departure time</span>
<br/><span class="text-muted">Check-In & get your boarding pass instantly!</span>
<br/><span class="text-muted">Check-In online & save time!</span>
<br/><br/>
<h2>Check in now</h2>

<hr/>

 </div>
 <Formik
        initialValues={{
          name: "",
          refno: "",
     
        }}
        onSubmit={handleSubmit}
        validationSchema={signupSchema}
      >
 {(props) => (
          <Form className="form2">
            <div>
              <label className="form-label">* ReferenceNumber</label>&emsp;
              <Field type="number" name="refno" className="f5"/>
              <ErrorMessage name="refno">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="form2">
              <label className='nam'>*Name of passenger</label>&emsp;
              <Field type="text" name="name" className="f5"/><br/>
              <ErrorMessage name="name">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            
            <button type="submit"   onClick={() => postUser()}       className='checkinbut'>
       
    Checkin
</button>
          </Form>
        )}



   
</Formik>     
    
  </div>
    );
}

export default Checkin;