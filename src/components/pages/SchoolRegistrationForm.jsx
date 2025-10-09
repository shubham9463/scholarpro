import React, { useState, useEffect } from "react";
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
        toast.error(error.response.data.message);
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
      display: "flex",
      gap: "20px",
      marginBottom: "15px",
    },
    input: {
      flex: 1,
      padding: "12px 14px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      outline: "none",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    halfInput: {
      flex: 1,
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
      textDecoration: "underline",
    },
  };

  // ✅ Responsive CSS injected dynamically (for iPhone 12 Pro)
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @media (max-width: 400px) {
        .school-form-container {
          width: 90% !important;
          padding: 20px !important;
          margin: 20px auto !important;
        }

        .school-form-row {
          flex-direction: column !important;
          gap: 10px !important;
        }

        .school-form-input,
        .school-form-select {
          width: 100% !important;
          font-size: 14px !important;
        }

        .school-form-button {
          width: 100% !important;
          padding: 12px !important;
          font-size: 16px !important;
        }

        .school-form-heading {
          font-size: 22px !important;
        }

        .school-form-subheading {
          font-size: 15px !important;
        }

        .note-box {
          font-size: 13px !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div style={styles.container} className="school-form-container">
      <div style={styles.headingBox}>
        <h2 style={styles.mainHeading} className="school-form-heading">
          School Olympiad Registration Form
        </h2>
        <p style={styles.subHeading} className="school-form-subheading">
          [For Annual Olympiad 2025-26]
        </p>
      </div>

      <div style={styles.formRow} className="school-form-row">
        <input
          style={styles.halfInput}
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          placeholder="School Name"
          className="school-form-input"
        />
        <input
          style={styles.halfInput}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="school-form-input"
        />
      </div>

      <div style={styles.formRow} className="school-form-row">
        <input
          style={styles.input}
          type="text"
          name="schoolOfficeNumber"
          value={formData.schoolOfficeNumber}
          onChange={handleChange}
          placeholder="School Office Number"
          className="school-form-input"
        />
        <input
          style={styles.input}
          type="text"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          placeholder="Mobile"
          className="school-form-input"
        />
      </div>

      <div style={styles.formRow} className="school-form-row">
        <input
          style={styles.input}
          type="text"
          name="schoolAddress"
          value={formData.schoolAddress}
          onChange={handleChange}
          placeholder="Address"
          className="school-form-input"
        />
        <select
          style={styles.select}
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="school-form-select"
        >
          <option value="">Select State</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
      </div>

      <div style={styles.formRow} className="school-form-row">
        <input
          style={styles.input}
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="District"
          className="school-form-input"
        />
        <input
          style={styles.input}
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="school-form-input"
        />
      </div>

      <div style={styles.formRow} className="school-form-row">
        <input
          style={styles.input}
          type="text"
          name="taluka"
          value={formData.taluka}
          onChange={handleChange}
          placeholder="Taluka"
          className="school-form-input"
        />
        <input
          style={styles.input}
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="Pin Code"
          className="school-form-input"
        />
      </div>

      <div style={styles.formRow} className="school-form-row">
        <input
          style={styles.input}
          type="email"
          name="schoolEmailId"
          value={formData.schoolEmailId}
          onChange={handleChange}
          placeholder="School Email"
          className="school-form-input"
        />
        <select
          style={styles.select}
          name="modeOfExam"
          value={formData.modeOfExam}
          onChange={handleChange}
          className="school-form-select"
        >
          <option value="OFFLINE">Offline</option>
          <option value="ONLINE">Online</option>
        </select>
      </div>

      <button
        style={styles.button}
        onClick={handleSubmit}
        className="school-form-button"
      >
        Submit
      </button>

      <div style={styles.noteBox} className="note-box">
        <p style={styles.noteHeading}>NOTE:</p>
        <p>
          1. If you are already registered,{" "}
          <span
            style={styles.loginLink}
            onClick={() => navigate("/school-login")}
          >
            click here
          </span>{" "}
          to log in with your school code.
        </p>
        <p>2. Please fill the above Registration Form from desktop only.</p>
      </div>
    </div>
  );
};

export default SchoolRegistrationForm;
