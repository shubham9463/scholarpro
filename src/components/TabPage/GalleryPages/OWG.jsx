import React from "react";

const OWG = () => {
  // Hover Effects for Buttons
  const handleMouseOver = (e) => {
    e.target.style.background = "#e56710";
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  };

  const handleMouseOut = (e) => {
    e.target.style.background = "#ff7f27";
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif", backgroundColor: "white" }}>
      {/* Header */}
      <h1
        style={{
          textAlign: "center",
          color: "#0066ff",
          marginTop: "20px",
          fontSize: "28px",
        }}
      >
        MINDS MARATHON WINNERS GALLERY
      </h1>

      {/* Image & Description Section */}
      <div
        style={{
          textAlign: "center",
          margin: "20px auto",
          width: "90%",
          maxWidth: "900px",
        }}
      >
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/Olympiad-Winners-Gallery.jpg"
          alt="Olympiad Winners"
          style={{
            maxWidth: "300px",
            width: "100%",
            border: "2px solid #ddd",
            borderRadius: "5px",
          }}
        />

        {/* Description */}
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            margin: "20px auto",
            fontSize: "15px",
            lineHeight: "1.6",
            color: "#333",
            textAlign: "justify",
          }}
        >
          <p>
            Indian Talent Minds Marathon appreciates the achievements of the students participating in Minds Marathon Exams conducted.
            The achievements of the students are displayed on our website. Special recognition is given to the National and
            State Level Scholarship Winners, to the Excellence Medal Award Winners and to Class Toppers. Winner Gallery
            displays these achievements of students' photographs. Admiring the efforts of the students put forth splendidly,
            Minds Marathon Winner Gallery highlights these successes of students with a lot of best wishes.
          </p>

          <p>
            The General Knowledge International Minds Marathon (GKIO) helps students to improve their current affairs and gain
            information on the present happenings. It allows them to research and delve deeper into the world they live in.
            This exam is a prestigious exam as it opens students' thinking horizon. It makes them ready to take up other
            challenges in life. The GK exam brings with it a lot of confidence in students to participate in other national
            and international competitions. It forms a base for other competitive exams conducted at later stages in life.
            Participate in the GK Minds Marathon and win exciting prizes.
          </p>
        </div>
      </div>

      {/* Year-wise Winners Section */}
      <div
        style={{
          width: "90%",
          margin: "40px auto",
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyItems: "center",
        }}
      >
        {[
          { year: "2019–20", text: "WINNING STUDENT 2019-20" },
          { year: "2018–19", text: "WINNING STUDENTS 2018-19" },
          { year: "2017–18", text: "WINNING STUDENTS 2017-18" },
          { year: "2016–17", text: "WINNING STUDENTS 2016-17" },
        ].map((item, index) => (
          <div key={index} style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2
              style={{
                color: "#0066ff",
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              GALLERY {item.year} – RANK HOLDERS / CLASS TOPPERS
            </h2>
            <button
              style={{
                background: "#ff7f27",
                border: "none",
                padding: "12px 25px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                marginBottom: "20px",
                transition: "all 0.3s ease",
                width: "100%",
                maxWidth: "280px",
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {item.text}
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "10px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        © 2025 Indian Talent Minds Marathon
      </div>
    </div>
  );
};

export default OWG;
