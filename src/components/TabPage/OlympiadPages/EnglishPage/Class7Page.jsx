import React from "react";

const Class7Page = () => {
  const bodyStyle = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    margin: 0,
    padding: 0,
    lineHeight: 1.4,
    backgroundColor: "white",
  };

  const textBoxStyle = {
    backgroundColor: "#ffdd57",
    padding: "20px 60px",
    display: "flex",
    alignItems: "center",
  };

  const h1TextBox = {
    marginLeft: "10rem",
    marginRight: "10rem",
  };

  const pTextBox = {
    fontSize: "16px",
    fontWeight: 600,
    color: "#333",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
  };

  const content1 = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  const content1p = {
    marginTop: 0,
    fontSize: "18px",
    lineHeight: 1.3,
    color: "#333",
  };

  const content1ul = {
    fontSize: "18px",
    color: "#333",
    marginTop: "15px",
    listStyleType: "none",
  };

  const content2 = {
    backgroundColor: "#ffdd57",
    padding: "20px 100px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const imgc = {
    textAlign: "center",
    margin: "0 20px",
  };

  const imgStyle = {
    maxWidth: "280px",
    height: "auto",
    display: "block",
    margin: "10px auto",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "#007bff",
    border: "2px solid #007bff",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "999px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
  };

  const content3 = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  const content4 = {
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const content5 = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  const content6 = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  return (
    <div style={bodyStyle}>
      {/* Text Box */}
      <div style={textBoxStyle}>
        <div>
          <h1 style={h1TextBox}>English International Olympiad Class 7</h1>
          <p style={pTextBox}>
            Students appearing for English Olympiad for Class 7 exams are expected
            to be familiar with basic grammar and sentence structure. Class 7 is
            considered to be the turning point in student’s life, which is why the
            course content is divided into different segments. Olympiad exams give
            them an edge over others and make them confident to take up school
            exams. Students can practice the questions from this book and test
            their knowledge on the subject from preparation material for class 7.
            English book for Class 7 are available for students to familiarize
            them with questions and their related answers. Students can take up
            English proficiency test and get well-versed with the topic.
          </p>
        </div>
      </div>

      {/* Content 1 */}
      <div style={content1}>
        <h1>Preparation Material for English Olympiad Class 7</h1>
        <h2>English Olympiad Syllabus Class 7</h2>
        <p style={content1p}>
          The list of skills developed in class 7 forms the base for the upcoming
          years of students’ study life. The syllabus for class 7 English Olympiad
          exam is based exactly as per the prescribed norms of different boards.
          No matter which board your school refers to, it caters to the syllabus
          of ICSE, CBSE and State boards respectively. Having said so, the focus
          of class 7 online Olympiad exam is on enhancing grammatical skills.
          Students are taught sentence structures, they have to identify if the
          sentence is declarative, interrogative, imperative, or exclamatory.
          Further, they have to figure out the subject and predicate of a
          sentence.
        </p>
        <p style={content1p}>
          English grammar is very vast. Some English words have their roots to
          Greek and Latin. To become a master in this subject, it is advised that
          students must register for online Olympiads through Minds Marathon. This
          exam teaches the same topics, but exposes them to variety of questions.
          Transitions, modifiers, conjunctions, compound adjectives, subject-verb
          agreement, verb tenses, punctuations and the list goes on. Parents can
          carefully compare the syllabus of school English exams with the
          Olympiads and register for online Olympiads.
        </p>
        <p style={content1p}>
          Minds Marathon online English Olympiad includes several reading and
          writing exercises. The more the students practice these exercise, the
          better they become in this subject. Lesson explanation is available in
          the form of workbooks that can be purchased from our website. All the
          multiple choice questions covered in the books are helpful for revision
          for the final exam. With our support registered students can feel at
          ease while solving their school English exam paper. The entire team of
          Minds Marathon is here to help you work successfully and achieve your
          goal of mastering the subject.
        </p>
        <ul style={content1ul}>
          <li>Chapter 1: Word Power</li>
          <li>Chapter 2: Degree of Comparison</li>
          <li>Chapter 3: Clauses</li>
          <li>Chapter 4: Infinitive, Participle and Gerund</li>
          <li>Chapter 5: Modal and Auxiliary Verbs</li>
          <li>Chapter 6: Voices and Speeches</li>
          <li>Chapter 7: Tenses</li>
          <li>Chapter 8: Transformation of Sentences</li>
          <li>Chapter 9: Grammar Exercise</li>
          <li>Chapter 10: Composition</li>
          <li>Chapter 11: Sequencing</li>
          <li>Chapter 12: Comprehension</li>
          <li>Chapter 13: Idioms and Proverbs</li>
          <li>Chapter 14: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 2 */}
      <div style={content2}>
        <div style={imgc}>
          <h2>English Olympiad Workbook</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ito-eio-english-olympiad-class-7-workbook.jpg"
            alt="WORKBOOK"
            style={imgStyle}
          />
          <button style={buttonStyle}>BUY NOW</button>
        </div>

        <div style={imgc}>
          <h2>English Olympiad PYQ</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/english-previous-year-question-paper-class-07-ito.jpg"
            alt="PYQ"
            style={imgStyle}
          />
          <button style={buttonStyle}>BUY NOW</button>
        </div>
      </div>

      {/* Content 3 */}
      <div style={content3}>
        <h1>Class 7 English Annual Olympiad and Monthly Olympiad</h1>
        <h2>English Annual Olympiad Class 7</h2>
        <p style={content1p}>
          The annual Olympiad exam for students of class 7 are also conducted
          exam. Students can attempt these exams in December or in February. To
          register for online Olympiad in English, Minds Marathon allows
          individual registrations as well as school registrations. These exams
          promote a lot of confidence in the young minds. The English Olympiad is
          an online exam that can be taken any time between 10:00 am and 6:00 pm.
        </p>
      </div>

      {/* Content 4 */}
      <div style={content4}>
        <button style={buttonStyle}>Register now</button>
      </div>

      {/* Content 5 */}
      <div style={content5}>
        <h2>English Monthly Olympiads Class 7</h2>
        <p style={content1p}>
          The monthly Olympiads for class 7 are a blessing in disguise. These
          tests are conducted every month on each and every chapter of the
          subject. It ensures that students are used to solve a variety of
          advanced level questions. It gives them unlimited practice to questions
          that are a part of their school syllabus. Register for online Olympiads,
          monthly tests by clicking on the Student Test @ Home button on the home
          page.
        </p>
        <p style={content1p}>
          The monthly tests for students of class 7 can be taken using any tablet
          or smart phone. All they need is a stable internet connection so that
          these exams can be taken smoothly on any device. These are online tests
          that are monitored through artificial intelligence. Audio record, video
          record, eye ball recognition, facial recognition, and image capture are
          some of the salient features of monthly Olympiads. These tests can be
          taken anytime between 10:00 am and 6:00 pm. The monthly Olympiads are
          conducted for a duration of 25 minutes, in which students are asked 30
          questions.
        </p>
        <p style={content1p}>
          They are given four choices, which are mostly confusing for beginners.
          Students who master questions at the monthly Olympiads, get a good grip
          over the questions asked in the annual Olympiads. Register for online
          Olympiads today.
        </p>
      </div>

      {/* Content 6 */}
      <div style={content6}>
        <h1>Class 7 English Olympiad FAQs</h1>
        <h2>What Are The Questions For English Olympiad Class 7?</h2>
        <p style={content1p}>
          The questions for English Olympiad Class 7 are based on school syllabus
          itself. Some of the chapters covered in this exam are word power, degree
          of comparison, clauses, participles, modal and auxiliary verbs, tenses,
          composition, sequencing, idioms and proverbs. For details on syllabus,
          please visit the official website of Minds Marathon and go the Syllabus
          section. You can find class-wise syllabus for all classes here. The
          organization also offers workbooks for class 7 that are rich with
          questions and answers. Each and every question is explained in detail
          that ensures maximum understanding of the topic. Students can apply for
          the English International Olympiad (EIO) online and participate in both
          Online exams as well as the Annual exams.
        </p>
      </div>
    </div>
  );
};

export default Class7Page;
