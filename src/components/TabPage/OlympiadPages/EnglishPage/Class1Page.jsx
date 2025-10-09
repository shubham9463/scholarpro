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
      backgroundColor: "#ffdd57",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    textBoxHeading: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
    textBoxParagraph: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#333",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
    },
    content: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    contentParagraph: {
      marginTop: "0px",
      fontSize: "18px",
      lineHeight: 1.3,
      color: "#333",
    },
    contentList: {
      fontSize: "18px",
      color: "#333",
      marginTop: "15px",
      listStyleType: "none",
    },
    content2: {
      backgroundColor: "#ffdd57",
      padding: "20px 100px",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    imgContainer: {
      textAlign: "center",
      margin: "0 20px",
    },
    img: {
      maxWidth: "280px",
      height: "auto",
      display: "block",
      margin: "10px auto",
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    button: {
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0 6px 12px rgba(0, 123, 255, 0.4)",
    },
    content4: {
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.body}>
      {/* Top Section */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxHeading}>English International Olympiad Class 1</h1>
          <p style={styles.textBoxParagraph}>
            International English Olympiad exams for standard 1 focus on building
            reading skills for students. Workbooks are designed in such a manner
            that facing English exam becomes easy. The content of English Olympiad
            Class 1 is reader-friendly and designed keeping in mind the psychology
            of Class 1 students. Minds Marathon understands the exact need of
            students of falling under this age-group, which is why chapters are
            divided into different segments. Students are initially taught how to
            make words using vowels and consonants. Gradually, they learn the
            meaning of each word. Further, opposites of words are introduced. Some
            other concepts that are covered in English Book for Class1 include
            picture reading, nouns, actions, articles and prepositions. Each
            chapter consists of multiple-choice questions, with answers and
            explanations. Students can also test their logical reasoning skills.
          </p>
        </div>
      </div>

      {/* Preparation Material */}
      <div style={styles.content}>
        <h1>Preparation Material for English Olympiad Class 1</h1>
        <h2>English Olympiad Syllabus Class 1</h2>
        <p style={styles.contentParagraph}>
          The English Olympiad Class 1 is one of the best exams to introduce basic
          grammar to students. These children are generally as small as 5 or 6
          years-old. This is the right time to inculcate correct spellings,
          punctuations, and develop reading habit. Students of class 1 are just
          out of their senior KG, where they may have learnt to form two-letter
          words and three-letter words. Picture reading with the help of picture
          comprehension is an important activity that is introduced in the
          Kindergarten itself. Class 1 English Olympiad gives it more leverage and
          takes it to the next level. Here, students are taught to read small
          sentences, identify the meaning of words, understand opposite words,
          identify nouns, use ‘a’ or ‘an’, identify the odd one out, making words
          – feminine or masculine, jumbled letters, jumbled words, identify words
          from the picture and so on. The detailed syllabus for class 1 Olympiad
          is given on the website.
        </p>

        <p style={styles.contentParagraph}>
          Class 1 is the best time to introduce students to Olympiad exams. It
          becomes a fun activity for them as they are exposed to a variety of
          questions from their school syllabus. It also acts as an indirect way of
          increasing knowledge. Minds Marathon also provides workbooks and sample
          papers for practice. These are worksheets that can be used for regular
          study. Schools can order sets of these practice papers and provide it to
          their students. If you are looking for Olympiad English textbook, Minds
          Marathon has its in-house team of teachers and experts in the subject.
          These books are designed keeping in mind children’s needs. Each and
          every section ends with a recap, so that the concepts learnt previously
          is not forgotten. English is one such subject that builds up as the
          child steps into the next class. The basic grammar taught at class 1 is
          applicable even to students of class 10, but in a different and advanced
          way. Olympiad preparation material for class 1 by Minds Marathon serves
          the purpose of all competitions.
        </p>

        <ul style={styles.contentList}>
          <li>Chapter 1: Make the Word</li>
          <li>Chapter 2: Meanings of Words</li>
          <li>Chapter 3: Opposites of Word</li>
          <li>Chapter 4: Picture</li>
          <li>Chapter 5: One and Many</li>
          <li>Chapter 6: He and She</li>
          <li>Chapter 7: Which One is Different?</li>
          <li>Chapter 8: Babies, Sounds and Groups</li>
          <li>Chapter 9: Nouns</li>
          <li>Chapter 10: Action Words</li>
          <li>Chapter 11: A' or 'An'</li>
          <li>Chapter 12: Preposition</li>
          <li>Chapter 13: Logical Reasoning</li>
        </ul>
      </div>

      {/* Workbooks & PYQ */}
      <div style={styles.content2}>
        <div style={styles.imgContainer}>
          <h2>English Olympiad Workbook</h2>
          <img
            style={styles.img}
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/EIO-English-Olympiad-Workbook-Class-1.webp"
            alt="WORKBOOK"
          />
          <button style={styles.button}>BUY NOW</button>
        </div>

        <div style={styles.imgContainer}>
          <h2>English Olympiad PYQ</h2>
          <img
            style={styles.img}
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/EIO%20English%20Olympiad%20Previous%20Year%20Question%20Paper%20Class%201.webp"
            alt="PYQ"
          />
          <button style={styles.button}>BUY NOW</button>
        </div>
      </div>

      {/* Annual Olympiad */}
      <div style={styles.content}>
        <h1>Class 1 English Annual Olympiad and Monthly Olympiad</h1>
        <h2>English Annual Olympiad Class 1</h2>
        <p style={styles.contentParagraph}>
          The Annual Olympiads for English are conducted twice a year. The first
          slot is in December and the second slot is in February. Minds Marathon
          conducts annual exams using the online mode. Students have to login
          using their mobile number and password through any smartphone or tablet.
          Registered candidates will only be allowed to participate in these
          exams. The registration process is also simple. Schools or individual
          students can apply for the annual Olympiads. The International English
          Olympiad is conducted for a duration of 45 minutes. Here, students are
          given 50 different multiple choice questions to solve from. Class 1
          students find this exam very interesting. To register for Annual
          Olympiads please click the link below.
        </p>
      </div>

      {/* Register Button */}
      <div style={styles.content4}>
        <button style={styles.button}>Register now</button>
      </div>

      {/* Monthly Olympiad */}
      <div style={styles.content}>
        <h2>English Monthly Olympiads Class 1</h2>
        <p style={styles.contentParagraph}>
          The International English Olympiad is conducted every month for class 1
          children. It is truly wonderful to see such small children finding out
          the right answer in Olympiads. Students are given 25 minutes to solve 30
          multiple choice questions. The monthly Olympiads are conducted online
          using any smart phone or table. They are made to understand that it is
          important to stick to the time limit, apart from selecting the correct
          answer. Minds Marathon believes that students should not be a part of
          the rat race. Competing with oneself is more important than competing
          with peers. Thus, the monthly Olympiads are targeted to make children
          focus and work on their weaknesses. When students practice the monthly
          Olympiads every month for the entire year, it becomes easy for them to
          attempt academic exams. These exams help students to remain calm during
          school examinations.
        </p>
        <p style={styles.contentParagraph}>
          The Power Packs allow students to attempt monthly Olympiads in all
          subjects. These enable students to participate in Science, Maths,
          English, GK, Essay and Drawing at one go. Students can register for the
          monthly Olympiads either in one subject or choose the power pack that
          includes 6 subjects. The power packs allow them to gain mastery over all
          subjects and topics taught in class. English is one of the most
          interesting subjects for all. It is because of the story-telling
          approach followed by this subject. It makes students involved, they are
          made to learn and understand the concepts. It is nice to see small
          children reciting poems, answering questions from chapters based on
          self-analysis. Monthly Olympiads boost up students’ confidence. To
          register for the monthly Olympiads please click the button below. The
          registration is open to all aspirants. Teachers, parents and guardians
          can spread the word about Minds Marathon registrations to bring out the
          best in all our children.
        </p>
      </div>
    </div>
  );
};

export default Class1Page;
