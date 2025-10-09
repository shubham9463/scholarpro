import React from "react";

const Class10Page = () => {
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
    heading: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
    text: {
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
    contentText: {
      marginTop: 0,
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
    list: {
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
      padding: "20px",
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

  const handleHover = (e, hover) => {
    e.target.style.backgroundColor = hover ? "#007bff" : "transparent";
    e.target.style.color = hover ? "#fff" : "#007bff";
    e.target.style.boxShadow = hover
      ? "0 6px 12px rgba(0, 123, 255, 0.4)"
      : "none";
  };

  return (
    <div style={styles.body}>
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.heading}>GK Olympiad Class 10</h1>
          <p style={styles.text}>
            General Knowledge for Class 10 Olympiad exams for students holds a
            lot of importance, as grade 10 is considered as the turning point in
            a student’s life. SSC general awareness benefits students who plan
            to appear for national and international competitive exams. It
            prepares students to tackle various questions based on their
            surroundings, environment, media, language & literature, current
            affairs, science and technology, and many more topics. There are
            different exercises that consist of a wide array of topics. It
            assists in increasing awareness about the country and the world. It
            also gives them a break from monotonous studies. It helps them to
            indulge in something else; after all a little deviation from school
            syllabus is required in today’s age. Minds Marathon’s GK book allows
            students to gauge the difficulty level of questions asked in the
            competitive exams. The books provided are informative and content
            designed is at par with national standards.
          </p>
        </div>
      </div>

      <div style={styles.content1}>
        <h1>Preparation Material for Class 10 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 10</h2>
        <ul style={styles.list}>
          <li>Chapter 1: Plants & Animals</li>
          <li>Chapter 2: Our Environment</li>
          <li>Chapter 3: Science & Technology</li>
          <li>Chapter 4: India & The World</li>
          <li>Chapter 5: Social Studies</li>
          <li>Chapter 6: Language, Literature, Media</li>
          <li>Chapter 7: Sports</li>
          <li>Chapter 8: Quantitative Aptitude & Reasoning</li>
          <li>Chapter 9: Life Skills</li>
          <li>Chapter 10: Current Affairs</li>
          <li>Chapter 11: Logical Reasoning</li>
        </ul>
      </div>

      <div style={styles.content2}>
        <div style={styles.imgContainer}>
          <h2>General Knowledge Book</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%2010.jpg"
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

        <div style={styles.imgContainer}>
          <h2>General Knowledge Question Paper</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/gk-previous-year-question-paper-class-10-ito.jpg"
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

      <div style={styles.content3}>
        <h1>Class 10 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p style={styles.contentText}>
          Minds Marathon conducts Annual Olympiads for students of class 10.
          General Knowledge International Olympiad consists of questions that
          are in multiple-choice format. Students are given four options to
          choose from. These exams contribute to developing a platform to
          explore the skillsets and uplift the knowledge of students. Students
          can register for the desired subject by filling the Olympiad student
          registration form. These competitive exams contain a variety of
          interesting questions for a comprehensive evaluation of learning. The
          outline of this test is composed as per the school board syllabus and
          keeping in mind the learning strength of grade 10 students. Students
          get an opportunity to compete with other students at a national level.
        </p>
        <p style={styles.contentText}>
          Annual Olympiads can be taken through the school or individually.
          Students enrolling their names in the school will have the exam in
          online/offline mode (as per the school's decision). The students
          participating individually will have the exam in online mode. Both
          online and offline exams have time boundaries. Students need to
          complete the exam within the given time. These exams motivate students
          to compete at a national level and boost the confidence of the
          students. Students learn to manage their time and through practice
          make them accurate in their subject.
        </p>
      </div>

      <div style={styles.content4}>
        <button
          style={styles.button}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          REGISTER NOW
        </button>
      </div>

      <div style={styles.content5}>
        <h2>Monthly Olympiads</h2>
        <p style={styles.contentText}>
          Monthly Olympiads are online tests that are conducted at a National
          Level for class 1 to 10 students. There are subjects like Science,
          Maths, English, General Knowledge, Drawing, and Essay included in
          these tests. Students can take these exams from any device like
          computer, laptop, tablet or smartphone. Students appearing for these
          monthly Olympiads get practice test questions which are based on the
          regular school board syllabus. 25 minutes are given to the students
          who have chosen Science, Maths, English, and GK subjects. For students
          who have selected Drawing or Essay, they are given 60 minutes and 40
          minutes respectively for the subjects. These tests can be taken any
          time between 10:00 am and 06:00 pm. These tests are the best pick to
          keep the students engaged.
        </p>
      </div>
    </div>
  );
};

export default Class10Page;
