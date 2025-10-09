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
    content1: {
      backgroundColor: "#ffdd57",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    content1h1: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
    content1p: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#333",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
    },
    section: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content5: {
      maxWidth: "280px",
      height: "auto",
      marginLeft: "14rem",
      marginRight: "10rem",
    },
    image: {
      maxWidth: "280px",
      height: "auto",
      display: "block",
      margin: "10px auto",
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    button: {
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
    },
  };

  return (
    <div style={styles.body}>
      {/* Section 1 */}
      <div style={styles.content1}>
        <div>
          <h1 style={styles.content1h1}>Essay Writing Competition Class 9</h1>
          <p style={styles.content1p}>
            National Essay Olympiad is conducted by Minds Marathon for students
            of standard 9. It is one of the well-known names that conducts
            Olympiad exams at national levels. Students can refer books for the
            same from this organization. All books are rich in content that have
            sample essays that are well-written by experts. Some of the topics
            covered in this exam include festivals of India, cricket match, dust
            storm, my hobby, blessings of science, my aim in life, visit to an
            exhibition, terrorism, generation gap and so on. It helps build
            students’ vocabulary and enhances language skills. It improves their
            knowledge on various topics. Olympiad exams lay the foundation of
            several national level competitions. Students who participate in
            Olympiad exams become confident to solve a variety of questions. It
            sharpens their thinking abilities, enhances writing skills and
            increasing reasoning aptitudes.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div style={styles.section}>
        <h1>Preparation Material for Class 9 Essay Olympiad</h1>
        <p>
          Minds Marathon provides the best preparation material for class 9
          students for the Essay Writing Competition Class 9. These are in the
          form of workbooks, and other online tests that ensure students pick up
          excellent writing skills. Class 9 is an important academic year for
          students. It is the time when students need to write beautiful essays,
          letters and other forma writings. Students who practice the skill of
          writing find it easy to take part in other national and international
          competitions.
        </p>
      </div>

      {/* Section 3 */}
      <div style={styles.section}>
        <h2>Topics For Essay Olympiad Class 9:</h2>
        <p>
          The topics for class 9 essays are different and from various
          categories. Not everyone can express themselves in the form of essays.
          Students must read a variety of topics that are included in the
          National Essay Olympiad Class 9 topics and get inspired from those.
          All the essays are given in an efficient manner. These essay topics
          encourages self-study among all participants. To access the different
          topics for essays, all you need to do is buy workbooks from our
          website, read the different topics and get started with your
          preparation. The topics for class 9 give a lot of confidence to
          students to take part in other such competitions.
        </p>
      </div>

      {/* Section 4 */}
      <div style={styles.section}>
        <h2>Essay Olympiad Books for Class 9</h2>
        <p>
          Minds Marathon offers essay books for class 9 preparation. These books
          are very useful for students in their board exams and even in their
          Olympiad preparation. Writing essays give an added advantage in the
          job market. Most students find it difficult to begin writing. This can
          be made easy if students have a fair idea about the topics and what to
          write in those topics. Brainstorming is a good exercise where students
          put down their ideas on a sheet of paper. Minds Marathon offers essay
          books, thus students of class 9 can go through those books. The essay
          topics for most of the examinations are picked up from these books. By
          having a look at the essays written in these books, students can
          easily pick up points and write well in all their exams. The books
          teach them how to write different essays such as narrative,
          descriptive, expository, persuasive essays that enhances their writing
          skills.
        </p>
      </div>

      {/* Section 5 */}
      <div style={styles.content5}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ito-neso-essay-olympiad-class-9-workbook.jpg"
          alt="WorkBook"
          style={styles.image}
        />
        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.color = "#fff";
            e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#007bff";
            e.target.style.boxShadow = "none";
          }}
        >
          Buy Books
        </button>
      </div>

      {/* Section 6 */}
      <div style={styles.section}>
        <h2>Class 9 Essay Annual Olympiad and Monthly Olympiad -</h2>
        <h2>Essay Annual Olympiad Class 9 -</h2>
        <p>
          Minds Marathon conducts National Essay Olympiad Class 9 through annual
          Olympiads, which is one of the prestigious exams conducted at national
          and international levels. These exams allow students to express
          themselves, have their own writing styles and bring out their thoughts
          and ideas. Students’ writing styles vary from person to person. Some
          may have a narrative way of writing, whereas others may have a
          descriptive style. Some may be able to paint a beautiful picture using
          words, whereas others may want to keep it to the point and use facts
          and figures to express themselves. Having said, so both are very good
          styles of writing. Teachers must encourage all students to take part
          in the annual Olympiad. To register for this exam, please visit the
          Student Registration page, fill up all the details and get started.
          You will get all details about the exam for class 9 on our web page.
        </p>
        <p>
          Taking part in essay writing competitions is the best way to increase
          students’ score in the English exam. It gives them confidence to play
          with new words, phrases and sentence structures that clearly
          communicates personal opinion. Writing is one of the most productive
          hobbies that must be inculcated in all students right from their
          childhood.
        </p>
      </div>

      {/* Section 7 */}
      <div style={styles.section}>
        <h2>Essay Monthly Olympiad Class 9 -</h2>
        <p>
          Similar to the annual Olympiads, the monthly Olympiads are conducted
          for all students of class 9. They are given maximum exposure before
          the annual exams in the form of monthly tests. Students are tested
          every month on different topics to enable them to write better in all
          competitions. Students who have maximum exposure to writing find it
          easy to score in their school tests and even in the annual Olympiads.
          To register for the class 9 NESO exam, please visit the Student
          Registration page, fill up the details required for monthly tests and
          get started. The registration is open to all students irrespective of
          the board and school. Minds Marathon believes that each and every
          child has the ability to improve their performance. This is possible
          only through hard work. Thus, the Olympiad platform is the best way to
          enhance one’s learning, work on individual weaknesses, and come out
          with flying colors.
        </p>
        <p>
          The monthly Olympiads are the best way to express one’s thoughts,
          feelings, opinions, and beliefs. To write good essays students need to
          read different reference material to understand how to describe an
          issue. Students need to develop a convincing writing style so that
          readers appreciate the writing.
        </p>
      </div>
    </div>
  );
};

export default Class9Page;
