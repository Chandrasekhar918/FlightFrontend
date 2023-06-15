import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewFlight() {

  const [user, setUser] = useState({
    id: "",
    from_location:"",
    to_location:"",
    flightDate: "",
    depature_time:"",
    arrival_time:"",
    amount:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9001/flight/find/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Flight Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>FlightID: </b>&ensp;
                  {user.id}
                </li>
                <li className="list-group-item">
                  <b>From_location: </b>&ensp;
                  {user.from_location}
                </li>
                <li className="list-group-item">
                  <b>To_location</b>&ensp;
                  {user.to_location}
                </li>
                <li className="list-group-item">
                  <b>FlightDate</b>&ensp;
                  {user.flightDate}
                </li>
                <li className="list-group-item">
                  <b>Departure_time</b>&ensp;
                  {user.depature_time}
                </li>
                <li className="list-group-item">
                  <b>Arrival_time</b>&ensp;
                  {user.arrival_time}
                </li>
                <li className="list-group-item">
                  <b>Amount</b>&ensp;
                  {user.amount}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/flight/findall"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}