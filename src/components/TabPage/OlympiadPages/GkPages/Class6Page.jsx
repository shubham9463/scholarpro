import React from "react";

const Class6Page = () => {
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
    h1TextBox: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
    pTextBox: {
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
    pContent1: {
      marginTop: "0px",
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
    ulContent1: {
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
    imgContainer: {
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
      transition: "all 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0 6px 12px rgba(0, 123, 255, 0.4)",
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
          <h1 style={styles.h1TextBox}>GK Olympiad Class 6</h1>
          <p style={styles.pTextBox}>
            General Knowledge Class 6 Olympiad exams for students include topics
            from all facets of life. The content is framed keeping in mind
            day-to-day requirements, present day developments and current
            happenings in and around the world. It gives students a fair idea
            about their surroundings. There are different exercises which cover
            all the topics. Each exercise has questions and answers with
            explanation to correct answers. Students are able to comprehend
            questions very well as special importance is given to all topics
            equally. Students can improve their knowledge answering these
            questions. Apart from traditional subjects such as Mathematics,
            Science, Social Studies and Languages, GK Class 6 Olympiad exams for
            students by Minds Marathon play a crucial role in shaping child’s
            future. They are able to face challenges in a better manner. It
            makes them confident to answer array of different questions.
          </p>
        </div>
      </div>

      <div style={styles.content1}>
        <h1>Preparation Material for Class 6 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 6</h2>
        <ul style={styles.ulContent1}>
          <li>Chapter 1: Our Body & Health</li>
          <li>Chapter 2: Plants & Animals</li>
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
        <div style={styles.imgContainer}>
          <h2>General Knowledge Book</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%206_1.jpg"
            alt="WORKBOOK"
            style={styles.img}
          />
          <button
            style={styles.button}
            onMouseOver={(e) =>
              Object.assign(e.target.style, styles.buttonHover)
            }
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
          >
            BUY NOW
          </button>
        </div>

        <div style={styles.imgContainer}>
          <h2>General Knowledge Question Paper</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/gk-previous-year-question-paper-class-6-ito.jpg"
            alt="PYQ"
            style={styles.img}
          />
          <button
            style={styles.button}
            onMouseOver={(e) =>
              Object.assign(e.target.style, styles.buttonHover)
            }
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
          >
            BUY NOW
          </button>
        </div>
      </div>

      <div style={styles.content3}>
        <h1>Class 6 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p>
          Annual Olympiad Exams for class 6 conducted by Minds Marathon allows
          students to come together and display their skills on national and
          international platforms. Annual Olympiads were generally conducted in
          offline mode in the respective schools of the students. But now
          students can take these exams in an Online mode also. The offline exam
          is taken in the respective schools of the students in a traditional
          exam system. These offline exams are supervised by the in-charge
          teachers of the respective subjects. Students need to fill in the OMR
          answer sheets to mention the right answers to the questions. All the
          questions are in MCQ format.
        </p>
        <p>
          Similarly, students enrolling individually will have their exams in an
          online mode, whereas students participating through the school will
          have their exams as per the choice of the school management.
          Individually participating students can take this exam from their
          respective homes on the scheduled dates. Online Annual Olympiad can be
          taken from any device such as Smartphone, Tablet, Laptop, or Computer.
          There is a limited time boundary for offline and online exams.
          Students need to make thorough practice to excel in these competitive
          exams.
        </p>
      </div>

      <div style={styles.content4}>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            Object.assign(e.target.style, styles.buttonHover)
          }
          onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
        >
          REGISTER NOW
        </button>
      </div>

      <div style={styles.content5}>
        <h2>Monthly Olympiads</h2>
        <p>
          Monthly Olympiads are different examinations carried by Minds
          Marathon. These tests are conducted every month. These tests can be
          attended from any smartphone or tablet from home. This test offers
          practice tests and unlimited practice on subject-related questions. It
          can be also taken as a practice exam before appearing for the Annual
          Olympiad Exam. Its subjects are Maths, Science, English, GK, Drawing,
          and Essay.
        </p>
        <p>
          Equal importance to common subjects such as Maths, English, and
          Science, and other subjects such as Drawing and Essay. Students can
          pick the subjects as per their choice. Parents of the participating
          students are requested to play the function of invigilators during the
          course of the exam. The monthly Olympiads offer numerous benefits to
          its students. It keeps kids engaged most productively. Students can
          answer the monthly Olympiads any time between 10:00 am and 6:00 pm on
          scheduled exam dates. These are 25 minutes exams having questions
          framed in the multiple-choice question format with four options.
        </p>
      </div>
    </div>
  );
};

export default Class6Page;
