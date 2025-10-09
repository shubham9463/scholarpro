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
      marginTop: "0px",
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
            INTERNATIONAL MATHS OLYMPIAD <br />
            CLASS 1
          </h1>
          <p style={styles.textBoxP}>
            Maths Olympiad for Class 1 enables students to focus on variety of
            questions. The syllabus of this exam is same as prescribed by the
            school for standard 1. It caters to all boards in general namely
            State boards, CBSE board, ICSE board and other International boards.
            The advantage of Mathematics Olympiad is that it gives them the
            confidence to participate and compete at national levels.
            Mathematics requires dedication and hard work, which is why
            Mathematics Olympiad exam is given a lot of emphasis. IMO book for
            class 1 contains chapter-wise multiple choice questions with answers
            and explanations to the questions. It also contains logical reasoning
            section at the end of the book for students to help them think out of
            the box. The books are designed by experts in the field, who know
            what exactly is expected out of students from class 1. IMO has
            become the most sought after exams in most schools these days.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-Maths-Olympiad-Logo_315x143px.webp"
          alt="International Science Olympiad Logo"
        />
      </div>

      <div style={styles.content1}>
        <h2 style={styles.content1H2}>
          PREPARATION MATERIAL FOR MATHS OLYMPIAD CLASS 1
        </h2>
        <p style={styles.content1P}>
          In order to be successful in preparation for the Maths Olympiad for
          Class 1, one needs effective study materials and previous year's
          question papers and workbooks play an essential role in this regard.
          Workbooks that were developed specifically for the Class 1
          Mathematics Olympiad provide extensive coverage of the syllabus. This
          coverage includes a variety of mathematical concepts and approaches to
          problem-solving. These workbooks take a more organized and methodical
          approach to teaching and learning topics by presenting them in a
          sequential order. Students can improve their understanding of
          mathematical concepts, practice solving a variety of problems, and
          develop their critical thinking skills by using the mentioned
          preparatory resources. These are offered in a number of different
          formats for convenience.
        </p>
      </div>

      <div style={styles.content2}>
        <h2 style={styles.content2H2}>MATHS OLYMPIAD SYLLABUS CLASS 1</h2>
        <p style={styles.content2P}>
          Olympiad exams for class 1 can be an excellent skill development
          program for the tiny tots. Students of class 1 would have learnt to
          play with numbers till their senior KG. It is now when they are slowly
          introduced to concepts such as addition, subtraction, number names,
          shapes, sizes, money, and lot more. Teachers try to introduce
          mathematics in a playful manner. Most schools use practical objects to
          show how numbers are added or subtracted. The activity based learning
          helps students to remember concepts well. It becomes very interesting
          when they play small games using money. Children learn better when
          parents involve them in small calculations of everyday life. Some of
          the fun games that can be played with class 1 students are vegetable
          vendor and customer, counting money in your piggy back, using shapes
          to draw, and lot more. Minds Marathon Maths Olympiad uses interactive
          and engaging questions. The syllabus for this exam is the same that is
          taught in school. All parents interested to enroll their young ones
          for these exams can check and compare the curriculum below.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Shapes and Sizes</li>
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

      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IMO-Maths-Olympiad-Workbook-Class-1.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 1 MATHS OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            Mathematics Olympiad workbooks, such as the IMO Book Class 1, are
            excellent resources for students preparing for the competition. The
            purpose of these workbooks is to provide comprehensive coverage of
            the mathematical concepts and problem-solving techniques that are
            required for success in mathematical competitions such as the
            International Mathematics Olympiad. They have been designed
            specifically to cater to the needs of Olympiad aspirants from class
            1. Students are able to develop a solid foundation in mathematics
            through the use of their structured approach to learning, which
            presents the subject matter in a sequential and organized fashion.
            One can avail of these resources with ease to prepare well for the
            IMO class 1.
          </p>
        </div>
      </div>

      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>
            CLASS 1 MATHS OLYMPIAD PREVIOUS YEAR QUESTION PAPER
          </h2>
          <p style={styles.content4P}>
            IMO Class 1 previous year papers are invaluable resources for
            students preparing for the Mathematics Olympiad. These papers provide
            the students with a glimpse into the actual exam format, question
            types, and difficulty level, making them essential for effective
            preparation. By solving previous year's question papers, students
            can familiarize themselves with the Olympiad pattern, identify their
            strengths and weaknesses, and develop effective strategies to
            approach different types of questions. One of the primary benefits of
            using Mathematics Olympiad previous year question papers is that they
            help students understand the exam pattern and structure. By going
            through these papers, students become familiar with the number of
            questions, time constraints, and marking scheme, enabling them to
            plan their exam strategy accordingly. This familiarity reduces the
            anxiety associated with the exam and boosts confidence.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-01.webp"
          alt="PYQ"
        />
      </div>

      <div style={styles.content5}>
        <h2>CLASS 1 MATHS ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Students in Class 1 receive significant benefits along their journey
          of strengthening their understanding of the various concepts of math.
          It is by participating in the Annual Maths Olympiad or the Monthly
          Olympiads, that the students have the opportunity to demonstrate
          their proficiency in all that they have learnt, in areas such as
          mathematical, logical reasoning, and the ability to solve problems,
          and more . It is through participation in these competitions that the
          young minds get to know where they stand with their peers and
          get topracticee and prepare for participation in competitive exams of
          subjects that interest them. Students who take part in mathematics
          Olympiads are not only able to hone their competitive skills, boost
          their self-assurance, but they also further develop their passion for
          the subject.
        </p>
      </div>

      <div style={styles.content6}>
        <h2>MATHS ANNUAL OLYMPIAD CLASS 1</h2>
        <p style={styles.content6P}>
          Annual Olympiads are similar to the monthly tests, the difference being,
          the subjects for the annual Olympiads are varied, with an increased time
          limit and an increase in the number of questions. These are also online
          tests that are conducted twice in a year – December and February. Most
          subjects are conducted for 45 minutes, in which students have to solve
          50 multiple choice questions. The drawing exam is for 60 minutes, in
          which students have to draw and color any given topic. Being online
          tests, it is mandatory for all participants to keep the audio and video
          recording switched on at all times during the test. A picture of the
          drawing has to be uploaded within the given time.
        </p>
        <p style={styles.content6P}>
          Similarly, the essay Olympiad also provides topics on which students
          have to frame their essays. This exam is conducted for 40 minutes. The
          rules for all annual Olympiads remain the same irrespective of the
          subject chosen. Please visit the terms and conditions page on the
          website to know more about the rules and regulations. Students of class
          1 are at a tender age where they start from the basics. It is imperative
          for parents and teachers to make their tryst with the subject easy.
        </p>
        <p style={styles.content6P}>
          It is a good age to introduced math vocabulary, develop number sense
          rather than simply memorizing, and teach them easy tips and tricks to
          learn maths with ease. Students of class 1 can be introduced to Sudoku,
          which involves mathematical thinking using deductive reasoning and
          algorithms. There might be no arithmetic involved in Sudoke, but it
          alleviates intellectual abilities of all participants. The questions in
          Maths Olympiad are all logic-based. It increases students’ rational
          thinking, perceptive abilities and makes them better at analyzing
          questions.
        </p>
        <p style={styles.content6P}>
          To know more about the upcoming Olympiads, please click the button
          below:
        </p>
      </div>

      <div style={styles.content7}>
        <button style={styles.content7Button}>Register now</button>
      </div>

      <div style={styles.content8}>
        <h2>MATHS MONTHLY OLYMPIAD CLASS 1</h2>
        <p style={styles.content8P}>
          The monthly Olympiad in Maths is the best thing that can be offered to
          all students. The monthly tests act as immense practical practice for
          all participants. Students can run-through chapter wise questions
          each month sitting at home using any smart phone or tablet. It is one
          of the best exercises that can be inculcated for all classes, from
          class 1 to class 10. These online tests are conducted each month
          following a timetable. It can be taken any time between 10:00 am and
          6:00 pm.
        </p>
        <p style={styles.content8P}>
          The duration of the monthly Olympiads is 25 minutes, in which students
          are asked 30 questions. Students can participate in Science, Maths,
          English, Drawing, GK and Essay. The pattern for the drawing and the
          essay exam is a little different as compared to other exams. Here,
          students have to showcase their creativity through drawing/ write-ups
          and win the Olympiad.
        </p>
        <p style={styles.content8P}>
          The power pack exams allow students to participate in all exams of
          Olympiads as mentioned above. Please register to participate in the
          finest exams of the century – The Olympiads.
        </p>
      </div>
    </div>
  );
};

export default Class1Page;
