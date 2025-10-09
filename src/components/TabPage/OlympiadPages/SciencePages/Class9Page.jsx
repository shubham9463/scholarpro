import React from "react";

const Class9Page = () => {
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
          <h1 style={styles.textBoxH1}>INTERNATIONAL SCIENCE OLYMPIAD <br />CLASS 9</h1>
          <p style={styles.textBoxP}>
            Minds Marathon is one of the well-known organizations offering the International Science Olympiad. Class 9 is one among different subjects. It consists of a team of professionals who are well-versed with the subject. The Olympiad books for class 9 are designed by experts in various fields. Each chapter has topic-wise questions and answers. Explanations are given so that students understand the concept better. Topics for the class 9 science exam include matter & its properties, life around us, food & health, music, friction, sun, gravitation, reproduction, motion, and so on. The workbooks include a logical reasoning section for students as an additional benefit to enhance their reasoning skills. It also helps them to prepare for school exams. Students appearing for Science Olympiad exams can buy Olympiad books for class 9 from Minds Marathon. It is one of the well-known organizations offering Olympiad exams in different subjects.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-Science-Olympiad-Logo-315px-143px.webp"
          alt="International Science Olympiad Logo"
        />
      </div>

      <div style={styles.content1}>
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR SCIENCE OLYMPIAD CLASS 9</h2>
        <p style={styles.content1P}>
          Students can prepare for the Class 9 Science Olympiad with the help of the many resources available from Minds Marathon, including workbooks and previous year's question papers. These books are tailored to fit the curriculum and provide in-depth coverage of a variety of topics. Students can use these to systematically review and strengthen their grasp of scientific concepts. Typically, students can expect to find practice exercises, sample questions, and thorough explanations in workbooks. The organized method allows students to monitor their development, pinpoint their areas of weakness, and concentrate their efforts on strengthening their knowledge of specific topics. Previous year exam question papers are useful because they provide a preview of the question format students can expect to see on test day.
        </p>
      </div>

      <div style={styles.content2}>
        <h2 style={styles.content2H2}>SYLLABUS FOR OLYMPIAD CLASS 9</h2>
        <p style={styles.content2P}>
          The class 9 Olympiad syllabus is the same as prescribed by different boards. It focuses on the same chapters that are taught in school. Students who participate in Olympiad exams find it easy to attempt the school tests. The 9th grade is one of the crucial years in students’ life. The foundations and the basic knowledge learned here help children to focus on advanced concepts the next year. It forms a good base not only for 10th standard but also for competitive exams taken in the years to come. The class 9 Olympiad syllabus requires students to get a hold of detailed concepts. Students are introduced to new topics that would act as the base for the upcoming years. Minds Marathon revamps its questions from time to time, so as to stay up-to-date with the latest knowledge. Students who prepare themselves for these exams become confident to answer questions in the upcoming years. Students must try to attempt all questions asked in the Olympiad exams. This gives them a better understanding of varied topics. They can always go back to their workbooks and other study material if they are stuck while answering any question. Class 9 Olympiad exams have several advantages. It helps students to exhibit memory of previously learned material. It enables them to recall facts, terms, and other fundamentals. Students are able to demonstrate an understanding of facts in a better way. It paves the way for new ideas, helps to organize, compare, translate, interpret and state main ideas. It becomes very easy for students to solve problems, adapt to new situations, apply acquired knowledge, and techniques in a new way. Students can make inferences, and find evidence to support their answers. It makes them confident to make judgments about information and the validity of certain scientific terms. Finally, they are able to compile information together in a different way, combine all elements learned, and apply the same in their upcoming exams.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Energy And Work</li>
          <li>Chapter 2: Sound</li>
          <li>Chapter 3: Friction And Force</li>
          <li>Chapter 4: Gravitation</li>
          <li>Chapter 5: Motion And Its Laws</li>
          <li>Chapter 6: Electricity And Magnetism</li>
          <li>Chapter 7: Unit Of Life</li>
          <li>Chapter 8: Crop And Its Management</li>
          <li>Chapter 9: Human Anatomy And Physiology</li>
          <li>Chapter 10: Matter And Its Properties</li>
          <li>Chapter 11: Chemical Changes And Reactions</li>
          <li>Chapter 12: Atomic Structure And Chemical Bonding</li>
          <li>Chapter 13: The Periodic Table</li>
          <li>Chapter 14: Study Of Gas Laws</li>
          <li>Chapter 15: Solid Waste Management</li>
        </ul>
      </div>

      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/iso-science-olympiad-workbook-class-9.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 9 SCIENCE OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            The workbooks provide comprehensive preparation material for competing in the International Science Olympiad for Class 9 under Minds Marathon. They offer a variety of questions that help students hone their logical thinking and problem-solving skills. The workbooks also give students plenty of practice opportunities so they can improve their skills and gauge their development. Students benefit from using a workbook when competing in Science Olympiad because it encourages independent learning and self-evaluation. Students can organize their learning, keep track of their strengths and weaknesses, and spot areas that need more attention, thanks to the workbook's structured format. It also promotes a methodical approach to studying, offering a well-rounded learning experience.
          </p>
        </div>
      </div>

      {/* Content 4, 5, 6, 7, 8 will be the same approach with inline styles */}
    </div>
  );
};

export default Class9Page;
