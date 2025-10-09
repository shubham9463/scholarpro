import React from "react";

const OlympiadRanking = () => {
  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        lineHeight: "1.4",
        fontSize: "18px",
        fontWeight: 500,
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "#ffca84",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 0",
          textAlign: "justify",
          color: "#333",
        }}
      >
        <div style={{ flex: "1 1 400px", padding: "0 3rem" }}>
          <h1>OLYMPIAD RANKING</h1>
          <p>
            The Olympiad Ranking of the students is a mathematical analysis of
            their academic scores compared to the scores of other students. The
            Ranking for Olympiad exams is determined considering the scores of
            both rounds. The scores are converted into ranks. The Olympiad
            Ranking criteria are well described by the Minds Marathon. The
            student is eligible to perceive rank when he/she fits into the
            ranking criteria. There are amazing prizes for the first 4 rank
            holders. The ranking is determined by the grading system.
          </p>
        </div>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/ito-olympiad-ranking.webp"
          alt="Olympiad Ranking"
          style={{
            flex: "1 1 300px",
            maxWidth: "350px",
            height: "auto",
            margin: "0 auto",
            display: "block",
          }}
        />
      </div>

      {/* Qualification Heading */}
      <div
        style={{
          backgroundColor: "#ffde59",
          textAlign: "center",
          padding: "1rem",
          fontSize: "30px",
          fontWeight: 700,
          color: "#333",
        }}
      >
        CRITERIA FOR QUALIFICATION FOR SCHOOL THROUGH REGISTERED
      </div>

      {/* Offline Exam Section */}
      <div style={{ padding: "2rem 12rem", maxWidth: "100%" }}>
        <h4
          style={{
            fontWeight: 700,
            fontSize: "22px",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          OFFLINE EXAM
        </h4>
        <div
          style={{
            border: "2px dashed #999",
            borderRadius: "12px",
            padding: "18px 24px",
          }}
        >
          <p>
            Students who meet one of the two requirements below will be eligible
            for winning National Ranks.
          </p>
          <ol>
            <li>
              Class-wise for top 20% of students', due priority to marks scored
              in exam will be given.
            </li>
            <li>
              If in case of tie the following criteria will be checked -
              <ol>
                <li>Student's grade/percentage in previous class</li>
                <li>Number of correct and wrong answers</li>
                <li>Negative marks for wrong answers</li>
                <li>Neatness marks can be added</li>
                <li>
                  Class Topper: At least 10 students from a class appear in the
                  exam, & scores at least 50% marks. In the case of section-wise
                  registrations, Class toppers will be from each section where
                  participation in each section exceeds 25 nos.
                </li>
              </ol>
            </li>
          </ol>
          <p>
            If two or more students receive the same grade in any of the
            following categories, the grades assigned to the questions with
            internal marking ratios will be added together. If two or more
            students receive identical scores across all sections, they will be
            given the same rank and the scholarship money will be divided among
            them.
          </p>
          <p style={{ color: "#a52d00", fontStyle: "italic" }}>
            **Schools selecting online exam can refer to the online exam
            evaluation criteria.
          </p>
        </div>
      </div>

      {/* Offline Exam Ranks */}
      <div
        style={{
          backgroundColor: "#ffde59",
          padding: "2rem 12rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 750,
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          OFFLINE EXAM RANKS
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {[
            { title: "NATIONAL RANK 1", color: "#2c2c99", text: "Rs. 1,00,000 FOR 8 STUDENTS" },
            { title: "NATIONAL RANK 2", color: "#ff7f2a", text: "Rs. 40,000 FOR 10 STUDENTS" },
            { title: "NATIONAL RANK 3", color: "#2c2c99", text: "10 STUDENTS WILL BE AWARDED Rs. 20,000" },
            { title: "NATIONAL RANK 4", color: "#ff7f2a", text: "100 STUDENTS WILL BE AWARDED Rs. 6,000" },
            { title: "STATE RANK 1 TO 10", color: "#2c2c99", text: "MEDAL & SCHOLARSHIPS WILL BE AWARDED" },
            { title: "STATE RANK 11 TO 25", color: "#ff7f2a", text: "EXCELLENCE MEDAL AWARD WILL BE AWARDED (Only For Students Registered Through School for Offline/Online Exam)" },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                width: "180px",
                height: "250px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "2px 3px 0 0 #b7b6b6",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  backgroundColor: card.color,
                  color: "white",
                  padding: "12px 8px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "17px",
                  color: "#000",
                  lineHeight: "1.4",
                }}
              >
                {card.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OlympiadRanking;
