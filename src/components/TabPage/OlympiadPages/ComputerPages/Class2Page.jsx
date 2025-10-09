import React from "react";

const Class2Page = () => {
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
      {/* Top Yellow Section */}
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
            Computer Olympiad Class 2
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
            International Computer Olympiad (ICO) exam for students of standard
            2 focuses on identifying students who have a great technical vision.
            It is important to have a keen interest in the subject. Computer
            teachers identify such students in school and play a crucial role in
            motivating them to appear for Olympiad exams. This exam helps to
            recognize a child’s capability and real potential that helps him/her
            to compete at International & National levels. All schools these
            days have well-equipped computer labs that allow students to take
            hands-on experience on topics that are taught in class.
          </p>
        </div>
      </div>

      {/* Syllabus Section */}
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
        <h1>Preparation Material for Class 2 Computer Olympiad</h1>
        <h2>Syllabus For Olympiad Class 2:</h2>
        <ul style={{ fontSize: "18px", color: "#333", marginTop: "15px" }}>
          <li>Chapter 1: General Information About Computers</li>
          <li>Chapter 2: Parts Of Computer</li>
          <li>Chapter 3: Uses Of Computer</li>
          <li>Chapter 4: Use Of Keyboard And Mouse</li>
          <li>Chapter 5: Input, Output And Storage Media</li>
          <li>Chapter 6: Ms-Paint</li>
          <li>Chapter 7: Latest Developments In The Field Of IT</li>
          <li>Chapter 8: Logical Reasoning</li>
        </ul>
      </div>

      {/* Book Section */}
      <div
        style={{
          maxWidth: "280px",
          height: "auto",
          marginLeft: "14rem",
          marginRight: "10rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>Computer Books</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ICO-Computer-Olympiad-Class-2.jpg"
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

      {/* Annual Olympiad Section */}
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
        <h1>Class 2 Computer Annual Olympiad</h1>
        <p style={{ fontSize: "18px", lineHeight: 1.3, color: "#333" }}>
          International Computer Olympiad (ICO) is the Olympiad exam established
          by Minds Marathon for class 2 conducted at a National Level. This exam
          reflects the syllabus from all school boards. This is a competitive
          exam carried in India and several students compete from numerous
          schools across India. This exam makes sure that the study of computer
          science is understood easily and effortlessly as it consists of
          concepts regarding computers and the future which gradually increases
          as per the higher grades. The annual Olympiads for computers are
          conducted in both online and offline mode, generally in the month of
          December. This exam has a single round where students of class 2 are
          given MCQ-based 35 questions to solve within the time boundary.
          Students can register through their respective schools or
          individually. Students registering through schools will have the mode
          of exam decided by the school – Online/Offline. Students registering
          individually can register their names by filling the registration form
          online and will have the exam in an online mode.
        </p>
      </div>
    </div>
  );
};

export default Class2Page;
