import React, { useState } from "react";

const RegistrationComponent = () => {
  const [activeTab, setActiveTab] = useState("school");

  const [schoolStep, setSchoolStep] = useState(1);
  const [studentStep, setStudentStep] = useState(1);

  const [schoolForm, setSchoolForm] = useState({
    schoolName: "",
    officeNumber: "",
    mobileNumber: "",
    schoolAddress: "",
    state: "",
    district: "",
    city: "",
    taluka: "",
    pincode: "",
    schoolEmail: "",
  });

  const [studentForm, setStudentForm] = useState({
    studentName: "",
    parentName: "",
    parentEmail: "",
    mobileNumber: "",
    password: "",
    standard: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
    currency: "",
    schoolName: "",
    schoolAddress: "",
    schoolCity: "",
    schoolPincode: "",
    academicYear: "",
  });

  const states = [
    { value: "maharashtra", label: "Maharashtra" },
    { value: "gujarat", label: "Gujarat" },
    { value: "delhi", label: "Delhi" },
    { value: "karnataka", label: "Karnataka" },
    { value: "tamilnadu", label: "Tamil Nadu" },
    { value: "westbengal", label: "West Bengal" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "punjab", label: "Punjab" },
  ];

  const countries = [
    { value: "india", label: "India" },
    { value: "usa", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
  ];

  const currencies = [
    { value: "inr", label: "INR (₹)" },
    { value: "usd", label: "USD ($)" },
    { value: "eur", label: "EUR (€)" },
    { value: "gbp", label: "GBP (£)" },
  ];

  const standards = Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString(),
    label: `Class ${i + 1}`,
  }));

  const academicYears = [
    { value: "2024-25", label: "2024-25" },
    { value: "2025-26", label: "2025-26" },
    { value: "2026-27", label: "2026-27" },
  ];

  const handleSchoolChange = (e) => {
    setSchoolForm({ ...schoolForm, [e.target.name]: e.target.value });
  };

  const handleStudentChange = (e) => {
    setStudentForm({ ...studentForm, [e.target.name]: e.target.value });
  };

  const handleSchoolSubmit = (e) => {
    e.preventDefault();
    alert("School registration submitted successfully!");
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    alert("Student registration submitted successfully!");
  };

  const InputField = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    options = null,
    required = true,
    fullWidth = false,
  }) => (
    <div className={`form-group ${fullWidth ? "full" : ""}`}>
      {options ? (
        <>
          <label>{label}</label>
          <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          >
            <option value="">{`Select ${label}`}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          <label>{label}</label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          />
        </>
      )}
    </div>
  );

  // Split inputs into steps of 4
  const schoolSteps = [
    [
      <InputField label="School Name" name="schoolName" value={schoolForm.schoolName} onChange={handleSchoolChange} />,
      <InputField label="School Office Number" name="officeNumber" type="tel" value={schoolForm.officeNumber} onChange={handleSchoolChange} />,
      <InputField label="Mobile Number" name="mobileNumber" type="tel" value={schoolForm.mobileNumber} onChange={handleSchoolChange} />,
      <InputField label="State" name="state" value={schoolForm.state} onChange={handleSchoolChange} options={states} />,
    ],
    [
      <InputField label="School Address" name="schoolAddress" value={schoolForm.schoolAddress} onChange={handleSchoolChange} fullWidth />,
      <InputField label="District" name="district" value={schoolForm.district} onChange={handleSchoolChange} />,
      <InputField label="City" name="city" value={schoolForm.city} onChange={handleSchoolChange} />,
      <InputField label="Taluka" name="taluka" value={schoolForm.taluka} onChange={handleSchoolChange} />,
    ],
    [
      <InputField label="Pincode" name="pincode" value={schoolForm.pincode} onChange={handleSchoolChange} />,
      <InputField label="School Email ID" name="schoolEmail" type="email" value={schoolForm.schoolEmail} onChange={handleSchoolChange} />,
    ],
  ];

  const studentSteps = [
    [
      <InputField label="Student Name" name="studentName" value={studentForm.studentName} onChange={handleStudentChange} />,
      <InputField label="Parent Name" name="parentName" value={studentForm.parentName} onChange={handleStudentChange} />,
      <InputField label="Parent Email ID" name="parentEmail" type="email" value={studentForm.parentEmail} onChange={handleStudentChange} />,
      <InputField label="Mobile Number" name="mobileNumber" type="tel" value={studentForm.mobileNumber} onChange={handleStudentChange} />,
    ],
    [
      <InputField label="Password" name="password" type="password" value={studentForm.password} onChange={handleStudentChange} />,
      <InputField label="Standard" name="standard" value={studentForm.standard} onChange={handleStudentChange} options={standards} />,
      <InputField label="Address" name="address" value={studentForm.address} onChange={handleStudentChange} fullWidth />,
      <InputField label="City" name="city" value={studentForm.city} onChange={handleStudentChange} />,
    ],
    [
      <InputField label="Country" name="country" value={studentForm.country} onChange={handleStudentChange} options={countries} />,
      <InputField label="Pincode" name="pincode" value={studentForm.pincode} onChange={handleStudentChange} />,
      <InputField label="Currency" name="currency" value={studentForm.currency} onChange={handleStudentChange} options={currencies} />,
      <InputField label="School Name" name="schoolName" value={studentForm.schoolName} onChange={handleStudentChange} />,
    ],
    [
      <InputField label="School Address" name="schoolAddress" value={studentForm.schoolAddress} onChange={handleStudentChange} fullWidth />,
      <InputField label="School City" name="schoolCity" value={studentForm.schoolCity} onChange={handleStudentChange} />,
      <InputField label="School Pincode" name="schoolPincode" value={studentForm.schoolPincode} onChange={handleStudentChange} />,
      <InputField label="Academic Year" name="academicYear" value={studentForm.academicYear} onChange={handleStudentChange} options={academicYears} />,
    ],
  ];

  return (
    <div className="registration-container">
      <div className="floating"></div>

      <div className="registration-card">
        {/* Tabs */}
        <div className="tab-bar">
          <button
            className={`tab-btn ${activeTab === "school" ? "active" : ""}`}
            onClick={() => setActiveTab("school")}
          >
            For School
          </button>
          <button
            className={`tab-btn ${activeTab === "student" ? "active" : ""}`}
            onClick={() => setActiveTab("student")}
          >
            For Students
          </button>
        </div>

        {/* Forms */}
        <div className="form-wrapper">
          {/* School */}
          {activeTab === "school" && (
            <form onSubmit={handleSchoolSubmit} className="fade-in">
              <h2 className="form-title">REGISTER YOUR SCHOOL</h2>
              <p className="form-subtitle">Step {schoolStep} of {schoolSteps.length}</p>

              <div className="form-grid">{schoolSteps[schoolStep - 1]}</div>

              <div className="form-nav">
                {schoolStep > 1 && (
                  <button type="button" className="nav-btn" onClick={() => setSchoolStep(schoolStep - 1)}>
                    ⬅ Previous
                  </button>
                )}
                {schoolStep < schoolSteps.length && (
                  <button type="button" className="nav-btn" onClick={() => setSchoolStep(schoolStep + 1)}>
                    Next ➡
                  </button>
                )}
                {schoolStep === schoolSteps.length && (
                  <button type="submit" className="submit-btn">SIGN UP</button>
                )}
              </div>

              {schoolStep === schoolSteps.length && (
                <p className="login-link">
                  Already Registered? <a href="/login">LOGIN</a>
                </p>
              )}
            </form>
          )}

          {/* Student */}
          {activeTab === "student" && (
            <form onSubmit={handleStudentSubmit} className="fade-in">
              <h2 className="form-title">REGISTER NOW</h2>
              <p className="form-subtitle">Step {studentStep} of {studentSteps.length}</p>

              <div className="form-grid">{studentSteps[studentStep - 1]}</div>

              <div className="form-nav">
                {studentStep > 1 && (
                  <button type="button" className="nav-btn" onClick={() => setStudentStep(studentStep - 1)}>
                    ⬅ Previous
                  </button>
                )}
                {studentStep < studentSteps.length && (
                  <button type="button" className="nav-btn" onClick={() => setStudentStep(studentStep + 1)}>
                    Next ➡
                  </button>
                )}
                {studentStep === studentSteps.length && (
                  <button type="submit" className="submit-btn">SIGN UP</button>
                )}
              </div>

              {studentStep === studentSteps.length && (
                <p className="login-link">
                  Already Registered? <a href="/login">LOGIN</a>
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <style>{`
       .registration-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #3b82f6, #9333ea, #1e40af);
  display: flex;
  align-items: center;
  justify-content: flex-end;   /* pushes everything to right */
  padding: 16px 60px;          /* add some right padding so it doesn’t stick to edge */
  position: relative;
}

        .floating::before, .floating::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          animation: pulse 6s infinite;
        }
        .floating::before {
          width: 80px; height: 80px;
          top: 15%; left: 10%;
        }
        .floating::after {
          width: 100px; height: 100px;
          bottom: 20%; right: 15%;
          animation-delay: 2s;
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .registration-card {
          background: rgba(255,255,255,0.95);
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.2);
          width: 100%;
          max-width: 600px;
          overflow: hidden;
        }
        .tab-bar {
          display: flex;
          background: linear-gradient(to right, #60a5fa, #06b6d4);
        }
        .tab-btn {
          flex: 1;
          padding: 14px;
          font-size: 16px;
          font-weight: 600;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          background: transparent;
        }
        .tab-btn.active {
          background: linear-gradient(to right, #ec4899, #a78bfa);
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .form-wrapper {
          padding: 20px;
        }
        .form-title {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          background: linear-gradient(to right, #2563eb, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 6px;
        }
        .form-subtitle {
          text-align: center;
          font-size: 14px;
          color: #555;
          margin-bottom: 20px;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 20px;
        }
        .form-group { display: flex; flex-direction: column; }
        .form-group.full { grid-column: span 1; }
        .form-group label {
          font-size: 13px;
          color: #444;
          margin-bottom: 5px;
        }
        .form-group input, .form-group select {
          padding: 10px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }
        .form-group input:focus, .form-group select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 6px rgba(37,99,235,0.25);
          outline: none;
        }
        .form-nav {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .nav-btn {
          padding: 10px 16px;
          background: #e5e7eb;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }
        .nav-btn:hover {
          background: #d1d5db;
        }
        .submit-btn {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          background: linear-gradient(to right, #2563eb, #9333ea);
          color: white;
          cursor: pointer;
          transition: all 0.3s;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0,0,0,0.2);
        }
        .login-link {
          text-align: center;
          font-size: 14px;
          color: #444;
          margin-top: 10px;
        }
        .login-link a {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
        }
        .login-link a:hover {
          color: #9333ea;
          text-decoration: underline;
        }
        .fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default RegistrationComponent;
