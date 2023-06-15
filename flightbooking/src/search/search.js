
//   import React, { useState } from 'react';
//   import flightsData from './flights.json';
//   import axios from 'axios';
  
  
  
  
//   function Search() {
  
//     const [from, setFrom] = useState('');
//     const [to, setTo] = useState('');
//     const [date, setDate] = useState('');
//     const [flights, setFlights] = useState(flightsData.flights);
  
//     const handleSearch = async () => {
//       const response = await fetch(`/api/flights?from=${from}&to=${to}&date=${date}`);
//       const flights = await response.json();
  
//       // Handle the list of flights returned by the API
//       console.log(flights);
//     };
  
  
//   //   const handleSearch = async (event) => {
  
//   //     event.preventDefault();
  
//   //     try {
  
//   //       const response = await axios.get(`http://localhost:9001/flight/find/${from_location}/${to_location}/${flightDate}`);
  
//   //       setFlights(response.data);
  
//   //     } catch (error) {
  
//   //       console.log(error);
  
//   //     }
  
//   //   };
  
//   // console.log(flights);
//   return (
//     <div>
//       <br/>
//       <br/>
//       <br/>
//       <label>
//         From:
//         <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
//       </label>
//       <label>
//         To:
//         <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
//       </label>
//       <label>
//         Date:
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//       </label>
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }
  
//   //   return (
  
//   //     <div>
  
//   //       <form onSubmit={handleSearch}>

//   //   <br/>
  
//   //         <label htmlFor="from">From:</label>
  
//   //         <input type="text" id="from_location" value={from_location} onChange={(e) => setFrom(e.target.value)} />
  
  
  
  
//   //         <label htmlFor="to">To:</label>
  
//   //         <input type="text" id="to_location" value={to_location} onChange={(e) => setTo(e.target.value)} />
  
  
  
  
//   //         <label htmlFor="date">Date:</label>
  
//   //         <input type="date" id="flightDate" value={flightDate} onChange={(e) => setDate(e.target.value)} />
  
  
  
  
//   //         <button type="submit">Search</button>
  
//   //       </form>
  
  
  
  
//   //       {flights.length > 0 && (
  
//   //         <table>
  
//   //           <thead>
  
//   //             <tr>
  
//   //               <th>Flight Number</th>
  
//   //               <th>From</th>
  
//   //               <th>To</th>
  
//   //               <th>Date</th>
  
  
  
  
  
  
//   //             </tr>
  
//   //           </thead>
  
//   //           <tbody>
  
//   //             {flights.map((flight) => (
  
//   //               <tr key={flight.id}>
  
//   //                
  
//   //                 <td>{flight.from_location}</td>
  
//   //                 <td>{flight.to_location}</td>
  
//   //                 <td>{flight.flightDate}</td>
  
//   //               </tr>
  
//   //             ))}
  
//   //           </tbody>
  
//   //         </table>
  
//   //       )}
  
//   //     </div>
  
//   //   );
  
//   //}
  
  
  
  
//   export default Search;






//code start

import React, { useState } from 'react';
import { withRouter, useNavigate,Link } from 'react-router-dom';
import Axios from "axios";
import "./search.css"          
import axios from 'axios';
function Search(){
  const [travelObject, setTravelObject] = useState({
    fromFlight: undefined,
    toFlight: undefined, 
    date: undefined
  })

  const [requiredFlights, setRequiredFlights] = useState([]);

  const [flights, setFlights] = useState([]);

  const navigate = useNavigate();

  async function searchFlightHandler(e){
    // const result=await axios.get(`http://localhost:9001/flight/find/${travelObject.fromFlight}/${travelObject.topFlight}/${travelObject.date}`);
    const result=await axios.get(`http://localhost:9001/flight/findall`);
    setFlights(result.data);
     setRequiredFlights(JSON.stringify(flights.filter( flight => flight.from_location === travelObject.fromFlight && flight.to_location === travelObject.toFlight)))
    
  }
  // console.log(flights);
  console.log(`available flights are ${requiredFlights}`);
  // requiredFlights.forEach(flight => console.log(flight))
  console.log(typeof flights);


  function fromChangeHandler(e){
    setTravelObject(prev => {
      return {
        ...prev,
        "fromFlight" : e.target.value

      }
    })
  }
  // console.log(travelObject);

  function toChangeHandler(e){
    setTravelObject(prev => {
      return {
        ...prev,
        "toFlight" : e.target.value
      }
    })
  }
  // console.log(travelObject);

  function dateChangeHandler(e){
    setTravelObject(prev => {
      return {
        ...prev,
        "date" : new Date(e.target.value)
      }
    })
  }
// console.log(travelObject);
return(
<div className="img7">
<div class="cardd p-4 mt-5" id="c1">
<div class="row g-3">
<div class="col-12 mb-4">
<h5 id="up">Flight Search</h5>

<span class="text-muted">Fly anywhere. Fly everywhere
</span>

</div>
<div class="col-lg-5">
<div class="form-floating">
  
   <select class="form-control" onChange = {fromChangeHandler}>
   <input type="text" class="form-control" placeholder="FLYING FROM"/>
   <option value="Select Location"><span class="text-muted">--Select Location--</span></option>
   <option value="Kakinada">Kakinada</option>
   <option value="Bangalore">Bangalore</option>
   <option value="Chennai">Chennai</option>
   <option value="Delhi">Delhi</option>
   <option value="Hyderabad">Hyderabad</option>
   <option value="Chennai">Chennai</option>
   <option value="Vizag">Vizag</option>
   <option value="Goa">Goa</option>
   </select>
  
  
  <label>FLYING FROM</label>
</div>
</div>



<div class="col-lg-5">
<div class="form-floating">
  
   <select class="form-control" onChange = {toChangeHandler}>
   <input type="text" class="form-control" placeholder="FLYING TO"/>
   <option value="Select Location"><span class="text-muted">--Select Location--</span></option>
   <option value="Hyderabad">Hyderabad</option>
   <option value="Chennai">Chennai</option>
   <option value="Vizag">Vizag</option>
   <option value="Goa">Goa</option>
   <option value="Kakinada">Kakinada</option>
   <option value="Bangalore">Bangalore</option>
   <option value="Chennai">Chennai</option>
   <option value="Delhi">Delhi</option>
   <option value="Mumbai">Mumbai</option>

   </select>
  
  
  <label>FLYING TO</label>
</div>
</div>
<div>
<div class="col-lg-5" >
<div class="form-floating">
  <input onChange = {dateChangeHandler} type="date" class="form-control" placeholder="DEPART ON"/>
  <label>DEPART ON</label>
  </div>
</div>




</div >

<div class="button">
             
                
                          {/* <Link to="/result" */}
                           {/* > */}
                           <button class="btn btn-primary text-uppercase" type="submit" onClick = {searchFlightHandler}>SEARCH FLIGHTS<i class="fa fa-plane ms-3"></i></button>
                           {/* </Link> */}
                        </div>

                        <button className="dd2"><a href="/checkin">Checkin</a></button>
                   </div>

</div>

</div>
);
}
export default Search;

//code ending




// import React, { useState } from 'react';
// import { withRouter, useNavigate } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

// export default () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [search, setSearch] = useState({ from: '', to: '', date: '' });

//   const [isValidated, setIsValidated] = useState(false);
//   const [showError, setError] = useState(false);
//   const updateValue = (e) => {
//     setSearch({ ...search, [e.target.name]: e.target.value });
//   };
//   const Search1 = () => {
//     setIsValidated(true);
//     if (!search.from || !search.to || !search.date) {
//       setError(true);
//       console.log(search);
//       return;
//     }
//     dispatch({ search, type: 'SEARCH_BUS' });
//     navigate('availability');
//   };

//   return (
//     <div
//       class="search-container"
//       className={
//         isValidated ? 'was-validated search-container' : 'search-container'
//       }
//     >
//       <h2> Search Buses</h2>
//       {showError ? <p class="error-alert"> Please enter all values </p> : ''}
//       <div class="form-group">
//         <label>
//           From:
//           <input required type="text" name="from" onChange={updateValue} />
//         </label>
//       </div>

//       <div class="form-group">
//         <label>
//           To:
//           <input required type="text" name="to" onChange={updateValue} />
//         </label>
//       </div>

//       <div class="form-group">
//         <label>
//           Date:
//           <input required type="date" name="date" onChange={updateValue} />
//         </label>
//       </div>
//       <button onClick={Search1}> Search </button>
//     </div>
//   );
// };





{/* // import React from "react";
// import "./search.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Link, useNavigate } from 'react-router-dom';

// import { useEffect, useState } from "react";
// import axios from "axios";
// function Search(){
//     let FlightSearchService = class FlightSearchService { */}
//         constructor(Http) {
//             this.Http = Http;
//             this.FlightSearchApi = 'http://localhost:9001/flight/find/';
//         }
//         GetFlights(from_location, to_location,flightDate) {
//             return this.Http.get(this.FlightSearchApi + from_location + "/" + to_location+ "/"+ flightDate);
//         }
//     };
    
//     const [user, setUser]=useState({
    
//         from_location:"",
//         to_location:"",
//         flightDate: "",
       
//     });

   
//    const{from_loaction,to_location,flightDate}=user

//     const onInputChange=(e)=>{

//         setUser({ ...user, [e.target.name]: e.target.value})

//     };


//    /* const onSubmit=async (e)=> {
//         e.preventDefault();
//         await axios.post("http://localhost:8888/flight/add", user);
//         navigate("/flight/findall")
//     };
//     */
//     let getUser = (registerdata) => {
//         console.log(registerdata);
       
      
//         axios
//           .get(`http://localhost:8888/flight/find/${from_loaction}/${to_location}/${flightDate}`)
//           .then((res) => console.log(res.data));
//       };
      

//     return(
        

//         <div className="img7">
//         <div class="cardd p-4 mt-5" id="c1">
//         <div class="row g-3">
//             <div class="col-12 mb-4">
//                 <h4 id="up">Flight Search</h4>
//                 <span class="text-muted">Fly anywhere. Fly everywhere</span>
//             </div>
//             <div class="col-lg-5">
//                 <div class="form-floating">
                    
//                      <select class="form-control">
//                      <input type="text" class="form-control" placeholder="FLYING TO"/>
//                      <option value="Select Location"><span class="text-muted">--Select Location--</span></option>
//                      <option value="Kakinada">Kakinada</option>
//                      <option value="Bangalore">Bangalore</option>
//                      <option value="Chennai">Chennai</option>
//                      <option value="Delhi">Delhi</option>
//                      <option value="Hyderabad">Hyderabad</option>
//                      <option value="Chennai">Chennai</option>
//                      <option value="Vizag">Vizag</option>
//                      <option value="Goa">Goa</option>
//                      </select>
                    
                    
//                     <label>FLYING FROM</label>
//                 </div>
//             </div>
           
            
            
//             <div class="col-lg-5">
//                 <div class="form-floating">
                    
//                      <select class="form-control">
//                      <input type="text" class="form-control" placeholder="FLYING TO"/>
//                      <option value="Select Location"><span class="text-muted">--Select Location--</span></option>
//                      <option value="Hyderabad">Hyderabad</option>
//                      <option value="Chennai">Chennai</option>
//                      <option value="Vizag">Vizag</option>
//                      <option value="Goa">Goa</option>
//                      <option value="Kakinada">Kakinada</option>
//                      <option value="Bangalore">Bangalore</option>
//                      <option value="Chennai">Chennai</option>
//                      <option value="Delhi">Delhi</option>
//                      </select>
                    
                    
//                     <label>FLYING TO</label>
//                 </div>
//             </div>
//             <div>
//             <div class="col-lg-5" >
//                 <div class="form-floating">
//                     <input type="date" class="form-control" placeholder="DEPART ON"/>
//                     <label>DEPART ON</label>
//                     </div>
//                 </div>

                
       
           
//             </div >
            
//             <div class="button">
             
                
//                 <Link to="/result"
//                 ><button class="btn btn-primary text-uppercase" type="submit">SEARCH FLIGHTS<i class="fa fa-plane ms-3"></i></button></Link>
//             </div>
//         </div>
//     </div>
//     </div>

//     );
// }
// export default Search;