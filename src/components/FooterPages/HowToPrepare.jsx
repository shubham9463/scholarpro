import React from "react";

const HowToPrepare = () => {
  const styles = {
    body: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      lineHeight: 1.4,
      margin: 0,
      fontSize: "18px",
      fontWeight: 500,
      color: "#000",
    },
    section: {
      margin: "2rem auto",
      maxWidth: "1200px",
      padding: "0 5%",
    },
    paragraph: {
      textAlign: "justify",
      fontSize: "17px",
      fontWeight: 400,
      color: "#333",
    },
    image: {
      width: "100%",
      maxWidth: "600px",
      height: "auto",
      display: "block",
      margin: "20px auto",
      borderRadius: "8px",
    },
    button: {
      borderRadius: "8px",
      backgroundColor: "#de3163",
      border: "3px solid #e72d61",
      boxShadow: "0 2px 7px 0 rgb(0 0 0 / 42%)",
      color: "#ffffff",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: 700,
      padding: "15px 20px",
      width: "260px",
      transition: "all 0.5s",
      cursor: "pointer",
      margin: "8px",
      position: "relative",
      display: "inline-block",
    },
    buttonSpan: {
      display: "inline-block",
      transition: "transform 0.5s ease",
    },
    heading1: { fontSize: "28px", fontWeight: 600 },
    heading2: { fontSize: "22px", fontWeight: 500, marginTop: "1rem" },
    heading3: { fontSize: "20px", fontWeight: 500, marginTop: "1rem" },
    gridButtons: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "12px",
      justifyItems: "center",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.body}>
      {/* SECTION 1 */}
      <div style={styles.section}>
        <h1 style={styles.heading1}>How To Prepare For Olympiad Exams</h1>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/FAQ.jpg"
          alt="Olympiad Preparation"
          style={styles.image}
        />
        <p style={styles.paragraph}>
          Students prepare for various competitive exams all-round the year. One
          such prestigious exams are the Olympiads. These are conducted at
          national and international levels. The Olympiad exams are organized at
          the school level for all classes from 1 to 10. The motive behind the
          Olympiads is to assess students' capabilities and make them master
          concepts that are taught in school. Students can select subjects as
          per their choice. It is one of the best exams to identify weaknesses
          and work on them. If you are still wondering how to prepare for the
          Olympiads, you are on the right page. Read on to learn about some
          preparation tips, best practices, and the benefits of Olympiads.
        </p>

        <p style={styles.paragraph}>
          Minds Marathon is one of the leading organizations that are humbly
          proud to be associated with 42,511+ schools across the country. It has
          an extensive student base of 10 crores+ students who are more than
          happy to participate in these exams. The organization considers each
          and every child as a winner in themselves. It believes in the concept
          of motivating all its participants and thus awards students with
          various exciting prizes. In order to be eligible for these prizes, you
          need to achieve certain ranks as prescribed by the organization. First
          and foremost, you need to be aware of the Olympiad syllabus. Although
          the Olympiad syllabus is prescribed by different boards, the questions
          asked here are a little different. Therefore, you need to have a plan
          for preparing for these exams.
        </p>

        <p style={styles.paragraph}>
          Success requires time, energy, resources, and attention. To
          effectively pass an Olympiad test, one should be committed to the work
          required and standards set forth in order to sufficiently stand out
          and leave a mark with their results. The following are some essential
          tips to remember while you study and prepare for the Olympiad exams
          and succeed in them to increase your chances of performing the best:
        </p>

        <ul style={{ textAlign: "left", marginLeft: "1rem", color: "#333" }}>
          <li>Understand the test schedule and syllabus thoroughly.</li>
          <li>Complete the topic curriculum in time to allow revision.</li>
          <li>Follow a good study routine for effective retention.</li>
          <li>Solve previous year’s papers for better understanding.</li>
          <li>Focus on conceptual clarity and logical reasoning.</li>
          <li>Stay consistent without overworking or cramming last minute.</li>
        </ul>
      </div>

      {/* SECTION 2 */}
      <div style={styles.section}>
        <h3 style={styles.heading3}>Participate in Monthly Olympiads:</h3>
        <p style={styles.paragraph}>
          Monthly Olympiads are one of the best ways to practice for annual
          Olympiad exams. Minds Marathon conducts monthly Olympiads that are
          similar to mock tests or demo tests that are conducted every month for
          Science, Maths, English, GK, Drawing and Essay. These tests are
          conducted online every 4th Saturday. Students can participate using
          any tablet or smartphone and practice the whole year for the annual
          Olympiads.
        </p>

        <div>
          <button style={styles.button}>
            <span style={styles.buttonSpan}>REGISTER NOW</span>
          </button>
          <button style={styles.button}>
            <span style={styles.buttonSpan}>LOGIN NOW</span>
          </button>
        </div>

        <h3 style={styles.heading3}>Start as early as possible:</h3>
        <p style={styles.paragraph}>
          Students who prepare for Olympiads must start their practice at the
          beginning of the year. Olympiad exams are usually conducted during
          November-December, so students who start early get to complete the
          syllabus well in time.
        </p>

        <h3 style={styles.heading3}>Get to know the syllabus:</h3>
        <p style={styles.paragraph}>
          Minds Marathon has explained the Olympiad syllabus in detail on its
          subject page. Once you know the syllabus well, it becomes easy to
          focus on concepts that may seem difficult.
        </p>

        <h3 style={styles.heading3}>Plan each day:</h3>
        <p style={styles.paragraph}>
          Olympiads need daily practice. Create a schedule and allocate time for
          each topic while reserving the last month for revision.
        </p>

        <h3 style={styles.heading3}>Manage time for different subjects:</h3>
        <p style={styles.paragraph}>
          Time management is key for covering multiple subjects. Olympiads also
          help prepare for school exams.
        </p>

        <h3 style={styles.heading3}>Refer to Olympiad workbooks:</h3>
        <p style={styles.paragraph}>
          Minds Marathon provides detailed workbooks with topic explanations and
          examples. Click below to buy:
        </p>
        <button style={styles.button}>
          <span style={styles.buttonSpan}>BUY BOOKS</span>
        </button>
      </div>

      {/* SECTION 3 */}
      <div style={styles.section}>
        <h1 style={styles.heading1}>Important Tips to Prepare For Olympiad Exam</h1>

        <h3 style={styles.heading3}>
          Understand the syllabus & pattern of every Minds Marathon examination:
        </h3>
        <p style={styles.paragraph}>
          For classes 1st to 4th, papers have 35 questions; for 5th to 10th,
          they have 50 questions. Each includes academic, reasoning, and high
          order thinking sections.
        </p>

        <h3 style={styles.heading3}>Understand the difficulty level:</h3>
        <p style={styles.paragraph}>
          Question complexity depends on the class and tests conceptual clarity,
          logical reasoning, and analytical skills.
        </p>

        <h3 style={styles.heading3}>Know the relevant Olympiad books:</h3>
        <p style={styles.paragraph}>
          Students should refer to school textbooks along with Minds Marathon’s
          workbooks, sample papers, and reasoning books.
        </p>

        <h3 style={styles.heading3}>Practice Olympiad sample papers:</h3>
        <p style={styles.paragraph}>
          Solve previous year papers from Minds Marathon’s website to understand
          difficulty and pattern.
        </p>
      </div>

      {/* SECTION 4 */}
      <div style={styles.section}>
        <h1 style={styles.heading1}>Olympiad Subject Wise Preparation</h1>
        <p style={styles.paragraph}>
          Click to know subject-wise preparation for Olympiad Exams:
        </p>
        <div style={styles.gridButtons}>
          {[
            "Science Olympiad Preparation",
            "Maths Olympiad Preparation",
            "English Olympiad Preparation",
            "Computer Olympiad Preparation",
            "Essay Olympiad Preparation",
            "Drawing Olympiad Preparation",
          ].map((text, index) => (
            <button key={index} style={styles.button}>
              <span style={styles.buttonSpan}>{text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 5 */}
      <div style={styles.section}>
        <h1 style={styles.heading1}>FAQs</h1>
        <h2 style={styles.heading2}>How to Prepare for Olympiads?</h2>
        <p style={styles.paragraph}>
          Have a clear understanding of the syllabus, practice past papers, and
          avoid last-minute cramming. Study smart, not hard.
        </p>

        <h2 style={styles.heading2}>What are the Tips to Prepare for Olympiad Exams?</h2>
        <p style={styles.paragraph}>
          Strengthen your concepts, stay calm during exams, manage time wisely,
          follow a regular study plan, and get adequate rest.
        </p>
      </div>
    </div>
  );
};

export default HowToPrepare;
