import React, { useState } from "react";

const Class10Page = () => {
  const [hover, setHover] = useState(false);

  const styles = {
    body: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      margin: 0,
      padding: 0,
      lineHeight: 1.4,
      backgroundColor: "white",
    },
    textBox: {
      backgroundColor: "#ffde59",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    textBoxH1: {
      fontSize: "35px",
      fontWeight: 700,
      lineHeight: 1.1,
      color: "#333",
      marginRight: "15px",
      marginLeft: "7rem",
    },
    textBoxP: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#333",
      marginLeft: "7rem",
      marginRight: "4rem",
      textAlign: "justify",
    },
    textBoxImg: {
      width: "350px",
      height: "auto",
      marginRight: "8rem",
    },
    content1: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content1H2: { marginBottom: "4px" },
    content1P: { fontSize: "18px", lineHeight: 1.3, color: "#333", marginTop: 0 },
    content2: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontSize: "16px",
      fontWeight: 500,
    },
    content2H2: { fontSize: "25px", marginBottom: "3px" },
    content2P: { fontSize: "18px", lineHeight: 1.5, color: "#333", marginTop: 0 },
    content2Ul: { fontSize: "18px", color: "#333", marginTop: "15px" },
    content3: {
      backgroundColor: "#ffde59",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    content3Img: {
      maxWidth: "180px",
      height: "auto",
      marginLeft: "8rem",
      boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
    },
    content3H2: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "#000",
      marginRight: "15px",
      marginLeft: "4rem",
      marginBottom: "10px",
      marginTop: "20px",
    },
    content3P: {
      fontSize: "18px",
      fontWeight: 700,
      color: "#333",
      marginLeft: "4rem",
      marginRight: "8rem",
      textAlign: "justify",
    },
    content4: {
      background: "#480a8f",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    content4H2: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "#f6fa0d",
      marginRight: "15px",
      marginLeft: "7rem",
    },
    content4P: {
      fontSize: "18px",
      fontWeight: 500,
      color: "#fff",
      marginLeft: "7rem",
      marginRight: "4rem",
      textAlign: "justify",
    },
    content4Img: {
      maxWidth: "180px",
      height: "auto",
      marginRight: "8rem",
      boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
    },
    content5: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content5P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
    content6: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content6P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
    content7: {
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content7Button: {
      backgroundColor: hover ? "#007bff" : "transparent",
      color: hover ? "#fff" : "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
      boxShadow: hover ? "0 6px 12px rgba(11,11,11,0.4)" : "none",
    },
    content8: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content8P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
  };

  return (
    <div style={styles.body}>
      {/* Text Box */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>INTERNATIONAL MATHS OLYMPIAD CLASS 10</h1>
          <p style={styles.textBoxP}>
            As students enter 10th standard, there is a pressure on them to perform
            well. The level of difficulty in Mathematics is at its peak in class 10.
            To make learning easier the students must be introduced to Olympiad exams
            that help to clear basic concepts. Such exams have become the norm in
            today’s’ times. It is conducted throughout the country in different
            schools. Maths Olympiad exam assists students to think-out-of-the box.
            It helps them to attempt different types of questions. Minds Marathon
            provides IMO Workbook for Class 10 that consists of practice questions
            and solutions to all questions with appropriate explanations. The book
            is easily available. Logical reasoning is also included as a part of the
            book. All competitive exams include reasoning as part of their exam.
            This is to test students’ reasoning skills. It allows them to analyze
            each answer before selecting the correct option.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-Maths-Olympiad-Logo_1.webp"
          alt="International Maths Olympiad Logo"
        />
      </div>

      {/* Content 1 */}
      <div style={styles.content1}>
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR MATHS OLYMPIAD CLASS 10</h2>
        <p style={styles.content1P}>
          The previous year's questions and the workbooks provided by ITO can be helpful
          resources for students preparing for the Class 10 Mathematics Olympiad...
        </p>
      </div>

      {/* Content 2 */}
      <div style={styles.content2}>
        <h2 style={styles.content2H2}>MATHS OLYMPIAD SYLLABUS CLASS 10</h2>
        <p style={styles.content2P}>
          There is unnecessary pressure and fear revolving all students of class 10...
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Real Number</li>
          <li>Chapter 2: Arithmetic Progression</li>
          <li>Chapter 3: Polynomials</li>
          <li>Chapter 4: Quadratic Equations</li>
          <li>Chapter 5: Probability & Permutation Combination</li>
          <li>Chapter 6: Co-Ordinate Geometry</li>
          <li>Chapter 7: Triangles</li>
          <li>Chapter 8: Circle and Its Area</li>
          <li>Chapter 9: Quadrilateral and its Area</li>
          <li>Chapter 10: Mensuration</li>
          <li>Chapter 11: Trigonometry</li>
          <li>Chapter 12: Data Handling</li>
          <li>Chapter 13: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 3 */}
      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IMO-Maths-Olympiad-Class-10.jpg"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>Minds Marathon</h2>
          <p style={styles.content3P}>
            The Minds Marathon has many resources available to students to aid in
            their preparation for the IMO, including the IMO book class 10...
          </p>
        </div>
      </div>

      {/* Content 4 */}
      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>CLASS 10 MATHS OLYMPIAD PREVIOUS YEAR QUESTION PAPER</h2>
          <p style={styles.content4P}>
            Students can make use of resources such as IMO class 10 previous year papers...
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-10_1.webp"
          alt="PYQ"
        />
      </div>

      {/* Content 5 */}
      <div style={styles.content5}>
        <h2>CLASS 10 MATHS ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Students in the tenth grade have the opportunity to participate in the
          Maths Annual Olympiad as well as monthly competitions...
        </p>
      </div>

      {/* Content 6 */}
      <div style={styles.content6}>
        <h2>MATHS ANNUAL OLYMPIAD CLASS 10</h2>
        <p style={styles.content6P}>The Annual Olympiads are similar to monthly tests...</p>
        <p style={styles.content6P}>The annual Olympiads builds strong fundamental concepts...</p>
        <p style={styles.content6P}>Some of the tips to score well in class 10 Maths Olympiad are...</p>
        <p style={styles.content6P}>Lastly, Maths Olympiad can be cracked only through rigorous practice...</p>
      </div>

      {/* Content 7 */}
      <div style={styles.content7}>
        <button
          style={styles.content7Button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Register now
        </button>
      </div>

      {/* Content 8 */}
      <div style={styles.content8}>
        <h2>MATHS MONTHLY OLYMPIAD CLASS 10</h2>
        <p style={styles.content8P}>Class 10 is considered to be the benchmark exam...</p>
        <p style={styles.content8P}>Minds Marathon also provides power pack exams in all subjects...</p>
        <p style={styles.content8P}>Whether they opt for Science, Commerce or Arts...</p>
      </div>
    </div>
  );
};

export default Class10Page;
