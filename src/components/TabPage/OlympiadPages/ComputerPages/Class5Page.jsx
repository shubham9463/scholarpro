import React from "react";

const Class5Page = () => {
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
            Computer Olympiad Class 5
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
            Students of standard 5 participating in International Computer
            Olympiad (ICO) exams are assumed to have thorough knowledge of
            basics of computers. It is an International level competition where
            students from all over the world participate with enthusiasm. This
            subject is mandatory in school, which is why Cyber Olympiad for
            Class 5 enhances students’ knowledge on the subject. The workbook
            focuses on mental ability too, with multiple-choice questions
            including answers and explanations. This helps students understand
            basic concepts easily. The workbook content is designed by
            professionals who are up-to-date with the latest happenings. The
            book is updated regularly, keeping in mind student requirements. It
            includes illustrations and pictures to make it interesting for
            students to study. Computer teachers often identify students with a
            keen interest in the subject. Most schools recommend books from
            Minds Marathon, as it has the most student-friendly content. The
            book also helps students prepare for their school exams.
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
        <h1>Preparation Material for Class 5 Computer Olympiad</h1>
        <h2>Syllabus For Olympiad Class 5:</h2>
        <ul style={{ fontSize: "18px", color: "#333", marginTop: "15px" }}>
          <li>Chapter 1: Input And Output Devices</li>
          <li>Chapter 2: Hardware</li>
          <li>Chapter 3: Software</li>
          <li>Chapter 4: Storage Devices</li>
          <li>Chapter 5: Memory – Primary & Secondary Memory</li>
          <li>Chapter 6: Ms-Paint</li>
          <li>Chapter 7: Introduction To Multimedia</li>
          <li>Chapter 8: Ms-Word</li>
          <li>Chapter 9: Introduction To Ms-Powerpoint</li>
          <li>Chapter 10: Internet</li>
          <li>Chapter 11: Computer Networks</li>
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
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ICO-Computer-Olympiad-Class-5.jpg"
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

export default Class5Page;
