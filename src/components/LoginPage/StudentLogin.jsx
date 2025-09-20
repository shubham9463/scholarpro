import React, { useState } from "react";
import { studentLogin } from "../../api/studentApi.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let payload = { password: formData.password };
      if (formData.identifier.includes("@")) {
        payload.emailId = formData.identifier;
      } else {
        payload.mobileNo = formData.identifier;
      }

      const res = await studentLogin(payload);

      if (res.data.success) {
        localStorage.setItem("studentToken", res.data.token);
        toast.success("Login Successfull");
        navigate("/");
      } else {
        toast.error(res.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    }
  };

  const styles = {
    container: {
      width: "290px",
      height: "400px",
      margin: "50px auto",
      padding: "60px",
      background: "#1f3a93",
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
      color: "#1f3a93",
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
        <h2 style={styles.heading}>STUDENT LOGIN</h2>
        <input
          style={styles.input}
          type="text"
          name="identifier"
          placeholder="Mobile / Email"
          value={formData.identifier}
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
          LOG IN NOW
        </button>
        <p style={{ marginTop: "15px" }}>
          New to Indian Talent Olympiad?{" "}
          <strong
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={() => navigate("/student-registration")}
          >
            Register Now
          </strong>
        </p>
      </form>
      <div style={styles.note}>
        NOTE: This login is exclusively for individual students who have
        registered online.
      </div>
    </div>
  );
};

export default StudentLogin;
