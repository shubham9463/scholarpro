import React from "react";

const OBD = () => {
  // Hover effect handlers (replacing CSS :hover)
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#e65c00";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "#ff6600";
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#000",
        }}
      >
        Minds Marathon Best Drawing
      </h1>

      {/* Image Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          justifyItems: "center",
          alignItems: "center",
          gap: "20px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/Olympiad%20Best%20Drawing.jpg"
          alt="Minds Marathon Best Drawing"
          style={{
            width: "280px",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "5px",
          }}
        />
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          textAlign: "justify",
          maxWidth: "850px",
          marginTop: "20px",
          color: "#333",
        }}
      >
        Each and every student has his / her likes and interests in particular
        subjects. Hence, for the students who are interested in drawing subject
        are given a platform by Indian Talent Minds Marathon to showcase their
        creativity on a big platform. Class 1 to class 10 students participate
        in this Drawing Minds Marathon. There are colors everywhere. And the
        artistic work of these kids amazes everyone. But the best drawings are
        preserved and are added to the collection of Minds Marathon Best
        Drawings Gallery. Drawings of the students who tried to draw something
        out of their creativity are put on center stage.
      </p>

      {/* Button */}
      <a
        href="best-drawings.html"
        style={{
          display: "inline-block",
          backgroundColor: "#ff6600",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          textDecoration: "none",
          padding: "15px 40px",
          marginTop: "25px",
          borderRadius: "4px",
          textAlign: "center",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        BEST DRAWINGS
      </a>
    </div>
  );
};

export default OBD;
