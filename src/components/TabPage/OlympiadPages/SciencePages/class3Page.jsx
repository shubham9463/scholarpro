import React, { useState } from "react";

const Class3Page = () => {
  const [isHovered, setIsHovered] = useState(false);

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
    content1H2: {
      marginBottom: "4px",
    },
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
    content2H2: {
      fontSize: "25px",
      marginBottom: "3px",
    },
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
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    content5: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content5P: {
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
    content6: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content6P: {
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
    content7: {
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: isHovered ? "#007bff" : "transparent",
      color: isHovered ? "#fff" : "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
      boxShadow: isHovered ? "0 6px 12px rgba(11, 11, 11, 0.4)" : "none",
    },
    content8: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content8P: {
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>
            INTERNATIONAL SCIENCE OLYMPIAD <br /> CLASS 3
          </h1>
          <p style={styles.textBoxP}>
            International Science Olympiad Class 3 exam is designed for students
            who love to experiment with science. Books for this exam are based
            on the existing school syllabus. Minds Marathon is one of the
            leading organizations that has crafted quality content in workbooks
            for a science exam. All questions asked are of multiple choice with
            options for the same. The syllabus for this exam is the same as the
            school syllabus. Schools recommend using these books for practice.
            It helps them to enhance their existing knowledge on various topics
            such as food, transportation, communication, birds, plants, animals,
            the human body, and a lot more. The book has several practice
            questions with a logical reasoning section at the end. Answers to
            all questions with explanations make it easy for students to study
            for the exam. Teachers recommend all students to purchase this book
            so that it becomes easy to solve questions asked in the school exam
            as well.
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
          PREPARATION MATERIAL FOR SCIENCE OLYMPIAD CLASS 3
        </h2>
        <p style={styles.content1P}>
          Having a workbook and previous year's exam papers to review can make
          studying for the Class 3 Science Olympiad quite simple and effective...
          (full content continues unchanged)
        </p>
      </div>

      <div style={styles.content2}>
        <h2 style={styles.content2H2}>SCIENCE OLYMPIAD SYLLABUS CLASS 3</h2>
        <p style={styles.content2P}>
          The syllabus for the International Science Olympiad (ISO) exam class 3
          is set as per the standards of different boards namely CBSE, State, and
          ICSE boards...
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Living And Non-Living</li>
          <li>Chapter 2: Human Body</li>
          <li>Chapter 3: Plants And Its Part</li>
          <li>Chapter 4: Animals And Its Habitat</li>
          <li>Chapter 5: Human Body</li>
          <li>Chapter 6: Cleanliness, Health And Hygiene</li>
          <li>Chapter 7: Food And Its Component</li>
          <li>Chapter 8: Housing And Clothing</li>
          <li>Chapter 9: Forms Of Matter: Solids, Liquids And Gases</li>
          <li>Chapter 10: Water As A Resource</li>
          <li>Chapter 11: Transport And Communication</li>
          <li>Chapter 12: Weather And Sky</li>
          <li>Chapter 13: Light And Sound</li>
        </ul>
      </div>

      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-workbook-class-3.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 3 SCIENCE OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            The workbooks related to Science Olympiad for Class 3 are designed to
            introduce young minds to the fascinating world of science...
          </p>
        </div>
      </div>

      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>
            CLASS 3 SCIENCE OLYMPIAD PREVIOUS YEAR QUESTION PAPER
          </h2>
          <p style={styles.content4P}>
            The question papers from previous years can be quite a useful resource...
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-previous-year-question-paper-class-3.webp"
          alt="PYQ"
        />
      </div>

      <div style={styles.content5}>
        <h2>CLASS 3 SCIENCE ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Enrolling in the Science Annual or Monthly Olympiad for class 3 offers
          students a chance to challenge themselves beyond the confines of their
          regular curriculum...
        </p>
      </div>

      <div style={styles.content6}>
        <h2>SCIENCE ANNUAL OLYMPIAD CLASS 3</h2>
        <p style={styles.content6P}>
          Annual Olympiads are conducted on the same pattern as the monthly...
        </p>
        <p style={styles.content6P}>
          Students having offline exams will have a time duration of 65 minutes...
        </p>
        <p style={styles.content6P}>
          The online exams can be taken from any smartphone or tablet...
        </p>
        <p style={styles.content6P}>
          Minds Marathon has brought various developments in its exam structure...
        </p>
      </div>

      <div style={styles.content7}>
        <button
          style={styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Register now
        </button>
      </div>

      <div style={styles.content8}>
        <h2>SCIENCE MONTHLY OLYMPIAD CLASS 3</h2>
        <p style={styles.content8P}>
          Minds Marathon believes in providing the best in the field of education...
        </p>
        <p style={styles.content8P}>
          The fees for these tests are kept minimal with a view to encouraging...
        </p>
        <p style={styles.content8P}>
          There are immense benefits for students of class 3 who participate...
        </p>
      </div>
    </div>
  );
};

export default Class3Page;
