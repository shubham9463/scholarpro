import React from "react";

const Class7Page = () => {
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
      backgroundColor: "#ffdd57",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    textBoxH1: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
    textBoxP: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#333",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
    },
    content1: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content1P: {
      marginTop: 0,
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
    content1Ul: {
      fontSize: "18px",
      color: "#333",
      marginTop: "15px",
    },
    content2: {
      backgroundColor: "#ffdd57",
      padding: "20px 100px",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    imgc: {
      textAlign: "center",
      margin: "0 20px",
    },
    img: {
      maxWidth: "280px",
      height: "auto",
      display: "block",
      margin: "10px auto",
      boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
    },
    button: {
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    },
    content3: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content4: {
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content5: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>GK Olympiad Class 7</h1>
          <p style={styles.textBoxP}>
            Students develop a special liking for General Knowledge Class 7 Olympiad exams. All thanks to the robust syllabus and topics that are introduced to them. They learn about environment, plants and animals, science and technology, universe, India and the world, current affairs and lot more. It gives them a break from regular studies as students are allowed to explore more about their surroundings on their own. They become knowledgeable and are efficient in tackling different questions. It prepares them for national as well as international level competitions. Minds Marathon exam enhances students’ calibre and potential. General Knowledge book for Class 7 is informative, thus making it interesting for students to read. It is written in a student-friendly language. The General Knowledge questions for Class 7 are framed in a way that encourages students to think out of the box. Teachers encourage more and more students to purchase this book.
          </p>
        </div>
      </div>

      <div style={styles.content1}>
        <h1>Preparation Material for Class 7 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 7</h2>
        <ul style={styles.content1Ul}>
          <li>Chapter 1: Plants & Animals</li>
          <li>Chapter 2: Earth & Its Environment</li>
          <li>Chapter 3: Science & Technology</li>
          <li>Chapter 4: Universe</li>
          <li>Chapter 5: India & The World</li>
          <li>Chapter 6: Social Studies</li>
          <li>Chapter 7: Language & Literature</li>
          <li>Chapter 8: Entertainment</li>
          <li>Chapter 9: Sports</li>
          <li>Chapter 10: Quantitative Aptitude & Reasoning</li>
          <li>Chapter 11: Life Skills</li>
          <li>Chapter 12: Current Affairs</li>
          <li>Chapter 13: Logical Reasoning</li>
        </ul>
      </div>

      <div style={styles.content2}>
        <div style={styles.imgc}>
          <h2>General Knowledge Book</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%207.jpg"
            alt="WORKBOOK"
            style={styles.img}
          />
          <button
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 6px 12px rgba(0,123,255,0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#007bff";
              e.target.style.boxShadow = "none";
            }}
          >
            BUY NOW
          </button>
        </div>

        <div style={styles.imgc}>
          <h2>General Knowledge Question Paper</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/gk-previous-year-question-paper-class-7.jpg"
            alt="PYQ"
            style={styles.img}
          />
          <button
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 6px 12px rgba(0,123,255,0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#007bff";
              e.target.style.boxShadow = "none";
            }}
          >
            BUY NOW
          </button>
        </div>
      </div>

      <div style={styles.content3}>
        <h1>Class 7 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p>
          Minds Marathon conducts the Annual Olympiad exam for class 7 to encourage students’ knowledge of the subject. It helps students to brush up on the topics that are taught in their school. These exams are the best tool for students who want to outshine in their academics. These exams are held at the national level where students from several different schools across India take part in. They help students familiarize themselves with varied topics to secure better scores in their academic exams.
        </p>
        <p>
          These Annual Exams are generally conducted in the school in a traditional pen-paper exam pattern. In offline exams, students are provided OMR answer sheets to be filled within the given time limit. The in-charge teacher will manage the whole offline exam process as an invigilator. As all questions are in MCQ format, students need to ensure they fill their OMR sheets properly.
        </p>
        <p>
          Similar to offline exams, the online exam also has MCQ questions displayed on the device along with four options. Students need to select the correct option by clicking on it.
        </p>
      </div>

      <div style={styles.content4}>
        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.color = "#fff";
            e.target.style.boxShadow = "0 6px 12px rgba(11,11,11,0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#007bff";
            e.target.style.boxShadow = "none";
          }}
        >
          REGISTER NOW
        </button>
      </div>

      <div style={styles.content5}>
        <h2>Monthly Olympiads</h2>
        <p>
          Monthly Olympiads are conducted every month for students to practice for the annual exams. They compile existing information and fix a base for the future. The subjects in the Monthly Olympiads are Science, Maths, English, General Knowledge, Drawing, and Essay. Students can participate in any subject of their preference. Students can also opt for the Combo Pack consisting of four subjects (Science, Maths, English, GK). Monthly Olympiads also contain practice tests to prepare students for the final exam.
        </p>
        <p>
          These online tests allow students to learn and understand the format of the final exam. Students are given questions based on the respective subjects keeping in mind the ongoing school syllabus. The test duration is 25 minutes, covering 30 questions. The monthly test is 25 marks for Science, Maths, English, and GK. All questions are in multiple-choice format. Students planning to appear in competitive exams can enroll from the below link.
        </p>
      </div>
    </div>
  );
};

export default Class7Page;
