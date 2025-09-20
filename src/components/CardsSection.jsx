import { Box } from "lucide";
import React from "react";

const CardsSection = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    marginTop: "40px",
    flexWrap: "wrap",
  
  
  };

  const cardStyle = {
    width: "420px",
    border: "1px solid #cde",
    borderRadius: "10px",
    boxShadow: "0px 8px 12px rgba(0,0,0,0.15)",
    overflow: "hidden",
    backgroundColor: "#fefdfdff",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "Arial, sans-serif",
    boxShadow: "10px 10px rgba(0, 0, 0, 0.15)",
    marginBottom: "80px",
  };

  const headerStyle = {
    backgroundColor: "#a6dce6",
    padding: "18px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  };

  const bodyStyle = {
    padding: "25px 20px",
    fontSize: "15px",
    color: "#222",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 25px",
    backgroundColor: "#ff9100",
    border: "none",
    borderRadius: "4px",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#000",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* Card 1 */}
      <div style={cardStyle}>
        <div style={headerStyle}>Become a Freelance Co-ordinator</div>
        <div style={bodyStyle}>
          <p>Want to work with Indian Talent Olympiad in your Free Time?</p>
          <p>
            Become a Freelance Co-ordinator Now! (For Teachers, Principal &
            Freelancers)
          </p>
          <button style={buttonStyle}>Register Now</button>
        </div>
      </div>

      {/* Card 2 */}
      <div style={cardStyle}>
        <div style={headerStyle}>Register Your School</div>
        <div style={bodyStyle}>
          <p>Is Your School Not Yet Registered to Indian Talent Olympiad?</p>
          <p>
            Click on the image to get the Invitation delivered to our School
            Today!
          </p>
          <button style={buttonStyle}>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
