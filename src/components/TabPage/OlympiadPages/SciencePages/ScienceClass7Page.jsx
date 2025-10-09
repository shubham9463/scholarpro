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
      marginTop: 0,
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
      marginTop: 0,
    },
    content2Ul: {
      fontSize: "18px",
      color: "#333",
      marginTop: "15px",
    },
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
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
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
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    content5: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content5P: {
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
    content6: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content6P: {
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
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
    content8: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content8P: {
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#007bff";
    e.target.style.color = "#fff";
    e.target.style.boxShadow = "0 6px 12px rgba(11, 11, 11, 0.4)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#007bff";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={styles.body}>
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>
            INTERNATIONAL SCIENCE OLYMPIAD <br /> CLASS 7
          </h1>
          <p style={styles.textBoxP}>
            International Science Olympiad for class 7 (ISO) exams by Minds
            Marathon is an Olympiad exam aimed to familiarize students with
            international level competitions. This exam is for students of
            standard 7 who want to excel in their school exams. Olympiad books
            for Class 7 are designed by experts in the field of science. The
            books contain chapter-wise multiple choice questions with answers
            and explanations to the questions. This helps students to understand
            the concept in a better way. It also contains logical reasoning
            sections to help the students boost their reasoning skills. The
            syllabus for International Science Olympiad class 7 exam is based on
            existing school syllabus. Teachers often recommend students to
            practice as many questions as possible from Olympiad books so that
            their existing knowledge on topics is enhanced. Students are
            indirectly exposed to different questions that helps them in their
            school exams.
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
          PREPARATION MATERIAL FOR SCIENCE OLYMPIAD CLASS 7
        </h2>
        <p style={styles.content1P}>
          Previous year question papers are essential resources along with
          workbooks that have been put out for students to help them for Class 7
          Science Olympiad preparation. These papers provide firsthand exposure
          to the format, types of questions, and level of difficulty expected in
          the actual Olympiad. By solving previous year question papers,
          students become familiar with the exam pattern and gain insight into
          the areas emphasized in the Olympiad. Additionally, these along with
          workbooks help students develop effective time management strategies,
          as they get accustomed to the time constraints of the exam. Analyzing
          their performance through the use of these resources allows students
          to identify their strengths and weaknesses, enabling targeted revision
          and focused preparation.
        </p>
      </div>

      <div style={styles.content2}>
        <h2 style={styles.content2H2}>SYLLABUS FOR OLYMPIAD CLASS 7</h2>
        <p style={styles.content2P}>
          Preparing for the class 7 Science Olympiad becomes very easy when
          students have a good understanding of the syllabus. All Olympiad exams
          follow the school curriculum. It helps students to create strong
          foundation for the years to come. Minds Marathon is one of the best
          platforms to prepare not only for Olympiad exams, but also for other
          competitions. Class 7 is a crucial point in the lives of all children.
          It is now when their minds are stable to take informed decisions.
          Having said so many students still find it tough to arrive at career
          choices. To solve the confusion, parents can help them by permitting
          them to participate in Olympiads. It allows them to know their
          strengths and weaknesses. It is one of the best exams that tests
          aptitude. When students prepare for Olympiad exams, they indirectly
          revise the entire school syllabus, and thus gain more marks in all
          school tests. This exam helps them to build a scientific mindset,
          right from an early age. Parents can compare the syllabus provided by
          Minds Marathon with the school curriculum. It is advised not to miss
          out any chapter or topic. Teachers recommend to cover the entire
          portion in the given time. It is a good practice to start early
          preparations, and maintain a time table to prepare for Olympiads.
          These exams provide a good command over basics. Solve sufficient
          number of questions from the International Science Olympiad (ISO), to
          boost self-confidence. Check out chapter-wise syllabus that would be
          covered for students of class 7.
        </p>

        <ul style={styles.content2Ul}>
          <li>Chapter 1: Physical Quantities Of Measurement</li>
          <li>Chapter 2: Heat</li>
          <li>Chapter 3: Light Propagation</li>
          <li>Chapter 4: Electricity</li>
          <li>Chapter 5: Sound And Its Propagation</li>
          <li>Chapter 6: Organization Of Living Things</li>
          <li>Chapter 7: Reproduction In Living Things</li>
          <li>Chapter 8: Control And Co-Ordination</li>
          <li>Chapter 9: Circulation</li>
          <li>Chapter 10: Component Of Food</li>
          <li>Chapter 11: Tissue: Plant And Animal</li>
          <li>Chapter 12: Natural Resources And Calamities</li>
          <li>Chapter 13: Waste Water Management</li>
          <li>Chapter 14: Classification Of Substances</li>
          <li>Chapter 15: Acids, Bases And Salts</li>
          <li>Chapter 16: Atomic Structure</li>
          <li>Chapter 17: Metal And Non Metals</li>
        </ul>
      </div>

      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-workbook-class-7.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 7 SCIENCE OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            The Olympiad Workbooks offered by Minds Marathon are tailored to
            meet the requirements of the International Science Olympiad for
            Class 7 and are in line with the competition's standards as well as
            the requirements of the competition's syllabus. These books provide
            proper coverage of the material, as well as practice exercises
            formatted in a way that is quite helpful to students as they get
            ready to compete while maintaining a organized, and original
            approach to learning. The goal of providing these resources is to
            help students develop their innate scientific curiosity, aptitude,
            and self-assurance so that they can compete successfully on a global
            stage.
          </p>
        </div>
      </div>

      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>
            CLASS 7 SCIENCE OLYMPIAD PREVIOUS YEAR QUESTION PAPER
          </h2>
          <p style={styles.content4P}>
            Science Olympiad question papers from previous years can help
            students get used to the format and vocabulary of the competition.
            This familiarity aids in their ability to understand the questions
            posed and respond appropriately. Also, by reviewing questions from
            previous years, students are exposed to a wide range of topics and
            ideas, which can only serve to broaden their scientific horizons. It
            helps them think more strategically about the topic at hand and
            inspires them to explore a wide range of scientific subfields. To do
            well in the Science Olympiad for Class 7, one can greatly benefit
            from reviewing questions from previous years' competitions.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-previous-year-question-paper-class-7-ito.webp"
          alt="PYQ"
        />
      </div>

      <div style={styles.content5}>
        <h2>CLASS 7 SCIENCE ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Students in Class 7 are given a platform that is both consistent and
          structured to evaluate their scientific ability through the
          participation in the Class 6 Science Annual and Monthly Olympiads.
          Participating in monthly challenges and comparing results allows
          students to track their progress and see how they measure up against
          students from other schools and parts of the nation. Through engaging
          in this kind of healthy competition, students are inspired to develop
          a passion for learning and a drive to achieve their personal best.
          Similarly, the spirit is fostered, and challenges are presented once a
          year at the Annual Science Olympiad. Students can register for either
          exam format, whichever is more convenient for them.
        </p>
      </div>

      <div style={styles.content6}>
        <h2>SCIENCE ANNUAL OLYMPIAD CLASS 7</h2>
        <p style={styles.content6P}>
          Annual Olympiads are organized by Minds Marathon every year to welcome
          talent from different schools. It gives students an opportunity to
          come together and showcase their skills on national and international
          platforms. They are conducted both online as well as offline. Both
          these exams are open to students from class 1. It is indeed an honor
          for parents to see kids as young as 5 or 6-years old to participate at
          such a prestigious level.
        </p>
        <p style={styles.content6P}>
          Minds Marathon encourages students of grade 1 to become thorough in
          concepts taught in class. This can be done only when they are exposed
          to different competitions. The Online Annual exams are held for a
          duration of 45 minutes whereas the Offline Annual exams are held for a
          duration of 65 minutes, except for the Drawing exam, which is held for
          60 minutes, and the Essay exam, which is held for 40 minutes. Similar
          to the monthly exams, online exams can also be taken from home using
          any tablet or smartphone. Students can take these exams at their
          convenience anytime between 10:00 am and 6:00 pm. The annual Olympiad
          exams consist of 50 questions that have to be answered within the
          given time limit. These questions are all asked in the multiple-choice
          format. Students have four options to choose from, out of which one
          would be the correct answer and the other three would be distractors.
          When children of class 1 think which option would suit the most, they
          analyze why the other options would probably be wrong. This learning
          methodology helps them to differentiate from the other options and
          become confident about the right answer.
        </p>
        <p style={styles.content6P}>
          Olympiad exams are all about arriving at the right answer. The exam
          questions include subjective questions, logical reasoning questions
          and higher-order thinking questions.
        </p>
        <p style={styles.content6P}>
          To know more about the upcoming Olympiads, please click the link
          below:
        </p>
      </div>

      <div style={styles.content7}>
        <button
          style={styles.button}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Register now
        </button>
      </div>

      <div style={styles.content8}>
        <h2>SCIENCE MONTHLY OLYMPIAD CLASS 7</h2>
        <p style={styles.content8P}>
          Students of class 7 can participate in the Monthly test of
          International Science Olympiad (ISO). These are held every month.
          Keeping in mind today’s pace, these are online tests that can be taken
          from any smartphone or tablet. It allows students to practice
          different questions from Physics, Chemistry and Biology. It is the
          best way to test students’ interest in the subject of science. It also
          allows to them to choose medical or engineering fields in the near
          future. The general objective of the monthly test is to evaluate ones’
          personal learning, review one’s own work, and enjoy the different ways
          questions can be represented.
        </p>

        <p style={styles.content8P}>
          The combo pack exams include tests in Science, Maths, English, and GK.
          The tests are conducted for a duration of 25 minutes, in which
          students get to solve 30 questions. The tests can be taken anytime
          between 10:00 and 6:00 sitting at home. Parents can supervise their
          children and understand their strengths and weaknesses. The scores
          scored at Olympiads help to evaluate self- performance.
        </p>

        <p style={styles.content8P}>
          Instead of simply mugging up concepts, the monthly tests assure a
          complete understanding of fundamentals. Students are able to relate to
          scientific experiments and pinpoint trends that have evolved over the
          years. Science is one subject that constantly focuses on research and
          development.
        </p>

        <p style={styles.content8P}>
          Recognize the scientist in your children and promote healthy learning
          environments for a bright future ahead.
        </p>
      </div>
    </div>
  );
};

export default Class7Page;
