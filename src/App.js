import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import containers (the different website pages)
import MainPage from './containers/MainPage';
import OurServices from './containers/OurServices';
import OurTutors from './containers/OurTutors';
import BecomeATutor from './containers/BecomeATutor';
import BecomeAClient from './containers/BecomeAClient';


export default function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/services" element={<OurServices/>} />
        <Route exact path="/tutors" element={<OurTutors/>} />
        <Route exact path="/become-tutor" element={<BecomeATutor/>} />
        <Route exact path="/become-client" element={<BecomeAClient/>} />
        </Routes>
    </Router>
  )
}
