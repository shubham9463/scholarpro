import React from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.jpg"; // relative path from Logo.jsx

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // redirect to home
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "5px",
        borderRadius: "10px",
        transition: "transform 0.2s, box-shadow 0.2s",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
      }}
    >
      <img
        src={logoImage}
        alt="Minds Marathon Logo"
        style={{
          height: "100px",
          width: "auto",
          display: "block",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default Logo;
