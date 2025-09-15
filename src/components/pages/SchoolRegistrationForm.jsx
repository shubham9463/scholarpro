import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { schoolRegistration } from "../../api/schoolApi";
import { toast } from "react-toastify";

const SchoolRegistrationForm = () => {
  const location = useLocation();
  const initialData = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    schoolName: initialData.schoolName || "",
    mobileNo: initialData.mobileNo || "",
    schoolEmailId: initialData.schoolEmailId || "",
    schoolAddress: "",
    password: "",
    state: "",
    district: "",
    city: "",
    taluka: "",
    pinCode: "",
    schoolOfficeNumber: "",
    modeOfExam: "OFFLINE",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData) {
      toast.error("Please enter data");
      return;
    }
    try {
      const response = await schoolRegistration(formData);
      console.log("Apply successfully:", response);
      toast.success("Registration successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // ✅ backend ka message
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    }
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "1400px",
      margin: "50px auto",
      padding: "40px",
      background: "#C7DCFF",
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      boxSizing: "border-box",
    },
    headingBox: {
      textAlign: "center",
      marginBottom: "25px",
    },
    mainHeading: {
      fontSize: "28px",
      fontWeight: "600",
      color: "#222",
      margin: "0",
    },
    subHeading: {
      fontSize: "18px",
      color: "#444",
      marginTop: "8px",
      fontStyle: "italic",
    },
    formRow: {
      display: "flex", // ✅ side by side
      gap: "20px", // ✅ space between inputs
      marginBottom: "15px",
    },
    input: {
      flex: 1, // ✅ take equal space
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      outline: "none",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    select: {
      flex: 1,
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      outline: "none",
      fontSize: "14px",
    },
    button: {
      display: "block",
      margin: "20px auto 0 auto",
      width: "20%",
      padding: "15px",
      background: "#4a90e2",
      border: "none",
      borderRadius: "6px",
      color: "#fff",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
    },
    noteBox: {
      marginTop: "20px",
      padding: "15px",
      background: "#e4c91ba7",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "14px",
      color: "#333",
      lineHeight: "1.6",
    },
    noteHeading: {
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#444444ff",
    },
    loginLink: {
      color: "#4a90e2",
      cursor: "pointer",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      {/* ✅ Heading */}
      <div style={styles.headingBox}>
        <h2 style={styles.mainHeading}>School Olympiad Registration Form</h2>
        <p style={styles.subHeading}>[For Annual Olympiad 2025-26]</p>
      </div>

      {/* ✅ Input fields */}
      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          placeholder="School Name"
        />
      </div>
      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>

      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="schoolOfficeNumber"
          value={formData.schoolOfficeNumber}
          onChange={handleChange}
          placeholder="School Office Number"
        />
        <input
          style={styles.input}
          type="text"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          placeholder="Mobile"
        />
      </div>

      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="schoolAddress"
          value={formData.schoolAddress}
          onChange={handleChange}
          placeholder="Address"
        />
        <select
          style={styles.select}
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Select State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Gujarat">Gujarat</option>
        </select>
      </div>

      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="District"
        />
        <input
          style={styles.input}
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
      </div>

      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="taluka"
          value={formData.taluka}
          onChange={handleChange}
          placeholder="Taluka"
        />
        <input
          style={styles.input}
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="Pin Code"
        />
      </div>

      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="email"
          name="schoolEmailId"
          value={formData.schoolEmailId}
          onChange={handleChange}
          placeholder="School Email"
        />
        <select
          style={styles.select}
          name="modeOfExam"
          value={formData.modeOfExam}
          onChange={handleChange}
        >
          <option value="OFFLINE">Offline</option>
          <option value="ONLINE">Online</option>
        </select>
      </div>

      {/* ✅ Submit Button */}
      <button style={styles.button} onClick={handleSubmit}>
        Submit
      </button>

      {/* ✅ Notes */}
      <div style={styles.noteBox}>
        <p style={styles.noteHeading}>NOTE:</p>
        <p>
          1. If you are already registered,{" "}
          <span style={styles.loginLink}>click here</span> to log in with your
          school code.
        </p>
        <p>2. Please fill the below Registration Form from desktop only.</p>
      </div>
    </div>
  );
};

export default SchoolRegistrationForm;
