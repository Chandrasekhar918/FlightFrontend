import './payment.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import card from "./card.jpg";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
function Payment() {
  let navigate=useNavigate();
  let postUser = (registerdata) => {
    console.log(registerdata);
    let requestBody = {
    mobileNumber:registerdata.mobileNumber,
      cardno:registerdata.cardno,
      ExpiryDetails:registerdata.ExpiryDetails,
      amount:registerdata.amount,
      
    };
    console.log(requestBody);
    axios
      .post("http://localhost:8888/payment/add", requestBody)
      .then((res) => console.log(res.data));
      navigate("/checkin")
      alert("Your Payment is Success")
  };
  const signupSchema = Yup.object().shape({
   mobileNumber: Yup.number("MobileNumber should be a number").required(
      "number is required"
    ),
    cardno: Yup.number("Cardnumber should be a number").required(),
    ExpiryDetails: Yup.date("ExpiryDetails should be a date").required(),
    amount: Yup.number("amount should be a number").required(),
  
   
  });

  


  let handleSubmit = (values) => {
    console.log(values);
    postUser(values);
  };
  return (
    <div className="main2"><br/>
     <div className="sub-main2">
       <div>
         <div>
           <br/>
           <h4 className="heading1">Card Payment Details:</h4>
           <div className="user-details1">
           <Formik
        initialValues={{
          mobileNumber: "",
          cardno: "",
          ExpiryDetails:"",
          amount:"",
     
        }}
        onSubmit={handleSubmit}
        validationSchema={signupSchema}
      >
         {(props) => (
          <Form className='form6' >
            <div className="first-input1">
              <label className="form-label">MobileNumber</label>&emsp;
              <Field type="number" name="mobileNumber" className="name1"/>
              <ErrorMessage name="mobileNumber">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="second-input1">
              <label className='number'>CardNumber</label>&emsp;&emsp;
              <Field type="number" name="cardno" className="name1"/><br/>
              <ErrorMessage name="cardno">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="third-input1">
              <label className='number'>ExpiryDetails</label>&emsp;&emsp;
              <Field type="date" name="ExpiryDetails" className="name1"/><br/>
              <ErrorMessage name="ExpiryDetails">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
            <div className="second-input1">
              <label className='number'>Amount</label>&emsp;&emsp;&emsp;&emsp;
              <Field type="number" name="amount" className="name1"/><br/>
              <ErrorMessage name="amount">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
            </div>
           
            <button type="submit" className='paybut' onClick={() => postUser()}>
             
             Pay
           </button>
           

        
          </Form>
        )}
       
              </Formik>
           </div>
          
           
        
                   

         </div>
         
       </div>
     

     </div>
     
    </div>
  );
}

export default Payment;