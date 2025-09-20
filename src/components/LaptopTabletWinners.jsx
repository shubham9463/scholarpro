import React from "react";

const LaptopTabletWinners = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#b2ebf2", // light blue background
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
    width: "320px",
    borderRadius: "8px",
    overflow: "hidden",
    background: "#fff",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  };

  const imageWrapperStyle = {
    border: "8px solid #ecc539ff", // yellow border
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffffff",
  };

  const imageStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  };

  const textStyle = {
    fontSize: "16px",
    fontWeight: "600",
    padding: "15px 10px",
    color: "#2c3e50",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Winners</h2>
      <div style={underlineStyle}></div>

      <div style={cardsWrapper}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <img
              src="https://i.ibb.co/Y2T7Ntx/teacher.jpg"
              alt="Best Teacher Winner"
              style={imageStyle}
            />
          </div>
          <p style={textStyle}>Best Teacher Winner</p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <img
              src="https://i.ibb.co/gVWh6dj/topper.jpg"
              alt="National Topper"
              style={imageStyle}
            />
          </div>
          <p style={textStyle}>
            ITO National Topper Awarded by Dr. Kiran Bedi and Saina Nehwal
          </p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <img
              src="https://i.ibb.co/xLhK5jS/student.jpg"
              alt="Student Topper"
              style={imageStyle}
            />
          </div>
          <p style={textStyle}>Student Topper Winner</p>
        </div>
      </div>
    </div>
  );
};

export default LaptopTabletWinners;
