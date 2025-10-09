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
      marginTop: 0,
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
          <h1 style={styles.textBoxHeading}>English International Olympiad Class 2</h1>
          <p style={styles.textBoxParagraph}>
            English Olympiad Class 2 exam for students cater to occupational
            English test, which means making them ready to start loving the
            language. Students of 2nd standard are taught basics of grammar. Minds
            Marathon English book for Class 2 allows students to appear for
            English grammar test that tests their knowledge on nouns, verbs,
            adverbs, pronouns, adjectives, punctuations, conjunctions and lot
            more. International English Olympiad exams focus on developing
            students’ language skills so that they are ready to face competitive
            exams in their higher classes. The workbooks contain multiple choice
            questions with answers and explanations to each question. Students are
            taught the nuances of grammar so that they master the subject at a
            young age.
          </p>
        </div>
      </div>

      {/* Preparation Material */}
      <div style={styles.content}>
        <h1>Preparation Material for English Olympiad Class 2</h1>
        <h2>English Olympiad Syllabus Class 2</h2>
        <p style={styles.contentParagraph}>
          The syllabus for class 2 English Olympiad exam is the same as taught in
          school. English is one such subject that needs a lot of practice.
          Students who read books apart from school prescribed textbooks are able
          to excel in this subject. The preparation material for class 2 is
          designed to help young learners have proper understanding of each and
          every section covered in the exam. Olympiad questions extensively cover
          each and every chapter from the school syllabus. It has activity-based
          exercises that help to understand the moral of the story. Be it poems or
          short-stories, questions make students analyze, think and relate to
          real-life instances too. Grammar is one of the most important sections
          of English. Impeccable grammar is built only with rigorous practice.
          Students who participate in national and international Olympiad exams
          develop excellent grammatical command.
        </p>
        <p style={styles.contentParagraph}>
          The topics that students are taught in class 2 include the parts of
          speech namely nouns, verbs, adjectives, adverbs, prepositions,
          conjunctions, punctuations etc. The questions improve students’
          vocabulary as they are introduced to new words used while speaking. They
          are taught synonyms and antonyms, which is one of the most interesting
          component of grammar. Language abilities can be built well when children
          are still young. Psychologists believe that children as young as class 1
          and class 2 are able to grasp languages better than adults. Thus, this
          is the perfect age to introduce English Olympiad in our children.
        </p>
        <p style={styles.contentParagraph}>
          To compare syllabus of Olympiads, please check the website of Minds
          Marathon. Here, you can see class-wise curriculum that is covered for
          students in the English International Olympiad exam.
        </p>

        <ul style={styles.contentList}>
          <li>Chapter 1: Nouns and Pronouns</li>
          <li>Chapter 2: Verbs</li>
          <li>Chapter 3: Adverbs</li>
          <li>Chapter 4: Adjectives</li>
          <li>Chapter 5: A, An and The</li>
          <li>Chapter 6: Preposition</li>
          <li>Chapter 7: Conjunction</li>
          <li>Chapter 8: Make the Word</li>
          <li>Chapter 9: Punctuation</li>
          <li>Chapter 10: Meanings of Words</li>
          <li>Chapter 11: Opposites of Words</li>
          <li>Chapter 12: Which One is Different?</li>
          <li>Chapter 13: Tense</li>
          <li>Chapter 14: Logical Reasoning</li>
        </ul>
      </div>

      {/* Workbooks & PYQ */}
      <div style={styles.content2}>
        <div style={styles.imgContainer}>
          <h2>English Olympiad Workbook</h2>
          <img
            style={styles.img}
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/EIO-English-Olympiad-Class-2.jpg"
            alt="WORKBOOK"
          />
          <button style={styles.button}>BUY NOW</button>
        </div>

        <div style={styles.imgContainer}>
          <h2>English Olympiad PYQ</h2>
          <img
            style={styles.img}
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/english-previous%20year-question-paper-class-02.jpg"
            alt="PYQ"
          />
          <button style={styles.button}>BUY NOW</button>
        </div>
      </div>

      {/* Annual Olympiad */}
      <div style={styles.content}>
        <h1>Class 2 English Annual Olympiad and Monthly Olympiad</h1>
        <h2>English Annual Olympiad Class 2</h2>
        <p style={styles.contentParagraph}>
          The English International Olympiad’s Annual exam is held twice a year –
          during December and February. Being an annual exam, it is also held
          online. Participants can use any smartphone or tablet to take these
          exams. The English exam is held for a duration of 45 minutes, in which
          students are asked 50 questions. All these questions are multiple-choice
          with four options to choose from. The options are usually tricky, which
          is why it is important for students to understand the question first.
          They must have thorough knowledge of concepts that are taught in class.
          Olympiad exams are aimed to bring accuracy and improve their command
          over the language. Experts suggest that English can be improved only
          with regular practice. Parents can continue reading with their children
          or take turns to read a book. Minds Marathon provides English Olympiad
          workbooks, which can be fun to solve together. The workbooks are rich
          with multiple choice questions, helpful to practice for monthly as well
          as annual exams.
        </p>
        <p style={styles.contentParagraph}>
          The English Olympiad exam encourages different writing styles that can
          be developed at a young age. It paves way to creative writing skills,
          increases students’ vocabulary, improves sentence structures and makes
          them the master of the language. The questions here are designed to
          comprehend topics, instead of memorize.
        </p>
        <p style={styles.contentParagraph}>
          To register for Annual Olympiads please click the link below. Olympiad
          registrations for annual Olympiads can be done through the website.
        </p>
      </div>

      {/* Register Button */}
      <div style={styles.content4}>
        <button style={styles.button}>Register now</button>
      </div>

      {/* Monthly Olympiad */}
      <div style={styles.content}>
        <h2>English Monthly Olympiads Class 2</h2>
        <p style={styles.contentParagraph}>
          Monthly Olympiads are conducted in English International Olympiad every
          month. These are tests that are conducted online. Participants can use
          any smartphone or tablet. Minds Marathon understands that when students
          are given year-round practice, they are bound to perform better at all
          exams. The monthly exams are demo exams before the main exam. These are
          useful in school tests too. The monthly tests are in English Olympiad
          are conducted for a duration of 25 minutes. Students are given 30
          multiple choice questions to solve from. These questions include
          grammar, prose, reasoning, puzzles and other such variety of questions.
          The aim of these exams are to test basic concepts of English subject.
          Minds Marathon includes power pack exams in which students can apply for
          6 subjects. The power pack includes Science, Maths, English, GK, Essay
          and Drawing.
        </p>
        <p style={styles.contentParagraph}>
          English language delves into creativity using imagination through
          poetry. It is one of the best ways to improve students’ grammar and
          language abilities. The English exam focuses on making students fluent
          in written as well as spoken English. They are given variety of
          questions to solve every month.
        </p>
        <p style={styles.contentParagraph}>
          By the end of the year, and before they enter the next class, students
          automatically become thorough in class 2 grammar. Some other ways
          parents can help children to develop English are by reading to them
          every day. They can use anchor charts to teach reading comprehension.
          Teachers can bring in super-heroes when they introduce new topics.
          Olympiad questions fires-up the imagination of young storytellers.
          Teachers can give students a voice to read through Olympiads.
          Introducing the second-graders to small-narrative moments gives a lot of
          confidence to the young minds.
        </p>
        <p style={styles.contentParagraph}>
          To participate in the monthly English Olympiad, please click the link
          below. Register your little ones today for this exam. The registration
          for International English Olympiad is open.
        </p>
      </div>
    </div>
  );
};

export default Class2Page;
