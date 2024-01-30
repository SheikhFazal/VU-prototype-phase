import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login/login";
import RegistrationForm from "./components/registration-form/registrationForm";
import AdminDashboard from "./components/admin-dashboard/adminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
