import React from "react";
import "./BecomeATutor.css"

import NavBar from "../components/NavBar";

export default function BecomeATutor() {

    return(
        <div className="becomeatutor-container">
            <NavBar activePage={"become-tutor"}/>
            <div className="becomeatutor-maintext">
                <h1>BECOME A TUTOR</h1>
            </div>
        </div>
    )
}