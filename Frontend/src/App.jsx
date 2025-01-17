
import "./App.css";
import HomePage from "./homePage/HomePage";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import Register from "./Register";
import UserDashboard from "./userDashboard/UserDashboard";
import Step1 from "./RegisterSteps/Step1";
import Step2 from "./RegisterSteps/Step2";
import Step3 from "./RegisterSteps/Step3";
import Step4 from "./RegisterSteps/Step4";
import Step5 from "./RegisterSteps/Step5";
import AdminDashboard from "./admin/AdminDashboard";
import { useAuth } from "./context/authContext";

const ProtectedRoutes = () => {
  const { token } = useAuth();
  console.log({ token });
  return token ? <UserDashboard /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/step1" element={<Step1 />} />
      <Route path="/register/step2" element={<Step2 />} />
      <Route path="/register/step3" element={<Step3 />} />
      <Route path="/register/step4" element={<Step4 />} />
      <Route path="/register/step5" element={<Step5 />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<UserDashboard />} />
      </Route>
      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
