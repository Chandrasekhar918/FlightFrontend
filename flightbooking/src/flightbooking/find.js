import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function FindBooking() {

  const [user, setUser] = useState({
    id: "",
    from:"",
    to:"",
    flightDate: "",
    userName:"",
    contactNumber:"",
    emailId:"",
    seatnum:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8888/booking/findbooking/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Booking Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>FlightID: </b>&ensp;
                  {user.id}
                </li>
                <li className="list-group-item">
                  <b>From: </b>&ensp;
                  {user.from}
                </li>
                <li className="list-group-item">
                  <b>To</b>&ensp;
                  {user.to}
                </li>
                <li className="list-group-item">
                  <b>FlightDate</b>&ensp;
                  {user.flightDate}
                </li>
                <li className="list-group-item">
                  <b>UserName</b>&ensp;
                  {user.userName}
                </li>
                <li className="list-group-item">
                  <b>ContactNumber</b>&ensp;
                  {user.contactNumber}
                </li>
                <li className="list-group-item">
                  <b>EmailId</b>&ensp;
                  {user.emailId}
                </li>
                <li className="list-group-item">
                  <b>EmailId</b>&ensp;
                  {user.emailId}
                </li>
                <li className="list-group-item">
                  <b>SeatNumber</b>&ensp;
                  {user.seatnum}
                </li>


              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/booking/findallbookings"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}