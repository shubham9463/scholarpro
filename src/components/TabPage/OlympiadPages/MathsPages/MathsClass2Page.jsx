import React, { useState } from "react";

const Class2Page = () => {
  const [hover, setHover] = useState(false);

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
    content1P: { marginTop: 0, fontSize: "18px", lineHeight: 1.3, color: "#333" },
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
    content2P: { fontSize: "18px", lineHeight: 1.5, color: "#333", marginTop: 0 },
    content2Ul: { fontSize: "18px", color: "#333", marginTop: "15px" },
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
    content5P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
    content6: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content6P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
    content7: {
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content7Button: {
      backgroundColor: hover ? "#007bff" : "transparent",
      color: hover ? "#fff" : "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
      boxShadow: hover ? "0 6px 12px rgba(11, 11, 11, 0.4)" : "none",
    },
    content8: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content8P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
  };

  return (
    <div style={styles.body}>
      {/* Text Box */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>INTERNATIONAL MATHS OLYMPIAD CLASS 2</h1>
          <p style={styles.textBoxP}>
            The 21st century has given rise to a lot of competition, especially in
            the field of education. In order to stay ahead in this competitive
            world, different Olympiad exams have been introduced in several
            schools Maths Olympiad for class 2 is one among them. School exams are
            not enough for students of today’s times. International Maths Olympiad
            is one such exam that tests students’ knowledge in the subject. It
            enhances their calculation skills and motivates them to excel.
            Students often fear Mathematics. This fear can be removed only by
            thorough practice. IMO books for class 2 are a great resource that
            helps them to prepare for other competitive exams. Mathematics forms
            the base of all career options. Minds Marathon maths book is quite a
            resourceful, well-planned book that provides in-depth detail through
            different questions. Answers to all questions are also given with
            explanations. This helps them to comprehend better the type of
            questions asked in the exam. The book also has logical reasoning
            section at the end for students as an add-on to improve their logical
            skills.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-Maths-Olympiad-Logo_1.webp"
          alt="International Science Olympiad Logo"
        />
      </div>

      {/* Content 1 */}
      <div style={styles.content1}>
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR MATHS OLYMPIAD CLASS 2</h2>
        <p style={styles.content1P}>
          A valuable resource for Maths Olympiad Class 2 preparation are the
          previous year question papers. Besides these, the preparation materials
          put out by ITO include workbooks. The papers serve as an excellent
          practice tool and familiarize students with the exam pattern, types of
          questions, and difficulty level. By solving previous year question
          papers, students can gauge their preparation level, identify their
          strengths and weaknesses, and understand the areas they need to focus
          on. Workbooks for the Class 2 Mathematics Olympiad offer numerous
          benefits to students. They provide a structured learning approach, which
          enables students to progress gradually through the syllabus and
          workbooks contain a wide range of practice problems, allowing students
          to apply their knowledge and sharpen their problem-solving skills. These
          significantly contribute to the improvement of one’s performance in the
          Olympiad exam.
        </p>
      </div>

      {/* Content 2 */}
      <div style={styles.content2}>
        <h2 style={styles.content2H2}>MATHS OLYMPIAD SYLLABUS CLASS 2</h2>
        <p style={styles.content2P}>
          The syllabus for the class 2 International Maths Olympiad is the same as
          prescribed by school. When students are still in their formative years
          of learning that is in the primary classes, they must be introduced to
          mathematical concepts. It is up to the teachers and the parents to make
          maths interesting. There are different kind of fun activities that can
          be conducted in this subject. It is similar to the puzzles that most
          children play with during their free time. Research on this topic has
          shown that there are several ways to inculcate precision and accuracy in
          mathematics. The main goal of the learning strategy is to make students
          more effective learners. The three well-known strategies are mnemonic,
          generative and structural. Mnemonic strategies are used to help memorize
          mathematical concepts, structural strategies help students to pick out
          important information from a question and organize those in proper
          structures, and the generative strategies help students to remember
          facts and apply the same in questions. Maths is a subject where students
          can actively learn at the same time make connections between content. It
          enables students to incorporate new teachings. Math games are conducted
          in almost all classrooms. This is because students love to explore on
          their own. Olympiad exams encourage students’ exploratory skills. It
          becomes very easy for them to concentrate on chapters whenever it is in
          the form of a game. There are several fun games that can be played using
          maths as the base subject. The main motive of Olympiad exams is to
          develop interest and love for maths in all participants. Minds Marathon
          is proud to have touched the lives of many students. It has a portfolio
          of happy students, satisfied parents and proud teachers who have
          contributed to the field of education.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Lines and Shapes</li>
          <li>Chapter 2: Number System</li>
          <li>Chapter 3: Addition</li>
          <li>Chapter 4: Subtraction</li>
          <li>Chapter 5: Time</li>
          <li>Chapter 6: Money</li>
          <li>Chapter 7: Measurement</li>
          <li>Chapter 8: Patterns</li>
          <li>Chapter 9: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 3 */}
      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IMO-Maths-Olympiad-Workbook-Class-2.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 2 MATHS OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            Students who are getting ready to compete in the Mathematics Olympiad
            would benefit greatly from using workbooks such as the IMO Book Class
            2, which act as excellent resources. These workbooks have been
            designed with the goal of delivering a comprehensive coverage of the
            mathematical concepts and problem-solving strategies that are
            necessary for achievement in mathematical competitions like the
            International Mathematics Olympiad. They have been developed
            especially to meet the requirements of students starting in class 2
            who are interested in competing in the Olympiad. Students are able to
            construct a robust foundation in mathematics by employing a structured
            approach to learning, which presents the content of the subject matter
            in a manner that is sequential and organized. One can make quick and
            easy use of these resources in order to prepare effectively for the
            Olympiad.
          </p>
        </div>
      </div>

      {/* Content 4 */}
      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>CLASS 2 MATHS OLYMPIAD PREVIOUS YEAR QUESTION PAPER</h2>
          <p style={styles.content4P}>
            IMO class 2 previous year papers serve as an excellent practice tool
            for students. Students gain practical experience in the form of
            hands-on training by attempting these papers, which contain actual
            questions at the Olympiad level. This helps them gauge their
            preparation level and identify areas that require further improvement.
            The ability to solve problems, reason logically, and think critically
            can all be improved with consistent practice using old exam questions
            from previous years. After completing a paper, students should go back
            through their work and check their solutions against the ones that are
            provided. This analysis is helpful in locating errors, gaining an
            understanding of the appropriate methods, and enhancing the strategies
            that are used to solve problems. In addition to this, it sheds light
            on the methods of logical reasoning and problem-solving strategies
            that are utilized when dealing with difficult issues to help them
            prepare better.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-02.webp"
          alt="PYQ"
        />
      </div>

      {/* Content 5 */}
      <div style={styles.content5}>
        <h2>CLASS 2 MATHS ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          One of the key benefits of IMO class 2 is that students can choose to
          appear for the exam annually or Monthly depending on what suits their
          schedule and convenience. These competitions aim to motivate students to
          excel in the subject that they have an affinity for and allow them to
          get used to healthy competition. These competitions serve as a spark,
          igniting a passion in students for mathematics and encouraging them to
          explore the topic in ways that go beyond what is covered in their
          regular curriculum. Students are encouraged to strive for excellence and
          perform to the best of their abilities , besides honing their grasp and
          understanding of the subject matter.
        </p>
      </div>

      {/* Content 6 */}
      <div style={styles.content6}>
        <h2>MATHS ANNUAL OLYMPIAD CLASS 2</h2>
        <p style={styles.content6P}>
          Annual Olympiads are conducted twice a year – in December and February.
          These exams are conducted in various subjects such as the Science,
          Maths, English, General Knowledge, Computer, Drawing, Essay and Social
          Studies. These are also online exams in which students are tested on 50
          questions. They are given 45 minutes to answer multiple choice
          questions. The drawing and the essay exams are conducted in a different
          manner. Here, students have to upload images within the given time. The
          drawing exam is for 60 minutes, and the essay exam is for 40 minutes.
        </p>
        <p style={styles.content6P}>
          All annual exams are conducted using fair practices. The organization
          uses artificial intelligence to monitor students. Malpractices of any
          kind are not entertained. The annual Olympiads are generally held before
          school exams, with a view to provide maximum benefit to all
          participants. The maths Olympiad for class 2 helps students to develop
          skills that is required at primary schooling. Questions focus on games
          that makes it interesting to find for answers.
        </p>
        <p style={styles.content6P}>
          Maths seems to be a long-drawn battle between students and teachers.
          Minds Marathon maths Olympiad bridges the gap between teaching and
          learning. Developing mathematical concepts have always been a
          challenging task for teachers. This is the most important reason why
          many schools encourage maximum participation in the annual Maths
          Olympiad. Students can register on the website either through their
          school or on an individual basis. The organization welcomes all maths
          enthusiasts on board. It believes in inculcating positive vibes towards
          the subject since a young age.
        </p>
        <p style={styles.content6P}>
          To know more about the upcoming Olympiads, please click the link below:
        </p>
      </div>

      {/* Content 7 */}
      <div style={styles.content7}>
        <button
          style={styles.content7Button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Register now
        </button>
      </div>

      {/* Content 8 */}
      <div style={styles.content8}>
        <h2>MATHS MONTHLY OLYMPIAD CLASS 2</h2>
        <p style={styles.content8P}>
          The monthly Olympiads for class 2 are practice exams that are conducted
          every month. These provide good training throughout the year and
          prepares students for annual Olympiads. It also helps them in their
          school exams. The monthly Olympiads are online tests similar to the demo
          tests, but students are rewarded profoundly for their performance. These
          can be taken using any smartphone or tablet between 10:00 am and 6:00 pm
          on particular exam dates. The monthly Olympiads are not only available
          for Maths, but also for Science, English, GK, Drawing and Social
          Studies. It helps students to manage time, concentrate, improve speed
          and accuracy in exam conditions.
        </p>
      </div>
    </div>
  );
};

export default Class2Page;
