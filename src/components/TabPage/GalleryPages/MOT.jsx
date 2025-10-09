import React from "react";

const MOT = () => {
  const buttonBaseStyle = {
    display: "inline-block",
    backgroundColor: "#f5a623",
    color: "#000",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    padding: "20px 50px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#d48806",
    transform: "scale(1.05)",
  };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <h1
        style={{
          textAlign: "center",
          color: "#0066ff",
          marginTop: "20px",
          fontSize: "clamp(22px, 5vw, 34px)",
        }}
      >
        MONTHLY MINDS MARATHON TOPPERS
      </h1>

      {/* Image Section */}
      <div
        style={{
          textAlign: "center",
          margin: "20px auto",
          maxWidth: "90%",
        }}
      >
        <img
          alt="Monthly Minds Marathon Toppers"
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/monthly-olympiad-toppers.jpg"
          style={{
            borderStyle: "solid",
            borderWidth: "1px",
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderColor: "#ccc",
          }}
        />
      </div>

      {/* Content Section */}
      <div
        style={{
          margin: "20px auto",
          width: "80%",
          maxWidth: "900px",
          fontSize: "16px",
          lineHeight: "1.6",
          textAlign: "justify",
          color: "#000",
        }}
      >
        Indian Talent Minds Marathon conducts monthly Minds Marathon for all
        students, providing ample opportunity for students to practice before
        the annual Minds Marathon. Students can take part in online tests for
        Maths, Science, English, and General Knowledge, with the monthly toppers
        announced on the website. Seeing their names amongst the Minds Marathon
        toppers serves as great motivation for students. Indian Talent Olympiad
        also offers exciting packages, including rewards and gifts for
        participants who register for the monthly tests. These online tests are
        similar to the annual Olympiads, allowing students to understand the
        exam pattern and prepare better. Regularly taking part in the monthly
        tests makes it easier for students to attempt the annual Minds Marathon.
        <br />
        <br />
        Today’s generation students are smarter and more intelligent than the
        generations before. The education system has undergone a revolutionary
        change in the present century, thanks to the internet and technology.
        Online education gained significant importance in 2020, when schools
        adopted online learning. It was also the year when Indian Talent Minds
        Marathon introduced online Minds Marathon for the first time. The online
        Minds Marathon were liked by parents, teachers, and students alike.
      </div>

      {/* Button Section */}
      <div
        style={{
          textAlign: "center",
          margin: "40px 0",
        }}
      >
        <a
          href="Monthly-Minds-Marathon-toppers.html"
          style={buttonBaseStyle}
          onMouseOver={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseOut={(e) =>
            Object.assign(e.target.style, {
              backgroundColor: "#f5a623",
              transform: "scale(1)",
            })
          }
        >
          MONTHLY TOPPERS
          <br />
          2020–21
        </a>
      </div>
    </div>
  );
};

export default MOT;
