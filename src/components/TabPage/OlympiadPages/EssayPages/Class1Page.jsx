import React from "react";

const Class1Page = () => {
  const bodyStyle = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    margin: 0,
    padding: 0,
    lineHeight: 1.4,
    backgroundColor: "white",
  };

  const content1 = {
    backgroundColor: "#ffdd57",
    padding: "20px 60px",
    display: "flex",
    alignItems: "center",
  };

  const content1Heading = {
    marginLeft: "10rem",
    marginRight: "10rem",
  };

  const content1Paragraph = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
  };

  const commonContent = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: "500",
  };

  const content5 = {
    maxWidth: "280px",
    height: "auto",
    marginLeft: "14rem",
    marginRight: "10rem",
  };

  const content5Image = {
    maxWidth: "280px",
    height: "auto",
    display: "block",
    margin: "10px auto",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
  };

  const buttonStyle = {
    marginLeft: "5rem",
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

  const buttonHover = {
    backgroundColor: "#007bff",
    color: "#fff",
    boxShadow: "0 6px 12px rgba(0, 123, 255, 0.4)",
  };

  return (
    <div style={bodyStyle}>
      {/* Top Section */}
      <div style={content1}>
        <div>
          <h1 style={content1Heading}>Essay Writing Competition Class 1</h1>
          <p style={content1Paragraph}>
            National Essay Olympiad (NESO) is a national level essay writing
            competition class 1 is conducted for students of standard 1. It
            tests writing skills of children. It is a national level competition
            where students are given a platform to compete with one another. It
            allows students to think and play with their imagination. Minds
            Marathon provides essay writing books with topics, hints and ideas
            to explore. It has several topics for students to read from. This is
            the right age to encourage writing skills in students. Therefore,
            essay on books for Class 1 provides simple topics for students to
            read and understand. The book enhances thinking capacity of
            students. This book helps little children to develop a flair for
            writing and love for the language. Content for these books are
            developed by experts using simple language. It encourages self-study
            among children.
          </p>
        </div>
      </div>

      {/* Preparation Material */}
      <div style={commonContent}>
        <h1>Preparation Material for Class 1 Essay Olympiad</h1>
        <p>
          The preparation material for Essay Writing Competition Class 1 is
          available at Minds Marathon in the form of workbooks. Parents can buy
          these workbooks for their children and help them in their preparation.
          The workbooks are designed as per the learning ability and
          understanding of class 1 students. The topics are age appropriate,
          which students will be able to grasp well. The preparation material
          has variety of topics, which class 1 students can read and understand.
          They would require basic help from parents and teachers who can guide
          them accordingly.
        </p>
      </div>

      {/* Topics Section */}
      <div style={commonContent}>
        <h2>Topics For Essay Olympiad Class 1</h2>
        <p>
          The topics for the National Essay Olympiad Class 1 revolve around very
          simple topics on which students will be able to make their own
          sentences. Class 1 students would be the youngest ones giving this
          exam. Examiners understand that they are just out of kindergarten and
          thus do not put any kind of pressure on them. Students are encouraged
          to frame their own essays as per their own understanding. Parents can
          make them read different Essay Topics through Essay workbooks by Minds
          Marathon to increase their knowledge and even help them in their
          choice of words. The books are colorful, informative and attractive
          for all our tiny tots.
        </p>
        <ul>
          {[
            "Our Clothes",
            "Our Body",
            "Plants",
            "The Fruits",
            "The Sun",
            "Water is Life",
            "Various Flowers",
            "Wild and Pet Animals",
            "The Rain",
            "Birds",
            "The Sky",
            "My Teacher",
            "Vegetables We Eat",
            "Homes of Animals",
            "My Mother",
            "My Father",
            "My Grandparents",
            "Myself",
            "My Family",
            "My Town",
            "My Classroom",
            "My School",
            "My Home",
            "My Garden",
            "My Hobby",
            "Diwali",
            "The Peacock",
            "My Pet Animal",
            "My Best Friend",
            "My Country",
            "Our National Flag",
            "The Cow",
            "Why should we drink Milk?",
            "The Mango",
            "The Tiger",
          ].map((topic, index) => (
            <li key={index}>Chapter {index + 1}: {topic}</li>
          ))}
        </ul>
      </div>

      {/* Books Section */}
      <div style={commonContent}>
        <h2>Essay Olympiad Books for Class 1</h2>
        <p>
          Minds Marathon provides the best National Essay Olympiad Class 1 books
          for all those interested to prepare well for the exam. These books
          have variety of topics that help students to write their essays. It
          helps them in sentence construction, ideation, choice of words,
          phrases, sentences and thus write the essay individually. When
          children are encouraged to read these books, they become confident
          about what they would want to write in the annual Olympiad. Essays for
          all class 1 students are the most attention-grabbing activity for all
          individuals. It is considered to be one of the most creative exams
          that has been prevalent since time immemorial. The books help students
          to assess their thinking capacity. For all class 1 students, writing
          an essay is like expressing their thoughts, feelings and emotions in
          black and white. It gives them the freedom to express what they like
          using a pen and paper.
        </p>
      </div>

      {/* Book Image */}
      <div style={content5}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/NESO-Essay-Olympiad-Class%201.jpg"
          alt="Workbook"
          style={content5Image}
        />
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          Buy Books
        </button>
      </div>

      {/* Annual Olympiad Section */}
      <div style={commonContent}>
        <h1>Essay Annual Olympiad and Monthly Olympiad -</h1>
        <h2>Essay Annual Olympiad Class 1</h2>
        <p>
          Minds Marathon conducts the NESO – National Essay Olympiad exam for
          all students of class 1. To participate in the annual Olympiad, please
          visit the Student Registration page, select the NESO exam and get
          started. Once the registration is complete you will get all details
          regarding the exam on your registered mobile number. Participating in
          the essay annual Olympiad benefits children in numerous ways. This is
          one such exam that helps students to discover their knowledge and
          writing skills on any given topic. It also makes parents and teachers
          know the true capability of their children. Essays for class 1
          students can be as short as 10 lines. These lines would generally be
          short, crisp and concise. Students can use an attractive language to
          frame their sentences.
        </p>
        <p>
          Students of class 1 have delicate minds. When they are given a chance
          to express themselves on a topic, they write it with an open heart.
          They have very pure and crystal clear images in their minds, which
          comes down through their essays. It is a delightful experience for all
          parents and teachers to see their little ones trying their best to
          express their views in their own words. Short and simple sentences
          framed by small children is an achievement in itself.
        </p>
      </div>

      {/* Monthly Olympiad Section */}
      <div style={commonContent}>
        <h2>Essay Monthly Olympiad Class 1</h2>
        <p>
          Minds Marathon conducts National Essay Olympiad Class 1 monthly tests
          for all students. These are very helpful as these tests assists our
          tiny tots in their preparation for the annual Olympiads. Conducted
          every month, it brings a lot of confidence in students to write on any
          given topic. This further improves their English writing skills too.
          Essay writing is an art that can be developed since a young age. It
          requires polishing and amendments from time to time to secure national
          rank in the annual Olympiad. Monthly tests are extremely beneficial in
          the long run. The monthly Olympiads are a modest attempt by Minds
          Marathon to help children to be more expressive in their thoughts. It
          also develops a liking for writing.
        </p>
        <p>
          To register in the monthly tests for the NESO exam, please visit the
          Student Registration page, select NESO as the subject, class 1 as the
          class, buy workbooks if required, fill up all the remaining details
          and get your child ready. The monthly tests are a step by step guide
          that prepares students for the annual Olympiads. It makes students,
          parents and teachers understand the criteria, put your own thoughts,
          frame arguments and structure the essay carefully. All of these
          combine to become a good essay. Participate in the monthly NESO exam
          and develop the required confidence in your child today.
        </p>
      </div>
    </div>
  );
};

export default Class1Page;
