import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import './Home.css'
const Home = ()=>{
    return(
        <div className="page-container">
        <div className="body">
            <Header></Header>
            <h1>MEET ASSIST</h1>
        </div>
            <div className="footer-pin">
            <Footer></Footer>
            </div>
        </div>
    )
}

export default Home