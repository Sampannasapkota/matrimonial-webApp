import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import Register from "./Register";
import UserDashboard from "./userDashboard/UserDashboard";
import MainDashboard from "./userDashboard/MainDashboard";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/register" element={<Register/>}/>
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Routes>
    // </Router>
    <UserDashboard/>
    // <div className="">
    //   <HomePage />
    // </div>
  );
}

export default App;
