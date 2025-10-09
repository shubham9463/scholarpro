import React, { useState } from "react";

const Class6Page = () => {
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
    content1P: {
      marginTop: "0px",
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
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
    content2P: {
      fontSize: "18px",
      lineHeight: 1.5,
      color: "#333",
      marginTop: "0px",
    },
    content2Ul: {
      fontSize: "18px",
      color: "#333",
      marginTop: "15px",
    },
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
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    content3H2: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "#000000",
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
      color: "#ffffff",
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
    button: {
      backgroundColor: hover ? "#007bff" : "transparent",
      color: hover ? "#fff" : "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition:
        "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
      boxShadow: hover ? "0 6px 12px rgba(11, 11, 11, 0.4)" : "none",
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
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>
            INTERNATIONAL SCIENCE OLYMPIAD <br />
            CLASS 6
          </h1>
          <p style={styles.textBoxP}>
            International Science Olympiad for class 6 (ISO) workbook by Minds
            Marathon is a uniquely designed book that enhances student’s
            understanding of various topics. The workbook is enriched with
            illustrations and different types of question patterns to make
            learning interesting. It helps students to improve their reasoning
            skills, thinking ability, and problem-solving skills. The Olympiad
            books for class 6 keep students fully acquainted with different
            topics such as separation of mixtures, magnetism, lights, electric
            circuits, classification of materials, living organisms, measurement
            and distance, and many more. The language used is simple, thus easy
            to understand. It contains multiple-choice questions with answer
            keys and explanations to the questions. It encourages students to
            gain a thorough knowledge of all topics that are part of their
            school syllabus. This book assists students to test their scoring
            abilities and identifies topics where they need special practice.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-Science-Olympiad-Logo-315px-143px.webp"
          alt="International Science Olympiad Logo"
        />
      </div>

      <div style={styles.content1}>
        <h2 style={styles.content1H2}>
          PREPARATION MATERIAL FOR SCIENCE OLYMPIAD CLASS 6
        </h2>
        <p style={styles.content1P}>
          Students can prepare for the Class 6 Science Olympiad with the help of
          previous year's question papers and workbooks. These papers give
          participants first-hand experience with the structure, question types,
          and expected level of difficulty found in the actual Olympiad...
        </p>
      </div>

      <div style={styles.content2}>
        <h2 style={styles.content2H2}>SYLLABUS FOR OLYMPIAD CLASS 6</h2>
        <p style={styles.content2P}>
          Science is one subject that paves way for students to become ready for
          competitive exams in engineering or medical...
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Physical Quantities Of Measurement</li>
          <li>Chapter 2: Motion</li>
          <li>Chapter 3: Light</li>
          <li>Chapter 4: Electric Circuits</li>
          <li>Chapter 5: Magnetism</li>
          <li>Chapter 6: Living Organism And Its Classification</li>
          <li>Chapter 7: Substances In Daily Use</li>
          <li>Chapter 8: The Cell</li>
          <li>Chapter 9: Movement In Living Beings</li>
          <li>Chapter 10: Food And Nutrition</li>
          <li>Chapter 11: Compound And Mixtures</li>
          <li>Chapter 12: Changes Around Us</li>
          <li>Chapter 13: Classification Of Materials</li>
        </ul>
      </div>

      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-workbook-class-6.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 6 SCIENCE OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            Workbooks provide a structured learning experience, allowing
            students to progress systematically through various topics and
            levels of difficulty...
          </p>
        </div>
      </div>

      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>
            CLASS 6 SCIENCE OLYMPIAD PREVIOUS YEAR QUESTION PAPER
          </h2>
          <p style={styles.content4P}>
            Students can become more comfortable with the language and
            terminology used in the Science Olympiad by practicing with question
            papers from previous years...
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-previous-year-question-paper-class-6-ito.webp"
          alt="PYQ"
        />
      </div>

      <div style={styles.content5}>
        <h2>CLASS 6 SCIENCE ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          The Class 6 Science Annual and Monthly Olympiads provide students with
          a consistent and structured platform to assess their scientific
          aptitude...
        </p>
      </div>

      <div style={styles.content6}>
        <h2>SCIENCE ANNUAL OLYMPIAD CLASS 6</h2>
        <p style={styles.content6P}>
          Annual Olympiads are similar to the final examinations of any school...
        </p>
        <p style={styles.content6P}>
          It is one of the best ways to test individual capacity...
        </p>
        <p style={styles.content6P}>
          It makes them proud of their achievements...
        </p>
        <p style={styles.content6P}>
          To participate in the Annual Olympiads or to know more...
        </p>
      </div>

      <div style={styles.content7}>
        <button
          style={styles.button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Register now
        </button>
      </div>

      <div style={styles.content8}>
        <h2>SCIENCE MONTHLY OLYMPIAD CLASS 6</h2>
        <p style={styles.content8P}>
          Monthly Olympiads are tests that are conducted every month for
          different subjects...
        </p>
        <p style={styles.content8P}>
          Class 6 is when students are gradually introduced...
        </p>
        <p style={styles.content8P}>
          That is why, the monthly Olympiads help them...
        </p>
        <p style={styles.content8P}>
          To participate in the monthly Olympiads or to know more...
        </p>
      </div>
    </div>
  );
};

export default Class6Page;
