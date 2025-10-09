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
    content1H2: {
      marginBottom: "4px",
    },
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
    content2H2: {
      fontSize: "25px",
      marginBottom: "3px",
    },
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
      boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
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
      boxShadow: "5px 5px 5px rgba(0,0,0,0.5)",
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
    content7Button: {
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    },
    content7ButtonHover: {
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0 6px 12px rgba(11, 11, 11, 0.4)",
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

  return (
    <div style={styles.body}>
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>
            INTERNATIONAL SCIENCE OLYMPIAD <br />CLASS 10
          </h1>
          <p style={styles.textBoxP}>
            Minds Marathon’s highly qualified subject teachers have analyzed the
            syllabus of International Olympiad exams. The Science Olympiad for
            class 10 caters to all boards, namely State boards, International
            boards, CBSE & ICSE boards. It is one of the most popular exams
            conducted by Minds Marathon. Workbooks for the same are designed by
            subject teachers who have thorough knowledge of the subject.
            Students who appear for this exam hold a fair chance of scoring well
            in their upcoming board exams. They are exposed to different
            questions that become easy to solve with rigorous practice. The
            topics included in class 10 Science Olympiad exams are acid, base
            & salts, life’s internal secret, reproduction, regulators,
            electromagnetism, the world of carbon compounds, and so on.
            Questions are strategically framed, and a correct answer key is
            given along with explanations. All chapters have multiple-choice
            questions for students to answer. It also includes a logical
            reasoning section to practice. The Olympiad book for class 10 helps
            them to participate in other International & National exams as well.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-Science-Olympiad-Logo-315px-143px.webp"
          alt="International Science Olympiad Logo"
        />
      </div>

      {/* Content1 */}
      <div style={styles.content1}>
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR SCIENCE OLYMPIAD CLASS 10</h2>
        <p style={styles.content1P}>
          Workbooks and previous year question papers happen to be among the
          variety of preparation material Minds Marathon has for students when it
          comes to preparation; these are valuable resources for preparing for the
          Class 10 Science Olympiad. These books are specifically designed to
          align with the syllabus and cover a wide range of topics in a
          comprehensive manner. By using these, students can systematically revise
          and reinforce their understanding of scientific concepts. Workbooks
          often include practice exercises, sample questions, and detailed
          explanations, enabling students to practice and apply their knowledge
          effectively. The structured approach helps students track their
          progress, identify areas of weakness, and focus their efforts on
          improving their understanding of specific topics. The question papers
          help students prepare well to face the format of questions they’d
          encounter in the exam and gear up accordingly.
        </p>
      </div>

      {/* Content2 */}
      <div style={styles.content2}>
        <h2 style={styles.content2H2}>SYLLABUS FOR OLYMPIAD CLASS 10</h2>
        <p style={styles.content2P}>
          Class 10 is one of the crucial years in students’ life. It is not only
          the turning point but considered to be one of the imperative years that
          decides one’s career. Students have a lot of career options to choose
          from, but looking at so many opportunities they may be confused.
          Teachers recommend students to try their luck at Olympiads and see what
          subjects interest them. Thus, the International Science Olympiad Class
          10 by Minds Marathon is designed to test students’ knowledge of
          different scientific concepts taught in class. It is beneficial for
          students to refer to different books while preparing for the upcoming
          board exams. The syllabus of Class 10 Olympiad is exactly as prescribed
          by different boards. Students need not worry about being burdened with
          extra studies. Instead, students who participate in these exams get used
          to a variety of advanced-level questions. The concepts are made clear,
          they get a good hold over basic fundamentals, and thus become confident
          before the board exams. Students find the science board exam easier when
          they are exposed to content from all topics. Check out the syllabus for
          Olympiad exams and prepare for Class 10 boards without any hassle.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Force Work Power And Energy</li>
          <li>Chapter 2: Light And Sound</li>
          <li>Chapter 3: Heat And Electricity</li>
          <li>Chapter 4: Electromagnetism</li>
          <li>Chapter 5: Cell Biology</li>
          <li>Chapter 6: Life Processes</li>
          <li>Chapter 7: Control And Coordination</li>
          <li>Chapter 8: Reproduction</li>
          <li>Chapter 9: Periodic Classification Of Elements</li>
          <li>Chapter 10: Acids Bases And Salts</li>
          <li>Chapter 11: Chemical Bonding</li>
          <li>Chapter 12: Mole Concept</li>
          <li>Chapter 13: Metals And Nonmetals</li>
          <li>Chapter 14: Chemical Reactions</li>
          <li>Chapter 15: Environmental Management</li>
          <li>Chapter 16: Natural Resources</li>
        </ul>
      </div>

      {/* Content3 */}
      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-workbook-class-10.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 10 SCIENCE OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            Students, when using a workbook to get ready for the Science Olympiad
            for class 10, they gain a number of benefits. The said benefits
            include- a methodical framework for education that guarantees the
            inclusion of all relevant material. The workbooks give students a ton
            of opportunities to practice, which helps them solidify their
            knowledge and pinpoint where they might be struggling. Because of
            their formatting and assortment of questions, workbooks keep students
            interested and involved, which in turn improves their learning
            outcomes. Students can build a strong foundation in science and the
            skills necessary for future academic and competitive success by using
            Science Olympiad workbooks.
          </p>
        </div>
      </div>

      {/* Content4 */}
      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>CLASS 10 SCIENCE OLYMPIAD PREVIOUS YEAR QUESTION PAPER</h2>
          <p style={styles.content4P}>
            Students' overall performance and their chances of acing the
            International Science Olympiad for Class 10 are improved by practicing
            with question papers from previous years. With these resources, the
            students are given the opportunity to improve their science related
            knowledge and self-confidence through frequent recapitulation and
            revision, which offers a structured approach to the preparation
            process. Students are able to evaluate their performance and determine
            their areas of strength, and work toward improvement by using these
            very resources related to the Science Olympiad. These provide the
            young ones with exposure to the variety of questions, the exam paper
            format and can be used to put proper time management practices in
            place!
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-previous-year-question-paper-class-10-ito.webp"
          alt="PYQ"
        />
      </div>

      {/* Content5 */}
      <div style={styles.content5}>
        <h2>CLASS 10 SCIENCE ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Students in class 10 who take part in the Science Annual or Monthly
          Olympiad happen to be a step ahead of their peers since they are given
          the opportunity to tackle a wide range of scientific challenges.
          Students are required to engage in analytical thinking, creative
          problem-solving, and critical thinking as a result of the nature of the
          questions that constitute the Olympiads. Students' capacity for
          higher-order thinking sees a development as a result of their exposure
          to difficult problems, and they are provided with the tools they need to
          successfully address a variety of challenges in the real world. Students
          have the option of taking Olympiad examinations either once per year or
          once per month, based on their preferences.
        </p>
      </div>

      {/* Content6 */}
      <div style={styles.content6}>
        <h2>SCIENCE ANNUAL OLYMPIAD CLASS 10</h2>
        <p style={styles.content6P}>
          Annual Olympiads are similar to monthly Olympiads with regards to the
          paper pattern. Both these exams can be attempted online. Both exams are
          conducted using the multiple-choice question pattern. The annual
          Olympiads are conducted in various subjects like Maths, English, General
          Knowledge, Computer, Drawing, Essay, and Social Studies in online and
          offline mode.
        </p>
        <p style={styles.content6P}>
          The online exams are conducted for 45 minutes. The drawing exam is
          conducted for 60 minutes and the essay exam is conducted for 40 minutes.
          Students have to turn in their papers within the given time limit for
          both online and offline exam. These exams can be taken any time between
          10:00 am and 6:00 pm. Students are asked multiple-choice questions.
          Students attempting the drawing and the essay exam are given topics to
          draw/write. They need to upload legible and clear pictures of their work
          in case if they are appearing for an online exam. Class 10th science is
          one of the subjects that is responsible for shaping students’ careers.
          Those who want to continue with science in their higher studies must
          have a conceptual understanding of all the topics. They need to create a
          strong base in Physics, Chemistry, and Biology.
        </p>
        <p style={styles.content6P}>
          In physics, students must be well-versed with formula-based questions.
          All these formulas must be at their fingertips. Topics such as Newton’s
          law of motion and its applications are important from an exam point of
          view. They need to have a good grip over numerical problems such as the
          lens and the mirror. The applications of acids, bases, and salt must be
          clear to all participants. Chemistry is a high-scoring subject. Students
          must memorize balancing chemical equations. In Biology, they must be
          thorough in the respiratory system, human brain, parts of a flower, and
          other terminologies. Biology consists of several diagrams, they must be
          well aware of its labels and functions.
        </p>
        <p style={styles.content6P}>
          The annual Olympiads boost students' existing knowledge and help them
          score well in board exams. They are one of the best ways to prepare for
          final exams. Minds Marathon ensures a stress-free preparation
          experience. To participate in the Annual Olympiads, or for more
          information, please click the link below:
        </p>
      </div>

      {/* Content7 */}
      <div style={styles.content7}>
        <button style={styles.content7Button}>Register now</button>
      </div>

      {/* Content8 */}
      <div style={styles.content8}>
        <h2>SCIENCE MONTHLY OLYMPIAD CLASS 10</h2>
        <p style={styles.content8P}>
          The monthly Science Olympiad helps students to prepare from all chapters
          that are part of the school syllabus. These are monthly tests that
          include chapter-wise questions. The tests are conducted online, and
          students can participate anytime between 10:00 am and 6:00 pm in the
          Science Olympiad. Those who are interested to participate in all
          subjects like Science, Maths English, and GK of Olympiads can enroll
          themselves for the combo pack exams. The online monthly Olympiads are
          conducted for a duration of 25 minutes, in which students have to answer
          30 questions. The best part about these exams is that students can get
          to practice each and every chapter at their own pace. It allows them to
          fill in gaps in their knowledge. Students can attempt these tests using
          any smartphone or tablet from the convenience of their homes.
        </p>
        <p style={styles.content8P}>
          The monthly Olympiads cover the entire syllabus. The board exam question
          paper includes questions that are asked in the Olympiads. Thus, students
          must be thorough with the concepts. They must solve each and every
          question, and understand the scientific theories, which will help them
          prepare for the final exam. Students may have completed the syllabus in
          the classroom. But, it is a good practice to go through it once again.
        </p>
        <p style={styles.content8P}>
          Monthly Olympiads provide students an opportunity for additional
          learning. It is a kind of revision for all participants to get to know
          areas where they need to put in the extra effort. Accordingly, students
          can formulate a study plan and stick to a particular schedule.
        </p>
        <p style={styles.content8P}>
          To know more about the science Olympiad for class 10 please click the
          link below.
        </p>
      </div>
    </div>
  );
};

export default Class10Page;
