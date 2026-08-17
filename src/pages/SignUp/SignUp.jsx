import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import InputText from "../../components/ui/Input/InputText";
import RoundedButton from "../../components/ui/Button/RoundedButton";
import "./SignUp.css";

function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [warning, setWarning] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);

    if (name === "confirmPassword" || name === "password") {
      if (updatedForm.confirmPassword !== updatedForm.password) {
        setWarning("Password does not match");
      } else {
        setWarning("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    if (form.password !== form.confirmPassword) {
      setWarning("Password does not match");
      return;
    }

    const res = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      credentials: "include", // ← this is required for cookies to be set
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      if (res.status === 400 || res.status === 409) {
        setWarning(data.message); // show on form
      } else {
        navigate("/error", {
          // unexpected errors → error page
          state: { message: data.message, status: res.status },
        });
      }
      return;
    }

    // After successful register/login
    setUser({
      id: data.user.id,
      username: data.user.username,
      role: data.user.role,
    });

    navigate("/");
  };

  return (
    <div className="sign-up-page fullpage">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>REGISTER</h2>

          <div className="input-container">
            <InputText
              label="Username :"
              name="username"
              type="text"
              onChange={handleChange}
              value={form.username}
            />

            <InputText
              label="Email :"
              name="email"
              type="email"
              onChange={handleChange}
              value={form.email}
            />

            <InputText
              label="Password :"
              name="password"
              type="password"
              onChange={handleChange}
              value={form.password}
            />
            <InputText
              label="Confirm Password :"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              value={form.confirmPassword}
            />
          </div>

          <p className="warning">{warning}</p>
          <RoundedButton text="Register" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
