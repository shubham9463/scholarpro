import React from "react";

const Class3Page = () => {
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

  return (
    <div style={styles.body}>
      {/* Header Section */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>GK Olympiad Class 3</h1>
          <p style={styles.textBoxP}>
            Students of standard 3 are expected to be well-versed with topics
            such as environment, India and the world, language & literature,
            entertainment & sports, etc. General Knowledge Class 3 Olympiad
            exams build child’s foundation, improve memory skills, and make them
            ready for international competitions. Students are taught various
            life skills that come very handy when they grow up. The topics
            taught under science and technology are advanced, giving them
            thorough knowledge about developments in and around the world. They
            are enlightened about the who’s who of various sports, medals,
            championships and other events of the world. Minds Marathon ensures
            that the syllabus for GK Class 3 also include international major
            events. This gives students competency at national as well as
            international level. The content is well planned, which is easy to
            comprehend.
          </p>
        </div>
      </div>

      {/* Topics Section */}
      <div style={styles.content1}>
        <h1>Preparation Material for Class 3 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 3</h2>
        <ul style={styles.ul}>
          <li>Chapter 1: Me & My Surroundings</li>
          <li>Chapter 2: Plants & Animals</li>
          <li>Chapter 3: India & The World</li>
          <li>Chapter 4: Science & Technology</li>
          <li>Chapter 5: Language & Literature</li>
          <li>Chapter 6: Entertainment</li>
          <li>Chapter 7: Sports</li>
          <li>Chapter 8: Transport & Communication</li>
          <li>Chapter 9: Math Fun</li>
          <li>Chapter 10: Life Skills</li>
          <li>Chapter 11: Current Affairs</li>
          <li>Chapter 12: Logical Reasoning</li>
        </ul>
      </div>

      {/* Images Section */}
      <div style={styles.content2}>
        <div style={styles.imgc}>
          <h2>General Knowledge Book</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%203.jpg"
            alt="WORKBOOK"
            style={styles.img}
          />
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
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
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/gk-previous-year-question-paper-class-3-ito.jpg"
            alt="PYQ"
            style={styles.img}
          />
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#007bff";
              e.target.style.boxShadow = "none";
            }}
          >
            BUY NOW
          </button>
        </div>
      </div>

      {/* Annual Olympiad */}
      <div style={styles.content3}>
        <h1>Class 3 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p style={styles.content1P}>
          The annual Olympiads are conducted by Minds Marathon in December and
          February. The Annual Olympiad can be taken in Online or Offline mode.
          Students are given 45 minutes for the online exam and 65 minutes for
          the offline exam. Students enrolling their name through the school for
          the offline exam will have their exam within the school premises. The
          online exam can be taken using any device such as smartphone, tablet,
          computer, or laptop. Minds Marathon is a friendly platform that allows
          students to excel in academics. Olympiad Exams support mental growth.
          Students tend to study new topics, new words and thus build up their
          glossary. Children grow sharper and more observant of what’s happening
          around them.
        </p>

        <p style={styles.content1P}>
          Register for online Olympiads today at Minds Marathon. Online
          Olympiad registrations 2020-21 are open for all aspirants.
        </p>

        <div style={styles.content4}>
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 6px 12px rgba(11, 11, 11, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#007bff";
              e.target.style.boxShadow = "none";
            }}
          >
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* Monthly Olympiad */}
      <div style={styles.content5}>
        <h2>Monthly Olympiads</h2>
        <p style={styles.content1P}>
          Class 3 students can take the monthly Olympiad for General Knowledge.
          This monthly olympiad is an online exam that can be taken from any
          mobile or laptop. The questions in this test are based on the topics
          that are covered in the grade 3 syllabus. The monthly tests are held
          every month on different topics. Students get engaged with this test.
        </p>

        <p style={styles.content1P}>
          Registration for the monthly Olympiad can be done from the website.
          The questions in the test are based on the school syllabus. The tests
          for all the subjects are taken online. General Knowledge is one
          subject that allows skills on general awareness. To register and
          participate in the online Olympiad exam conducted by Minds Marathon.
        </p>
      </div>
    </div>
  );
};

export default Class3Page;
