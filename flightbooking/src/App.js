import React from 'react';
import Helmet from "react-helmet";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from './header/header';
import Footer from './footer/footer';
import Contactus from './Contact/contact';
import Aboutus from './Aboutus/about';
import Carousel from './carousel/carousel';
// import Search from './search/search';
import Signin from './signin/signin';
import Signup from './signup/signup';
import Payment from './payment/payment';
import Bookings from './booking/booking';
import Checkin from './checkin/checkin';
import MainFlight from './flights/main';
import FindFlight from './flights/find';
import UpdateFlight from './flights/update';
import AddFlight from './flights/add';
import FindAllFlight from './flights/findall';
import MainBooking from './flightbooking/main';
import FindAllBooking from './flightbooking/findall';
import AddBooking from './flightbooking/add';
import UpdateBooking from './flightbooking/update';
import FindBooking from './flightbooking/find';
import SearchAllFlight from './search/searchflight';

import Result from './result/result';
import Foot from './footer/footer';

import Addcheckin from './components/checkin/add';
import Maincheckin from './components/checkin/main';
import Findcheckin from './components/checkin/find';
import FindAllcheckin from './components/checkin/findall';
import Findpayment from './components/payment/find';
import Addpayment from './components/payment/add';
import Mainpayment from './components/payment/main';
import FindAllpayment from './components/payment/findall';

import Admin from './admin/admin';
import Home from './components2/Home';
import Login from './components2/Login';

import Errror from './components2/Errror';
import Seat from './booking/seat';
import Search1 from './search/search';
import UserRegister from './components3/UserRegister';
import Userlogin from './components3/Userlogin';
import Paymentgate from './payment/paymentgateway';
import Seatbooking from './booking/Seatbooking';
import BookingConfirmation from './booking/bookingconfirm';
import Book from './booking/book';




function App() {
  
  return (
    <div className="App">

      <Helmet>
        <title>Flight</title>
      </Helmet>
       <Header></Header> 
       
       <BrowserRouter>
<Routes> 

<Route path="/foot" element={<Foot />}/>

<Route path='/paymentgate' element={<Paymentgate />} />
      <Route path='/login' element={<Login />} />
  
      <Route path='*' element={<Errror />} />
      <Route path='/seat' element={<Seat/>}/>
      <Route path="/book" element={<Book/>}/>
<Route path="/" element={<Carousel />}/>
<Route path="/bookconfirm" element={<BookingConfirmation />}/>
<Route path="/admin" element={<Admin/>}/>
<Route path="/flight" element={<MainFlight />}/>
        <Route path="/flight/findall" element={<FindAllFlight />}/>
        <Route path="/flight/find/:id" element={<FindFlight />}/>
        <Route path="/flight/update/:id" element={<UpdateFlight />}/>
        <Route path="/flight/add" element={<AddFlight />}/>
       
        <Route path="/result" element={<Result/>}/>

        <Route path="/checkin/add" element={<Addcheckin />}/>
        <Route path="/checkin/findall" element={<FindAllcheckin />}/>
        <Route path="/checkin/find/:refno" element={<Findcheckin />}/>
        <Route path="/flightcheckin" element={<Maincheckin />}/>

        <Route path="/payment/add" element={<Addpayment />}/>
        <Route path="/payment/findall" element={<FindAllpayment/>}/>
        <Route path="/payment/find/:refno" element={<Findpayment />}/>
        <Route path="/flightpayment" element={<Mainpayment />}/>

        <Route path="/bookings" element={<MainBooking />}/>
        <Route path="booking/findallbookings" element={<FindAllBooking />}/>
        <Route path="booking/findbooking/:id" element={<FindBooking />}/>
        <Route path="booking/updatebooking/:id" element={<UpdateBooking />}/>
        <Route path="booking/addbooking" element={<AddBooking />}/>
        <Route path="/flight/find/:from_location/:to_location/:flightDate" element={<SearchAllFlight />}/>

<Route path="/search" element={<Search1/>}/>
<Route path="/signin" element={<Login/>}/>
<Route path="/contactus" element={<Contactus />}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/signup" element={<UserRegister/>}/>
    <Route path="/userin" element={<Userlogin/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/booking" element={<Bookings/>}/>
    <Route path="/checkin" element={<Checkin/>}/>
    
</Routes> 
 </BrowserRouter>

    </div>

  );
}

export default App;
