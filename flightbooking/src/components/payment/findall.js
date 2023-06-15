import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";

function FindAllpayment(){

  const [users, setUsers] = useState([]);

  const{mobileNumber}=useParams()

  useEffect(()=>{
      loadUsers();
  }, []);

  const loadUsers=async()=>{
      const result=await axios.get("http://localhost:8888/payment/findall");
      setUsers(result.data);
  }



    return (

      <div className="">
           
     <div className="container">
      <div className="py-4">

      <nav className="navbar   ">
      <div className="container-fluid">
          <h2><u>Payment Details</u></h2>
        
        <a href="./add" className="btn btn-warning" >
          Add payment
        </a>
        
      </div>
    </nav>
        
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">MobileNumber</th>
              <th scope="col"> CardNumber</th>
              
              <th scope="col"> Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
               
               <tr>
               <th scope="row"key={index}>{index+1}</th>
               <td>{user.mobileNumber}</td>
               <td>{user.cardno}</td>
          
               <td>{user.amount}</td>
               <td>
                   <Link className="btn btn-info mx-2"
                   to={`/payment/find/${user.mobileNumber}`}>View</Link>
                   
               </td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  </div>
  </div>

    );
}

export default FindAllpayment;
