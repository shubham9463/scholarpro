import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  BarChart2,
  Award,
  CreditCard,
  Mail,
  Settings,
} from "lucide-react";

export default function SchoolSidebar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");

  // 🏫 Dummy school name for now
  const schoolName = "Green Valley High School";

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/school/dashboard" },
    { id: "students", label: "Students", icon: Users, path: "/school/students" },
    { id: "results", label: "Results", icon: BarChart2, path: "/school/results" },
    { id: "certificates", label: "Certificates", icon: Award, path: "/school/certificates" },
    { id: "admitCards", label: "Admit Cards", icon: CreditCard, path: "/school/admit-cards" },
    { id: "enquiries", label: "Enquiries", icon: Mail, path: "/school/enquiries" },
    { id: "settings", label: "Settings", icon: Settings, path: "/school/settings" },
  ];

  const handleClick = (item) => {
    setActive(item.id);
    navigate(item.path);
  };

  return (
    <div
      style={{
        width: "240px",
        backgroundColor: "#1e293b",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem 0",
        height: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        boxShadow: "4px 0 10px rgba(0,0,0,0.15)",
        borderRight: "1px solid #334155",
      }}
    >
      {/* Logo / School Name */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h2
          style={{
            color: "#38bdf8",
            fontSize: "1.3rem",
            fontWeight: "bold",
            textTransform: "capitalize",
            lineHeight: "1.4rem",
          }}
        >
          {schoolName}
        </h2>
        <p style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>School Panel</p>
      </div>

      {/* Menu Items */}
      <div style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            style={{
              padding: "0.9rem 1rem",
              margin: "0.3rem 0.7rem",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              backgroundColor: active === item.id ? "#38bdf8" : "transparent",
              color: active === item.id ? "#0f172a" : "#e2e8f0",
              fontWeight: active === item.id ? "600" : "400",
              transition: "background 0.25s, color 0.25s",
            }}
            onMouseEnter={(e) => {
              if (active !== item.id)
                e.currentTarget.style.backgroundColor = "#334155";
            }}
            onMouseLeave={(e) => {
              if (active !== item.id)
                e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <item.icon size={18} strokeWidth={2} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid #334155",
          paddingTop: "1rem",
          color: "#94a3b8",
          fontSize: "0.8rem",
        }}
      >
        © {new Date().getFullYear()} {schoolName}
      </div>
    </div>
  );
}
