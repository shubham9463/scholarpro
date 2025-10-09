import React from "react";

const Class4Page = () => {
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
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition:
        "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0 6px 12px rgba(11,11,11,0.4)",
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

  const [hover, setHover] = React.useState(false);

  return (
    <div style={styles.body}>
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>
            INTERNATIONAL SCIENCE OLYMPIAD <br />
            CLASS 4
          </h1>
          <p style={styles.textBoxP}>
            Minds Marathon conducts International Science Olympiad for class 4
            students. It also offers books that are informative and engages
            students thoroughly. Olympiad books for class 4 for the science exam
            are designed keeping in mind the existing school syllabus. It
            becomes easy for students to attempt school exams because of this
            book. They are able to practice questions that may not be given in
            their school textbooks. Olympiad workbook comprises various topics
            such as states of matter, birds, animals, human body, living and
            non-living things, and so on. All these topics are explained through
            questions in simple language. The content is designed by
            professionals who have in-depth knowledge of the subject. The exam
            questions are all multiple choice with options to choose from. This
            book also has a logical reasoning section at the end to enhance the
            reasoning and thinking abilities of students. It also boosts
            confidence to be a part of various national and international
            competitive exams. All questions have answers and explanations to
            correct answers.
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
          PREPARATION MATERIAL FOR SCIENCE OLYMPIAD CLASS 4
        </h2>
        <p style={styles.content1P}>
          Preparing for the Class 4 Science Olympiad can be made more manageable
          with the help of a workbook and the previous year question paper.
          These are a part of the educational materials Minds Marathon provides
          to help students succeed; they typically present concepts in a
          logical, sequential order, so that even the most difficult concepts
          can be understood by the time the exam rolls around. Including visuals
          like diagrams and real-world examples in a workbook makes the material
          easier to understand and remember. Students can be confident that they
          will have a complete understanding of all course material thanks to
          the workbooks' methodical organization and progression. Workbooks
          provide easy access to essential formulas, definitions, and concepts,
          while previous year question paper serve as useful reference guides
          that students can use to keep up with preparation.
        </p>
      </div>

      <div style={styles.content2}>
        <h2 style={styles.content2H2}>SCIENCE OLYMPIAD SYLLABUS CLASS 4</h2>
        <p style={styles.content2P}>
          The syllabus for class 4 International Science Olympiad exam is
          similar to the school syllabus...
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Human Body</li>
          <li>Chapter 2: Adaptation In Animals And Plants</li>
          <li>Chapter 3: The World Of Birds</li>
          <li>Chapter 4: Food And Its Component</li>
          <li>Chapter 5: Clothes We Wear</li>
          <li>Chapter 6: Our Environment</li>
          <li>Chapter 7: Air</li>
          <li>Chapter 8: Material And Solutions</li>
          <li>Chapter 9: Light And Shadow</li>
          <li>Chapter 10: Earth And Its Neighbour</li>
          <li>Chapter 11: Push And Pull</li>
          <li>Chapter 12: Friction As A Force</li>
        </ul>
      </div>

      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-workbook-class-4.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 4 SCIENCE OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            The Olympiad Workbooks by ITO are specifically designed for students
            competing in the International Science Olympiad...
          </p>
        </div>
      </div>

      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>
            CLASS 4 SCIENCE OLYMPIAD PREVIOUS YEAR QUESTION PAPER
          </h2>
          <p style={styles.content4P}>
            The question papers from previous years are often a very helpful
            source of information...
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-previous-year-question-paper-class-4-ito.webp"
          alt="PYQ"
        />
      </div>

      <div style={styles.content5}>
        <h2>CLASS 4 SCIENCE ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          The Monthly as well as Annual Science Olympiad for class 4 complements
          classroom learning...
        </p>
      </div>

      <div style={styles.content6}>
        <h2>SCIENCE ANNUAL OLYMPIAD CLASS 4</h2>
        <p style={styles.content6P}>
          Annual Olympiads are similar to the final examinations of any school...
        </p>
        <p style={styles.content6P}>
          The Annual Olympiads by Minds Marathon are held twice a year...
        </p>
        <p style={styles.content6P}>
          Similar to the monthly Olympiads, annual Olympiads can be taken any
          time respectively on the exam dates...
        </p>
        <p style={styles.content6P}>
          Please click the link below to know the timetable of these exams.
        </p>
      </div>

      <div style={styles.content7}>
        <button
          style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Register now
        </button>
      </div>

      <div style={styles.content8}>
        <h2>SCIENCE MONTHLY OLYMPIAD CLASS 4</h2>
        <p style={styles.content8P}>
          Students of the 20th century are considered smarter than earlier
          generations...
        </p>
        <p style={styles.content8P}>
          Students like to solve interactive questions that engage them for a
          long time...
        </p>
        <p style={styles.content8P}>
          Children of grade 4 can select 1 or all the subjects of Olympiads...
        </p>
        <p style={styles.content8P}>
          To be a part of the notable monthly Olympiad exams, please click the
          link below...
        </p>
      </div>
    </div>
  );
};

export default Class4Page;
