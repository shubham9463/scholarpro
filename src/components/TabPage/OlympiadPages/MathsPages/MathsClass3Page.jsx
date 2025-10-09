import React, { useState } from "react";

const Class3Page = () => {
  const [hover, setHover] = useState(false);

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
    content1H2: { marginBottom: "4px" },
    content1P: { fontSize: "18px", lineHeight: 1.3, color: "#333", marginTop: 0 },
    content2: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontSize: "16px",
      fontWeight: 500,
    },
    content2H2: { fontSize: "25px", marginBottom: "3px" },
    content2P: { fontSize: "18px", lineHeight: 1.5, color: "#333", marginTop: 0 },
    content2Ul: { fontSize: "18px", color: "#333", marginTop: "15px" },
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
    content5P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
    content6: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content6P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
    content7: {
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content7Button: {
      backgroundColor: hover ? "#007bff" : "transparent",
      color: hover ? "#fff" : "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
      boxShadow: hover ? "0 6px 12px rgba(11,11,11,0.4)" : "none",
    },
    content8: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content8P: { fontSize: "18px", lineHeight: 1.3, color: "#333" },
  };

  return (
    <div style={styles.body}>
      {/* Text Box */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>INTERNATIONAL MATHS OLYMPIAD CLASS 3</h1>
          <p style={styles.textBoxP}>
            Several organizations in India conduct Maths Olympiad for class 3.
            Minds Marathon is one such organization that provides student-friendly
            IMO Class 3 Books to solve and understand each question. It has the
            best study material, as the books are designed by experienced
            professionals from Mathematics background. The book provides
            proficiency to students in all areas such as addition, subtraction,
            multiplication, division, measurement, time, calendar, and fraction
            and so on. There is also a separate section on logical reasoning. This
            section is very useful for brain development. It helps students to
            identify loopholes in the options given, in order to arrive at the
            correct answer. This book seems to be quite resourceful and have a
            plethora of information. Students are sure to score well with the help
            of this book.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-Maths-Olympiad-Logo_1.webp"
          alt="International Science Olympiad Logo"
        />
      </div>

      {/* Content 1 */}
      <div style={styles.content1}>
        <h2 style={styles.content1H2}>PREPARATION MATERIAL FOR MATHS OLYMPIAD CLASS 3</h2>
        <p style={styles.content1P}>
          Preparing well for the Class 3 Maths Olympiad requires efficient study
          materials, and previous year question papers and workbooks play a
          crucial role in this. Prepare for the Class 3 Mathematics Olympiad with
          the help of specialized workbooks and the previous year question paper
          set that cover the entirety of the required material. There are many
          different mathematical ideas and methods of problem-solving covered
          here. These preparatory materials act as guides presenting the subject
          in a logical progression that makes learning easier and more efficient.
          Using the aforementioned study materials, students can strengthen their
          knowledge of mathematical concepts, increase their fluency in solving a
          wide range of problems, and sharpen their capacity for analytical
          thought. There is a wide selection of these formats for students to
          choose from.
        </p>
      </div>

      {/* Content 2 */}
      <div style={styles.content2}>
        <h2 style={styles.content2H2}>MATHS OLYMPIAD SYLLABUS CLASS 3</h2>
        <p style={styles.content2P}>
          The syllabus for class 3 Maths Olympiad is the same that is being
          followed in all schools across different boards. It becomes easy as well
          as interesting for students to understand concepts that are taught in
          class. Generally, school text books are to the point. It makes students
          familiar with various fundamentals, but Olympiad exams improve topic
          knowledge. It gives them a leverage to solve variety of questions using
          the same fundamentals. Maths is one such subject that requires rigorous
          practice. However, while practicing, student also need to understand
          that the answers are correct. School text books surely provide
          solutions, but Olympiad workbooks help students to understand the reason
          behind the correct answer. The syllabus is designed by subject matter
          experts who ensure that students are not over-loaded with content. It is
          age and class specific, striking a perfect balance between what is
          required to be learn and what is supposed to be taught. The syllabus of
          Class 3 Mathematics Olympiad makes students familiar with concepts such
          as mirror images of objects, solving word problems using addition, and
          subtraction. It also aims to explain the concept of units, tens and
          hundreds. Students are taught measurements such as long, short, tall,
          big, small etc. They can have fun exploring the calendar, weeks, months,
          days and years. In short, the syllabus for Maths Olympiad aims to
          connect right resources with all participants. Olympiad exams promote
          educational development in the country. Implementing the national
          curriculum framework, students will be able to follow chapter-wise
          questions, master concepts and come out with a unique intellect. Please
          check and compare chapter wise syllabus prescribed by school, against
          the syllabus of Minds Marathon to take an informed decision.
        </p>
        <ul style={styles.content2Ul}>
          <li>Chapter 1: Basic Geometric Shapes</li>
          <li>Chapter 2: Number System</li>
          <li>Chapter 3: Addition & Subtraction</li>
          <li>Chapter 4: Multiplication & Division</li>
          <li>Chapter 5: Fractions</li>
          <li>Chapter 6: Measurement</li>
          <li>Chapter 7: Time & Calendar</li>
          <li>Chapter 8: Data Handling</li>
          <li>Chapter 9: Logical Reasoning</li>
        </ul>
      </div>

      {/* Content 3 */}
      <div style={styles.content3}>
        <img
          style={styles.content3Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IMO-Maths-Olympiad-Workbook-Class-3.webp"
          alt="WORKBOOK"
        />
        <div>
          <h2 style={styles.content3H2}>CLASS 3 MATHS OLYMPIAD WORKBOOK</h2>
          <p style={styles.content3P}>
            Workbooks such as the IMO Book Class 3 serve as excellent preparatory
            resources and are of tremendous value to students who are getting
            ready to compete in the Mathematics Olympiad. The concepts and methods
            of problem-solving in mathematics that are essential for success in
            competitions like the International Mathematics Olympiad are covered
            in depth in these supplementary materials. These materials have been
            tailored to the needs of third-grade students and up who are thinking
            about participating in the Olympiad. Students can build a solid
            groundwork in mathematics through the use of a structured learning
            approach, which presents the material in a sequential and organized
            fashion. Using these materials is a fast and simple way to get ready
            for the Olympiad.
          </p>
        </div>
      </div>

      {/* Content 4 */}
      <div style={styles.content4}>
        <div>
          <h2 style={styles.content4H2}>CLASS 3 MATHS OLYMPIAD PREVIOUS YEAR QUESTION PAPER</h2>
          <p style={styles.content4P}>
            IMO class 3 previous year papers serve as quite the effective
            educational resources for students. Students should approach previous
            year question papers systematically and attempt to solve these papers
            under exam-like conditions. Setting a time limit and adhering to it
            strictly to help simulate the real exam environment. This practice
            improves time management skills and helps students become comfortable
            with the pressure of solving questions within a specified timeframe.
            They can start by attempting the questions they are confident about,
            ensuring that they secure those marks. Then, they can move on to the
            more challenging ones, allocating sufficient time for each question.
            It is crucial to read the questions carefully, understand the given
            information, and apply the appropriate concepts and problem-solving
            techniques aptly to perform well in the actual examination.
          </p>
        </div>
        <img
          style={styles.content4Img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/maths-previous-year-question-paper-class-03.webp"
          alt="PYQ"
        />
      </div>

      {/* Content 5 */}
      <div style={styles.content5}>
        <h2>CLASS 3 MATHS ANNUAL OLYMPIAD AND MONTHLY OLYMPIAD</h2>
        <p style={styles.content5P}>
          Students' ability to solve problems is improved when they take part in
          competitions like the Class 3 Maths Annual Olympiad and the Monthly
          competitions. The problems that are presented to the students in these
          competitions are difficult and require creative thinking as well as
          application of mathematical concepts. Students hone their analytical
          skills, improve their logical reasoning, and develop novel approaches to
          problem-solving as a result of the struggle they put forth when
          confronted with challenging problems. Students can prepare well for the
          exam using various resources and stay ahead of their peers when it comes
          to developing a grasp on the subject matter and associated concepts to
          benefit their overall studies.
        </p>
      </div>

      {/* Content 6 */}
      <div style={styles.content6}>
        <h2>MATHS ANNUAL OLYMPIAD CLASS 3</h2>
        <p style={styles.content6P}>
          The annual Olympiads are also online tests that are conducted from home.
          These are held during the months of December and February. The subjects
          in which students can take these tests are Science, Maths, English,
          General Knowledge, Drawing, Computer, Essay and Social Studies
          respectively. The duration of the annual Olympiads is 45 minutes that
          includes 50 multiple choice questions.
        </p>
        <p style={styles.content6P}>
          The drawing and the essay Olympiad is conducted for different durations.
          The drawing Olympiad allows 60 minutes for students to draw and paint
          their pictures, whereas the essay Olympiad allows students 40 minutes to
          come up with creative write-ups. The annual Olympiads act as revision
          for all participants before their school annual exams. These are
          generally conducted before school final exams, so that students can take
          maximum benefit from these tests. As and when students enter higher
          classes, they realize that there is a difference between basic maths and
          standard maths. The difference is nothing but the kind of questions
          asked in both these tests. The basic maths tests students on questions
          that are a part of their school textbooks, but the standard maths tests
          questions that are part of national competitions.
        </p>
        <p style={styles.content6P}>
          Olympiads, being national level competitions is the best way to train
          students as young as class 3 for future competitions. They become
          accustomed to challenges, and thus are confident to solve any question
          that comes their way.
        </p>
        <p style={styles.content6P}>
          To know more about the upcoming Olympiads, please click the link below:
        </p>
      </div>

      {/* Content 7 */}
      <div style={styles.content7}>
        <button
          style={styles.content7Button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Register now
        </button>
      </div>

      {/* Content 8 */}
      <div style={styles.content8}>
        <h2>MATHS MONTHLY OLYMPIAD CLASS 3</h2>
        <p style={styles.content8P}>
          Monthly Olympiads for Maths are one of the best ways to ensure basic
          mathematical calculations are clear to all students. It includes online
          tests that are open any time between 10:00 and 6:00 pm. These tests can
          be taken from any tablet or smart phone from home. It acts as extra
          practice for those participating in the final Olympiads. It also helps
          students in their regular school unit tests, surprise tests and other
          exams conducted at school level. Apart from Maths, students can take
          part in Science, English, GK, Essay and Drawing. This is the combo pack
          that allows participation in all the subjects of monthly Olympiads. The
          duration of the monthly Olympiads is for 25 minutes, that include 30
          multiple choice questions.
        </p>
        <p style={styles.content8P}>
          The questions for monthly Maths Olympiad are set by experts to help
          students excel in other tests. Students who acquire knowledge over these
          questions can bring good scores to themselves. The students of the 21 st
          century must consider themselves to be indeed lucky, as they have
          multiple avenues to prepare for national and international competitions.
          As compared to the earlier times, it they can acquire knowledge from
          different sources. Olympiad is one of the most trusted source in today’s
          times. These exams are tried and tested measures that are followed by
          crores of students across the country.
        </p>
        <p style={styles.content8P}>
          Those who enroll for monthly Olympiads are sure to acquire better
          results than their peers. This is all due to the rigorous online
          practice sessions offered by Minds Marathon. The monthly Olympiads can
          be a one stop solution for those looking for carving a niche in their
          careers.
        </p>
      </div>
    </div>
  );
};

export default Class3Page;
