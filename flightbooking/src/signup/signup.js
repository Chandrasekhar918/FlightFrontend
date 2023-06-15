import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signup.css";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Signup() {
  
  let postUser = (registerdata) => {
    console.log(registerdata);
    let requestBody = {
      
      emailId:registerdata.email
    };
    console.log(requestBody);
    axios
      .post("http://localhost:8888/user/sign/add", requestBody)
      .then((res) => console.log(res.data));
  };
  const signupSchema = Yup.object().shape({
    userName: Yup.string("First name should be a string").required(
      "firstname is required"
    ),
   
    email: Yup.string().email("invalid email").required("email cant be empty"),
    
    password: Yup.string()
      .required("Password cant be empty")
      .min(8, "password week")
      .max(16, "password too long"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "password should match"
    ),
  });

  let handleSubmit = (values) => {
    console.log(values);
    postUser(values);
  };
  return (<div className="img6">

  
    <div className="container6">
     
      <Formik
        initialValues={{
       
          email: "",
        
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={signupSchema}
      >
        {(props) => (
       
       <Form className="form8">
       <div class="card8">
       <img src="https://tse3.mm.bing.net/th?id=OIP.qKLEYAtWd6GlrBtJkUm7vQHaF7&pid=Api&P=0" class="card-img8" alt="Fissure in Sandstone"/>
       <div class="card-body" id="s1">
         <h5 class="card-tit8">Create your account</h5>
         <form>

 <div class="form-outline mb-4">
 <label class="form-label" for="form1Example1" id="i1">Email address</label>

   <Field type="email" name="email"  className="f8" required/>
  
   <ErrorMessage name="email">
               {(error) => <p>{error}</p>}
             </ErrorMessage>
 </div>


 <div class="form-outline mb-4">
 
   <label class="form-label" for="form1Example2" id="i1">Password</label>

   <Field type="password" name="password" className="f8" />
   <ErrorMessage name="password">
               {(error) => <p>{error}</p>}
             </ErrorMessage>
 </div>

 </form>
     
 <div class="button">
            
            <button class="btn btn-pri text-uppercase" type="submit">Register<i class="fa fa-plane ms-3"></i></button>
        </div>
       </div>
     </div>
     </Form>



        )}
      </Formik>
    </div>
    </div>
  );
}

export default Signup;