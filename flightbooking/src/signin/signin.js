import { Formik, Form, Field, ErrorMessage } from "formik";
import "./signin.css";
import { Link, Navigate, useNavigate } from "react-router-dom";


function Signin() {
  /*let handleSubmit = (values) => {
    console.log(values);
  };*/
  const navigate=useNavigate()
  let handleSubmit = (values) =>{
    console.log(values);
    let email="admin@continental.com";
    let password="admin";
    if (email ===values.email && password===values.password){
        navigate("/admin")
    }
    else{
      alert("Enter Valid Email and Password")
    }
  };
  let handleValidation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = " Email cannot be empty";
    }
    if (!values.password) {
      errors.password = "Password cannot be empty";
    } else if (values.password.length < 4) {
      errors.password = "Password should have minimum 4 characters";
    }
    return errors;
  };
  return (
    

<div className="img5">
    <div className="container5">
     
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => handleSubmit(e)}
        validate={(e) => handleValidation(e)}
      >
        {(props) => (
           <Form className="form">
        <div class="card">
        <img src="https://tse3.mm.bing.net/th?id=OIP.qKLEYAtWd6GlrBtJkUm7vQHaF7&pid=Api&P=0" class="card-img" alt="Fissure in Sandstone"/>
        <div class="card-body" id="s1">
          <h5 class="card-tit">Login in to your account</h5>
          <form>

  <div class="form-outline mb-4">
  <label class="form-label" for="form1Example1">Email address</label>
    <Field type="email" name="email"  className="f3"/>
   
    <ErrorMessage name="email">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
  </div>


  <div class="form-outline mb-4">
  
    <label class="form-label" for="form1Example2">Password</label>
    <br/>
    <Field type="password" name="password" className="f3" />
    <ErrorMessage name="password">
                {(error) => <p>{error}</p>}
              </ErrorMessage>
  </div>
  </form>
      
  <div class="button">
             
             <button class="btn btn-pri text-uppercase" type="submit">Login<i class="fa fa-plane ms-3"></i></button>
         </div>
        </div>
      </div>
      </Form>
        )}
      </Formik>
   
   </div> </div>
  );
}
export default Signin;