import React from "react";
import "./contactus.css";
import fb from "./fb.png";
import inst from "./inst.jpeg";
import twit from "./teit.png";
import cimg1 from "./beautiful-city-sunset-evening-3t.jpg"
function Contactus() {
  return (
    <div className="contact" 
    >
      <h1 className="csb">CONTACTUS</h1>
      <br/>
      <p className="csb2"><b>You can contact us from </b><i>      emiratesairkines@gmail.com</i></p>
      <br/>

      <h4 className="cs9">You can also contact us through</h4>
      <br/>
      <div className="cs5">
      <h4>Facebook:    <a href="https://www.facebook.com/flight/"><img src={fb} alt={fb}  className="cs6"/></a></h4>
      <br/>
      <h4>Instagram:   <a href="https://www.instagram.com/flight/"><img src={inst} alt={inst} className="cs6"/></a></h4>
      <br/>
      <h4>Twitter:     <a href="https://www.twitter.com/flight/"><img src={twit} alt={twit} className="cs6" /></a></h4>
    </div>
    </div>
  );
}

export default Contactus;