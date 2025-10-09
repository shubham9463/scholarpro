import React from "react";

const MathOlympiadPage = () => {
  // Inline styles
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      lineHeight: 1.6,
      backgroundColor: "white",
    },
    textBox: {
      backgroundColor: "#f9d84a",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    textBoxH1: {
      fontSize: "35px",
      fontWeight: "bold",
      color: "#000000",
      marginRight: "15px",
      marginLeft: "7rem",
    },
    textBoxP: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#1c1b1b",
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
      padding: "20px 60px",
      background: "#fff",
      color: "#000000",
      marginRight: "15px",
      marginLeft: "7rem",
    },
    content1H2: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    content1Ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    content1Li: {
      marginBottom: "12px",
      paddingLeft: "20px",
      position: "relative",
      fontSize: "15px",
    },
    content1LiBefore: {
      content: '"-"',
      position: "absolute",
      left: 0,
      fontWeight: "bold",
    },
    content2: {
      padding: "20px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "4rem",
      textAlign: "justify",
      marginTop: "-10px",
    },
    content3: {
      padding: "20px 60px",
      background: "#ffffff",
      color: "#000000",
      marginRight: "15px",
      marginLeft: "7rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      borderRadius: "5px",
    },
    content3Button: {
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    },
    content3ButtonHover: {
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0 6px 12px rgba(0, 123, 255, 0.4)",
    },
    content4: {
      backgroundColor: "#f9d84a",
      padding: "20px 60px",
      alignItems: "center",
    },
    content4H2: {
      fontWeight: "bold",
      color: "#000000",
      marginRight: "15px",
      marginLeft: "7rem",
    },
    content4P: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#000000",
      marginLeft: "7rem",
      marginRight: "8rem",
      textAlign: "justify",
    },
    content5: {
      background: "#ffffff",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    content5H2: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "#000000",
      marginRight: "15px",
      marginLeft: "7rem",
    },
    content5P: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#000000",
      marginLeft: "7rem",
      marginRight: "4rem",
      textAlign: "justify",
    },
    content5Img: {
      width: "350px",
      height: "auto",
      marginRight: "8rem",
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    content6: {
      background: "#f9d84a",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    content6Img: {
      width: "350px",
      height: "auto",
      marginLeft: "8rem",
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    content6H2: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "#000000",
      marginRight: "15px",
      marginLeft: "4rem",
      marginBottom: "-10px",
      marginTop: "-20px",
    },
    content6P: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#000000",
      marginLeft: "4rem",
      marginRight: "4rem",
      textAlign: "justify",
    },
    content7: {
      padding: "20px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "4rem",
      textAlign: "justify",
    },
    content8: {
      padding: "20px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "4rem",
      textAlign: "justify",
    },
    reg: {
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    regButton: {
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    },
    regButtonHover: {
      backgroundColor: "#007bff",
      color: "#fff",
      boxShadow: "0 6px 12px rgba(0, 123, 255, 0.4)",
    },
    content9: {
      padding: "20px 60px",
      background: "#ffffff",
      marginLeft: "7rem",
      marginRight: "4rem",
      textAlign: "justify",
    },
  };

  // Hover handling (optional using React state)
  const [hoveredButton, setHoveredButton] = React.useState(null);

  return (
    <div style={styles.body}>
      {/* Top Section */}
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>INTERNATIONAL MATHS OLYMPIAD</h1>
          <p style={styles.textBoxP}>
            Mathematics is one of the scoring subjects that require students to
            master concepts. One of the most essential elements of mastering
            mathematics is thorough practice & International Maths Olympiad (IMO)
            is one such platform where students are trained to understand its
            basics. This exam has two levels. Mind Marathon conducts International
            Maths Olympiad in various schools PAN India. It is open for students
            from class 1 to class 10. All questions asked in these exams are
            multiple-choice questions. The Olympiad exam also forms a base for
            students to score well in their academics. It gives students an edge
            over the others to solve tricky questions.
          </p>
        </div>
        <img
          style={styles.textBoxImg}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-Maths-Olympiad-Logo_315x143px.webp"
          alt="International Science Olympiad Logo"
        />
      </div>

      {/* Content Sections */}
      <div style={styles.content1}>
        <h2 style={styles.content1H2}>HOW TO PARTICIPATE IN MATHEMATICS OLYMPIAD EXAM</h2>
        <ul style={styles.content1Ul}>
          {[
            "Interested Schools can participate in Mathematics Olympiad by registering online with the Mind Marathon.",
            "Students can approach their subject teacher and enroll for the same.",
            "Several schools in India have tied up with ITO. Teachers often identify students who have a flair for math and encourage such students to participate in national & international level competitions.",
            "Several schools in India have tied up with ITO. Teachers often identify students who have a flair for math and encourage such students to participate in national & international level competitions.",
            "Schools can download the registration forms, available on our website Mind Marathon.",
            "Mind Marathon rewards deserving students with prizes and awards who top in Maths Olympiad exam.",
          ].map((li, i) => (
            <li key={i} style={styles.content1Li}>{li}</li>
          ))}
        </ul>
      </div>

      <div style={styles.content2}>
        <h2>MATHS OLYMPIAD SYLLABUS</h2>
        <p>
          The Maths Olympiad is one of the most prestigious examinations. These
          are conducted at national and international levels for Maths
          enthusiasts. The syllabus for this exam is the same as prescribed by all
          boards in the country. It maps to the CBSE, ICSE, and other State board
          curriculum. Students who prepare for this exam, develop good calculative
          abilities. It makes it an enjoyable experience for students to deal with
          numbers, patterns, measurements, shapes, money, fraction, time,
          calendar, data handling, decimals, ratio, proportion, algebra, geometry,
          trigonometry and a lot more mathematical concepts. It strengthens their
          basic knowledge of sums that are taught in class. Maths is one such
          subject that requires students to regularly practice different type of
          questions. The syllabus of the International Maths Olympiad (IMO) can be
          one way to increase proficiency and accuracy in the subject.
        </p>
      </div>

      <div style={styles.content3}>
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            style={hoveredButton === i ? { ...styles.content3Button, ...styles.content3ButtonHover } : styles.content3Button}
            onMouseEnter={() => setHoveredButton(i)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            CLASS {i + 1}
          </button>
        ))}
      </div>

      {/* The rest content4, content5, content6, content7, content8, reg, content9 */}
      {/* Similar structure */}
    </div>
  );
};

export default MathOlympiadPage;
