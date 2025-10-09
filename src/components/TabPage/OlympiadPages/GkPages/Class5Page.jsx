import React from "react";

const Class5Page = () => {
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
      marginTop: "0px",
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
    imgcImg: {
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
      {/* Header Section */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>GK Olympiad Class 5</h1>
          <p style={styles.textBoxP}>
            Minds Marathon’s General Knowledge book for class 5 is designed by
            professionals. Utmost care and thought has been given in developing
            its content, keeping in mind the student’s calibre, requirement and
            interest. The book is divided into different exercises. Equal weight
            age of all topics is given in all sets respectively. General
            Knowledge Class 5 exam helps students to know more about the world.
            It gives them a break from regular school subjects. It is important
            for young minds to open up and know about happenings in and around
            themselves. Schools play a crucial role in convincing parents as
            well as students to appear for GK Class 5 Olympiad exam. It assists
            them in sharpening their brains. It is said that there is no age
            limit for learning general knowledge. The younger you are, the
            better it will be for your future. This exam prepares students for
            national as well as international competitions.
          </p>
        </div>
      </div>

      {/* Content 1 */}
      <div style={styles.content1}>
        <h1>Preparation Material for Class 5 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 5</h2>
        <ul style={styles.content1Ul}>
          <li>Chapter 1: Our Body & Health</li>
          <li>Chapter 2: Plants & Animals</li>
          <li>Chapter 3: India & The World</li>
          <li>Chapter 4: Science & Technology</li>
          <li>Chapter 5: Environment & Its Conservation</li>
          <li>Chapter 6: Language & Literature</li>
          <li>Chapter 7: Entertainment</li>
          <li>Chapter 8: Sports</li>
          <li>Chapter 9: Math Fun</li>
          <li>Chapter 10: Life Skills</li>
          <li>Chapter 11: Current Affairs</li>
          <li>Chapter 12: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 2 */}
      <div style={styles.content2}>
        <div style={styles.imgc}>
          <h2>General Knowledge Book</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%205.jpg"
            alt="WORKBOOK"
            style={styles.imgcImg}
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

        <div style={styles.imgc}>
          <h2>General Knowledge Question Paper</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/gk-previous-year-question-paper-class-5-ito.jpg"
            alt="PYQ"
            style={styles.imgcImg}
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

      {/* Content 3 */}
      <div style={styles.content3}>
        <h1>Class 5 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p>
          Annual Olympiad exams conducted by Minds Marathon is scheduled once a
          year. These exams have two rounds of examination. Students of class 1
          to class 10 can participate in this Olympiad. Minds Marathon conducts
          the exam in Online and Offline mode. Register and become a part of
          these exams. The time duration for General Knowledge International
          Olympiad (GKIO) is 45 minutes for online exam and 65 minutes for
          offline exam. Students need to solve MCQ based questions which they
          need to solve within a given time limit.
        </p>
      </div>

      {/* Register Button */}
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

      {/* Content 5 */}
      <div style={styles.content5}>
        <h2>Monthly Olympiads</h2>
        <p>
          Monthly Olympiad are conducted in every month that consists of
          subjects like English, Maths, Science, GK, Drawing and Essay. The
          duration for this exam is 25 minutes and has 30 questions for 30
          marks. Students can appear for this exam any time between 10:00 am and
          6:00 pm as per the scheduled exam dates. Drawing and Essay exams have
          60 minutes and 40 minutes respectively for completing the exam.
        </p>

        <p>
          The monthly olympiad exams of Science, Maths, English, and GK
          comprises the questions in multiple-choice format and are based on
          regular school syllabus. It helps students think before deciding the
          right answer. For the Drawing and Essay exams, students have to upload
          the drawn picture/written essay images within the given time.
        </p>
      </div>
    </div>
  );
};

export default Class5Page;
