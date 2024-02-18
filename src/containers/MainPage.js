import React from "react";
import "./MainPage.css"

import NavBar from "../components/NavBar";

export default function MainPage() {

    return(
        <div className="mainpage-container">
            <NavBar />
            <div className="mainpage-maintext">
                <h1>HOME</h1>
            </div>
        </div>
    )
}