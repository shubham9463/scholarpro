import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { studentRegistration } from "../../api/studentApi";
import { toast } from "react-toastify";

const StudentRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialData = location.state || {};

  const [formData, setFormData] = useState({
    studentName: initialData.studentName || "",
    parentName: initialData.parentName || "",
    parentEmailId: initialData.parentEmailId || "",
    standard: initialData.standard || "",
    mobileNo: initialData.mobileNo || "",
    password: initialData.password || "",
    address: "",
    city: "",
    country: "india",
    pinCode: "",
    schoolName: "",
    schoolAddress: "",
    schoolCity: "",
    schoolPincode: "",
    academicYear: "2025-26",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData) {
      alert("Please enter data");
      return;
    }
    try {
      const response = await studentRegistration(formData);
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

  // ✅ Inline Styles
  const styles = {
    container: {
      maxWidth: "1400px",
      margin: "40px auto",
      padding: "30px",
      background: "#C7DCFF",
      border: "1px solid #cbccceff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      boxSizing: "border-box",
    },
    heading: {
      textAlign: "center",
      fontSize: "28px",
      marginBottom: "20px",
      color: "#222",
    },
    subHeading: {
      fontSize: "18px",
      margin: "20px 0 10px",
      color: "#444",
      fontWeight: "600",
    },
    formRow: {
      display: "flex",
      gap: "20px",
      marginBottom: "15px",
    },
    input: {
      flex: 1,
      padding: "15px 19px",
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
    checkbox: {
      marginRight: "10px",
    },
    button: {
      display: "block",
      margin: "20px auto 0 auto",
      width: "25%",
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
    loginLink: {
      color: "#4a90e2",
      cursor: "pointer",
      fontWeight: "500",
      textDecoration: "underline",
      marginLeft: "5px",
    },
    para: {
      margin: "20px auto 0 auto",
      width: "20%",
      fontSize: "15px",
      fontWeight: "600",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Student Registration Form 2025-26</h2>

      {/* Basic Student Info */}
      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Student Name"
        />
        <input
          style={styles.input}
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          placeholder="Parent Name"
        />
      </div>

      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="email"
          name="parentEmail"
          value={formData.parentEmailId}
          onChange={handleChange}
          placeholder="Parent Email"
        />
        <input
          style={styles.input}
          type="text"
          name="standard"
          value={formData.standard}
          onChange={handleChange}
          placeholder="Standard"
        />
      </div>

      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="studentMobile"
          value={formData.mobileNo}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>

      {/* Address Info */}
      <h3 style={styles.subHeading}>Address Details</h3>
      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
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
          name="pincode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="Pincode"
        />
        <input
          style={styles.input}
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
        />
      </div>

      {/* School Info */}
      <h3 style={styles.subHeading}>School Details</h3>
      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          placeholder="School Name"
        />
        <input
          style={styles.input}
          type="text"
          name="schoolAddress"
          value={formData.schoolAddress}
          onChange={handleChange}
          placeholder="School Address"
        />
      </div>

      <div style={styles.formRow}>
        <input
          style={styles.input}
          type="text"
          name="schoolCity"
          value={formData.schoolCity}
          onChange={handleChange}
          placeholder="School City"
        />
        <input
          style={styles.input}
          type="text"
          name="schoolPincode"
          value={formData.schoolPincode}
          onChange={handleChange}
          placeholder="School Pincode"
        />
      </div>

      {/* Academic Year */}
      <div style={styles.formRow}>
        <select
          style={styles.select}
          name="academicYear"
          value={formData.academicYear}
          onChange={handleChange}
        >
          <option value="2025-26">2025-26</option>
          <option value="2026-27">2026-27</option>
          <option value="2027-28">2027-28</option>
        </select>
      </div>

      {/* Terms */}
      <div style={styles.formRow}>
        <label>
          <input
            style={styles.checkbox}
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
          />
          I agree to the Terms & Conditions
        </label>
      </div>

      {/* Submit */}
      <button style={styles.button} onClick={handleSubmit}>
        Submit
      </button>
      <p style={styles.para}>
        Already have an account ? <span style={styles.loginLink}>Login</span>
      </p>
    </div>
  );
};

export default StudentRegistration;
