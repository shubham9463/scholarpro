import React from "react";

const OW = () => {
  const buttonBaseStyle = {
    display: "inline-block",
    background: "#d6e2ff",
    color: "#000",
    padding: "10px 18px",
    margin: "6px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
    textAlign: "center",
    flex: "1 1 150px",
    minWidth: "120px",
  };

  const hoverStyle = {
    background: "#0b5df0",
    color: "#fff",
  };

  const buttons = [
    "WINNER LIST 2023",
    "WINNER LIST 2022",
    "WINNER LIST 2021",
    "WINNER LIST 2020",
    "WINNER LIST 2019",
    "WINNER LIST 2018",
    "WINNER LIST 2017",
    "WINNER LIST 2016",
    "WINNER LIST 2015",
  ];

  return (
    <div style={{ margin: 0, fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* Top Banner */}
      <section
        style={{
          background: "#191547",
          color: "#fff",
          padding: "60px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {/* Text Section */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              paddingRight: "20px",
              boxSizing: "border-box",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                margin: "20px 0 10px",
              }}
            >
              MINDS MARATHON WINNERS
            </h1>
            <p
              style={{
                lineHeight: 1.6,
                fontSize: "16px",
                fontWeight: 500,
                margin: "10px auto",
                textAlign: "justify",
              }}
            >
              Over 42,511+ schools across India register for Minds Marathon exams
              conducted by Indian Talent Minds Marathon. Millions of students
              take part in these exams. In such huge competition, approximately
              20,000+ students win prizes and awards every year. For the past 5
              years, Indian Talent Minds Marathon preserved the list of winners
              of Minds Marathon exams conducted by it. List of National 1st Rank
              Winners, National 2nd Rank Winners, National 3rd Rank Laptop
              Winners, National 4th Rank Tablet Winners, State 1st–10th Rank
              Scholarship Winners, and State 11th–25th Rank Excellence Medal
              Award Winners is maintained for each academic year separately in
              the Minds Marathon Winner Gallery. Seeing their names in the list
              of achievements, students get motivated to become Minds Marathon
              toppers and this motivation lets them add more efforts in their
              academics.
            </p>
          </div>

          {/* Image Section */}
          <div
            style={{
              flex: "0 0 300px",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <img
              src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/Olympiad-Winners.webp"
              alt="Olympiad Winner"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* Winner Buttons */}
      <div
        style={{
          textAlign: "center",
          margin: "30px auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "700px",
        }}
      >
        {buttons.map((label, index) => (
          <a
            key={index}
            href="#"
            style={buttonBaseStyle}
            onMouseOver={(e) =>
              Object.assign(e.target.style, hoverStyle)
            }
            onMouseOut={(e) =>
              Object.assign(e.target.style, {
                background: "#d6e2ff",
                color: "#000",
              })
            }
          >
            {label}
          </a>
        ))}
      </div>

      {/* Content Section */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 20px 40px 20px",
          lineHeight: 1.7,
          textAlign: "justify",
        }}
      >
        <p>
          Minds Marathon winners are not made in a day. It takes several months
          of practice, dedication, and a lot of perseverance to win the Minds
          Marathon. Students have to dedicate a certain amount of time every day
          to become masters. All our participants take part in these exams with
          a lot of zeal and enthusiasm. Indian Talent Minds Marathon looks
          forward to increasing its winner list so that it can felicitate more
          students with each passing year. We wish all our participants a happy
          learning experience with ITO.
        </p>

        <p>
          Certificates won at the Minds Marathon levels hold immense importance
          in a child's life. It is not only a motivating moment for the child
          but also for parents, teachers, and all their well-wishers. Indian
          Talent Minds Marathon announces weekly winners and rewards even those
          who participate in the Online Minds Marathon. It believes that
          children must be encouraged at every step. The right kind of
          upbringing, with the right kind of motivation, makes it easy for
          students to chase their dreams. Our winner list itself is a treat to
          the eye. It is commendable to see children of a young age scoring full
          marks within the time limit.
        </p>

        <p>
          Students from different cities and states take part in these exams.
          The time frame for the Online Minds Marathon is 25 minutes, in which
          they have to answer 30 Multiple Choice Questions. Students can take
          these tests on any 2nd and 4th Saturday between 10:00 am and 6:00 pm.
          Winners are declared only after a thorough analysis of certain
          parameters. Some of them include the total number of correct answers
          and the time taken. Those who answer more questions correctly within
          the least time possible are declared top achievers. The criteria
          remain the same for all subjects of Minds Marathon. There are children
          who solve the 25-minute test within 8 minutes. If you visit the weekly
          winner section, you will be amazed to see their scores and completion
          times.
        </p>

        <p>
          Minds Marathon winners are not made in a day. It takes several months
          of practice, dedication, and perseverance to win the Olympiads.
          Students must dedicate time daily to mastering Minds Marathon. All our
          participants take part with enthusiasm. Indian Talent Minds Marathon
          looks forward to expanding its winner list to felicitate more students
          with each passing year. We wish all our participants a joyful learning
          experience with ITO.
        </p>
      </div>
    </div>
  );
};

export default OW;
