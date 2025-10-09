import React from "react";

const Class8Page = () => {
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
            INTERNATIONAL SCIENCE OLYMPIAD <br /> CLASS 8
          </h1>
          <p style={styles.textBoxP}>
            International Science Olympiad for class 8 (ISO) exams for students
            of standard 8 prepare students for international level competitions.
            The syllabus of this exam is the same as the school syllabus of
            different boards. Thus, students would be prepared to face the
            competition at international level. This exam enhances existing
            knowledge and allows students to explore different types of
            questions. Workbooks by Minds Marathon provide in-depth knowledge on
            different topics. The content for the same is designed by experts
            from different fields of science. Some of the topics included in
            this book are biological diversity, diseases, the structure of the
            cell, metals & non-metals, pollution, light, respiration, the
            structure of an atom, and many more topics. Each topic has
            chapter-wise questions and answers with explanations to correct
            answers. The Olympiad books for class 8 help students to study for
            their school science exam and score well.
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
          PREPARATION MATERIAL FOR SCIENCE OLYMPIAD CLASS 8
        </h2>
        <p style={styles.content1P}>
          Minds Marathon provides a wealth of materials for students to use in
          their preparation for the Class 8 Science Olympiad, such as workbooks
          and question papers from previous years. These resources are designed
          to complement school curricula and offer comprehensive information on
          a wide range of subjects. These can be used as a systematic review
          tool to help students solidify their understanding of key scientific
          concepts. Workbooks provide students with examples of work, practice
          problems, and detailed explanations. Students are able to track their
          progress using the organized method, identify the areas in which they
          need improvement, and focus their efforts on acquiring a deeper
          understanding of particular subject areas. Exam question papers from
          previous years are beneficial to students because they provide a
          preview of the question format that they can anticipate seeing on the
          day of the test.
        </p>
      </div>

      <div style={styles.content2}>
        <h2 style={styles.content2H2}>SYLLABUS FOR OLYMPIAD CLASS 8</h2>
        <p style={styles.content2P}>
          Class 8 is the turning point in students’ life. It is now that
          students have entered high school and maybe a little clearer about
          what they want to pursue in their careers. The science Olympiad helps
          students to understand the syllabus and prepare for both school exams
          as well the Olympiad exams. It creates the best foundations that are
          required in the times to come. These are years when students have to
          create a very strong base so that they can crack any competitive exam
          in the future. Most students who enter class 8, start looking out for
          reference material, and other books to find important questions. The
          syllabus of the Olympiad will help them to prepare and start with
          revision. It compiles all chapters that are included in the school
          curriculum. The portion set for Olympiad exams helps them to analyze
          questions, and form answers based on their analysis. The class 8
          Science Olympiad is one of the most fascinating subjects. It includes
          interesting topics about light, current, human beings, force, solar
          system, energy, atmospheric pressure, pollution, metals, non-metals,
          soil, and agriculture. Students find it easy to relate to these
          topics, as most of the examples can be found in our everyday living.
          Parents, students, and teachers can compare the syllabus of class 8
          Science Olympiad with the list of chapters given below.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Matter In Our Surroundings</li>
          <li>Chapter 2: Physical Quantities And Measurement</li>
          <li>Chapter 3: Light</li>
          <li>Chapter 4: Energy And Its Forms</li>
          <li>Chapter 5: Electricity</li>
          <li>Chapter 6: Biological Diversity</li>
          <li>Chapter 7: Soil And Agriculture</li>
          <li>Chapter 8: Human Health And Disease</li>
          <li>Chapter 9: Transport Of Food And Minerals In Plants</li>
          <li>Chapter 10: Reproduction In Plants And Animals</li>
          <li>Chapter 11: Ecosystem</li>
          <li>Chapter 12: Properties Of Substance</li>
          <li>Chapter 13: Chemical Reaction</li>
          <li>Chapter 14: Pollution</li>
          <li>Chapter 15: Carbon And Its Compound</li>
        </ul>
      </div>

      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-workbook-class-8.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>
            CLASS 8 SCIENCE OLYMPIAD WORKBOOK
          </h2>
          <p style={styles.content3P}>
            Young minds have a wonderful opportunity to explore the world of
            science through engaging and interactive Class 8 Science Olympiad
            workbooks. The purpose of these workbooks is to ensure that students
            acquire a solid foundation in scientific concepts in accordance with
            the curriculum and syllabus of Grade 8. With the aid of these
            workbooks for the Science Olympiad for class 8, students can enhance
            their comprehension of fundamental scientific concepts, develop
            their critical thinking skills, and solve problems. These are
            excellent resources for preparing for the International Science
            Olympiad, as they cover a vast array of topics and challenges
            typically encountered in such competitions.
          </p>
        </div>
      </div>

      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>
            CLASS 8 SCIENCE OLYMPIAD PREVIOUS YEAR QUESTION PAPER
          </h2>
          <p style={styles.content4P}>
            The Science Olympiad previous year question papers for Class 8 serve
            as an invaluable resource to prepare students for the upcoming
            competition. These question papers provide a glimpse into the format
            and type of questions that may be asked in the International Science
            Olympiad for Class 8, allowing students to familiarize themselves
            with the exam pattern. By practicing with previous year question
            papers, students gain a clear understanding of the topics and
            concepts that are frequently tested in the exam. This helps them
            focus their study efforts and identify areas where they need to
            improve. Additionally, solving previous year's question papers
            enhances time management skills and exam-taking strategies. Students
            become accustomed to the time constraints and learn how to allocate
            their time effectively to each section or question.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-previous-year-question-paper-class-8-ito.webp"
          alt="PYQ"
        />
      </div>

      <div style={styles.content5}>
        <h2>CLASS 8 SCIENCE ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Enrolling in the Science Annual or Monthly Olympiad for class 8
          exposes students to a diverse range of scientific challenges. Students
          are frequently required to engage in critical thinking, data analysis,
          and creative solution generation in order to successfully complete the
          questions and problem-solving scenarios that make up the Olympiad.
          This exposure to complex and thought-provoking problems develop
          students' higher-order thinking skills and equips them with the
          ability to tackle real-world scientific challenges quite effectively.
          Students are free to select from either the examinations that are held
          on an annual basis or those that are held on a monthly basis under the
          Olympiad exam formats based upon their convenience.
        </p>
      </div>

      <div style={styles.content6}>
        <h2>SCIENCE ANNUAL OLYMPIAD CLASS 8</h2>
        <p style={styles.content6P}>
          The annual Olympiads are the most talked-about exams in town. This is
          because, these are conducted only twice a year – in December and
          February respectively. These exams are available in subjects such as
          Maths, English, General Knowledge, Computer, Drawing, Essay, and
          Social Studies. Students can opt for one or all the exams and
          participate in the same as per the exam timetable.
        </p>
        <p style={styles.content6P}>
          Most of the exams are conducted using the multiple-choice question
          format, except for the essay and the drawing exam. Rest all Online
          Annual exams are held for 45 minutes, whereas the essay exam is held
          for 40 minutes and the drawing exam is held for 60 minutes. These are
          very similar to monthly Olympiads, except for the exam duration and
          the total number of questions. Here, students are given 35 questions
          for class 1 to 4 students and 50 questions for class 5 to 10 students
          which are to be solved within the time limit. For the drawing and
          essay exam, students are given topics and instructions that need to be
          followed accordingly.
        </p>
        <p style={styles.content6P}>
          It is the best way to judge how well students can adhere to the given
          time limit. Most students complain of not being able to complete the
          entire question paper in school. Students find some papers to be
          lengthy. This is mainly because they are not used to using proper time
          management skills in the exam. Students appearing for offline mode of
          exam shall note the time as they are given OMR answer sheets to note
          their answers. This answer sheet is to be completed in 65 minutes. The
          in-charge teachers then shall collect the OMR sheets and send them to
          Minds Marathon.
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
            e.target.style.boxShadow = "0 6px 12px rgba(11, 11, 11, 0.4)";
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
        <h2>SCIENCE MONTHLY OLYMPIAD CLASS 8</h2>
        <p style={styles.content8P}>
          The science monthly Olympiad for class 8, as the name suggests is
          conducted every month throughout the year. This can be one of the best
          ways to practice for the Annual Olympiad, and also for school exams.
          Students are given several questions to solve throughout the year. It
          enforces better retention of what is learned through such tests. It is
          conducted online, and students can use any smartphone or tablet to
          take these tests. The duration of these tests is for 25 minutes. The
          total number of questions asked within the duration is 30 questions.
          These are online tests that can be taken from any tablet or
          smartphone. All are multiple-choice questions. Such questions test
          students’ basic understanding. Being an objective exam, makes students
          read all chapters thoroughly, as the questions can be framed from any
          chapter or topic.
        </p>

        <p style={styles.content8P}>
          The combo pack exams are offered in subjects such as Science, Maths,
          GK, and English. Students can opt for one subject, or the combo pack,
          in which they get to practice all these subjects on different exam
          dates. The monthly Olympiad exams provide immense benefits to all
          participants, as it focuses on all-round development in different
          subjects.
        </p>

        <p style={styles.content8P}>
          This is the best way to inculcate good study habits in children.
          Winners of the monthly Olympiads are felicitated with cash prizes and
          scholarships. Participating in monthly Olympiads acts as additional
          practice. Students can develop a good command of scientific concepts,
          understand basic experiments and apply the same while solving their
          school tests. To know more about these exams and to become a part of
          these tests, please visit the link below.
        </p>

        <p style={styles.content8P}>
          Minds Marathon ensures complete transparency in these tests. It makes
          it mandatory for students to keep their audio and video switched on
          during the exam. It uses artificial intelligence to test malpractices
          found during the exam. It believes in complete fair play in online
          tests to promote healthy competition. Parents are requested to act as
          strict invigilators and test their student's understanding of
          different chapters. The monthly Olympiads provide the best guidance
          possible.
        </p>
      </div>
    </div>
  );
};

export default Class8Page;
