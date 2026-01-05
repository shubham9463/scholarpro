import React, { useState } from "react";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Globe,
  Award,
  FileText,
  Camera,
  CheckCircle,
  X,
  Edit3,
  Save,
  GraduationCap,
  BookOpen,
} from "lucide-react";

export default function SchoolProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop"
  );

  const [schoolData, setSchoolData] = useState({
    name: "Springfield Public School",
    code: "SCH12345",
    email: "contact@springfieldschool.com",
    phone: "+91 9876543210",
    alternatePhone: "+91 9876543211",
    address: "123 Main Road, Springfield",
    city: "Springfield",
    state: "Maharashtra",
    pincode: "400001",
    established: "1985",
    affiliation: "CBSE",
    affiliationNo: "1234567",
    website: "www.springfieldschool.com",
    totalStudents: "1250",
    totalTeachers: "85",
    boardType: "CBSE",
    medium: "English",
  });

  const handleChange = (e) => {
    setSchoolData({ ...schoolData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => setIsEditing(false);

  return (
    <div
      style={{
        padding: " 10px 40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        background: "linear-gradient(to bottom, #f8fafc 0%, #e0e7ff 100%)",
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Success Toast */}
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#10b981",
            color: "#fff",
            padding: "16px 24px",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(16,185,129,0.4)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            zIndex: 1000,
          }}
        >
          <CheckCircle size={20} />
          <span style={{ fontWeight: "600" }}>
            Profile updated successfully!
          </span>
        </div>
      )}

      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "8px",
          borderRadius: "8px",
          marginBottom: "30px",
          boxShadow: "0 8px 32px rgba(102,126,234,0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              School Profile
            </h1>
            <p style={{ color: "#e0e7ff", fontSize: "15px" }}>
              Manage your institution's information and settings
            </p>
          </div>

          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              style={{
                padding: "14px 28px",
                background: "#ffffff",
                color: "#667eea",
                border: "none",
                borderRadius: "10px",
                fontWeight: "700",
                cursor: "pointer",
                fontSize: "14px",
                boxShadow: "0 4px 12px rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Edit3 size={18} />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Profile Picture + Quick Stats */}
      <div
        style={{
          background: "#ffffff",
          padding: "28px",
          borderRadius: "16px",
          marginBottom: "24px",
          border: "1px solid #f1f5f9",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* Profile Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "5px solid #e0e7ff",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                background: "#f8fafc",
              }}
            >
              <img
                src={profileImage}
                alt="School Logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {isEditing && (
              <label
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "#fff",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  border: "3px solid #ffffff",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <Camera size={20} />
              </label>
            )}
          </div>

          {/* School Info */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "#0f172a",
                marginBottom: "8px",
              }}
            >
              {schoolData.name}
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
                marginBottom: "20px",
              }}
            >
              School Code:{" "}
              <span
                style={{
                  fontWeight: "700",
                  color: "#475569",
                  background: "#e0e7ff",
                  padding: "4px 12px",
                  borderRadius: "6px",
                }}
              >
                {schoolData.code}
              </span>
            </p>

            {/* Quick Stats */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <div
                style={{
                  background: "linear-gradient(135deg,#667eea,#764ba2)",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  color: "#fff",
                  minWidth: "140px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <Calendar size={18} />
                  <span style={{ fontSize: "12px" }}>Established</span>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  {schoolData.established}
                </div>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg,#f093fb,#f5576c)",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  color: "#fff",
                  minWidth: "140px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <Users size={18} />
                  <span style={{ fontSize: "12px" }}>Students</span>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  {schoolData.totalStudents}
                </div>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg,#4facfe,#00f2fe)",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  color: "#fff",
                  minWidth: "140px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <GraduationCap size={18} />
                  <span style={{ fontSize: "12px" }}>Teachers</span>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  {schoolData.totalTeachers}
                </div>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg,#fa709a,#fee140)",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  color: "#fff",
                  minWidth: "140px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <Award size={18} />
                  <span style={{ fontSize: "12px" }}>Board</span>
                </div>
                <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  {schoolData.affiliation}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTIONS – STAFF & STATISTICS REMOVED */}
      {[
        {
          title: "Basic Information",
          icon: <BookOpen size={24} style={{ color: "#667eea" }} />,
          fields: [
            {
              label: "School Name",
              name: "name",
              icon: <Building2 size={16} style={{ color: "#667eea" }} />,
            },
            {
              label: "School Code",
              name: "code",
              icon: <FileText size={16} style={{ color: "#667eea" }} />,
              disabled: true,
            },
            {
              label: "Established Year",
              name: "established",
              icon: <Calendar size={16} style={{ color: "#667eea" }} />,
            },
            {
              label: "Board Type",
              name: "boardType",
              icon: <Award size={16} style={{ color: "#667eea" }} />,
            },
            {
              label: "Affiliation Number",
              name: "affiliationNo",
              icon: <FileText size={16} style={{ color: "#667eea" }} />,
            },
            {
              label: "Medium of Instruction",
              name: "medium",
              icon: <Globe size={16} style={{ color: "#667eea" }} />,
            },
          ],
        },
        {
          title: "Contact Information",
          icon: <Phone size={24} style={{ color: "#667eea" }} />,
          fields: [
            {
              label: "Email Address",
              name: "email",
              icon: <Mail size={16} style={{ color: "#667eea" }} />,
            },
            {
              label: "Primary Phone",
              name: "phone",
              icon: <Phone size={16} style={{ color: "#667eea" }} />,
            },
            {
              label: "Alternate Phone",
              name: "alternatePhone",
              icon: <Phone size={16} style={{ color: "#667eea" }} />,
            },
            {
              label: "Website",
              name: "website",
              icon: <Globe size={16} style={{ color: "#667eea" }} />,
            },
          ],
        },
        {
          title: "Address Information",
          icon: <MapPin size={24} style={{ color: "#667eea" }} />,
          fields: [
            {
              label: "Street Address",
              name: "address",
              fullWidth: true,
              icon: <MapPin size={16} style={{ color: "#667eea" }} />,
            },
            { label: "City", name: "city" },
            { label: "State", name: "state" },
            { label: "Pincode", name: "pincode" },
          ],
        },
      ].map((section, idx) => (
        <div
          key={idx}
          style={{
            background: "#ffffff",
            padding: "28px",
            borderRadius: "16px",
            marginBottom: "24px",
            border: "1px solid #f1f5f9",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#0f172a",
              marginBottom: "24px",
              paddingBottom: "14px",
              borderBottom: "3px solid #e0e7ff",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {section.icon}
            {section.title}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {section.fields.map((field) => (
              <div
                key={field.name}
                style={field.fullWidth ? { gridColumn: "1 / -1" } : {}}
              >
                <label
                  style={{
                    fontWeight: "600",
                    color: "#1e293b",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {field.icon}
                  {field.label}
                </label>

                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={schoolData[field.name]}
                  disabled={!isEditing || field.disabled}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    marginTop: "8px",
                    borderRadius: "10px",
                    border: `2px solid ${
                      !isEditing || field.disabled ? "#e2e8f0" : "#3b82f6"
                    }`,
                    background:
                      !isEditing || field.disabled ? "#f8fafc" : "#ffffff",
                    color:
                      !isEditing || field.disabled ? "#64748b" : "#0f172a",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Save + Cancel Buttons */}
      {isEditing && (
        <div
          style={{
            position: "sticky",
            bottom: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            padding: "20px",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            backdropFilter: "blur(10px)",
          }}
        >
          <button
            onClick={handleCancel}
            style={{
              padding: "14px 32px",
              border: "2px solid #e2e8f0",
              background: "#ffffff",
              borderRadius: "12px",
              fontWeight: "700",
            }}
          >
            <X size={18} /> Cancel
          </button>

          <button
            onClick={handleSave}
            style={{
              padding: "14px 32px",
              background: "linear-gradient(135deg,#667eea,#764ba2)",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontWeight: "700",
            }}
          >
            <Save size={18} /> Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
