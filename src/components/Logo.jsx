import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // home pe redirect
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          background: "#fff",
          border: "2px solid #000",
          padding: "8px 18px",
          borderRadius: "12px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontFamily: "'Times New Roman', serif",
          transition: "all 0.4s ease",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        }}
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 8px 20px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0,0,0,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 4px 12px rgba(0, 0, 0, 0.08)";
        }}
      >
        {/* Left side bold "MM" */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "900",
            color: "#000",
            borderRight: "2px solid #000",
            paddingRight: "10px",
            marginRight: "8px",
            letterSpacing: "1px",
            animation: "pulse 2s infinite",
          }}
        >
          MM
        </div>

        {/* Right side text */}
        <div
          style={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#000",
            letterSpacing: "1px",
            whiteSpace: "nowrap",
            position: "relative",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #ff6a00, #ff3c00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shine 3s linear infinite",
              fontWeight: "800",
            }}
          >
            Minds Marathon
          </span>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }

          @keyframes shine {
            0% { background-position: -200px 0; }
            100% { background-position: 200px 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Logo;
