import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./flight.css";

function FindAllBooking(){

  const [users, setUsers] = useState([]);

  const{id}=useParams()

  useEffect(()=>{
      loadUsers();
  }, []);

  const loadUsers=async()=>{
      const result=await axios.get("http://localhost:8888/booking/findallbookings");
      setUsers(result.data);
  }

  const deleteUser=async (id)=>{
      await axios.delete(`http://localhost:8888/booking/deletebooking/${id}`)
      loadUsers()
  }


    return (

      <div className="" >
           
     <div className="container">
      <div className="py-4">

      <nav className="navbar   ">
      <div className="container-fluid">
          <h2><u>Booking Details</u></h2>
        
        <a href="./add" className="btn btn-warning" >
          Add Booking
        </a>
        
      </div>
    </nav>
        
        <table className="table table-striped table-bordered" id="cs3">
          <thead id="cs4">
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">ID</th>
              <th scope="col"> From</th>
              <th scope="col"> To</th>
              <th scope="col"> FlightDate</th>
              <th scope="col">UserName</th>
              <th scope="col">ContactNumber</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
               
               <tr>
               <th scope="row"key={index}>{index+1}</th>
               <td>{user.id}</td>
               <td>{user.from}</td>
               <td>{user.to}</td>
               <td>{user.flightDate}</td>
               <td>{user.userName}</td>
               <td>{user.contactNumber}</td>
               <td>{user.emailId}</td>
               <td>
                   <Link className="btn btn-success mx-2" 
                   to={`/findbooking/${user.id}`}>View</Link>
                   <Link  className="btn btn-info mx-2"
                   to={`/updatebooking/${user.id}`} >Edit</Link>
                   <button className="btn btn-danger mx-2"
                   onClick={()=>deleteUser(user.id)}
                   >Delete</button>
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

export default FindAllBooking;

