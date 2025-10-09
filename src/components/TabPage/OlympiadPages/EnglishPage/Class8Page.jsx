import React from "react";

const Class8Page = () => {
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

  const textBoxH1Style = {
    marginLeft: "10rem",
    marginRight: "10rem",
  };

  const textBoxPStyle = {
    fontSize: "16px",
    fontWeight: 600,
    color: "#333",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
  };

  const content1Style = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  const content1PStyle = {
    marginTop: "0px",
    fontSize: "18px",
    lineHeight: 1.3,
    color: "#333",
  };

  const content1UlStyle = {
    fontSize: "18px",
    color: "#333",
    marginTop: "15px",
    listStyleType: "none",
  };

  const content2Style = {
    backgroundColor: "#ffdd57",
    padding: "20px 100px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const imgcStyle = {
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
    transition:
      "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
  };

  const content3Style = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  const content4Style = {
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const content5Style = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  return (
    <div style={bodyStyle}>
      <div style={textBoxStyle}>
        <div>
          <h1 style={textBoxH1Style}>English International Olympiad Class 8</h1>
          <p style={textBoxPStyle}>
            The aim of the English Olympiad Class 8 exam organized by Minds
            Marathon is to enhance the vocabulary skills of the student. High
            school is not only the turning point for students, but it is the
            best time to gauge their knowledge on different subjects. Students
            of class 8 must develop a strong base of English language. English
            for competitive exams helps students to score better marks. English
            book for Class 8 is available online with detailed information on
            different topics. The chapters are well elaborated with questions
            and answers of each topic. Proficiency in English allows students to
            be confident in the subject. This can only be attained by practicing
            the English workbook. It helps them to score more marks in school
            exams too.
          </p>
        </div>
      </div>

      <div style={content1Style}>
        <h1>Preparation Material for English Olympiad Class 8</h1>
        <h2>English Olympiad Syllabus Class 8</h2>
        <p style={content1PStyle}>
          English is one of the important subjects in India. Being one of the
          formal languages used for communication in the country, it is a
          subject that most students will be using the rest of their lives.
          Thus, it is imperative to achieve professional fluency in this
          language. By class 8, students would have developed grammar and
          writing skills. Now on, they will be taught how they can write
          differently and make their writings stand-out. Minds Marathon is one
          of the best platforms that allow students to polish their language
          abilities. The syllabus followed for the class 8 online Olympiad is
          the same as prescribed by schools. All the questions in the
          preparation material for class 8 are prepared as per the latest
          guidelines of CBSE, ICSE and other State boards in the country.
        </p>

        <p style={content1PStyle}>
          When it comes to languages, students may find it easy to understand
          prose or poetry given in the textbook. However, some may find it
          challenging to express themselves in the form of answers. However,
          students who are exposed to Olympiad exams somehow manage to solve all
          challenges their way. The Olympiad exams are based on latest syllabus.
          These exams are conducted online as well as offline. Those who are
          thorough with all chapters from the subject fetch maximum marks in
          their school exams. Olympiad exams main motive is to uplift students’
          potential. Online exams’ main objective is to promote the habit of
          learning and reading independently among all participants. Minds
          Marathon ensures that this is done with interest and enjoyment.
        </p>

        <p style={content1PStyle}>
          Students who are well-versed with the syllabus of Olympiads would be
          able to read on their own, and even share their thoughts and opinions
          independently. It becomes very easy for such students to get involved
          in group-discussions, and gather the appreciation of their peers,
          parents and teachers. Interested candidates can compare Olympiad
          syllabus with their school syllabus and thus take an informed
          decision. Online Olympiad registration is open for monthly Olympiads
          as well as annual Olympiads.
        </p>

        <ul style={content1UlStyle}>
          <li>Chapter 1: Word Power</li>
          <li>Chapter 2: Clauses</li>
          <li>Chapter 3: Infinitive, Participle and Gerund</li>
          <li>Chapter 4: Modal and Auxiliary Verbs</li>
          <li>Chapter 5: Tenses</li>
          <li>Chapter 6: Types of Sentences</li>
          <li>Chapter 7: Transformation of Sentences</li>
          <li>Chapter 8: Figures of Speech</li>
          <li>Chapter 9: Grammar Exercise</li>
          <li>Chapter 10: Composition</li>
          <li>Chapter 11: Sequencing</li>
          <li>Chapter 12: Comprehension</li>
          <li>Chapter 13: Idioms and Proverbs</li>
          <li>Chapter 14: Logical Reasoning</li>
        </ul>
      </div>

      <div style={content2Style}>
        <div style={imgcStyle}>
          <h2>English Olympiad Workbook</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/EIO-English-Olympiad-Class-8.jpg"
            alt="WORKBOOK"
            style={imgStyle}
          />
          <button style={buttonStyle}>BUY NOW</button>
        </div>

        <div style={imgcStyle}>
          <h2>English Olympiad PYQ</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/english-previous%20year-question-paper-class-08.jpg"
            alt="PYQ"
            style={imgStyle}
          />
          <button style={buttonStyle}>BUY NOW</button>
        </div>
      </div>

      <div style={content3Style}>
        <h1>Class 8 English Annual Olympiad and Monthly Olympiad</h1>
        <h2>English Annual Olympiad Class 8</h2>
        <p style={content1PStyle}>
          Annual Olympiads are conducted twice a year for class 8 students.
          Minds Marathon conducts these exams in December and February. The
          English Annual Olympiad is conducted for a duration of 45 minutes.
          Here, students of class 8 have to answer 50 questions. All questions
          are of advanced levels that require students to use their analysis to
          arrive at the right answer. The format used for this exam is multiple
          choice, where students are given four options to choose from.
        </p>
        <p style={content1PStyle}>
          The annual Olympiads are extremely helpful resource for preparation of
          school exams. The questions asked in these exams are in accordance
          with all boards. It boosts their confidence and helps them for their
          upcoming years. Online Olympiad exam registrations are open for class
          8. Students can register by clicking the button Register Student
          Annual Olympiad. Teachers can also register for their students by
          clicking the button School Registration.
        </p>
        <p style={content1PStyle}>
          Olympiad exams are beneficial not only for class 8 students but
          everyone studying from class 1 to 10. Here, students are used to
          solving difficult questions. It makes them clear in fundamentals.
          Students are able to apply, analyze and comprehend the right answer.
          It develops reasoning skills from a young age. Majority of schools in
          the country are part of the Minds Marathon. If your school is not a
          part, you are still welcome to be a part of this exam. The
          organization awards all winners in the form of scholarships, cash
          prizes and even by gifts such as laptops, tablets and lot more. Check
          out our winner list, their score and the award won. Winners are
          declared for monthly Olympiad as well as Annual Olympiad.
        </p>
        <p style={content1PStyle}>
          Register for online Olympiads and become a star in your school!
        </p>
      </div>

      <div style={content4Style}>
        <button style={buttonStyle}>Register now</button>
      </div>

      <div style={content5Style}>
        <h2>English Monthly Olympiads Class 8</h2>
        <p style={content1PStyle}>
          The monthly Olympiads are online exams conducted for students of class
          8. These can be taken using any smartphone or tablet. Students can
          take these tests anytime between 10:00 and 6:00 pm. The schedule of
          the monthly Olympiad is communicated to all registered candidates. To
          register for monthly Olympiads, please click the Student Test @ Home
          button. The online English Olympiad consists of 30 multiple choice
          questions. Students are given 25 minutes to solve these tests. These
          tests consist of chapter-wise questions, grammar and even
          comprehensions. Thus, it is a recall of whatever is learnt so far.
        </p>
        <p style={content1PStyle}>
          There may be some questions on quotations, that has a direct bearing
          to the theme of the story covered in the school textbook. Here,
          students will have to analyze and even paraphrase to identify the
          correct answer. Students can even opt for the power pack exam in which
          they can choose to participate in Science, Maths, English, GK, Essay
          and Drawing. All these exams are offered together in the power pack.
        </p>
        <p style={content1PStyle}>
          Online Olympiad registrations for class 8 monthly exams are open.
          These are demo tests that guarantee successful results in all other
          exams.
        </p>
      </div>
    </div>
  );
};

export default Class8Page;
