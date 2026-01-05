import { useState, useEffect } from "react";
import {
  User,
  BookOpen,
  Calendar,
  Award,
  CreditCard,
  FileText,
  HelpCircle, // ✅ New icon for Quiz
} from "lucide-react";

const SidebarIcon = ({ icon: Icon }) => <Icon size={20} />;

export default function StudentSidebar({ activeTab, onTabChange }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isOtpField, setIsOtpField] = useState(false);
  const [formData, setFormData] = useState({
    emailId: "",
    otp: "",
    password: "",
  });
  const [passwordStrength, setPasswordStrength] = useState("");

  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);
  const handleNavigation = (tab) => onTabChange && onTabChange(tab);
  const handleResetPasswordClick = () => setIsResetOpen(true);
  const handleSendOtp = () => {
    if (!formData.emailId) return alert("Enter email");
    alert("OTP sent!");
    setIsResetOpen(false);
    setIsOtpField(true);
  };
  const handleResetPassword = () => {
    if (!formData.otp || !formData.password)
      return alert("Enter OTP & Password");
    alert("Password reset!");
    setIsOtpField(false);
    setFormData({ emailId: "", otp: "", password: "" });
    setPasswordStrength("");
  };
  const handleLogout = () => alert("Logged out");

  useEffect(() => {
    if (!formData.password) setPasswordStrength("");
    else if (formData.password.length < 6) setPasswordStrength("Weak");
    else if (formData.password.length < 10) setPasswordStrength("Medium");
    else setPasswordStrength("Strong");
  }, [formData.password]);

  // ✅ Added "quiz" in navigation
  const navItems = [
    { id: "prof", label: "Profile", icon: User },
    { id: "syllabus", label: "Syllabus", icon: BookOpen },
    { id: "exam-calendar", label: "Exam Calendar", icon: Calendar },
    { id: "certificate", label: "Certificate", icon: Award },
    { id: "admit-card", label: "Admit Card", icon: CreditCard },
    { id: "result", label: "Result", icon: FileText },
    { id: "quiz", label: "Quiz", icon: HelpCircle },
    { id: "cart", label: "Cart", icon: FileText },
 // ✅ New Quiz tab
  ];

  const sidebarStyle = {
    background: "linear-gradient(180deg, #111827, #0f172a)",
    color: "#f9fafb",
    width: "17rem",
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem 0.5rem",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
    position: "sticky",
    top: 0,
    overflowY: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    boxShadow: "4px 0 10px rgba(0,0,0,0.25)",
    borderRight: "1px solid #1e293b",
  };

  const navButton = (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0.9rem 1.2rem",
    borderLeft: active ? "4px solid #3b82f6" : "4px solid transparent",
    background: active ? "rgba(59,130,246,0.1)" : "transparent",
    color: active ? "#3b82f6" : "#e5e7eb",
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: 500,
    transition: "all 0.2s ease-in-out",
    borderRadius: "0.5rem",
    margin: "0.2rem 0.4rem",
  });

  const modalStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  };

  const modalBox = {
    background: "#1f2937",
    color: "#f9fafb",
    padding: "1.5rem",
    borderRadius: "0.6rem",
    width: "90%",
    maxWidth: "24rem",
    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "1rem",
    borderRadius: "0.3rem",
    border: "1px solid #374151",
    outline: "none",
    fontSize: "0.9rem",
    background: "#111827",
    color: "#f9fafb",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    borderRadius: "0.3rem",
    border: "none",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: "0.9rem",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Sidebar */}
      <div style={sidebarStyle} className="sidebar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            style={navButton(activeTab === item.id)}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "rgba(59,130,246,0.15)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = activeTab === item.id
                ? "rgba(59,130,246,0.1)"
                : "transparent")
            }
            title={item.label}
          >
            <SidebarIcon icon={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}

        {/* Settings Section */}
        <div
          style={{
            marginTop: "auto",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "0.8rem",
          }}
        >
          <button
            onClick={toggleSettings}
            style={{
              width: "100%",
              padding: "0.8rem 1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "transparent",
              color: "#f9fafb",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            ⚙️ Settings {isSettingsOpen ? "▼" : "▶"}
          </button>

          {isSettingsOpen && (
            <div>
              <button
                onClick={handleResetPasswordClick}
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  textAlign: "left",
                  background: "transparent",
                  color: "#f9fafb",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "#374151")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                🔐 Reset Password
              </button>
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "0.7rem 1rem",
                  textAlign: "left",
                  background: "transparent",
                  color: "#f87171",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "rgba(239,68,68,0.15)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                🚪 Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* (Rest of your reset/OTP modals — unchanged) */}
      {/* ... */}
    </div>
  );
}
