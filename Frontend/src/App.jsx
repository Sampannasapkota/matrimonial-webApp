import { useState } from "react";
import "./App.css";
import HomePage from "./homePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import Register from "./Register";
import UserDashboard from "./userDashboard/UserDashboard";
import Step1 from "./RegisterSteps/Step1";
import Step2 from "./RegisterSteps/Step2";
import Step3 from "./RegisterSteps/Step3";
import Step4 from "./RegisterSteps/Step4";
import Step5 from "./RegisterSteps/Step5";

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<UserDashboard/>}/>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
      </Routes>
     </Router> 
  );
}

export default App;
