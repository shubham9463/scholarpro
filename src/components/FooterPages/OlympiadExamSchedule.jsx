
import React from "react";

const OlympiadExamSchedule = () => {
  const containerStyle = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    lineHeight: "1.4",
    margin: 0,
    fontSize: "18px",
    fontWeight: 500,
    color: "#000",
  };

  const heading1Style = {
    textAlign: "center",
    color: "#6d66ed",
    fontWeight: 300,
    marginTop: "2rem",
  };

  const contentStyle = {
    padding: "0 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const tableWrapper = {
    width: "100%",
    overflowX: "auto",
    margin: "2rem 0",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    minWidth: "800px",
  };

  const thStyle = {
    border: "1px solid #000",
    padding: "10px",
    backgroundColor: "#6d66ed",
    color: "#fff",
    textAlign: "center",
  };

  const tdStyle = {
    border: "1px solid #000",
    padding: "10px",
    textAlign: "center",
  };

  const paragraphStyle = {
    marginBottom: "1.5rem",
  };

  const buttonContainer = {
    textAlign: "center",
    margin: "3rem 0",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "#007bff",
    border: "2px solid #007bff",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "999px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#007bff";
    e.target.style.color = "#fff";
    e.target.style.boxShadow = "0 6px 12px rgba(11, 11, 11, 0.4)";
  };

  const buttonLeave = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#007bff";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={containerStyle}>
      <h1 style={heading1Style}>OLYMPIAD EXAM SCHEDULE</h1>

      <div style={contentStyle}>
        <p style={paragraphStyle}>
          Minds Marathon Olympiads are conducted for students of classes 1 to
          10. These Olympiads are based on the regular school curriculum. The
          Olympiads give students an opportunity to compete at a national level
          exam, helping them to build confidence and get a deeper understanding
          of subjects.
        </p>

        <p style={paragraphStyle}>
          The Olympiad schedule helps students plan and prepare accordingly.
          Students are encouraged to register before the deadline to ensure they
          get ample time to study. Olympiad exams are conducted for subjects
          such as Science, Mathematics, English, General Knowledge, Computer,
          Drawing, Essay, and Social Studies.
        </p>

        <div style={tableWrapper}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Sr. No.</th>
                <th style={thStyle}>Olympiad Name</th>
                <th style={thStyle}>Subject Code</th>
                <th style={thStyle}>Class</th>
                <th style={thStyle}>Exam Date</th>
                <th style={thStyle}>Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>1</td>
                <td style={tdStyle}>International Science Olympiad (ISO)</td>
                <td style={tdStyle}>SC</td>
                <td style={tdStyle}>1 to 10</td>
                <td style={tdStyle}>October 2025</td>
                <td style={tdStyle}>Online / Offline</td>
              </tr>
              <tr>
                <td style={tdStyle}>2</td>
                <td style={tdStyle}>International Maths Olympiad (IMO)</td>
                <td style={tdStyle}>MA</td>
                <td style={tdStyle}>1 to 10</td>
                <td style={tdStyle}>November 2025</td>
                <td style={tdStyle}>Online / Offline</td>
              </tr>
              <tr>
                <td style={tdStyle}>3</td>
                <td style={tdStyle}>International English Olympiad (EIO)</td>
                <td style={tdStyle}>EN</td>
                <td style={tdStyle}>1 to 10</td>
                <td style={tdStyle}>December 2025</td>
                <td style={tdStyle}>Online / Offline</td>
              </tr>
              <tr>
                <td style={tdStyle}>4</td>
                <td style={tdStyle}>General Knowledge Olympiad (GKIO)</td>
                <td style={tdStyle}>GK</td>
                <td style={tdStyle}>1 to 10</td>
                <td style={tdStyle}>January 2026</td>
                <td style={tdStyle}>Online / Offline</td>
              </tr>
              <tr>
                <td style={tdStyle}>5</td>
                <td style={tdStyle}>International Computer Olympiad (ICO)</td>
                <td style={tdStyle}>CO</td>
                <td style={tdStyle}>1 to 10</td>
                <td style={tdStyle}>February 2026</td>
                <td style={tdStyle}>Online / Offline</td>
              </tr>
              <tr>
                <td style={tdStyle}>6</td>
                <td style={tdStyle}>National Drawing Olympiad (IDO)</td>
                <td style={tdStyle}>DR</td>
                <td style={tdStyle}>1 to 10</td>
                <td style={tdStyle}>March 2026</td>
                <td style={tdStyle}>Online / Offline</td>
              </tr>
              <tr>
                <td style={tdStyle}>7</td>
                <td style={tdStyle}>National Essay Olympiad (NESO)</td>
                <td style={tdStyle}>ES</td>
                <td style={tdStyle}>1 to 10</td>
                <td style={tdStyle}>April 2026</td>
                <td style={tdStyle}>Online / Offline</td>
              </tr>
              <tr>
                <td style={tdStyle}>8</td>
                <td style={tdStyle}>National Social Studies Olympiad (NSSO)</td>
                <td style={tdStyle}>SS</td>
                <td style={tdStyle}>1 to 10</td>
                <td style={tdStyle}>May 2026</td>
                <td style={tdStyle}>Online / Offline</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={paragraphStyle}>
          Students can register for these Olympiads individually or through
          their schools. Once registered, students can access study material and
          sample papers. Minds Marathon provides a user-friendly platform for
          both online and offline exams, ensuring that students from across the
          country can participate easily.
        </p>

        <p style={paragraphStyle}>
          The Olympiad exams aim to test conceptual understanding and practical
          knowledge. By taking these exams, students gain exposure and confidence
          to perform better in school and future competitions.
        </p>

        <div style={buttonContainer}>
          <button
            style={buttonStyle}
            onMouseOver={buttonHover}
            onMouseOut={buttonLeave}
          >
            VIEW FULL SCHEDULE
          </button>
        </div>
      </div>
    </div>
  );
};

export default OlympiadExamSchedule;
