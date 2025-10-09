import React from "react";

const Class3Page = () => {
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
      {/* Top Yellow Banner */}
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
            Computer Olympiad Class 3
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
            Olympiad exams for students of class 3 identifies true potential and
            encourages young talent to participate at International & National
            levels. The computer book for Class 3 is designed by Minds Marathon,
            a leading organization that conducts Olympiad exams in different
            subjects. International Computer Olympiad class 3 (ICO) is one of
            the preferred Olympiad exams. This exam encourages deeper thinking,
            provides insights into various concepts, and enhances knowledge on
            the subject. The content is designed by professionals in the field
            of computers. It allows students to compete with one another at
            International & National levels. It makes them confident to answer a
            variety of questions and enhances the thinking capacity of young
            minds. The Cyber Olympiad Class 3 exam is based on the school
            curriculum, thus helping them to prepare for school exams as well.
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
        <h1>Preparation Material for Class 3 Computer Olympiad</h1>
        <h2>Syllabus For Olympiad Class 3:</h2>
        <ul style={{ fontSize: "18px", color: "#333", marginTop: "15px" }}>
          <li>Chapter 1: Fundamentals Of Computer</li>
          <li>Chapter 2: Storage Devices</li>
          <li>Chapter 3: Parts Of Computer</li>
          <li>Chapter 4: Uses Of Computer</li>
          <li>Chapter 5: Input And Output Devices</li>
          <li>Chapter 6: Introduction To Internet</li>
          <li>Chapter 7: Ms-Paint</li>
          <li>Chapter 8: Introduction To Ms-Word</li>
          <li>Chapter 9: Latest Developments In The Field Of IT</li>
          <li>Chapter 10: Logical Reasoning</li>
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
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ICO-Computer-Olympiad-Class-3.jpg"
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
        <h1>Class 3 Computer Annual Olympiad</h1>
        <p style={{ fontSize: "18px", lineHeight: 1.3, color: "#333" }}>
          Minds Marathon organizes International Computer Olympiad exams for
          class 3 and makes it possible for students to learn the computer
          subject interestingly. These exam questions follow the ongoing school
          board syllabus and are built by subject specialists. Annual Olympiad
          exams are different from school exams. They are organized to increase
          interest and curiosity in learning different things. Apart from
          theoretical exams, students can take part in these exams to monitor
          their skillset and develop their learning ability on a nationwide
          level platform. Schools must encourage all students to participate.
          Schools can decide the mode of exam - Online/Offline. These exams can
          be taken in the school during school hours. The duration for the
          Computer Olympiad is 45 minutes for online and 65 minutes for offline
          mode. Individual participants shall have their exam in online mode on
          the scheduled date and time of the examination. The Olympiad exam
          model contains 35 questions for class 3 students with a total of 50
          marks. The level of complexity varies as per the standards.
        </p>
      </div>
    </div>
  );
};

export default Class3Page;
