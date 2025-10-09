import React, { useState } from "react";

const Class7Page = () => {
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
      color: "#000",
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
      color: "#fff",
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
          <h1 style={styles.textBoxH1}>INTERNATIONAL MATHS OLYMPIAD CLASS 7</h1>
          <p style={styles.textBoxP}>
            In order to stay ahead in this competitive world, different Olympiad
            exams have been introduced in several schools. Minds Marathon
            international Maths Olympiad for Class 7 is one such exam that tests
            the reasoning ability of the students. The thoroughly updated and
            revised IMO Class 7 book is conceptualized and designed by Minds
            Marathon, which is a well-known name for all Olympiad exams. The book
            provides complete coverage on different topics of different boards. It
            has several practice questions that allows students to practice at
            home. The book engages the student, thus making it interesting to
            solve more and more questions Children of today have a lot of
            potential to exceed teachers’ expectations, provided they are given
            the right backing. Schools encourage students to take part in such
            exams, so that they are ready to face other competitive exams too.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-Maths-Olympiad-Logo_1.webp"
          alt="International Maths Olympiad Logo"
        />
      </div>

      {/* Content 1 */}
      <div style={styles.content1}>
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR MATHS OLYMPIAD CLASS 7</h2>
        <p style={styles.content1P}>
          For those studying for the Class 7 Maths Olympiad, past year's questions
          and associated workbooks are a crucial resource. By working through
          these previous year question papers and sample questions, students can
          get a feel for the types of questions they can expect on exam day. The
          comfort and assurance that comes from knowing what to expect allows for
          enhanced performance. Students can learn more and develop their ability
          to solve problems by looking at the answers to questions from previous
          years. Students should take a methodical approach to the Class 7
          Mathematics Olympiad in order to get the most out of these resources.
          They can get a head start on understanding the fundamental concepts and
          then proceed to work through the problems to prepare well for the IMO
          class 7.
        </p>
      </div>

      {/* Content 2 */}
      <div style={styles.content2}>
        <h2 style={styles.content2H2}>MATHS OLYMPIAD SYLLABUS CLASS 7</h2>
        <p style={styles.content2P}>
          Class 7 mathematics focuses on topics that eventually build up to the
          board exams. The topics here are crucial as it forms the base for the
          coming years. Hence, it is important for students to get their concepts
          clear from now. Students of class 7 need to concentrate on developing
          basic knowledge before they move on the to the next chapter. Each and
          every chapter holds equal weightage in this class. Be it the number
          system, fractions, linear equations, integers, data handling, lines and
          angles, triangles and its properties, quantities and lot more, students
          must be through in all of them. Olympiad exams can be one of the ways
          through which students can achieve mastery over questions. The syllabus
          for Olympiads is the same as prescribed by schools. These are additional
          exams that have proven to be beneficial to all participants. Students
          indirectly practice for the same set of questions that may be asked in
          school, but in a different way. The question framing is done differently
          for Olympiads as it is aimed to test students’ understanding of
          fundamentals. Students require to utilize their knowledge on each and
          every question of the Maths Olympiad. Some of the other advantages of
          these tests are that students receive thorough understanding on the
          subject. The syllabus is exactly as prescribed by school. Students feel
          motivated when they fare well in these exams. Questions range from
          simple to advanced levels, to help students to grasp the subject matter.
          Many times students find it tough to juggle between formulas and their
          implications. The Olympiad exams makes learning a lot easier. All thanks
          to the exam pattern and the format, students develop good command over
          all the topics covered in school.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Number System</li>
          <li>Chapter 2: Fractions & Decimals</li>
          <li>Chapter 3: Linear Equation in One Variable</li>
          <li>Chapter 4: Algebraic Expression</li>
          <li>Chapter 5: Comparing Quantities</li>
          <li>Chapter 6: Exponents and Power</li>
          <li>Chapter 7: Ratio & Proportion</li>
          <li>Chapter 8: Practical Geometry & Lines and Angles</li>
          <li>Chapter 9: The Triangle & Its Properties</li>
          <li>Chapter 10: Mensuration</li>
          <li>Chapter 11: Data Handling</li>
          <li>Chapter 12: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 3 */}
      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IMO-Maths-Olympiad-Workbook-Class-7.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 7 MATHS OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            To help students get ready for IMO, Minds Marathon publishes a wide
            range of resources, including workbooks like the IMO book class 7. One
            great benefit of Mathematics Olympiad practice books is the wide
            variety of problem types included. These tasks are designed to assess
            students' ability to think critically and solve problems. By solving
            these problems, students not only strengthen their grasp of
            mathematical concepts but also develop their ability to apply those
            concepts in novel and complex contexts. In addition to providing
            problems for practice, workbooks often provide detailed explanations
            and solutions. Students can get a better grasp of the concepts at play
            by seeing how the answers were arrived at. Students can also use these
            explanations as a resource for the Olympiad tests they will take and
            enhance their performance to come out with flying colors!
          </p>
        </div>
      </div>

      {/* Content 4 */}
      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>CLASS 7 MATHS OLYMPIAD PREVIOUS YEAR QUESTION PAPER</h2>
          <p style={styles.content4P}>
            IMO class 7 previous year papers serve as an excellent tool for
            students when it comes to preparation and practice for Maths Olympiad.
            Students get real-world experience in the form of hands-on training by
            working through these papers, which are based on questions from
            higher-level competitions like the Olympiad. This allows them to
            evaluate their level of preparation and pinpoint areas in which they
            need to make additional improvements. Regular practice with old test
            questions from earlier years is one of the best ways to improve
            problem-solving skills, as well as logical reasoning and critical
            thinking. After finishing a paper, students should review their
            answers and compare them to the answers provided. Errors can be found,
            the right procedures can be better understood, and problem-solving
            strategies can be improved with the help of this analysis. In
            addition, it elucidates the processes of logical reasoning and
            problem-solving techniques used when confronting challenging issues,
            allowing the reader to better prepare for such encounters.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-07.webp"
          alt="PYQ"
        />
      </div>

      {/* Content 5 */}
      <div style={styles.content5}>
        <h2>CLASS 7 MATHS ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Class 7 Maths Annual Olympiad and Monthly Competitions are open to
          students who want to develop a good grasp on the subject . These
          Olympiads can be better prepared for with the help of resources like
          practice workbooks and previous year's question papers. Workbooks
          provide comprehensive coverage of the syllabus, while previous year
          question papers help students become familiar with the exam pattern and
          difficulty level. By utilizing these resources effectively, students can
          strengthen their conceptual understanding and improve their
          problem-solving skills. Exam success and overall academic performance
          can be improved by students who devote adequate time to studying using
          multiple sources. Because of this, they will have a head start on their
          classmates when it comes to understanding the material and concepts
          covered in class. Students can look into the syllabus and schedule for
          the same to have better understanding of the Olympiads.
        </p>
      </div>

      {/* Content 6 */}
      <div style={styles.content6}>
        <h2>MATHS ANNUAL OLYMPIAD CLASS 7</h2>
        <p style={styles.content6P}>
          The class 7 Annual Olympiads are conducted twice a year – in December
          and February. These are similar to the school annual exams; the only
          difference being is the format of the paper. The Maths Annual Olympiad
          is conducted for a duration of 45 minutes, in which students are asked
          50 multiple choice questions.
        </p>
        <p style={styles.content6P}>
          The Olympiad exams for class 7 cover all the important concepts and
          topics that are required to develop strong mathematical foundations. The
          content and the questions asked in both monthly Olympiads as well as
          annual Olympiads are designed by highly qualified Maths exponents of the
          country. The solutions provided after the exam helps students to
          comprehend the right answer. It acts as a learning guide and is one of
          the best methods to help students prepare for higher standards.
        </p>
        <p style={styles.content6P}>
          Those who develop excellent foundational abilities in Maths, find it
          easy to attempt other competitive exams such as JEE, NEET, NTSE etc.
          Olympiad exams are the best way to develop an aptitude for the subject.
          All tests conducted by Minds Marathon is built on the most trusted and
          latest platform. Students are encouraged for their performance in
          Olympiads. They undergo rigorous training throughout the year and thus
          are able to outshine their peers.
        </p>
        <p style={styles.content6P}>
          Minds Marathon monthly and annual Olympiads are tech-enabled that are
          delivered to your doorstep. Teachers often recommend students to
          participate in Olympiads through Minds Marathon and contribute to the
          community in which we live. The organization strives to make the world a
          better place for the generations to come. Its focus on education ensures
          to leave no stone unturned in bringing the best out of all school
          children. Online teaching has paved way for a better tomorrow.
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
        <h2>MATHS MONTHLY OLYMPIAD CLASS 7</h2>
        <p style={styles.content8P}>
          The monthly Maths Olympiads are online tests where students of class 7
          can participate and practice for their upcoming school exams. These
          tests can be taken any time between 10:00 am and 6:00 pm. Students are
          asked 30 multiple choice questions and are given a time limit of 25
          minutes, within which they have to complete the test.
        </p>
        <p style={styles.content8P}>
          Students will be given four options to choose from, out of which one
          option would be the correct answer. The other subjects in which students
          can participate for the monthly Olympiads are the power packs. These
          power packs are all-inclusive in nature. Students who opt for power
          packs can participate in Maths, Science, English, GK and Essay.
        </p>
        <p style={styles.content8P}>
          Students often find that they are lagging behind as compared to their
          peers. This may be because, some students may take more time to
          understand difficult questions. Students who are exposed to the monthly
          tests, get used to tricky questions. It becomes easy for them to select
          the right answer and thus improve their speed. Olympiad exams help
          students to work on their proficiency, accuracy and even speed. It
          teaches them time management skills, which are crucial for all
          competitive exams. Olympiads precise content allows students to develop
          better understanding of the subject.
        </p>
      </div>
    </div>
  );
};

export default Class7Page;
