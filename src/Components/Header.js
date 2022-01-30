import React from "react";
import {NavLink} from 'react-router-dom'
import './Header.css'
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import home from '../Images/home.png';
import logo from '../Images/logo.png'
import booking from '../Images/bookings.png'
import Booking from "../Pages/Booking";

const Header =() => (
    <div className="nav-container">
        <div className="nav-left">
            <Link to="/" ><img src={home}></img></Link>
            <p className="home-text">DELOITTE</p>
        </div>
        <div className="nav-right">
        <Link to="/Booking"><img src={booking}></img></Link>
            <Link to="/Login"><img src={logo}></img></Link>
        </div>

    </div>
)

export default Header