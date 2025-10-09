import React, { useState } from "react";

const Class6Page = () => {
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
      background: "#fff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content5P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
    content6: {
      padding: "0px 60px",
      background: "#fff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content6P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
    content7: {
      backgroundColor: "#fff",
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
      background: "#fff",
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
          <h1 style={styles.textBoxH1}>INTERNATIONAL MATHS OLYMPIAD CLASS 6</h1>
          <p style={styles.textBoxP}>
            Mathematics develops power of reasoning, creativity, critical thinking,
            and problem solving abilities. Maths Olympiad consists of a set of
            preparatory material that includes questions on various topics such as
            triangles & elementary, number system, factors & multiples, integers,
            data handling and so on. Each topic is covered with multiple choice
            questions and is provided with correct answers with explanations. IMO
            book for Class 6 is made to look interesting with a lot of illustrations
            and teasers. Teachers recommend students to practice all questions
            given in this book. This helps them to achieve good marks in their
            school exams as well. The content engages the child thoroughly. Logical
            reasoning section is given at the end of the book, thus allowing students
            to get the additional benefit of improving their reasoning skills.
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
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR MATHS OLYMPIAD CLASS 6</h2>
        <p style={styles.content1P}>
          Solving past Maths Olympiad for Class 6 exam questions is a great way to
          prepare for the test. ITO also includes workbooks in its collection of
          preparatory resources. The papers can help students get a feel for the
          test's structure, question types, and difficulty before taking it. By
          reviewing old exams, students can get a sense of how well they are
          prepared and where they could use some extra practice. Workbooks on the
          other hand are a great resource for students taking the Class 6
          Mathematics Olympiad, because they can apply what they've learned and
          hone their problem-solving skills with the help of workbooks. Using
          these resources to study for the Olympiad exam increases one's
          probability of success in the IMO class 6.
        </p>
      </div>

      {/* Content 2 */}
      <div style={styles.content2}>
        <h2 style={styles.content2H2}>MATHS OLYMPIAD SYLLABUS CLASS 6</h2>
        <p style={styles.content2P}>
          Maths is one of the most interesting subjects. Unfortunately, there are
          many students who fear for Mathematics. Many of them find it difficult
          to understand. This is probably because the basics are not clear. Lack
          of sufficient practice is one of the reasons for students to develop an
          aversion towards Mathematics. Most of the students who do not practice
          regularly, find Maths to be a tough nut to crack. Thus, Minds Marathon
          comes forward to remove unnecessary fear in all children. It introduces
          Maths Olympiad to all students from class 1 to class 10. It ensures that
          students are given maximum practice of the same topics that are as part
          of their school syllabus. The curriculum followed by Olympiad exams is
          as per the norms prescribed by schools. It caters to all boards namely
          ICSE, CBSE, and all other State boards. Thus, it does not matter which
          board the school refers to, students from all over the country can take
          advantage of Maths Olympiad. Rote learning does not help in Mathematics.
          To excel in Maths, students need to be thorough in their fundamentals.
          Maths requires logical thinking and analytical skills. Minds Marathon
          includes the logical reasoning section as part of all Olympiads. No
          matter which subject students participate in, it ensures that all of
          them are exposed to critical thinking abilities. Parents, teachers,
          students all others who are interested in Olympiads can check and
          compare class 6 syllabus on the website.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Concept of Geometry</li>
          <li>Chapter 2: Number System</li>
          <li>Chapter 3: Factors & Multiples</li>
          <li>Chapter 4: Integers</li>
          <li>Chapter 5: Decimal Fractions</li>
          <li>Chapter 6: Ratio & Proportion</li>
          <li>Chapter 7: Arithmetic</li>
          <li>Chapter 8: Basic Algebra</li>
          <li>Chapter 9: Data Handling</li>
          <li>Chapter 10: Mensuration</li>
          <li>Chapter 11: Symmetry</li>
          <li>Chapter 12: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 3 */}
      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IMO-Maths-Olympiad-Workbook-Class-6.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 6 MATHS OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            ITO publishes a variety of materials, including workbooks as the IMO
            book class 6, to help students get ready for IMO class 6. Mathematics
            Olympiad workbooks have many different types of practice problems,
            which is a major advantage. The purpose of these exercises is to test
            the analytical and problem-solving skills of the students. Students
            gain a deeper understanding of mathematical concepts and practice
            applying those concepts in novel and complex situations as they work
            through these problems. The practice problems in the workbooks are
            just one benefit; the books also typically include thorough
            explanations and worked-out solutions. By seeing the thought process
            behind the answers, students are able to acquire a more thorough
            conceptual understanding of the material. In addition, students can
            use these explanations as a reference when preparing for the Olympiad.
          </p>
        </div>
      </div>

      {/* Content 4 */}
      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>CLASS 6 MATHS OLYMPIAD PREVIOUS YEAR QUESTION PAPER</h2>
          <p style={styles.content4P}>
            Students who are preparing for the Mathematics Olympiad will find that
            the IMO Class 6 previous year papers are extremely helpful resources.
            Students can see the format, question types, and difficulty level of
            the actual exam through these papers, making them indispensable for
            preparation. Students can gain valuable insight into their own
            learning styles and the Olympiad's expectations by analyzing their
            performance on previous years' question papers. Students can benefit
            greatly from reviewing past question papers for the Mathematics
            Olympiad because they provide a glimpse into the format and nature of
            the exam. Students can better prepare for their exams by reviewing
            previous versions of the questions, which also helps them become
            accustomed to the number of questions, the amount of time allotted for
            each question, and the marking scheme. Because of this familiarity,
            exam anxiety is reduced and confidence is boosted.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-06.webp"
          alt="PYQ"
        />
      </div>

      {/* Content 5 */}
      <div style={styles.content5}>
        <h2>CLASS 6 MATHS ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          When it comes to doing well in the Class 6 Maths Annual Olympiad and
          Monthly competitions, preparation is the most important factor. Students
          should schedule a specific time for practice, concentrating on the
          fundamental ideas and strategies for tackling problems that are outlined
          in their course curriculum. Through consistent practice, one becomes
          more familiar with a wider variety of problem types and sees
          improvements in both speed and accuracy. Students who take the time to
          study extensively for exams using a variety of resources are more likely
          to succeed on the exams and in their coursework as a whole. As a result,
          they will be miles ahead of their peers when it comes to grasping the
          subject matter and related concepts in class.
        </p>
      </div>

      {/* Content 6 */}
      <div style={styles.content6}>
        <h2>MATHS ANNUAL OLYMPIAD CLASS 6</h2>
        <p style={styles.content6P}>
          The Annual Olympiads are also online exams that are also online exams
          that are conducted twice a year. The schedule is planned in a way that
          students get to practice maximum questions before their school exams.
          Thus, the exam is conducted during the months of December and February.
          The Online Maths Olympiad is conducted for a duration of 45 minutes.
          Here, students are asked 50 different questions that they have to solve
          and complete within the given time limit.
        </p>
        <p style={styles.content6P}>
          Class 6 mathematics play a vital role in strengthening the fundamentals
          of the subject. At this age and class, students go beyond the basic
          addition, subtraction, multiplication and division. Students move into
          advanced concepts using the ones taught in the previous years. So, it is
          advised that all children studying in class 6 must prepare well and get
          all their queries resolved. Olympiads is one good way to get used to
          advanced content. Participants not only get to score good marks in class
          6, but as and when they reach higher classes, it helps them to crack
          other competitive exams. Teachers insist on making the most of online
          Olympiads.
        </p>
        <p style={styles.content6P}>
          Some of the other subjects in which students can participate are
          International Science, English, General Knowledge, Computer,Essay,
          Drawing and Social Studies respectively. Each and every exam is unique
          in its own way. The pattern however remains the same across.
        </p>
        <p style={styles.content6P}>
          Minds Marathon uses latest technology to stay up-to-date with new
          trends. It includes artificial intelligence on the basis of which these
          tests are conducted. Some of the advanced features used by the
          organization include audio record, video record, eye ball recognition,
          facial recognition and other such elements to conduct exams in the most
          transparent ways. The website is comprehensive with information, dates,
          exam rules, subjects, syllabus, winner list, and everything that you
          would search for. Please visit the ‘Register Student Annual Olympiad’
          button and participate in Olympiad exams.
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
        <h2>MATHS MONTHLY OLYMPIAD CLASS 6</h2>
        <p style={styles.content8P}>
          The monthly Maths Olympiad is an online exam where students of class 6
          can participate. The tests are conducted every month on different
          chapters and sections of the school syllabus. It is one of the best ways
          to ensure maximum practice throughout the year. The Maths Olympiad is
          conducted for 25 minutes, in which students are given 30 multiple choice
          questions to solve. The criteria for judging winners include total
          number of correct answers and the time taken to complete the exam.
          Students can either opt for Maths Olympiad, or the combo pack known as
          the Power Pack exam that includes Maths, Science, English, GK, Essay and
          Drawing.
        </p>
        <p style={styles.content8P}>
          The monthly Olympiads increase confidence in students to tackle any
          question of Mathematics from any chapter. This is because, they are
          exposed to a great deal of practice sessions throughout the year. It not
          only benefits them to get good grades in their school unit tests or
          annual exams, but prepares them for the upcoming Annual Olympiads.
        </p>
        <p style={styles.content8P}>
          The chapter-wise every month practice ensures that students learn at a
          desirable pace. It does not push through concepts, instead it gives
          students a lot of time to think, contemplate and understand each and
          every chapter. It is imperative that students start taking Maths
          seriously. It forms the base for other competitive exams. Getting all
          basics clear at an early age makes it easier for students to handle
          difficult concepts at later stages.
        </p>
      </div>
    </div>
  );
};

export default Class6Page;
