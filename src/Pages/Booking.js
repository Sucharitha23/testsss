import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer"

const Booking = ()=>{
    return(
        <div className="page-container">
        <div className="body">
            <Header></Header>
            <h1>Your Bookings</h1>
        </div>
            <div className="footer-pin">
            <Footer></Footer>
        </div>
        </div>
    )
}

export default Booking