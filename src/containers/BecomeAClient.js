import React from "react";
import "./BecomeAClient.css"

import NavBar from "../components/NavBar";

export default function BecomeAClient() {

    return(
        <div className="becomeaclient-container">
            <NavBar activePage={"become-client"}/>
            <div className="becomeaclient-maintext">
                <h1>BECOME A CLIENT</h1>
            </div>
        </div>
    )
}