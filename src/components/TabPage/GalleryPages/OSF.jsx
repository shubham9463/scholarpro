import React from "react";

const SchoolFunction = () => {
  // Reusable hover effect handlers
  const handleMouseOver = (e) => {
    e.target.style.background = "#4a90e2";
    e.target.style.color = "#fff";
    e.target.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.3)";
    e.target.style.transform = "scale(1.05)";
  };

  const handleMouseOut = (e) => {
    e.target.style.background = "#c6d9ff";
    e.target.style.color = "#000";
    e.target.style.boxShadow = "none";
    e.target.style.transform = "scale(1)";
  };

  const galleryLinks = [
    "SCHOOL FUNCTION GALLERY 2023-24",
    "SCHOOL FUNCTION GALLERY 2022-23",
    "SCHOOL FUNCTION GALLERY 2021-22",
    "SCHOOL FUNCTION GALLERY 2019-20",
    "SCHOOL FUNCTION GALLERY 2018-19",
    "SCHOOL FUNCTION GALLERY 2017-18",
    "SCHOOL FUNCTION GALLERY 2016-17",
  ];

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Main Section */}
      <div
        style={{
          backgroundColor: "#cfe8f9",
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* Text Section */}
        <div
          style={{
            flex: "1 1 60%",
            color: "#222",
            lineHeight: "1.6",
            margin: "20px",
            minWidth: "280px",
          }}
        >
          <h1 style={{ color: "#222", marginTop: 0 }}>
            Minds Marathon SCHOOL FUNCTIONS
          </h1>
          <p>
            Prize distribution is considered to be an important day in the
            students' academic life. We all like to receive awards and
            recognition in front of others. Whether it is our classmates,
            our colleagues or our family, we admire the thought that we get
            recognized by many people. School functions play an important
            role in motivating students. Awards and prizes are distributed
            among the students who performed well in the Minds Marathon exam.
            Indian Talent Minds Marathon also cherishes the achievement of
            the students and keeps a collection of these achievements. Minds
            Marathon School Function Photo Gallery on the other hand gives
            recognition to the schools too, as the students represent the
            school.
          </p>
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: "1 1 30%",
            textAlign: "center",
            minWidth: "280px",
            marginTop: "20px",
          }}
        >
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/Olympiad%20School%20Function.webp"
            alt="Olympiad Function"
            style={{
              maxWidth: "100%",
              height: "auto",
              border: "3px solid #333",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>

      {/* Gallery Buttons */}
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {galleryLinks.map((title, index) => (
          <a
            key={index}
            href="#"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
              padding: "12px 20px",
              background: "#c6d9ff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              color: "#000",
              transition: "0.3s",
              display: "inline-block",
              width: "fit-content",
              minWidth: "220px",
              textAlign: "center",
            }}
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SchoolFunction;
