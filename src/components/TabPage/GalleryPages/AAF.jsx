import React from "react";

const AAF = () => {
  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#fff" }}>
      {/* Header Section */}
      <div
        style={{
          background: "#fdd835",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: "70%" }}>
          <h1 style={{ fontSize: "28px", color: "#000", margin: "30px" }}>
            MINDS MARATHON ANNUAL AWARD FUNCTIONS
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.5",
              color: "#333",
              margin: "30px",
            }}
          >
            Award gallery captures the achievement of students who have performed excellently in the
            Minds Marathon exams. We are happy to honour the rank holders and the award winners of
            Indian Talent Minds Marathon exams. Each year Indian Talent Minds Marathon organizes an
            Award Function where Rank Holders at National Level are called up and are given special
            recognitions. It enhances the determination of students and morale. Schools feel proud
            as these young ones represent their schools.
          </p>
        </div>

        <div>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/Annual%20Award%20Function.webp"
            alt="Award Function"
            style={{ width: "300px", border: "3px solid #b71c1c" }}
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <a
          href="#"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "15px 30px",
            background: "#fdd835",
            color: "#000",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: "6px",
            boxShadow: "2px 4px 6px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#fbc02d";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#fdd835";
            e.target.style.transform = "scale(1)";
          }}
        >
          ANNUAL FUNCTION 2023-24
        </a>

        <a
          href="#"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "15px 30px",
            background: "#fdd835",
            color: "#000",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: "6px",
            boxShadow: "2px 4px 6px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#fbc02d";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#fdd835";
            e.target.style.transform = "scale(1)";
          }}
        >
          ANNUAL FUNCTION 2018-19
        </a>
      </div>
    </div>
  );
};

export default AAF;
