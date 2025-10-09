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
    ul: {
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
      transition: "all 0.3s ease",
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

  const handleHover = (e, isHover) => {
    if (isHover) {
      e.target.style.backgroundColor = "#007bff";
      e.target.style.color = "#fff";
      e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)";
    } else {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#007bff";
      e.target.style.boxShadow = "none";
    }
  };

  return (
    <div style={styles.body}>
      {/* Header Section */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>GK Olympiad Class 4</h1>
          <p style={styles.textBoxP}>
            General Knowledge Class 4 Olympiad exams uplift the morale of
            students. Grade 4 students are taught everything about the
            environment, its conservation, life skills, current affairs and lot
            more. Students of class 4 are at a level where their curiosity to
            know and understand things is at its peak. This is the best stage
            where they can be encouraged participating in GK Class 4 Olympiad
            exams. It is important that parents must realize the value of such
            exams. Minds Marathon’s GK Olympiad book is prepared in such a way
            that it would boost up their knowledge about the nation as well as
            the world, latest developments in the field of science and
            technology, sports and other events, etc. General Knowledge book for
            Class 4 are designed by professionals who understand industry
            standards. The content is well-planned and structured in a way that
            makes it easy as well as interesting for students to keep reading
            further. It bridges the gap between what they know and what they
            should be knowing at their age.
          </p>
        </div>
      </div>

      {/* Topics Section */}
      <div style={styles.content1}>
        <h1>Preparation Material for Class 4 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 4</h2>
        <ul style={styles.ul}>
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

      {/* Books Section */}
      <div style={styles.content2}>
        <div style={styles.imgc}>
          <h2>General Knowledge Book</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%204.jpg"
            alt="WORKBOOK"
            style={styles.img}
          />
          <button
            style={styles.button}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            BUY NOW
          </button>
        </div>

        <div style={styles.imgc}>
          <h2>General Knowledge Question Paper</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GK%20Previous%20year%20question%20paper%20Round-1%20Class-04.jpg"
            alt="PYQ"
            style={styles.img}
          />
          <button
            style={styles.button}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            BUY NOW
          </button>
        </div>
      </div>

      {/* Annual Olympiad Section */}
      <div style={styles.content3}>
        <h1>Class 4 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p style={styles.content1P}>
          Minds Marathon conducts Annual Olympiad Exam once a year which has two
          rounds. The subjects of the annual Olympiads are Science, Maths,
          English, General Knowledge, Computer, Drawing, Essay and Social
          Studies. These exams have 50 questions for all subjects Drawing and
          Essay. For Drawing and Essay, students will be given topics to
          draw/write on. The Annual Olympiad exams have time limitations. The
          time limit for Science, Maths, English, GK, Computer, and Social
          studies is 45 minutes (online exam) and 65 minutes (offline exam), but
          the Drawing exam is for 60 minutes and the Essay exam is for 40
          minutes.
        </p>

        <p style={styles.content1P}>
          Class 4 students get a chance to go through a variety of questions. It
          allows them to know more about the surroundings and the system of the
          world. General Knowledge is a vast subject consisting of a variety of
          various topics covered in it. The questions in this exam are framed
          keeping in mind the ongoing syllabus followed by the school. The
          questions are from the related chapters taught in class.
        </p>

        <p style={styles.content1P}>
          Students can participate through their respective schools for General
          Knowledge International Olympiad. The school will decide the mode of
          exam. As the Annual Olympiad can be taken in both online and offline
          mode, the school selects the mode of exam. Students registering
          individually will have the exam in an online mode. Online exams can be
          taken from any device such as a computer, laptop, tablet, and
          computer. Offline exams are conducted in the respective schools of the
          students.
        </p>
      </div>

      {/* Register Button */}
      <div style={styles.content4}>
        <button
          style={styles.button}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          REGISTER NOW
        </button>
      </div>

      {/* Monthly Olympiad Section */}
      <div style={styles.content5}>
        <h2>Monthly Olympiads</h2>
        <p style={styles.content1P}>
          The monthly Olympiads are online exams conducted each month by Minds
          Marathon. This monthly Olympiad consists of subjects like English,
          Maths, Science, GK, Drawing and Essay. This exam is for 25 minutes
          consisting of 30 questions for 30 marks which can be taken from mobile
          or laptop. Students can take this exam any time between 10:00 am and
          6:00 pm as per the scheduled dates. The duration for the Drawing test
          is for 60 minutes whereas the Essay test is for 40 minutes.
        </p>

        <p style={styles.content1P}>
          The monthly olympiad for Science, Maths, English, and GK comprises the
          questions in multiple-choice format. It makes students think over the
          question before deciding the right one. For the Drawing and Essay
          exams, students have to upload live images of their drawings or
          written content for evaluation.
        </p>
      </div>
    </div>
  );
};

export default Class4Page;
