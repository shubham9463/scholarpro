import React, { useState } from "react";

const Class5Page = () => {
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
          <h1 style={styles.textBoxH1}>INTERNATIONAL MATHS OLYMPIAD CLASS 5</h1>
          <p style={styles.textBoxP}>
            Various organizations across the country conduct International
            Mathematics Olympiad. Minds Marathon is one of the premium
            organizations that have collaborated with schools all over India. This
            exam is for all boards namely State boards, CBSE board, ICSE board and
            other International boards. The organization provides study material
            in the form of IMO Book for Class 5 that contain detailed information
            on entire syllabus. This exam has become popular since there are many
            students who are awarded for their excellent performance in this exam.
            Schools have now started to identify students who want to excel in
            Mathematics. This exam is for all of those who want to participate in
            various national and international level competitive exams.
            Mathematics is one subject that requires a lot of practice. In order
            to make learning enjoyable, Minds Marathon books are divided into
            different segments. As an additional benefit to the students, logical
            reasoning section is also given at the end of the book. Each segment
            has questions and answers at the end.
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
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR MATHS OLYMPIAD CLASS 5</h2>
        <p style={styles.content1P}>
          The successful preparation for the Class 5 Maths Olympiad requires the
          students to make use of effective study materials, such as previous year
          question papers and workbooks. Study for the Class 5 Mathematics
          Olympiad with the help of the subject-specific workbooks and practice
          from a previous year paper to develop a firm grasp over the subject
          matter. Many different areas of mathematics and approaches to solving
          problems are discussed in these educational resources. These materials
          serve as roadmaps, outlining the subject matter in an organized fashion
          that facilitates effective studying. Students can improve their
          understanding of mathematical ideas, their facility with solving a
          variety of relevant problems, and their ability to think analytically by
          using the aforementioned supplementary materials. There is a wide
          selection of these formats for students to choose from to perform well
          in the exam.
        </p>
      </div>

      {/* Content 2 */}
      <div style={styles.content2}>
        <h2 style={styles.content2H2}>MATHS OLYMPIAD SYLLABUS CLASS 5</h2>
        <p style={styles.content2P}>
          When students enter grade 5, they begin to learn factors using LCM and
          HCF. They are introduced to addition, subtraction, multiplication,
          division of factors, and decimals. Moreover, they are taught new
          concepts of ratio and percentages. The geometry section is a little
          advanced with problems that are based on perimeter and area. They also
          understand the concept of volume. Students of class 5 learn different
          methods of solving a problem. They must be encouraged to use their own
          approach to arrive at the correct solution. Olympiad exams are the best
          way to inculcate the habit of using individual approaches. The syllabus
          of Olympiad exam is the same as prescribed by school. However, the same
          questions are asked very differently in Olympiads. It paves way to free
          and unrestrained thinking. Minds Marathon has a team of talented
          teachers who are committed to ensure that students develop strong
          logical reasoning skills. Each and every question that is a part of the
          Maths Olympiad syllabus for class 5 is carefully designed. The
          analytical skills applied to solve these questions will help students to
          be applied in all other future competitive exams. Olympiad exams are
          considered to be all-inclusive that contain reliable information. It is
          as per the norms prescribed by all boards, namely the CBSE, ICSE, and
          other State boards. Thus, no matter which board your school refers to,
          you are welcome to be a part of Olympiad exams.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Concept of Geometry</li>
          <li>Chapter 2: Number System</li>
          <li>Chapter 3: Factors & Multiples</li>
          <li>Chapter 4: Addition & Subtraction</li>
          <li>Chapter 5: Multiplication & Division</li>
          <li>Chapter 6: Fractions & Decimals</li>
          <li>Chapter 7: Measurement</li>
          <li>Chapter 8: Data Handling</li>
          <li>Chapter 9: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 3 */}
      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IMO-Maths-Olympiad-Workbook-Class-5.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 5 MATHS OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            Workbooks are among the various resources put out by ITO to help
            students better prepare for IMO class 5 .One of the most important
            advantages of the IMO book class 5 is the fact that they provide a
            diverse selection of problems to be practiced. The students' capacity
            for critical thinking and problem-solving has been purposefully and
            thoughtfully challenged by the selection of these problems. Students
            not only improve their comprehension of mathematical principles by
            working through these exercises, but they also gain experience in
            applying those principles in unfamiliar and difficult contexts. They
            will be better equipped to handle the difficult challenges that they
            may face during the actual Olympiad as a result of this preparation.
          </p>
        </div>
      </div>

      {/* Content 4 */}
      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>CLASS 5 MATHS OLYMPIAD PREVIOUS YEAR QUESTION PAPER</h2>
          <p style={styles.content4P}>
            To enhance the learning experience when preparing for an examination,
            students can make use of resources such as IMO class 5 previous year
            papers. Further a healthy exchange of ideas, exposes students to
            different problem-solving techniques, and expands their perspectives.
            Last but not least, students ought to look at the question papers from
            the previous year's Mathematics Olympiad as a learning opportunity
            rather than merely as an assessment tool. Each question presents a
            unique challenge and provides valuable insights into the intricacies
            of mathematical problem-solving. Students can derive the greatest
            possible benefit from solving these papers and improve their overall
            mathematical capabilities if they embrace the learning aspect and make
            it a priority.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-05.webp"
          alt="PYQ"
        />
      </div>

      {/* Content 5 */}
      <div style={styles.content5}>
        <h2>CLASS 5 MATHS ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Students in Class 5 should approach the Annual Maths Olympiad and
          Monthly competitions with a growth mindset in order to make the most of
          their participation in them. They should use these competitions as
          opportunities for personal development and growth. Students are able to
          gain the most possible benefit from the challenges if they embrace the
          educational component. Those who participate in this process of critical
          thinking, learn to think in novel and original ways, gain
          intellectually, improve their ability to make decisions, and are
          encouraged to think creatively. Students can strengthen their
          understanding of the subject matter as well as the associated concepts,
          which will benefit their studies as a whole, if they prepare thoroughly
          for examinations using a variety of different resources. They will have
          a better understanding of the material and the ideas connected to it
          than any of their classmates as a result of this, which will put them in
          the lead.
        </p>
      </div>

      {/* Content 6 */}
      <div style={styles.content6}>
        <h2>MATHS ANNUAL OLYMPIAD CLASS 5</h2>
        <p style={styles.content6P}>
          The Annual Olympiads are similar to Monthly Olympiads. These are also
          online exams conducted twice a year – in December and February. Students
          can register for any of these slots as per their availability and
          convenience. The Online Maths Olympiad is conducted for a duration of 45
          minutes. Students are given 50 multiple choice questions to solve. Thus,
          they need to have excellent calculative abilities, so as to calculate
          all questions and arrive at the right answer. The distractors of the
          questions are usually confusing. However, those who have mastered
          concepts well in advance, are able to find the correct answer. The other
          subjects in which the annual Olympiads are conducted are IScience,
          English, General Knowledge, Computer, Drawing, Essay and Social Studies.
        </p>
        <p style={styles.content6P}>
          Olympiad exams offer several benefits to participants. It makes them
          thorough in the subject of their choice. It helps them to develop their
          strengths, at the same time work on their weaknesses. It helps parents
          to understand the academic capacity of their children. Minds Marathon
          provides workbooks in most of Olympiad subjects. These books are full of
          complex questions, and solutions that are very helpful to prepare for
          school tests. Those who participate in Olympiads, find it easy to
          attempt questions in their final exams.
        </p>
        <p style={styles.content6P}>
          Olympiad exams include logical reasoning as an important section of the
          exam. This exam tests students’ thinking abilities. It questions their
          analytical skills. Students have to solve questions based on patterns,
          relations, colours, series and more other logical parameters. It
          develops both sides of the young brain. Researchers believe that brain
          development happens in the formative years of students’ life. Olympiad
          exams are the best way to train the brain in the right direction.
        </p>
        <p style={styles.content6P}>
          The website provides all details about the exam. Download the brochure
          from the website for details on annual Olympiads. To know more about the
          upcoming Olympiads, and to participate in these exams, please click the
          link below:
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
        <h2>MATHS MONTHLY OLYMPIAD CLASS 5</h2>
        <p style={styles.content8P}>
          The monthly Maths Olympiad is conducted every month. It is an online
          exam that can be taken any time between 10:00 am and 6:00 pm. Students
          can participate in these exams using any smart phone or tablet. The
          syllabus and the schedule of monthly Olympiads are mentioned on the
          website. The duration for the Maths Olympiad is 25 minutes in which,
          students are given 30 questions to solve. The complexity of these
          questions varies with every test. These tests are conducted chapter-
          wise, throughout the year.
        </p>
        <p style={styles.content8P}>
          Thus, it gives a lot of time for students to understand each and every
          single chapter of Mathematics. The questions in Olympiads challenge
          students to develop efficient ways to tackle different topics. All
          sections are prominently featured so as to give equal weightage to all
          topics. Students who participate in the monthly Olympiads are able to
          build strong fundamentals. Minds Marathon believes in making all
          children capable to develop excellent conceptual knowledge on all
          subjects. Thus, the monthly Olympiads or the power packs are conducted
          in Maths, Science, English, GK, Essay and Drawing. Those offering for
          the power pack exam will be able to participate in all these subjects.
          It is one of the best ways additional practice can be ensured for
          students of class 5.
        </p>
        <p style={styles.content8P}>
          To register students for the monthly Olympiads, please visit the
          registration page and get enrolled today. All details regarding the exam
          dates, syllabus, timing, and schedule in available on the website.
        </p>
      </div>
    </div>
  );
};

export default Class5Page;
