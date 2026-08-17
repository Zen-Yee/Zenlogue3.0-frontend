import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import InputText from "../../components/ui/Input/InputText";
import RoundedButton from "../../components/ui/Button/RoundedButton";
import "./SignIn.css";

function SignIn() {
  const [form, setForm] = useState({ username: "", password: "" });

  const { setUser } = useAuth();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
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
    } catch (err) {
      console.error(err);
      navigate("/error", {
        state: { message: "Network error, please try again." },
      });
    }
  };

  return (
    <div className="sign-in-page fullpage">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>USER LOGIN</h2>
          <InputText
            label="Username :"
            name="username"
            onChange={handleChange}
            value={form.username}
          />
          <InputText
            label="Password :"
            name="password"
            type="password"
            onChange={handleChange}
            value={form.password}
          />
          <RoundedButton text="Log In" type="Submit" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
