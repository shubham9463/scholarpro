import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // ✅ home pe redirect
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff, #f8fafc)",
          border: "2px solid #e2e8f0",
          padding: "16px 20px",
          borderRadius: "16px",
          boxShadow:
            "0 8px 25px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 12px 35px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 8px 25px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)";
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              fontSize: "28px",
              fontWeight: "800",
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.5px",
            }}
          >
            ITO
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#64748b",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginTop: "2px",
            }}
          >
            World's No. 1
          </div>
          <div
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "#1e293b",
              textTransform: "uppercase",
              letterSpacing: "0.25px",
              marginTop: "4px",
            }}
          >
            INDIAN TALENT OLYMPIAD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
