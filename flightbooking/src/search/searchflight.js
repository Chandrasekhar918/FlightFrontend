/*import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";


function SearchAllFlight(){

  const [users, setUsers] = useState([]);

  const{id}=useParams()

  useEffect(()=>{
      loadUsers();
  }, []);

  const loadUsers=async()=>{
      const result=await axios.get(`http://localhost:9001/flight/find/${from_location}/${to_location}/${flightDate}`);
      setUsers(result.data);
  }
 


    return (

      <div className="" >
           
     <div className="container">
      <div className="py-4">

      <nav className="navbar   ">
      <div className="container-fluid">
          <h2><u>Flight Details</u></h2>
        
       
        
      </div>
    </nav>
        
        <table className="table table-striped table-bordered" id="cs3">
          <thead id="cs4">
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">FlightID</th>
              <th scope="col"> From_location</th>
              <th scope="col"> To_location</th>
              <th scope="col"> FlightDate</th>
              <th scope="col">Departure_time</th>
              <th scope="col">Arrival_time</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
               
               <tr>
               <th scope="row"key={index}>{index+1}</th>
               <td>{user.id}</td>
               <td>{user.from_location}</td>
               <td>{user.to_location}</td>
               <td>{user.flightDate}</td>
               <td>{user.depature_time}</td>
               <td>{user.arrival_time}</td>
               <td>{user.amount}</td>
               <td>
                   <Link className="btn btn-success mx-2" 
                   to={`/flight/find/${from_location}/${to_location}/${flightDate}`}>Result</Link>
                   
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

export default SearchAllFlight;
*/
