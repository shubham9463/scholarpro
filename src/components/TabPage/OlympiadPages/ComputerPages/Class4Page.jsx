import React from "react";

const Class4Page = () => {
  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        margin: 0,
        padding: 0,
        lineHeight: 1.4,
        backgroundColor: "white",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "#ffdd57",
          padding: "20px 60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ marginLeft: "10rem", marginRight: "10rem" }}>
            Computer Olympiad Class 4
          </h1>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#333",
              marginLeft: "10rem",
              marginRight: "10rem",
              textAlign: "justify",
            }}
          >
            Olympiad exams in computers are conducted by Minds Marathon at an
            International level, which is one of the well-known organizations
            for arranging Olympiad exams. It conducts Olympiad exams in all
            subjects taught in school. It has tied up with schools across India
            that cater to different boards namely State boards, International
            boards, CBSE board, and ICSE board. The syllabus of this book is the
            same as prescribed by the school and is updated from time to time.
            Workbooks also contain content from the same syllabus, thus making
            it easy for students to study for their school exams. The workbook
            also contains mental ability exercises for students to solve,
            preparing them to compete at International and National levels.
            Cyber Olympiad for Class 4 exams boosts students’ confidence in
            undertaking other exams too.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          padding: "0px 60px",
          background: "#ffffff",
          marginLeft: "10rem",
          marginRight: "10rem",
          textAlign: "justify",
          fontWeight: 500,
        }}
      >
        <h1>Preparation Material for Class 4 Computer Olympiad</h1>
        <h2>Syllabus For Olympiad Class 4:</h2>
        <ul style={{ fontSize: "18px", color: "#333", marginTop: "15px" }}>
          <li>Chapter 1: About Computers</li>
          <li>Chapter 2: Evolution Of Computers</li>
          <li>Chapter 3: Parts Of Computer</li>
          <li>Chapter 4: Input And Output Devices</li>
          <li>Chapter 5: Hardware</li>
          <li>Chapter 6: Software</li>
          <li>Chapter 7: Ms-Word</li>
          <li>Chapter 8: Introduction To Internet And Its Uses</li>
          <li>Chapter 9: Computer Networks</li>
          <li>Chapter 10: Ms-Paint</li>
          <li>Chapter 11: Latest Developments In The Field Of IT</li>
          <li>Chapter 12: Logical Reasoning</li>
        </ul>
      </div>

      {/* Image & Button Section */}
      <div
        style={{
          maxWidth: "280px",
          height: "auto",
          marginLeft: "14rem",
          marginRight: "10rem",
        }}
      >
        <div>
          <h2>Computer Books</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ICO-Computer-Olympiad-Class-4.jpg"
            alt="Computer Book"
            style={{
              maxWidth: "280px",
              height: "auto",
              display: "block",
              margin: "10px auto",
              boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
            }}
          />
          <button
            style={{
              marginLeft: "5rem",
              backgroundColor: "transparent",
              color: "#007bff",
              border: "2px solid #007bff",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "999px",
              cursor: "pointer",
              transition:
                "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#007bff";
              e.target.style.boxShadow = "none";
            }}
          >
            Buy Books
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div
        style={{
          padding: "0px 60px",
          background: "#ffffff",
          marginLeft: "10rem",
          marginRight: "10rem",
          textAlign: "justify",
          fontWeight: 500,
        }}
      >
        <h1>Class 4 Computer Annual Olympiad</h1>
        <p style={{ fontSize: "18px", lineHeight: 1.3, color: "#333" }}>
          Annual Olympiad exams are competitive exams carried out at National
          and International Levels. These exams are based on the current school
          board syllabus which helps in improving students’ academic scores.
          International Computer Olympiad (ICO) is a competitive exam launched
          to make students more familiar with advanced technology. These exam
          questions are framed in multiple-choice formats, where students need
          to think rationally and select the correct answer. Students can
          register through their schools, and schools can choose the mode of
          exam – Online or Offline. Exams can be taken within the school during
          school hours. 45 minutes for online and 65 minutes for offline mode
          are allotted for the students of class 4 to complete 35 questions.
          Students can also register individually from the website and appear in
          online mode. The annual Olympiad exam keeps students inspired and
          motivated, boosting self-confidence for future competitive exams.
        </p>
      </div>
    </div>
  );
};

export default Class4Page;
