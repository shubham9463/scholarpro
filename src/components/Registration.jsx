import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState("school");
  const [formData, setFormData] = useState({
    schoolName: "",
    mobile: "",
    schoolEmail: "",
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px'
  };

  const registrationBoxStyle = {
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '500px',
    position: 'relative'
  };

  const tabsStyle = {
    display: 'flex',
    background: '#f8f9ff'
  };

  const tabStyle = {
    flex: 1,
    padding: '16px 24px',
    border: 'none',
    background: 'transparent',
    color: '#64748b',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative'
  };

  const activeTabStyle = {
    ...tabStyle,
    color: '#667eea',
    background: '#ffffff',
    borderBottom: '3px solid #667eea'
  };

  const formContentStyle = {
    padding: '40px 32px',
    background: '#ffffff'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '32px',
    textAlign: 'center',
    letterSpacing: '0.5px'
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    marginBottom: '20px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '16px',
    color: '#374151',
    background: '#ffffff',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const inputFocusStyle = {
    borderColor: '#667eea',
    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6,9 12,15 18,9\'%3e%3c/polyline%3e%3c/svg%3e")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '20px',
    paddingRight: '40px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '0px',
    marginBottom: '8px'
  };

  const signupBtnStyle = {
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '1px',
    marginTop: '12px',
    textTransform: 'uppercase'
  };

  const signupBtnHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
  };

  return (
    <div style={containerStyle}>
      <div style={registrationBoxStyle}>
        {/* Tabs */}
        <div style={tabsStyle}>
          <button
            style={activeTab === "school" ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab("school")}
            onMouseOver={(e) => {
              if (activeTab !== "school") {
                e.target.style.background = '#f1f5f9';
              }
            }}
            onMouseOut={(e) => {
              if (activeTab !== "school") {
                e.target.style.background = 'transparent';
              }
            }}
          >
            For School
          </button>
          <button
            style={activeTab === "student" ? activeTabStyle : tabStyle}
            onClick={() => setActiveTab("student")}
            onMouseOver={(e) => {
              if (activeTab !== "student") {
                e.target.style.background = '#f1f5f9';
              }
            }}
            onMouseOut={(e) => {
              if (activeTab !== "student") {
                e.target.style.background = 'transparent';
              }
            }}
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
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
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
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
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
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button 
                style={signupBtnStyle}
                onClick={handleSubmit}
                onMouseOver={(e) => Object.assign(e.target.style, signupBtnHoverStyle)}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
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
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  placeholder="Enter Parent's Email Id"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter Parent's Name"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <select
                  name="standard"
                  value={formData.standard}
                  onChange={handleChange}
                  style={selectStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
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
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <button 
                style={signupBtnStyle}
                onClick={handleSubmit}
                onMouseOver={(e) => Object.assign(e.target.style, signupBtnHoverStyle)}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
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