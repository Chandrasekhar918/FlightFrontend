import React from "react";
import "./carousel.css";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Carousel(){
    return(

      <div>
        <img src="https://mcdn.wallpapersafari.com/medium/55/20/0uirwF.jpg" 
         height="450px" width="1400px"
         class="pic1"/>
       
              {/* <img src="https://j.gifs.com/AnYMJj.gif" 
              height="350px" width="1400px"
              class="pic1"/> */}
  
<div>

<h3 id="w1">Travel Blog</h3>


    <Card sx={{ maxWidth: 270 }} id="c1" >
      <CardMedia
        component="img"
        
        height="120"
        image="https://www.easemytrip.com/images/offer-img/a-trip-to-dubai-hp.webp"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          A Trip through Flavours Of Dubai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Dubai, ‘the land of Gold’ is one of the most cosmopolitan cities in the world. The city is on everyone’s list and offers unforgettable experiences to all visitors.
        </Typography>
      </CardContent>
     
    </Card>

    <Card sx={{ maxWidth: 270 }} id="c2">
      <CardMedia
        component="img"
        
        height="120"
        image="https://media.easemytrip.com/media/Blog/India/637975525656984536/637975525656984536ebhKpx.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
      Top 10 Must-Visit Beaches of Gujrat
        </Typography>
        <Typography variant="body2" color="text.secondary">
        As the coastline of Gujarat extends as long as 1666 Km, hence it is a warm state, therefore the winters are quite pleasant. 
        </Typography>
      </CardContent>
     
    </Card>


    <Card sx={{ maxWidth: 270 }} id="c3">
      <CardMedia
        component="img"
        
        height="120"
        image="https://media.easemytrip.com/media/Blog/India/637968615251264641/637968615251264641QbTNAV.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
  3 Reasons Why Gift Cards are Better
        </Typography>
        <Typography variant="body2" color="text.secondary">
        In modern times, however, it has become extremely difficult to choose the right gifts for your loved ones. At such times, the concept of gift cards comes in handy.
        </Typography>
      </CardContent>
 
    </Card>

    
    <Card sx={{ maxWidth: 270 }} id="c4">
      <CardMedia
        component="img"
        
        height="120"
        image="https://media.easemytrip.com/media/Blog/India/637959048606244752/637959048606244752c4YDJr.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
Beautiful Things you shouldnt miss in Vatican City
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The seat of the Catholic Church, The Vatican City is considered the most sacred place in the Catholic Christian community. Located within Rome in Italy.
        </Typography>
      </CardContent>
 
    </Card>
<br/>

<div className="offer">
<h5 className="offer1">Limited Bank Offer</h5>
                   
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbItZeXFHpL704zTUyFyfItIIKA-WTrgnyFQ&usqp=CAU" className="pic1"z
                   height='165px'
                   width='280px'/>
                   &nbsp;
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfnbpkNgdrDKP_mvYnqUfopBcLhcEzuVpqw&usqp=CAU"  className="pic2" height='165px'
                   width='280px'/>
                    &nbsp;

                   <img src="data:image/png;base64,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"  className="pic3" height='165px'
                   width='280px'/>
</div>
    <br/>
    <div className="footer">
          <div className="footer-container">
          

            <div className="d1">
              <h2>LEARN MORE</h2>
              <a href="#">Affilates</a>
              <a href="#">Advertise</a>
              <a href="#">Terms</a>
              <a href="#">Data Privacy Policy</a>
            </div>

            <div className="d2">
              <h2>EXPLORE</h2>
              <a href="#">Airport Directory</a>
              <a href="#">Airlines Directory</a>
              <a href="#">Hotel Chains</a>
              <a href="#">Services</a>
            </div>

            <div className="d3">
              <h2>DOWNLOAD</h2>
              <a href="#">Fego App(iOS)</a>
              <a href="#">Fego App(Andriod)</a>
             
            </div>

            
          </div>
          <br/>
          <hr/>
          <p id="f1"><i>Copyright &copy; 2011 All rights reserved</i></p>
        </div>
    
<br/>

</div>

              
              

      
     </div>
    );
}
export default Carousel;