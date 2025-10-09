import React, { useState } from "react";

const Class4Page = () => {
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
    content1P: { fontSize: "18px", lineHeight: 1.3, color: "#333", marginTop: 0 },
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
      boxShadow: hover ? "0 6px 12px rgba(11,11,11,0.4)" : "none",
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
          <h1 style={styles.textBoxH1}>INTERNATIONAL MATHS OLYMPIAD CLASS 4</h1>
          <p style={styles.textBoxP}>
            IMO Book for Class 4 is specially designed for those who wish to
            participate at national and international level competitions. It lays
            the foundation for competitive exams. It makes them confident to
            answer variety of questions. Olympiad exams make students improve
            their problem-solving skills. This comes very handy when they go to
            higher classes. The workbooks offered make students ready to compete
            with each other at ease. Books are well designed and have chapter wise
            collection of different topics such as basic geometric shapes, number
            system, data handling and other calculations that provides in-depth
            detail on the type of questions asked. Students who master Math are
            said to have conquered the world. They are able to perform well not
            only at school level exams, but also at other competitive entrance
            exams, thus increasing their score.
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
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR MATHS OLYMPIAD CLASS 4</h2>
        <p style={styles.content1P}>
          Exam papers from previous years of the Maths Olympiad for Class 4 are a
          helpful study tool. In addition to these, ITO also provides workbooks as
          part of its preparation materials. Students can use the papers to get a
          feel for the format, question types, and level of difficulty of the
          actual exam. Students can assess their readiness, learn where they excel
          and where they need more work by working through question papers from
          previous years. Students can benefit greatly from using workbooks for
          the Class 4 Mathematics Olympiad since workbooks contain a variety of
          practice problems for students to apply their knowledge and hone their
          problem-solving skills, and they provide a structured learning approach
          that allows them to progress gradually through the syllabus. One's
          chances of doing well on the Olympiad exam are greatly enhanced by the
          use of these preparatory materials.
        </p>
      </div>

      {/* Content 2 */}
      <div style={styles.content2}>
        <h2 style={styles.content2H2}>MATHS OLYMPIAD SYLLABUS CLASS 4</h2>
        <p style={styles.content2P}>
          The syllabus for class 4 Maths Olympiad is the same as prescribed by
          schools. It is as per the norms prescribed by the CBSE, ICSE, and State
          boards respectively. There are several skill sets that students develop
          when they enter class 4. They are introduced to variety of concepts such
          as number sense, division, units of measurement, time, addition up to
          five digits, mixed operations, geometry, multiplication, data, graphs,
          fractions, patterns and sequences, money and probability. Olympiad exams
          introduce all of these concepts in the most innovative manner. While
          participating in Olympiad exams, students can easily find unlimited
          practice questions that are specifically tailored to each learning
          objective. Students who refer to Olympiad syllabus, can track
          performance and compare the same with their peers. Minds Marathon
          includes visual simulations that make concepts easy to comprehend. The
          team of experts at the organization love to answer doubts. Thus, it
          provides explanation to each and every question given as part of the
          exam. More students solve these questions, the better they become in
          tackling advanced level questions. The books provided by the
          organization guarantees individual attention. Students will be able to
          understand each and every concept without much help. The language is
          student-friendly, which is even more beneficial to participants. The
          teaching methodology adopted by Minds Marathon is unique. The puzzle
          cards offered by the organization as part of questions are students’
          favorite. It helps them to visualize tricky Math problems and hunt for
          innovative solutions.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Basic Geometric Shapes</li>
          <li>Chapter 2: Number System</li>
          <li>Chapter 3: Addition & Subtraction</li>
          <li>Chapter 4: Multiplication & Division</li>
          <li>Chapter 5: Fractions</li>
          <li>Chapter 6: Measurement</li>
          <li>Chapter 7: Time & Calendar</li>
          <li>Chapter 8: Data Handling</li>
          <li>Chapter 9: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 3 */}
      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IMO-Maths-Olympiad-Workbook-Class-4.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 4 MATHS OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            Students preparing to take the Mathematics Olympiad will find
            workbooks like the IMO Book Class 4 to be an invaluable resource.
            These supplementary materials provide in-depth coverage of the
            mathematical ideas and techniques necessary for success in
            competitions like the International Mathematics Olympiad. These
            resources have been developed specifically to meet the requirements of
            students in fourth grade and above who are considering competing in
            the Olympiad. Students are able to construct a strong foundation in
            mathematics by employing a structured learning approach, which
            presents the content in a manner that is both sequential and
            organized. Making use of these resources is a quick and easy way to
            get yourself well prepared for the IMO class 4.
          </p>
        </div>
      </div>

      {/* Content 4 */}
      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>CLASS 4 MATHS OLYMPIAD PREVIOUS YEAR QUESTION PAPER</h2>
          <p style={styles.content4P}>
            Students also have the option of using IMO class 4 previous year
            papers as a diagnostic tool in their studies when they plan to appear
            for the Math olympiad. By analyzing their performance in these papers,
            students can identify their strengths and weaknesses in different
            topics or concepts. This analysis guides them to allocate more time
            for practicing areas where they need improvement and seek additional
            help or resources if necessary. One effective strategy is to create a
            revision plan using previous year question papers. Students can
            dedicate specific time slots to solve these papers, focusing on one
            subject or topic at a time. This systematic approach helps in revising
            and reinforcing concepts, identifying weak areas, and targeting
            specific topics that require more practice thus aid in helping them
            prepare for the test better.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-04.webp"
          alt="PYQ"
        />
      </div>

      {/* Content 5 */}
      <div style={styles.content5}>
        <h2>CLASS 4 MATHS ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Both the annual Maths Olympiad and the monthly olympiad, which are held
          for students in Class 4, encourage critical thinking. Students are
          frequently required to engage in in-depth thought, evaluate a variety of
          potential solutions, and decide which strategy presents the greatest
          advantage in order to succeed in these competitions. Students benefit
          from intellectual growth, improved decision-making skills, and
          encouragement to think creatively when they engage in this process of
          critical thinking, which also helps them think outside the box. Students
          can get a good grasp on the subject matter and associated concepts to
          benefit their overall studies by preparing well for exams using a
          variety of resources. This will put them ahead of their classmates in
          terms of developing a grasp on the subject matter and concepts
          associated with it.
        </p>
      </div>

      {/* Content 6 */}
      <div style={styles.content6}>
        <h2>MATHS ANNUAL OLYMPIAD CLASS 4</h2>
        <p style={styles.content6P}>
          The annual Olympiads for class 4 are conducted twice a year – in
          December and February respectively. These are very similar to the
          monthly Olympiads. These are also conducted online keeping in mind the
          convenience of students. Today’s children are more tech savvy as
          compared to the older generations. In order to match up to their levels,
          the organization conducts online Olympiads. It takes care of maintaining
          compliance and obedience in all online exams. The organization has
          strict rules that cater to the betterment of children. It uses advanced
          features such as audio recording, video recording, eye ball recognition
          and facial recognition elements to ensures cent percent transparency in
          the exams.
        </p>
        <p style={styles.content6P}>
          The duration for most of the exams except the drawing and the essay exam
          is 45 minutes. All the other subjects test students’ capabilities using
          multiple choice questions. The paper pattern is suitable for
          comprehensive learning and development of all individuals. Instead of
          rote learning, it focuses on concept based education. Multiple choice
          format of exams is followed in most higher level national competitions
          such as NET, SET, NEET, IELTS, GRE, GMAT, etc. It trains the young minds
          to be accustomed to future competitions. Students are given 50 questions
          as part of Annual Olympiads with four options. They have to apply their
          analytical skills to find out the right answer.
        </p>
        <p style={styles.content6P}>
          The drawing and the essay exam are held a little differently. The
          drawing exam is conducted online for 60 minutes, whereas the essay
          online exam is conducted for 40 minutes. Students have to turn in their
          work within the given time limit.
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
        <h2>MATHS MONTHLY OLYMPIAD CLASS 4</h2>
        <p style={styles.content8P}>
          The monthly Olympiads offer immense practice sessions all through the
          year. As the name suggests, these are monthly tests that act as
          additional preparation. The class 4 monthly Olympiad is conducted
          online. Students can use any smart phone or tablet to take these tests.
          They can be taken any time between 10:00 am and 6:00 pm. Students can
          appear for monthly Olympiads not only in Maths, but also in Science,
          English, GK, Essay and Drawing. The duration for the monthly Olympiad is
          25 minutes, in which students are given 30 questions to solve.
        </p>
        <p style={styles.content8P}>
          Students who take part in Maths monthly Olympiads develop excellent
          number sense. Their calculations become easy. Maths requires hardcore
          practice so that all mathematical computations are on children’s finger
          tips. The best way to inculcate mastery in Maths is by allowing them to
          practice maximum questions. It may not be enough for students to get a
          good command over concepts by focusing only on classroom training.
        </p>
        <p style={styles.content8P}>
          Thanks to information and technology, the students of today can access
          variety of questions online through the monthly Olympiads. The team at
          Minds Marathon works hard to solve all doubts or queries each month
          during these tests. Students can participate in these tests by
          registering themselves for the exam. Olympiads act as booster doses for
          all participants. It ensures that whatever they learn in the young age,
          stays with them for years to come.
        </p>
      </div>
    </div>
  );
};

export default Class4Page;
