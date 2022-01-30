import React from "react";
import "./Footer.css"
import copyright from "../Images/copyright.png"

const Footer= ()=>{
    return (
        <div className="foot">
            <a><img src={copyright} className="image"></img>2022 Meet Assist. All Rights Reserved</a>
        </div>
    )
}

export default Footer