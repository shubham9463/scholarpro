import React from "react";

const FelicitatingStudents = () => {
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const imageWrapperStyle = {
    border: "8px solid #2980b9", // blue border
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
  };

  const imageStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  };

  const textStyle = {
    fontSize: "15px",
    fontWeight: "600",
    padding: "15px 12px",
    color: "#2c3e50",
  };

  const buttonStyle = {
    backgroundColor: "#f39c12",
    border: "none",
    padding: "12px ",

    marginBottom: "20px",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "4px",
    color: "#fff",
    textTransform: "uppercase",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Felicitating Students</h2>
      <div style={underlineStyle}></div>

      <div style={cardsWrapper}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <img
              src="https://i.ibb.co/ZG7N8Nq/students1.jpg"
              alt="Felicitating Students"
              style={imageStyle}
            />
          </div>
          <p style={textStyle}>
            Dr. Kiran Bedi interacted and Felicitated Indian Talent Olympiad
            toppers and winning students.
          </p>
          <button style={buttonStyle}>Watch Video</button>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <img
              src="https://i.ibb.co/n7jR9Rm/students2.jpg"
              alt="Olympiad Winners"
              style={imageStyle}
            />
          </div>
          <p style={textStyle}>
            Nobel Prize winner, Shri Kailash Satyarthi, felicitated the winners
            of the ITO National and State Awards for the 2023-24 Olympiad Exams.
          </p>
          <button style={buttonStyle}>Watch Video</button>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <div style={imageWrapperStyle}>
            <img
              src="https://i.ibb.co/3vXMTsD/students3.jpg"
              alt="Student Topper"
              style={imageStyle}
            />
          </div>
          <p style={textStyle}>
            Deccan Airways' founder, Captain Gopinath, felicitated a ITO Topper
            Student.
          </p>
          <button style={buttonStyle}>Watch Video</button>
        </div>
      </div>
    </div>
  );
};

export default FelicitatingStudents;
