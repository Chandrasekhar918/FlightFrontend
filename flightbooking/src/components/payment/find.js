import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Findpayment() {

  const [user, setUser] = useState({
    mobileNumber : "",
    cardno:"",
   
    amount: "",
  });

  const { mobileNumber } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8888/payment/find/${mobileNumber}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Payment Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>mobileNumber: </b>&ensp;
                  {user.mobileNumber}
                </li>
                <li className="list-group-item">
                  <b>cardno: </b>&ensp;
                  {user.cardno}
                </li>
                
                <li className="list-group-item">
                  <b>amount:</b>&ensp;
                  {user.amount}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/payment/findall"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}