import React from "react";

const Class9Page = () => {
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

  const textH1Style = {
    marginLeft: "10rem",
    marginRight: "10rem",
  };

  const textPStyle = {
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
    marginTop: 0,
    fontSize: "18px",
    lineHeight: 1.3,
    color: "#333",
  };

  const content1UlStyle = {
    fontSize: "18px",
    color: "#333",
    marginTop: "15px",
  };

  const content2Style = {
    backgroundColor: "#ffdd57",
    padding: "20px 100px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const imgContainerStyle = {
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

  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#007bff";
    e.target.style.color = "#fff";
    e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)";
  };

  const buttonLeave = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#007bff";
    e.target.style.boxShadow = "none";
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
      {/* Header Section */}
      <div style={textBoxStyle}>
        <div>
          <h1 style={textH1Style}>GK Olympiad Class 9</h1>
          <p style={textPStyle}>
            Students studying in 9th standard have a pressure of scoring well in their
            present year as well as the next year. It is said that this year forms the
            base for board exams. General Knowledge for Class 9 Olympiad exams helps
            leverage student potential and familiarizes them with current affairs,
            quantitative and logical reasoning, media, literature, science and
            technology, life skills and many more topics. It prepares students for
            competing at national and international levels. Minds Marathon’s general
            knowledge book for Class 9 is designed keeping in mind practicality of
            content related to recent times. It provides an array of questions with
            answers and explanations to correct answers. General Knowledge may not be a
            mandatory subject in board exams, but it surely helps in overall development
            of a child. It is important for students to be up-to-date with recent
            happenings.
          </p>
        </div>
      </div>

      {/* Preparation Section */}
      <div style={content1Style}>
        <h1>Preparation Material for Class 9 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 9</h2>
        <ul style={content1UlStyle}>
          <li>Chapter 1: Plants & Animals</li>
          <li>Chapter 2: Our Environment</li>
          <li>Chapter 3: Science & Technology</li>
          <li>Chapter 4: India & The World</li>
          <li>Chapter 5: Social Studies</li>
          <li>Chapter 6: Language, Literature, Media</li>
          <li>Chapter 7: Sports</li>
          <li>Chapter 8: Quantitative Aptitude & Reasoning</li>
          <li>Chapter 9: Life Skills</li>
          <li>Chapter 10: Current Affairs</li>
          <li>Chapter 11: Logical Reasoning</li>
        </ul>
      </div>

      {/* Books Section */}
      <div style={content2Style}>
        <div style={imgContainerStyle}>
          <h2>General Knowledge Book</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%209.jpg"
            alt="WORKBOOK"
            style={imgStyle}
          />
          <button
            style={buttonStyle}
            onMouseEnter={buttonHover}
            onMouseLeave={buttonLeave}
          >
            BUY NOW
          </button>
        </div>

        <div style={imgContainerStyle}>
          <h2>General Knowledge Question Paper</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/gk-previous-year-question-paper-class-9-ito.jpg"
            alt="PYQ"
            style={imgStyle}
          />
          <button
            style={buttonStyle}
            onMouseEnter={buttonHover}
            onMouseLeave={buttonLeave}
          >
            BUY NOW
          </button>
        </div>
      </div>

      {/* Annual Olympiad Section */}
      <div style={content3Style}>
        <h1>Class 9 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p style={content1PStyle}>
          Minds Marathon is a renowned education-oriented organization that supports the
          growth of students. It conducts Olympiad Exams at the National Level for class
          9 and many students from various schools across India participate and compete
          in these Olympiad Exams. Minds Marathon followed the offline exam culture, but
          now participating students can take either Offline or Online modes of Exam.
          While registering for Olympiad exams schools have two options to choose from –
          Offline Mode of Examination and Online Mode of Examination. For the offline
          method, the regular method of conducting the exam can be followed by the
          school.
        </p>
        <p style={content1PStyle}>
          For online mode, students can enter into the test with a unique login ID and
          password provided. Students can log in from smartphones, laptops, or
          computers. Register now for the Olympiad exams from the button below.
        </p>
      </div>

      {/* Register Button */}
      <div style={content4Style}>
        <button
          style={buttonStyle}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
        >
          REGISTER NOW
        </button>
      </div>

      {/* Monthly Olympiad Section */}
      <div style={content5Style}>
        <h2>Monthly Olympiads</h2>
        <p style={content1PStyle}>
          Minds Marathon conducts monthly Olympiads for General Knowledge exam for
          students of class 9. Questions asked in these exams are in multiple-choice
          format. It provides a platform to examine skillsets and uplift the knowledge
          of students. Students can register for the desired subject from the website.
          Monthly tests contain a variety of exercises and activities for comprehensive
          evaluation. Practice questions have answer keys. The outline of this test is
          designed as per the school board syllabus, giving students an opportunity to
          compete with one another at a national level.
        </p>
      </div>
    </div>
  );
};

export default Class9Page;
