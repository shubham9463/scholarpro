
import React from "react";

const OlympiadFeatures = () => {
  const containerStyle = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    lineHeight: "1.4",
    margin: 0,
    fontSize: "18px",
    fontWeight: 500,
    color: "#000",
  };

  const content1Style = {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#ffca84",
    padding: "2rem 1rem",
    alignItems: "center",
    justifyContent: "center",
  };

  const content1Text = {
    flex: "1 1 400px",
    padding: "1rem 2rem",
  };

  const content1Img = {
    flex: "1 1 300px",
    maxWidth: "400px",
    padding: "1rem",
    width: "100%",
  };

  const sectionContainer = (bgColor) => ({
    margin: "2rem auto",
    maxWidth: "1200px",
    padding: "0 2rem",
  });

  const boxStyle = (bgColor) => ({
    backgroundColor: bgColor,
    padding: "1rem",
    border: "2px dashed #999",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: 400,
  });

  const h2Style = {
    padding: "9px 12px",
    border: "3px solid #000",
    borderRadius: "15px",
    color: "#000",
    fontWeight: 600,
    background: "#e4f4ff",
    fontSize: "18px",
    display: "inline-block",
    marginBottom: "1rem",
  };

  const content8Style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    margin: "2rem 0",
  };

  const buttonStyle = {
    borderRadius: "8px",
    backgroundColor: "#1c2951",
    border: "3px solid #1c2951",
    boxShadow: "0 2px 7px 0 rgb(0 0 0 / 42%)",
    color: "#ffffff",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: 700,
    padding: "20px",
    width: "260px",
    transition: "all 0.5s",
    cursor: "pointer",
    margin: "4px",
    position: "relative",
    overflow: "hidden",
  };

  const buttonHover = (e) => {
    e.currentTarget.style.backgroundColor = "#fff";
    e.currentTarget.style.color = "#1c2951";
    e.currentTarget.querySelector("span").style.transform = "translateX(-10px)";
    e.currentTarget.querySelector("span::after");
  };

  const buttonLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#1c2951";
    e.currentTarget.style.color = "#fff";
    e.currentTarget.querySelector("span").style.transform = "translateX(0)";
  };

  const faqContainer = {
    margin: "2rem auto",
    maxWidth: "1200px",
    padding: "0 2rem",
  };

  const h1Faq = {
    fontWeight: 700,
    fontSize: "22px",
  };

  const faqPara = {
    backgroundColor: "#fff5e6",
    padding: "1rem",
    border: "2px dashed #999",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: 400,
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={content1Style}>
        <div style={content1Text}>
          <h1>OLYMPIAD FEATURES & BENEFITS</h1>
          <p>
            Minds Marathon highlights not only the services provided to the
            schools but also the awards to the Principal/Head Master/Head
            Mistress, the In-Charge Teachers and to the schools are featured.
            Also additional Olympiad Benefits are added for the students. Have a
            glance at the detailed information of features provided.
          </p>
        </div>
        <img
          style={content1Img}
          src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/Olympiad-Features-&-Benefits.webp"
          alt="Olympiad Features & Benefits"
        />
      </div>

      {/* Section 2 */}
      <div style={sectionContainer()}>
        <h2 style={h2Style}>ONLINE SCHOOL LOGIN</h2>
        <p style={boxStyle("#d2d1ff")}>
          Every participating school and student gets an Online Login Facility.
          This will enable students and teachers to download results.
        </p>
      </div>

      {/* Section 3 */}
      <div style={sectionContainer()}>
        <h2 style={h2Style}>MESSAGE ALERT SYSTEM</h2>
        <p style={boxStyle("#fbffd1")}>
          Every registered school will receive timely SMS alerts on their
          registered mobile numbers for key events.
        </p>
      </div>

      {/* Section 4 */}
      <div style={sectionContainer()}>
        <h2 style={h2Style}>GOLDEN SCHOOL AWARD</h2>
        <p style={boxStyle("#ffd1df")}>
          Golden School Award will be given to the Top 100 best performing
          schools from each state.
        </p>
      </div>

      {/* Section 5 */}
      <div style={sectionContainer()}>
        <h2 style={h2Style}>INSPIRING TEACHER AWARD</h2>
        <p style={boxStyle("#d1fff1")}>
          In-charge teachers representing top-performing schools will be honored
          with the 'Inspiring Teacher' award.
          <br />
          <strong>Note:</strong> Teachers who are registering as 'In-charge
          Teacher' for multiple subjects or every subject will be awarded a
          single award whichever is of the highest regard.
        </p>
      </div>

      {/* Section 6 */}
      <div style={sectionContainer()}>
        <h2 style={h2Style}>MOTIVATING HEAD MASTER / PRINCIPAL AWARD</h2>
        <p style={boxStyle("#d1fff1")}>
          HEADMASTER / PRINCIPAL of a top-performing school at Minds Marathon
          exams gets 'Motivating Head Master/Principal' award.
          <br />
          <strong>Note:</strong> Head Masters/ Principals who are registering as
          'In-charge Teacher' as well for specific subjects, will be awarded a
          single award of the highest regard (i.e. Headmaster/ Principal award
          only).
        </p>
      </div>

      {/* Section 7 */}
      <div style={sectionContainer()}>
        <h2 style={h2Style}>ADDITIONAL FEATURES AND BENEFITS</h2>
        <p style={boxStyle("#d8ffd1")}>
          Exam Fees Exemption in respective subjects for students who received
          scholarships in the last 4 Years. Students Appearing for any 3 Exams
          get FREE REGISTRATION for the 4th exam of their choice (Only Exam).
        </p>
      </div>

      {/* Buttons */}
      <div style={content8Style}>
        <button
          style={buttonStyle}
          onMouseOver={buttonHover}
          onMouseOut={buttonLeave}
        >
          <span>REGISTER NOW</span>
        </button>
        <button
          style={buttonStyle}
          onMouseOver={buttonHover}
          onMouseOut={buttonLeave}
        >
          <span>LOGIN NOW</span>
        </button>
      </div>

      {/* FAQ */}
      <div style={faqContainer}>
        <h1 style={h1Faq}>FAQ</h1>
        <h2 style={h2Style}>CAN I TAKE PART IN MORE THAN 1 SUBJECT?</h2>
        <p style={faqPara}>
          Yes. Minds Marathon conducts exams in 9 subjects. Students are free to
          choose subjects of their choice. They can take part in 1 or as many
          subjects as per individual interest. The organization offers a special
          combo pack for exams, workbooks, and practice papers. The combo pack
          of workbooks and paper sets is available for Science, Mathematics,
          English, and General Knowledge. These are the most sought-after
          subjects, in which students prefer to attempt the exam.
        </p>
      </div>
    </div>
  );
};

export default OlympiadFeatures;

