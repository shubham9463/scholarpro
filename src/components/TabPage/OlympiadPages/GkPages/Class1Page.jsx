import React from "react";

const Class1Page = () => {
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
      transition:
        "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
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
      padding: "20px 0",
    },
    content5: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content6: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
  };

  // Reusable hover style handler
  const handleHover = (e, hover) => {
    e.target.style.backgroundColor = hover ? "#007bff" : "transparent";
    e.target.style.color = hover ? "#fff" : "#007bff";
    e.target.style.boxShadow = hover
      ? "0 6px 12px rgba(0, 123, 255, 0.4)"
      : "none";
  };

  return (
    <div style={styles.body}>
      {/* Section 1 */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>GK Olympiad Class 1</h1>
          <p style={styles.textBoxP}>
            General Knowledge Class 1 Olympiad exams aim at bringing the best
            talent forward. It focuses on overall development of a child. In
            class 1, students are expected to know a little about their country
            and the world. Many schools have GK as an additional subject.
            Teachers conduct small class tests to encourage participation and
            help young minds know about their surroundings. The topics chosen
            for the same are based on environment, science and technology,
            sports, current affairs and so on. Minds Marathon has designed GK
            Class 1 syllabus knowing the topics on which emphasis should be laid
            on for class 1 children. Teachers encourage more and more students
            to participate in this exam to make children ready to face
            international competition at a young age. This exam tests
            proficiency and knowledge of students on different subjects taught
            in school. It sets a benchmark allowing students to explore more
            about the world they live in.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div style={styles.content1}>
        <h1>Preparation Material for Class 1 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 1</h2>
        <p style={styles.content1P}>
          If you carefully look at the topics for the GK exam for class 1
          students, you will realize that these are generic topics about which
          students must have a fair idea. It becomes very appealing for children
          of grade 1 when they explore these topics. Minds Marathon brings to
          you an interesting compilation of questions from general knowledge for
          class 1. It covers a wide range of areas such as birds, plants,
          animals, means of transport, the human body, and so on. Students who
          solve these questions not only increase their knowledge in different
          topics but also build up vocabulary. When students are exposed to the
          GK exam, they learn to read instructions, interpret those perfectly
          and even observe things around them. This exam tests their knowledge
          on a variety of subjects so that students are familiar with most of
          the happenings.
        </p>
        <p style={styles.content1P}>
          Class 1 is an important stage in all children's lives. They have just
          stepped into school and are unaware of their surroundings. Most of
          them have minimal knowledge about the same. Thus, parents who enroll
          their children in class 1 GK Olympiad help to build basic awareness,
          enhance knowledge in current awareness. Online Olympiad registrations
          are open and can be done through the website of Minds Marathon.
          Register today to benefit from these tests. General Knowledge is one
          of the most important subjects of class 1. Register for online
          Olympiads and reap its benefits.
        </p>
        <ul style={styles.ul}>
          <li>Chapter 1: Me & My Surroundings</li>
          <li>Chapter 2: Plants & Animals</li>
          <li>Chapter 3: India & The World</li>
          <li>Chapter 4: Science & Technology</li>
          <li>Chapter 5: Language & Literature</li>
          <li>Chapter 6: Entertainment</li>
          <li>Chapter 7: Sports</li>
          <li>Chapter 8: Math Fun</li>
          <li>Chapter 9: Life Skills</li>
          <li>Chapter 10: Current Affairs</li>
          <li>Chapter 11: Logical Reasoning</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div style={styles.content2}>
        <div style={styles.imgContainer}>
          <h2>General Knowledge Book</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%201.jpg"
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
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/gk-previous-year-question-paper-class-1.jpg"
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

      {/* Section 4 */}
      <div style={styles.content3}>
        <h1>Class 1 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p>
          The annual Olympiads are conducted in December and February. The GK
          annual Olympiad is conducted for a limited duration of minutes, in
          which students are asked different multiple-choice questions. It is an
          online exam that can be taken from home using any smartphone or
          tablet. Students have to carefully understand each question and solve
          it accordingly. Students participating through the school can appear
          for this exam in the school premises. Students who participate in the
          GK Olympiad develop a lot of confidence in life. Unfortunately, many
          people may not give GK a lot of importance for the only reason that
          the marks scored here are not included in academic scores; but this
          exam is crucial for young learners.
        </p>
        <p>
          The formative years are the most important years in developing
          children’s association with the world. Thus, giving inputs from
          general knowledge goes a long way in preparing each and every child to
          live comfortably in society. GK exam gives a basic understanding of
          the world in which they live. The questions are framed in a very
          interesting way that makes them think. It builds up their analytical
          and reasoning skills from a young age. Inputs from the GK exam feed
          the natural curiosity in children. Thus, apart from being essential,
          the GK online exam is interesting for all children.
        </p>
        <p>
          Parents and teachers can register for the online Olympiad through the
          website of Minds Marathon. School registrations can be done by subject
          teachers or class teachers by clicking the link School Registration.
          Individual registrations can be done by clicking the link Register
          Student Annual Olympiad. The online registrations are open for all
          classes from class 1 to class 10. Register for the online Olympiad
          exam today!
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

      {/* Section 5 */}
      <div style={styles.content5}>
        <h2>Monthly Olympiads</h2>
        <p>
          The monthly Olympiads for students of class 1 are conducted every
          month. These are practice exams that are held online. The online test
          in GK consists of 30 multiple choice questions, which students have to
          solve within a time limit of 25 minutes. These are online tests that
          require students to give these exams sitting at home using any tablet
          or smartphone. There are several benefits for students who take these
          exams. The questions asked in these online tests opens up a whole new
          world that helps them in their growth. Students automatically learn a
          lot many words, thus increase their vocabulary. It builds up curiosity
          in all participants. Students become free to ask questions, and
          express their opinions and thoughts in front of others. It is one of
          the best ways to keep young kids informed about their surroundings.
        </p>
        <p>
          At Minds Marathon, the team ensures that all questions are created
          keeping in mind their intellect and understanding levels. These tests
          are the best way to make children fall in love with rich content. They
          are made to explore different topics on their own. When students read,
          comprehend and observe things around them, they become conscious about
          their surroundings. It inculcates self-reading capabilities. To
          participate in the GK monthly Olympiad register online and be a part
          of these tests.
        </p>
        <p>
          Students can also opt for combo packs that include other subjects as
          well. The combo packs consist of subjects such as Maths, English,
          Science, and GK. The combo packs give students added advantage to
          participate in 4 online Olympiad tests sitting at the comforts of the
          home. These online tests have proven to be beneficial to one and all.
        </p>
      </div>

      {/* Section 6 */}
      <div style={styles.content6}>
        <h2>Class 1 General Knowledge Olympiad FAQs</h2>
        <p>
          Who Is Eligible For Olympiad? All those students studying from class 1
          to class 10 are eligible to participate in the Olympiad exams
          conducted by Minds Marathon. There are no pre-requisites or any other
          eligibility criteria for these exams. Students can choose their
          subjects as per individual interest. It boosts students’ knowledge in
          the subject they participate in. Some of the popular exams are
          International Maths Olympiad (IMO), International Science Olympiad
          (ISO), English International Olympiad (EIO), General Knowledge
          International Olympiad (GKIO), International Computer Olympiad (ICO),
          International Drawing Olympiad (IDO), National Essay Olympiad (NESO),
          National Social Studies Olympiad (NSSO). These exams give them the
          correct guidance for respective subjects.
        </p>
      </div>
    </div>
  );
};

export default Class1Page;
