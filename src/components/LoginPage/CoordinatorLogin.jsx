import React, { useState } from "react";

const CoordinatorLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Coordinator Login: " + JSON.stringify(formData));
  };

  const styles = {
    container: {
      width: "290px",
      height: "400px",
      margin: "50px auto",
      padding: "60px",
      background: "#388e3c", // green
      borderRadius: "20px",
      textAlign: "center",
      color: "#fff",
      fontFamily: "Segoe UI, sans-serif",
    },
    heading: {
      fontWeight: "900",
      fontSize: "29px",
      marginBottom: "20px",
      letterSpacing: "1px",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "none",
      borderBottom: "1px solid #ddd",
      outline: "none",
      fontSize: "14px",
        boxSizing: "border-box",
    },
    button: {
      marginTop: "20px",
      padding: "12px",
      width: "100%",
      border: "none",
      borderRadius: "30px",
      background: "#fff",
      color: "#388e3c",
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
        <h2 style={styles.heading}>COORDINATOR LOGIN</h2>
        <input
          style={styles.input}
          type="text"
          name="email"
          placeholder="Mobile / Email"
          value={formData.email}
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
        <button type="submit" style={styles.button}>LOG IN NOW</button>
        <p style={{ marginTop: "15px" }}>
          New to Indian Talent Olympiad?{" "}
          <strong style={{ color: "#fff" }}>Register Now</strong>
        </p>
      </form>
      <div style={styles.note}>
        NOTE: This login is for coordinators registered with Indian Talent Olympiad.
      </div>
    </div>
  );
};

export default CoordinatorLogin;
