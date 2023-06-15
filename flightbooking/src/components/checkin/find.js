import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Findcheckin() {

  const [user, setUser] = useState({
    refno : "",
    name:"",
    
    
  });

  const { refno } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8888/checkin/find/${refno}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>User Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>refno: </b>&ensp;
                  {user.refno}
                </li>
                <li className="list-group-item">
                  <b>name: </b>&ensp;
                  {user.name}
                </li>
                
               
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/checkin/findall"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}
