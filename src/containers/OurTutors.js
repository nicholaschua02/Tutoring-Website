import React from "react";
import "./OurTutors.css"

import NavBar from "../components/NavBar";

export default function OurTutors() {

    return(
        <div className="ourtutors-container">
            <NavBar activePage={"tutors"}/>
            <div className="ourtutors-maintext">
                <h1>OUR TUTORS</h1>
            </div>
        </div>
    )
}