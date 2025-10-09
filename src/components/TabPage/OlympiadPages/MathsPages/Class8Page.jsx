import React, { useState } from "react";

const Class8Page = () => {
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
          <h1 style={styles.textBoxH1}>INTERNATIONAL MATHS OLYMPIAD CLASS 8</h1>
          <p style={styles.textBoxP}>
            As students enter high school, it is imperative that they are given something extra to practice. Students of standard 8 must become confident to answer variety of questions. IMO Book for Class 8 has exactly what is required for them to face national and international competition. It enables students to answer different questions. Minds Marathon offered Mathematics book is quite informative. It engages students deeply. Each chapter is explained using simple language. All chapters have practice questions with answers and explanation to correct answer. Students are encouraged to practice as many questions as possible. This would help them to fare well in their final Olympiad exams. The syllabus is mostly same as prescribed by the school. Thus, such exams enhance students’ school performance as well.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-07.webp"
          alt="International Maths Olympiad Logo"
        />
      </div>

      {/* Content 1 */}
      <div style={styles.content1}>
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR MATHS OLYMPIAD CLASS 8</h2>
        <p style={styles.content1P}>
          Students preparing for the Class 8 Maths Olympiad would do well to make use of both the previous year's questions and the corresponding workbooks. Students can practice for the exam by reading through question papers from previous years and sample questions. Knowing what to expect reduces stress and anxiety, leading to better performance. By reviewing the solutions to problems from previous years, students can gain a deeper understanding of the material and hone their problem-solving skills. In order to make the most of these tools, students in Class 8 Mathematics Olympiad should approach the competition methodically. They can get a head start on their IMO class 8 preparation by learning the basics and then practicing with problems.
        </p>
      </div>

      {/* Content 2 */}
      <div style={styles.content2}>
        <h2 style={styles.content2H2}>MATHS OLYMPIAD SYLLABUS CLASS 8</h2>
        <p style={styles.content2P}>
          The syllabus for Class 8 Olympiad exam is the same as prescribed by school. Students from all boards are welcome to try their hands at the well-known Maths Olympiad. It allows students to look at their capabilities. Class 8 is when students have already stepped into high-school learning. It is from this stage that competitions start to rise up. Olympiad exams can be one of the ways where students are introduced to complex questions. It inculcates conceptual understanding of what is taught in class. It allows them to be thorough in all chapters. The content for class 8 Olympiad has been curated with great deal of accuracy and care. It is strictly as per the curriculum prescribed by the ICSE, CBSE and State boards. Students will be able to understand rational numbers, integers, and whole numbers. Further, they will realize the importance of linear equations. In the 9th and 10th standard, questions are purely based on different equations that include variables. Geometry is going to be another section that is going to be crucial for advanced mathematics. Here, students are taught quadrilaterals, polygons, cubes, hexagons, pentagons and a lot more. Data has become one of the important elements of mathematics. Data handling is thus one of the scoring sections in this subject. Students are taught to look for information, organize data, group data, circle the graph and arrive at conclusions. They are also introduced to square roots and cube roots. They are taught to compare quantities, identify algebraic expressions, visualize solid shapes, exponents, power, factorization and lot more. In short those who master the syllabus of class 8 Olympiads get to play with numbers.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Rational Number</li>
          <li>Chapter 2: Exponents and Powers</li>
          <li>Chapter 3: Square and Square Roots</li>
          <li>Chapter 4: Cube and Cube Roots</li>
          <li>Chapter 5: Math Magic</li>
          <li>Chapter 6: Factorization</li>
          <li>Chapter 7: Comparing Quantities</li>
          <li>Chapter 8: Direct and Indirect Proportion</li>
          <li>Chapter 9: Operation On Algebraic Expressions</li>
          <li>Chapter 10: Understanding Quadrilateral and Practical Geometry</li>
          <li>Chapter 11: Mensuration</li>
          <li>Chapter 12: Data Handling</li>
          <li>Chapter 13: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 3 */}
      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IMO-Maths-Olympiad-Workbook-Class-8.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 8 MATHS OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            Among the many materials available from ITO to help students prepare for the IMO is the IMO book class 8. The many different kinds of problems found in preparation books for the Mathematics Olympiad are a major plus. The purpose of these exercises is to test the analytical and problem-solving skills of the students. When students work through these types of problems, they improve both their understanding of mathematical concepts and their ability to apply those concepts in novel and complex situations. Workbooks typically include both practice problems and thorough explanations and solutions to those problems. Seeing the thought processes behind the solutions helps students internalize the information. In addition, students can use these explanations to prepare for upcoming Olympiad examinations and improve their chances of achieving top scores.
          </p>
        </div>
      </div>

      {/* Content 4 */}
      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>CLASS 8 MATHS OLYMPIAD PREVIOUS YEAR QUESTION PAPER</h2>
          <p style={styles.content4P}>
            Students can benefit greatly from using the IMO class 8 previous year papers as educational resources due to their usefulness. Students ought to approach question papers from earlier years in a methodical manner and make an effort to solve these papers under conditions similar to those found in examinations. As a method of better simulating the conditions of the actual exam, setting a time limit and sticking to it religiously can be helpful. Students benefit from this practice by gaining better time management skills and becoming more accustomed to the pressure of having to find answers to questions within a predetermined amount of time. They should begin by answering the questions they already know the answers to. Then they can move on to the more difficult questions, giving each one the attention it deserves. In order to do well on the exam itself, it is essential to carefully read the questions, comprehend the material presented, and competently apply the relevant concepts and problem-solving strategies.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-08.webp"
          alt="PYQ"
        />
      </div>

      {/* Content 5 */}
      <div style={styles.content5}>
        <h2>CLASS 8 MATHS ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          It is essential for students to develop a systematic study plan for Class 8 Maths Annual Olympiad and Monthly competitions. These exams can be opted for based on student’s convenience and availability. When preparing for the Olympiads, the student’s should allocate time for revising the foundational concepts, solving practice problems, and attempting mock tests. A well-structured study plan ensures that students cover all the necessary topics, identify their areas of weakness, and track their progress. Students can improve their exam scores and overall grades by studying hard and using a variety of study methods. This will give them an advantage over their peers when it comes to grasping the course's concepts and materials. To better understand the Olympiads, students can look into the course outline and schedule for the same.
        </p>
      </div>

      {/* Content 6 */}
      <div style={styles.content6}>
        <h2>MATHS ANNUAL OLYMPIAD CLASS 8</h2>
        <p style={styles.content6P}>
          The annual Maths Olympiad are held twice a year – December and February. Students can select any of the slots and participate accordingly. These are also online tests similar to the monthly Olympiads. However, the annual Maths Olympiad is conducted for a duration of 45 minutes, in which students have to answer 50 questions. Being in class 8, the level of difficulty is high. Students of class 8 are made to understand complex questions. Those who have studied thoroughly throughout the year can solve all questions at ease.
        </p>
        <p style={styles.content6P}>
          Minds Marathon shares tips and tricks to improve students’ performance. It is of the opinion that all students are equal. All of them have the same level of intellect. Hard work, determination, and dedication all put together brings out desired results.
        </p>
        <p style={styles.content6P}>
          Students can make a list of important concepts, clear all doubts well in advance. The motive of conducting monthly Olympiads is to prepare them for annual Olympiads and also school exams. It is a good practice to go through previous year’s question papers to understand paper format. Students must maintain a schedule to study for Olympiads. Understanding basic concepts while preparing for the exam is a good practice. Maths can be learnt easily when students use flowcharts and diagrams to study. It is a good practice to understand different types of problems and solve each of one them. It is essential to know theories and concepts, but it is imperative to learn their application. Pick out formulas, make your own notes, solve the difficult questions first as they would take more time, and most importantly practice every day.
        </p>
        <p style={styles.content6P}>
          Whether it is for Olympiads or for other school exams, students can gain mastery over Maths only when they practice every day. Minds Marathon tests ensure that students are given maximum questions to become thorough in topics. For more details on the class 8 annual Olympiad, please click the link below.
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
        <h2>MATHS MONTHLY OLYMPIAD CLASS 8</h2>
        <p style={styles.content8P}>
          The monthly Olympiads for class 8 are one of the most useful exams in today’s times. Here, students can practice chapter-wise questions every month. The monthly Olympiads are online exams that can be attempted using any tablet or smart phone. Students are given 30 questions to solve within a time limit of 25 questions. It helps them to increase their speed and find the right answer well in time. The monthly Olympiad ensures that students practice questions from all topics, so that they do not have any difficulty at the end of the year.
        </p>
        <p style={styles.content8P}>
          It is one of the secrets to score good marks in mathematics. Practicing and revising the same concepts helps students to achieve a good score. Maths is one such subject where students can score full marks, thus they should make the most of it.
        </p>
        <p style={styles.content8P}>
          The monthly Olympiads are aimed to make learning easy. The other subjects in which students can opt for these tests are the power pack exam that includes Maths, Science, English, GK, Drawing, and Essay. Minds Marathon assures all students that they won’t be disappointed. These tests are sure to improve school performance.
        </p>
      </div>
    </div>
  );
};

export default Class8Page;
