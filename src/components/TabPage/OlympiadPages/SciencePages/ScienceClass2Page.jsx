
import React from "react";

const Class2Page = () => {
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
      marginTop: "0px",
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

  return (
    <div style={styles.body}>
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>
            INTERNATIONAL SCIENCE OLYMPIAD <br />
            CLASS 2
          </h1>
          <p style={styles.textBoxP}>
            International Science Olympiad (ISO) exam is an Olympiad exam open
            for students studying in class 2. This exam is conducted across the
            world with several school students actively taking part. Books for
            the same are designed by experts from Minds Marathon, who are
            professionals in the field of science. The content is structurally
            divided into segments, easy to understand. It makes students
            familiar with different topics covered in school. Thus, it includes
            the school syllabus as well. Books cater to different boards namely
            State boards, International boards, CBSE & ICSE boards. Science
            Olympiad for class 2 exams helps students to prepare a strategy to
            score well in their school academics as well. These books form the
            foundation for other competitive exams as well. It is the best way
            to prepare oneself for National and International competitions. The
            book’s content is easy for students to read and comprehend. The
            language used is student-friendly.
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
          PREPARATION MATERIAL FOR SCIENCE OLYMPIAD CLASS 2
        </h2>
        <p style={styles.content1P}>
          Preparation material for the class 2 Science Olympiad is made
          available by Minds Marathon. The study material includes Workbooks and
          Previous year question papers. Through practice from this study
          material can help students to boost up their confidence in Science
          subject and perform well in the competitive exam.
        </p>
      </div>

      <div style={styles.content2}>
        <h2 style={styles.content2H2}>SCIENCE OLYMPIAD SYLLABUS CLASS 2</h2>
        <p style={styles.content2P}>
          The syllabus of the Olympiad exam is the same as prescribed by
          schools. Class 2 students thus can focus on additional practice if
          they use Olympiad workbooks to study for their exams. It tests their
          knowledge on the same topics that are taught in class. However,
          Olympiad exams are beneficial as they act as extra guidance for
          students of grade 2. There may at times be a limitation to classroom
          learning and the questions asked in school textbooks. When students
          refer to Olympiad workbooks, it opens their thinking horizon and
          encourages them to look into concepts in a deeper way. It supports a
          better understanding of topics discussed in class. Students are able
          to relate to concepts very easily. Parents can check and compare the
          syllabus for class 2 to understand the topics that would be covered in
          the Olympiads.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Food, Clothing And Shelter</li>
          <li>Chapter 2: Know Your Body</li>
          <li>Chapter 3: Plants Around Us</li>
          <li>Chapter 4: Animals Around Us</li>
          <li>Chapter 5: Air, Water And Weather</li>
          <li>Chapter 6: Places In The Neighbourhood</li>
          <li>Chapter 7: Good Habits And Safety Rule</li>
          <li>Chapter 8: Transport And Communication</li>
          <li>Chapter 9: Festival And Celebration</li>
          <li>Chapter 10: Occupation</li>
          <li>Chapter 11: The World Around Me: Sun, Moon, Sky And Stars</li>
          <li>Chapter 12: Time, Space, Direction</li>
        </ul>
      </div>

      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-workbook-class-2.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 2 SCIENCE OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            For students participating in the International Science Olympiad
            Class 2, the workbooks offer comprehensive preparation material.
            They contain a wide range of questions, helping students improve
            their problem-solving skills and logical reasoning abilities.
            Additionally, the workbooks provide ample practice opportunities,
            allowing students to reinforce their knowledge and assess their
            progress. Using a workbook in Science Olympiad participation is
            beneficial for students as it fosters independent learning and
            self-assessment. The structured format of the workbook enables
            students to organize their learning, track their strengths and
            weaknesses, and identify areas that require further attention. It
            also encourages a systematic approach to studying. These workbooks
            offer a well-rounded learning experience and serve as an
            indispensable tool for students aiming to excel in the field of
            science.
          </p>
        </div>
      </div>

      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>
            CLASS 2 SCIENCE OLYMPIAD PREVIOUS YEAR QUESTION PAPER
          </h2>
          <p style={styles.content4P}>
            Students can benefit from using the Olympiad Previous Year Question
            Papers as a resource in several ways. The young, bright minds can
            build their self-confidence and become more familiar with different
            question formats, such as multiple-choice questions and more, by
            practicing with question papers from previous years. This exposure
            helps them effectively respond to similar questions during the
            actual Science Olympiad for Class 2. This resource is also quite
            useful for developing time management skills and identifying
            probable weak areas, allowing students to focus on improvement and
            strengthen their overall performance.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-previous-year-question-paper-class-2.webp"
          alt="PYQ"
        />
      </div>

      <div style={styles.content5}>
        <h2>CLASS 2 SCIENCE ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          The Annual and Monthly Science Olympiad for Class 2 offers a unique
          and continuous learning experience for students interested in science.
          By participating in the Monthly Olympiad, students engage in regular
          practice and assessment, honing their scientific knowledge and
          problem-solving abilities. The Olympiad provides students with a
          consistent opportunity to apply their knowledge, reinforcing concepts
          and ensuring a deep understanding of scientific principles.
          Additionally, these exams cultivate discipline and time management
          skills as students prepare for the challenges. The ongoing nature of
          the Olympiad allows students to track their progress over time,
          identify areas of improvement, and work towards continuous growth and
          academic excellence. The choice of format the student is comfortable
          with can be opted for by them. The schedule for each has been made
          live so that students get to prepare for it well.
        </p>
      </div>

      <div style={styles.content6}>
        <h2>SCIENCE ANNUAL OLYMPIAD CLASS 2</h2>
        <p style={styles.content6P}>
          Similar to monthly Olympiads, these are also tests that are conducted
          online. The only difference is that the number of subjects in which
          students can appear annually is more. They can choose any one or all
          the exams as per their liking. Minds Marathon conducts all these exams
          on different dates to make it easy for participants to participate in
          all exams.
        </p>
        <p style={styles.content6P}>
          Students who have already enrolled themselves for the monthly
          Olympiads find it very easy to attempt the annual exams. This is
          because they have already practiced throughout the year for these
          exams. The annual Olympiads consist of 35 questions for class 1 to
          class 4 and 50 questions for class 5 to class 10. Students are given a
          limited time frame to attempt all exams. However, the Drawing exam
          lasts for 60 minutes and the Essay exam lasts for 40 minutes
          respectively. These exams are conducted during the months of December
          and February.The annual Olympiads have become the new normal in the
          21st century. This era has seen a drastic rise in the use of
          information and technology. With parents working from home, students
          are also given the chance to upskill themselves while sitting at home.
        </p>
        <p style={styles.content6P}>
          E-learning has become the new norm among today’s generation. Minds
          Marathon believes in staying up-to-date with technology. It ensures
          that all its participants witness the unique experiences of online
          exams. Science Olympiad for class 2 includes subjective questions that
          are part of the school syllabus, logical reasoning questions, and
          higher-order thinking questions. It aims to prepare them for their
          future. The logical reasoning section is a part and parcel of all
          Olympiads conducted by Minds Marathon.
        </p>
        <p style={styles.content6P}>
          To know more about the upcoming exam timetable please click the button
          below.
        </p>
      </div>

      <div style={styles.content7}>
        <button
          style={styles.content7Button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.color = "#fff";
            e.target.style.boxShadow = "0 6px 12px rgba(11,11,11,0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#007bff";
            e.target.style.boxShadow = "none";
          }}
        >
          Register now
        </button>
      </div>

      <div style={styles.content8}>
        <h2>SCIENCE MONTHLY OLYMPIAD CLASS 2</h2>
        <p style={styles.content8P}>
          Monthly Olympiads are unique examinations conducted by Minds Marathon.
          As the name suggests, these are conducted every month. These tests
          have become popular to be known as student tests at home. These can be
          taken from any smartphone or tablet from home. The best part of these
          tests is that students who enroll for the Monthly Olympiads get to
          practice unlimited questions from the subject. It acts as immense
          practice before the Annual Olympiad. The monthly test subjects include
          Maths, Science, English, GK, Drawing, and Essay.
        </p>
        <p style={styles.content8P}>
          Minds Marathon believes in encouraging both conventional and
          non-conventional subjects as part of its exams. That is why, it gives
          equal importance to common subjects such as Mathematics, English, and
          Science, and other exceptional subjects such as Drawing and Essay. It
          believes that students must be allowed to choose for themselves. This
          gives rise to decision-making skills from a young age.Students of
          grade 2 may seek help from their parents to read the questions of
          monthly Olympiads. Parents are requested to play the role of
          invigilators while the exam is conducted. The monthly Olympiads offer
          numerous benefits to its students. It keeps children engaged in the
          most productive manner. Today’s generation has seen children glued to
          mobile phones and tablets for the wrong reasons. Many parents complain
          that it becomes difficult to stop kids from playing games on their
          phones. Instead, if parents involve them in online learning and make
          them participate in Olympiads, the screen time can be used in the most
          productive manner. It enhances knowledge, helps to polish the brain,
          and assists students to understand concepts in an easy way.
        </p>
        <p style={styles.content8P}>
          Students can participate in monthly Olympiads any time between 10:00
          am and 6:00 pm on particular exam dates. These exams are for 25
          minutes. All questions are framed using the multiple-choice question
          format with four options. Minds Marathon believes in encouraging all
          participants, thus announces winners of the monthly Olympiads. It
          offers exciting cash prizes and scholarships to those who fare well in
          these exams.
        </p>
        <p style={styles.content8P}>
          For more information on the monthly Olympiads, please click on the
          link below. Register today for these exams to begin your journey in
          the field of excellence.
        </p>
      </div>
    </div>
  );
};

export default Class2Page;
