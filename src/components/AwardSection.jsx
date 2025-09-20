import React from "react";

const AwardSection = () => {
  const containerStyle = {
    backgroundColor: "#b2ebf2", // light cyan background
    padding: "40px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageRowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "20px",
    flexWrap: "wrap",
  };

  const imageBoxStyle = {
    backgroundColor: "#1565c0", // blue frame
    padding: "10px",
    borderRadius: "4px",
  };

  const imageStyle = {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    display: "block",
  };

  const captionStyle = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "16px",
    margin: "20px 0 10px 0",
  };

  const buttonStyle = {
    backgroundColor: "#ff9800",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "4px",
    color: "#fff",
  };

  return (
    <div style={containerStyle}>
      <div style={imageRowStyle}>
        <div style={imageBoxStyle}>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Award 1"
            style={imageStyle}
          />
        </div>
        <div style={imageBoxStyle}>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Award 2"
            style={imageStyle}
          />
        </div>
        <div style={imageBoxStyle}>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Award 3"
            style={imageStyle}
          />
        </div>
      </div>

      <p style={captionStyle}>
        Best Teacher Award Felicitated By Saina Nehwal And Kiran Bedi
      </p>

      <button style={buttonStyle}>VIEW MORE</button>
    </div>
  );
};

export default AwardSection;
