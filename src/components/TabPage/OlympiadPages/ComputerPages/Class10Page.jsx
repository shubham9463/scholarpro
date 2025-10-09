import React from "react";

const Class10Page = () => {
  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
            Computer Olympiad Class 10
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
            International Computer Olympiad (ICO) conducted by Minds Marathon
            familiarizes students with questions asked in Olympiad exams.
            Workbooks contain questions with answers and explanations. They test
            mental ability and logical reasoning, enhance thinking capacity, and
            prepare students for national and international exams. Content is
            designed by computer experts and follows school curriculum for State
            boards, International boards, CBSE, and ICSE. Teachers recommend
            these workbooks for a clear understanding of concepts and to boost
            confidence in students.
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
        <h1>Preparation Material for Class 10 Computer Olympiad</h1>
        <h2>Syllabus For Olympiad Class 10:</h2>
        <ul style={{ fontSize: "18px", color: "#333", marginTop: "15px" }}>
          <li>Chapter 1: Fundamentals Of Computer</li>
          <li>Chapter 2: Operating System</li>
          <li>Chapter 3: MS-Word</li>
          <li>Chapter 4: Networking</li>
          <li>Chapter 5: MS-PowerPoint</li>
          <li>Chapter 6: MS-Excel</li>
          <li>Chapter 7: HTML</li>
          <li>Chapter 8: Internet</li>
          <li>Chapter 9: Database Management System</li>
          <li>Chapter 10: Scratch</li>
          <li>Chapter 11: Python</li>
          <li>Chapter 12: Latest Developments In The Field Of IT</li>
          <li>Chapter 13: Logical Reasoning</li>
        </ul>
      </div>

      {/* Image Section */}
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
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ICO-Computer-Olympiad-Class-10_1.jpg"
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
              e.target.style.boxShadow =
                "0 6px 12px rgba(0, 123, 255, 0.4)";
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
    </div>
  );
};

export default Class10Page;
