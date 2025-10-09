import React from "react";

const Class8Page = () => {
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
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
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
          <h1 style={styles.textBoxH1}>GK Olympiad Class 8</h1>
          <p style={styles.textBoxP}>
            Students of 8th grade must be exposed to general knowledge questions. This is the right time to train them for national and international competitions. As they enter high school, they are supposed to face different challenges. Minds Marathon’s General Knowledge Class 8 exam questions are prepared by professionals keeping in mind the competency of Olympiad exams at national as well as international level. The exam includes logical reasoning section which is one of the most important sections as it identifies the aptitude of the student. It helps parents to know student’s interest, so that it can be carried forward in the right way. Minds Marathon’s General Knowledge books for class 8 prepare students for SSC general awareness by allowing them to solve as many questions as possible covering all the topics. Students of 8th standard appearing for General Knowledge Olympiad exams remain in the limelight because of the kind of knowledge they gain by answering difficult questions.
          </p>
        </div>
      </div>

      <div style={styles.content1}>
        <h1>Preparation Material for Class 8 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 8</h2>
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
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%208.jpg"
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
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/gk-previous-year-question-paper-class-8-ito.jpg"
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
        <h1>Class 8 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p>
          Annual Olympiads are conducted both online and offline by Minds Marathon. These exams are held every year with two rounds: December and February. The topics in these exams are very general and help students become more knowledgeable of their surroundings. The GK annual Olympiad is for a limited duration, during which students are asked multiple-choice questions. These exams are ideal for students who want to excel in their academics.
        </p>
        <p>
          Annual Olympiads are similar to the final examinations of any school. They are conducted in respective schools for offline mode, while online exams can be taken from home. Students registering individually take the exam online. Both offline and online exams have MCQ questions, with 35 questions for class 1-4 and 50 questions for class 5-10. Students must complete exams within the time limit. High scorers are awarded scholarships and prizes.
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
          Monthly Olympiad exams are helpful and reliable for exam preparation. Minds Marathon experts design questions according to the updated syllabus. These tests have MCQs based on the ongoing school syllabus. Students are given 25 minutes to answer 30 questions. Drawing and Essay exams have 60 and 40 minutes respectively for completion. These online proctored tests maintain transparency with features like video/audio recording, screen capturing, and more.
        </p>
        <p>
          Participating in Monthly Olympiads helps students experience a competitive atmosphere while improving knowledge and skills. Parents can enroll students in these online tests for holistic growth and practice for the annual Olympiad.
        </p>
      </div>
    </div>
  );
};

export default Class8Page;
