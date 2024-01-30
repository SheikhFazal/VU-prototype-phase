// RegistrationForm.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ registerUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const navigate  = useNavigate();

  const handleRegister = () => {
    // Perform registration logic here and call registerUser function
    // registerUser(name, age, gender);
    navigate("/admin-dashboard");
  };

  return (
    <div>
      <h2>Registration</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Age:</label>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      <label>Gender:</label>
      <input
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
