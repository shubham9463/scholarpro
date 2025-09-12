import React, { useState } from "react";

const SchoolLogin = () => {
  const [formData, setFormData] = useState({ code: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("School Login: " + JSON.stringify(formData));
  };

  const styles = {
    container: {
       width: "290px",
      height: "400px",
      margin: "50px auto",
      padding: "60px",
      background: "#cdde63ff",
      borderRadius: "10px",
      textAlign: "center",
      fontFamily: "Segoe UI, sans-serif",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",

    },
    heading: {
      fontWeight: "1000",
      fontSize: "37px",
      marginBottom: "20px",
      color: "#222",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "6px",
      outline: "none",
      fontSize: "14px",
        boxSizing: "border-box",
    },
    button: {
      marginTop: "20px",
      padding: "12px",
      width: "100%",
      border: "none",
      borderRadius: "20px",
      background: "#7b3fe4",
      color: "#fff",
      fontWeight: "700",
      cursor: "pointer",
    },
    note: {
      background: "yellow",
      color: "#000",
      padding: "10px",
      marginTop: "15px",
      fontSize: "13px",
      fontWeight: "600",
    },
  };

  return (
    <div>
      <form style={styles.container} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>SCHOOL LOGIN</h2>
        <input
          style={styles.input}
          type="text"
          name="code"
          placeholder="School Code"
          value={formData.code}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" style={styles.button}>
          Login to your Account!
        </button>
        <p style={{ marginTop: "15px" }}>
          New to Indian Talent Olympiad?{" "}
          <strong style={{ color: "#7b3fe4" }}>Register Your School</strong>
        </p>
      </form>
      <div style={styles.note}>
        NOTE: To log in to the school dashboard, enter your School Code (shared via Email and SMS) as your username, and the school Pincode as your password.
      </div>
    </div>
  );
};

export default SchoolLogin;
