import React from "react";

const GKOlympiad = () => {
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      lineHeight: 1.6,
      backgroundColor: "white",
    },
    textBox: {
      backgroundColor: "#f9d84a",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    h1: {
      fontSize: "35px",
      fontWeight: "bold",
      color: "#000000",
      marginRight: "15px",
      marginLeft: "7rem",
    },
    paragraph: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#1c1b1b",
      marginLeft: "7rem",
      marginRight: "4rem",
      textAlign: "justify",
    },
    img: {
      width: "350px",
      height: "auto",
      marginRight: "8rem",
    },
    content1: {
      padding: "20px 60px",
      background: "#fff",
      color: "#000000",
      marginRight: "10rem",
      marginLeft: "7rem",
    },
    h2: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      marginBottom: "15px",
      paddingLeft: "20px",
      position: "relative",
      fontSize: "15px",
    },
    liBefore: {
      content: "'-'",
      position: "absolute",
      left: 0,
      fontWeight: "bold",
    },
    content2: {
      padding: "20px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      marginTop: "-10px",
    },
    content3: {
      padding: "20px 60px",
      background: "#ffffff",
      color: "#000000",
      marginRight: "8rem",
      marginLeft: "7rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem",
      borderRadius: "5px",
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
    content4: {
      backgroundColor: "#f9d84a",
      padding: "20px 60px",
      alignItems: "center",
    },
    h2Alt: {
      fontWeight: "bold",
      color: "#000000",
      marginRight: "15px",
      marginLeft: "7rem",
    },
    pAlt: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#000000",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
    },
    content5: {
      padding: "20px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
    },
    content6: {
      maxWidth: "280px",
      height: "auto",
      marginLeft: "14rem",
      marginRight: "10rem",
    },
    imgSmall: {
      maxWidth: "280px",
      height: "auto",
      display: "block",
      margin: "10px auto",
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    btnSmall: {
      marginLeft: "5rem",
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    content7: {
      padding: "20px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      marginTop: "-10px",
    },
  };

  return (
    <div style={styles.body}>
      {/* Top Section */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.h1}>General Knowledge GK Olympiad</h1>
          <p style={styles.paragraph}>
            Students who stay updated with current affairs and the present
            happenings all of the world, go a long way nurturing their careers.
            Minds Marathon offers General Knowledge International Olympiad
            (GKIO) exam that tests student’s General Knowledge in various
            aspects such as environment, science & technology, geography,
            history, plants & animals, entertainment, life skills, language &
            literature, transport, sports, civics, politics and so on. Thus, the
            exam is not limited to current affairs, but focuses on overall
            development of children. It is one of the unique exams that make
            students learn something out of the box. It was formarly known as
            National Knowledge Minds Marathon The topics covered under GKIO are
            not limited to text book knowledge. It allows students to open their
            horizon and know much more than what is taught in schools. General
            Knowledge exams play a crucial role in shaping students’ future.
          </p>
        </div>
        <img
          style={styles.img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/General-Knowledge-International-Olympiad-Logo.jpg"
          alt="General Knowledge GK Olympiad Logo"
        />
      </div>

      {/* Participation Section */}
      <div style={styles.content1}>
        <h2 style={styles.h2}>How To Participate In General Knowledge</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            In order to participate in GK Olympiad, students can contact their
            class teacher or can participate individually.
          </li>
          <li style={styles.li}>
            Schools can register a child’s name, contact number, class, and
            subject online with Minds Marathon and complete the registration
            process.
          </li>
          <li style={styles.li}>
            Students registering individually can register by filling the
            student registration form. This exam is open to students from class
            1 to class 10.
          </li>
          <li style={styles.li}>
            The curriculum is mainly based on State Board, International Board,
            CBSE and ICSE syllabus. Students studying in State Boards can refer
            to the syllabus and prepare accordingly. Parents are also informed
            about this exam, who usually show interest in GKIO, as this a unique
            exam in itself.
          </li>
          <li style={styles.li}>
            Minds Marathon rewards deserving students with prizes and awards
            topping in the GK Olympiad exam.
          </li>
        </ul>
      </div>

      {/* Syllabus */}
      <div style={styles.content2}>
        <h2 style={styles.h2}>Syllabus</h2>
      </div>

      {/* Buttons */}
      <div style={styles.content3}>
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i} style={styles.button}>
            CLASS {i + 1}
          </button>
        ))}
      </div>

      {/* Preparation */}
      <div style={styles.content4}>
        <h2 style={styles.h2Alt}>
          How to Prepare for General Knowledge Olympiad:
        </h2>
        <p style={styles.pAlt}>
          General Knowledge subject is a vast subject that covers a number of
          topics. To make the student prepared for General Knowledge Olympiad,
          one can refer to the workbooks and previous year question papers.
          Through practice on the subject with the help of proper study material
          can help the child to boost up their confidence resulting in better
          academic scores.
        </p>
      </div>

      {/* Workbook */}
      <div style={styles.content5}>
        <h2 style={styles.h2}>Workbook</h2>
      </div>
      <div style={styles.content6}>
        <img
          style={styles.imgSmall}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ito-gkio-general-knowledge-olympiad-workbook.jpg"
          alt="Books"
        />
        <button style={styles.btnSmall}>Buy Books</button>
      </div>

      {/* Annual & Monthly Olympiad */}
      <div style={styles.content7}>
        <h2 style={styles.h2}>General Knowledge Annual Olympiad and Monthly Olympiad:</h2>
        <p>
          Class 1 to class 10 students can participate in Annual Olympiad and
          Monthly Olympiad conducted by Minds Marathon. Students interested in
          General knowledge subject can enroll their name in General Knowledge
          International Olympiad. The student can opt for Annual or Monthly
          Olympiad or can register for both.
        </p>
        <h2 style={styles.h2}>Annual Olympiad</h2>
        <p>
          Minds Marathon conducts Annual Olympiad Exams every year from class 1
          to class 10 students. With all the confidence and excitement lakhs of
          students participate in this Olympiad Exams. These exams have two
          rounds. Round one is December and round two is in February. The number
          of questions in this exam is 35 questions for class 1 to class 4
          students and 50 questions for class 5 to class 10 students. The Annual
          Olympiad is conducted in Online and Offline mode. Students registering
          individually can have their exams in Online mode. Students can
          participate in General Knowledge Olympiad. Subjects like Maths,
          Science, English, Drawing, Essay, Computer and Social Studies are
          available for Annual Olympiad. Students participating through the
          school can have these exams in Online/Offline mode (whichever is
          decided by the school management).
        </p>
        <p>
          Students competing individually or through the school for online exams
          can take this exam from any device like Laptop, Computer, Mobile, or
          Tablet. 45 minutes is the time duration given for the online exams of
          Science, Maths, English, GK, Computer, and Social Studies, but, the
          Drawing exam is for 60 minutes and the Essay exam is for 40 minutes.
          Students who have enrolled for the drawing and the essay exam need to
          upload images within the given time.
        </p>
        <p>
          Offline Exams are taken in the respective school of the student.
          Offline exams are regular pen-paper exams. OMR answer sheets and
          question papers are given to the students on the scheduled date of
          examination. 65 minutes are allotted for the students to complete the
          exam. Students need to fill the OMR answer sheet by darkening the
          right option.
        </p>
        <h2 style={styles.h2}>Monthly Olympiads</h2>
        <p>
          Minds Marathon introduced General Knowledge Monthly Olympiad for the
          students of class 1 to class 10 to provide maximum practice for the
          upcoming competitive exams. Students can take these exams every month
          from their home. The Monthly Olympiad also includes subjects such as
          Maths, Science, English, Drawing, and Essay. These exams can be taken
          from any device such as smartphone, tablet, laptop, or computer. There
          are 30 questions for General Knowledge Olympiad (GKIO) are in MCQ
          format. Students need to complete the questions in 25 minutes. It
          includes features such as audio recording, video recording, image
          capture, and eyeball recognition to ensure complete transparency in
          the exam.
        </p>
      </div>
    </div>
  );
};

export default GKOlympiad;
