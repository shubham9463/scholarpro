import React from "react";

const AwardFunctions = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "50px 20px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#222",
  };

  const underlineStyle = {
    width: "60px",
    height: "3px",
    backgroundColor: "#f1c40f",
    margin: "10px auto 40px auto",
    borderRadius: "2px",
  };

  const cardsWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    flexWrap: "wrap",
  };

  const cardStyle = {
    width: "300px",
    border: "1px solid #eee",
    borderRadius: "6px",
    overflow: "hidden",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.15)", // keep only one
    textAlign: "center",
    background: "#fff",
    transition: "transform 0.3s ease",
    // ❌ removed duplicate + wrong property
  };

  const imageStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  };

  const textStyle = {
    fontSize: "18px",
    fontWeight: "600",
    margin: "15px 0 10px 0",
    fontStyle: "italic",
    color: "#2c3e50",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "20px",
    backgroundColor: "#f1c40f",
    color: "#000",
    border: "none",
    borderRadius: "3px",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>School Award Functions and Winner List</h2>
      <div style={underlineStyle}></div>

      <div style={cardsWrapper}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <img
            src="https://i.ibb.co/0mJd6gq/school.jpg"
            alt="School Function"
            style={imageStyle}
          />
          <p style={textStyle}>School Functions</p>
          <button style={buttonStyle}>
            View <span>&#8594;</span>
          </button>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <img
            src="https://i.ibb.co/9tM6P0B/winners.jpg"
            alt="Olympiad Winners"
            style={imageStyle}
          />
          <p style={textStyle}>Olympiad Winners</p>
          <button style={buttonStyle}>
            View <span>&#8594;</span>
          </button>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <img
            src="https://i.ibb.co/7Vkw9vL/annual.jpg"
            alt="Annual Functions"
            style={imageStyle}
          />
          <p style={textStyle}>Annual Functions</p>
          <button style={buttonStyle}>
            View <span>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardFunctions;
