import React from "react";

const Class8Page = () => {
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
            Computer Olympiad Class 8
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
            International Computer Olympiad (ICO) exam for students of standard 8
            prepares them for international and national level competitive exams.
            The syllabus follows their school curriculum. Minds Marathon (ITO)
            provides workbooks with multiple-choice questions focusing on mental
            ability and latest developments in computers. Answers and explanations
            are provided for all questions to help students understand the logic
            behind correct answers. Olympiad exams improve reasoning abilities,
            logical thinking, and aptitude in computers. Teachers recommend this
            book for school exam preparation as well.
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
        <h1>Preparation Material for Class 8 Computer Olympiad</h1>
        <h2>Syllabus For Olympiad Class 8:</h2>
        <ul style={{ fontSize: "18px", color: "#333", marginTop: "15px" }}>
          <li>Chapter 1: Fundamentals Of Computers</li>
          <li>Chapter 2: Internet & Viruses</li>
          <li>Chapter 3: HTML</li>
          <li>Chapter 4: Flash CS6</li>
          <li>Chapter 5: MS-Access</li>
          <li>Chapter 6: Networking</li>
          <li>Chapter 7: MS-Word</li>
          <li>Chapter 8: MS-PowerPoint</li>
          <li>Chapter 9: MS-Excel</li>
          <li>Chapter 10: Memory & Storage Devices</li>
          <li>Chapter 11: Basics Of Cyber Crimes</li>
          <li>Chapter 12: Cyber Laws</li>
          <li>Chapter 13: Operating Systems</li>
          <li>Chapter 14: Latest Developments In The Field Of IT</li>
          <li>Chapter 15: Logical Reasoning</li>
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
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ito-ico-computer-olympiad-class-8-workbook.jpg"
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
    </div>
  );
};

export default Class8Page;
