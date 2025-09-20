import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState("school");
  const [formData, setFormData] = useState({
    schoolName: "",
    mobileNo: "",
    schoolEmailId: "",
    studentName: "",
    parentName: "",
    parentEmail: "",
    standard: "",
    studentMobile: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (activeTab === "school") {
      navigate("/school-registration", { state: formData });
    } else {
      navigate("/student-registration", { state: formData });
    }
  };

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "flex-end",
   alignItems: "flex-start",
    minHeight: "63vh",
    background: "#690B0D",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  };

  const registrationBoxStyle = {
    background: "#ffffff",
    borderRadius: "0px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    overflow: "hidden",
    width: "380px", // fixed width like screenshot
    minHeight: "400px", 
    position: "relative",
  };

  const tabsStyle = {
    display: "flex",
    background: "#222", // dark bg like screenshot
  };

  const tabStyle = {
    flex: 1,
    padding: "12px 16px",
    border: "none",
    background: "transparent",
    color: "#ccc",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const activeTabStyle = {
    ...tabStyle,
    background: activeTab === "school" ? "#fbbf24" : "#374151", // yellow for school, grey for student
    color: "#000",
    fontWeight: "700",
  };

  const formContentStyle = {
    padding: "24px 28px", // reduced padding
    background: "#ffffff",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "24px",
    textAlign: "center",
    letterSpacing: "0.5px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "12px",
    border: "1px solid #000", // dark border
    borderRadius: "4px", // square-ish
    fontSize: "13px",
    color: "#374151",
    background: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
  };

  const inputFocusStyle = {
    borderColor: "#0d3b8c",
    boxShadow: "0 0 0 2px rgba(13, 59, 140, 0.15)",
  };

  const selectStyle = {
    ...inputStyle,
    appearance: "none",
    backgroundImage:
      "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    backgroundSize: "18px",
    paddingRight: "36px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
    marginBottom: "8px",
  };

  const signupBtnStyle = {
    width: "100%",
    padding: "12px",
    background: "#0d3b8c", // dark blue like screenshot
    color: "white",
    border: "none",
    borderRadius: "2px", // sharp edges
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "8px",
    textTransform: "uppercase",
  };

  return (
    <div style={containerStyle}>
       {/* Left headline */}
    <h1
      style={{
        flex: 1,
        color: "#d77b7b", 
        fontSize: "35px",
        fontWeight: "800",
        margin: "40px 20px 0 150px",
      }}
    >
      MINDS MARATHON World's Biggest Olympiad
    </h1>
      <div style={registrationBoxStyle}>
        {/* Tabs */}
        <div style={tabsStyle}>
          <button
            style={activeTab === "school" ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab("school")}
          >
            For School
          </button>
          <button
            style={activeTab === "student" ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab("student")}
          >
            For Students
          </button>
        </div>

        {/* Form */}
        <div style={formContentStyle}>
          
          {activeTab === "school" ? (
            <>
              <h2 style={titleStyle}>REGISTER YOUR SCHOOL</h2>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="Enter School Name"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => {
                  e.target.style.borderColor = "#000";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter Principal's/School's Mobile Number"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => {
                  e.target.style.borderColor = "#000";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="email"
                name="schoolEmail"
                value={formData.schoolEmail}
                onChange={handleChange}
                placeholder="Enter School E-Mail ID"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => {
                  e.target.style.borderColor = "#000";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button style={signupBtnStyle} onClick={handleSubmit}>
                SIGN UP
              </button>
            </>
          ) : (
            <>
              <h2 style={titleStyle}>REGISTER NOW</h2>
              <div style={gridStyle}>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter Student's Name"
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  placeholder="Enter Parent's Email Id"
                  style={inputStyle}
                />
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter Parent's Name"
                  style={inputStyle}
                />
                <select
                  name="standard"
                  value={formData.standard}
                  onChange={handleChange}
                  style={selectStyle}
                >
                  <option value="">Select Standard</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={`Class ${i + 1}`}>
                      Class {i + 1}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="studentMobile"
                  value={formData.studentMobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile Number"
                  style={inputStyle}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  style={inputStyle}
                />
              </div>
              <button style={signupBtnStyle} onClick={handleSubmit}>
                SIGN UP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
