import React from "react";

const Class1Page = () => {
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
            Computer Olympiad Class 1
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
            Minds Marathon conducts International Computer Olympiad (ICO) exams
            for students studying in standard 1. Computers have become an
            integral part of our lives because they can accomplish easy tasks
            repeatedly without getting bored and complex ones repeatedly without
            committing errors. Today’s generation is more aware of modern
            technologies. Class 1 students learn and identify all the parts of a
            computer; learn using mouse and keyboard, open paint or games, etc.
            Students can participate in International Cyber Olympiad for Class 1
            organized by Minds Marathon.
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
        <h1>Preparation Material for Class 1 Computer Olympiad</h1>
        <h2>Syllabus For Olympiad Class 1:</h2>
        <ul style={{ fontSize: "18px", color: "#333", marginTop: "15px" }}>
          <li>Chapter 1: Introduction To Computers</li>
          <li>Chapter 2: Computer Parts And Its Types</li>
          <li>Chapter 3: Uses Of Computer</li>
          <li>Chapter 4: Keyboard And Mouse</li>
          <li>Chapter 5: Input, Output And Storage Media</li>
          <li>Chapter 6: Introduction To Ms-Paint</li>
          <li>Chapter 7: Latest Developments In The Field Of IT</li>
          <li>Chapter 8: Logical Reasoning</li>
          <li>Chapter 9: Model Question Paper</li>
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
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ICO-Computer-Olympiad-Class-1.jpg"
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
        <h1>Class 1 Computer Annual Olympiad</h1>
        <p style={{ fontSize: "18px", lineHeight: 1.3, color: "#333" }}>
          Computers have grown as an essential part of our lives because they
          can perform easy tasks frequently without getting exhausted and
          complicated ones frequently without making mistakes. In today's world,
          most people are more knowledgeable of modernized technologies. Grade 1
          learners learn and distinguish all the parts of a computer; learn
          handling mouse and keyboard, open paint or games, etc. Students can
          compete in International Computer Olympiad conducted once a year by
          Minds Marathon. The syllabus in this exam is created taking into
          consideration the ongoing school board syllabus. The chapters for this
          exam are designed under the guidance of computer specialists. Students
          can participate in this Olympiad exam for practicing the problems
          based on the subject to score well in their exam. Since the Computer
          Olympiad exam is held at the national level, students get an
          opportunity not only to challenge others but also to test themselves
          at the national level. The Computer Olympiad will be for a limited
          time: 45 minutes for online and 65 minutes for offline exams are
          allocated. Students need to complete the exam within the given time
          limit. Registering for International Computer Olympiad is simple.
          Students need to register through their respective schools to
          participate in this exam. For school registration, students need to
          approach the in-charge teacher who fills the registration form as per
          guidelines before the last date of registration. The school will
          decide the mode of exam - Online/Offline. Students can also
          individually register and enroll their names by filling the
          registration form from the website. Students can participate in this
          exam either by enrolling through their schools or individually.
          Students registering individually will take the exam in online mode.
        </p>
      </div>
    </div>
  );
};

export default Class1Page;
