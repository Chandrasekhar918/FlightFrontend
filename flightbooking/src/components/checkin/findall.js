import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./my.css"

function FindAllcheckin(){

  const [users, setUsers] = useState([]);

  const{refno}=useParams()

  useEffect(()=>{
      loadUsers();
  }, []);

  const loadUsers=async()=>{
      const result=await axios.get("http://localhost:8888/checkin/findallcheckin");
      setUsers(result.data);
  }


  

    return (

      <div className="">
           
     <div className="container">
      <div className="py-4">

      <nav className="navbar   ">
      <div className="container-fluid">
          <h2><u>Checkin Details</u></h2>
        
        <a href="./add" className="btn btn-warning" >
          Add checkin
        </a>
        
      </div>
    </nav>
        
        <table className="table table-striped table-bordered" id="cs3">
          <thead id="cs4"> 
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">Reference Number</th>
              <th scope="col"> Name of the Passenger</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
               
               <tr>
               <th scope="row"key={index}>{index+1}</th>
               <td>{user.refno}</td>
               <td>{user.name}</td>
               <td>
                   <Link className="btn btn-success mx-2"
                   to={`/checkin/find/${user.refno}`}>View</Link>
                   
                  
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

export default FindAllcheckin;
