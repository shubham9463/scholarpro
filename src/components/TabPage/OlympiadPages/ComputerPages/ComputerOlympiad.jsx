import React from "react";

const ComputerOlympiad = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        lineHeight: 1.6,
        backgroundColor: "white",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          backgroundColor: "#f9d84a",
          padding: "20px 60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#000000",
              marginRight: "15px",
              marginLeft: "7rem",
            }}
          >
            Computer Olympiad
          </h1>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#1c1b1b",
              marginLeft: "7rem",
              marginRight: "4rem",
              textAlign: "justify",
            }}
          >
            Today’s generation is more tech-savvy as compared to those of the
            previous times. All thanks to information and technology, computers
            have become the talk of the town. International Computer Olympiad
            (ICO) is one of the most interesting exams because of the love for
            the subject. Students from class 1 to class 10 can participate in
            ICO. It is also called as Computer Olympiad exams under different
            names such as Cyber Olympiad, Informatics Olympiad, and Digital
            Olympiad. The motive of this exam is to train young minds and
            prepare them for the future. The world is turning digital, thus
            giving rise to such exams. Apart from creating an unusual interest,
            it has also become the need of the hour.
          </p>
        </div>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/International-computer-Olympiad-Logo.jpg"
          alt="Computer Olympiad Logo"
          style={{ width: "350px", height: "auto", marginRight: "8rem" }}
        />
      </div>

      {/* Content Section 1 */}
      <div
        style={{
          padding: "20px 60px",
          background: "#fff",
          color: "#000000",
          marginRight: "10rem",
          marginLeft: "7rem",
        }}
      >
        <h2
          style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "30px" }}
        >
          How To Participate In International Computer Olympiad:
        </h2>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {[
            "All in International Computer Olympiad (ICO) though Minds Marathon.",
            "The subject teacher must give all interested students’ names to Indian Talent Olympiad before the last date. The exam is conducted in their respective school.",
            "Participating in Olympiad exams is possible only from the school. It has only 1 level & conducted at international level.",
            "Minds Marathon rewards deserving students with prizes and awards topping in the International Computer Olympiad exam.",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                marginBottom: "15px",
                paddingLeft: "20px",
                position: "relative",
                fontSize: "15px",
              }}
            >
              <span
                style={{ position: "absolute", left: 0, fontWeight: "bold" }}
              >
                -
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Section 2 */}
      <div
        style={{
          padding: "20px 60px",
          background: "#ffffff",
          marginLeft: "7rem",
          marginRight: "8rem",
          textAlign: "justify",
          marginTop: "-10px",
        }}
      >
        <h2>Computer Olympiad FAQs</h2>
        <h1>How Was Your Journey To A Science/ Maths Olympiad?:</h1>
        <p>
          Science and Maths are considered to be difficult subjects for many
          students. Many children fear these subjects and dread to face them.
          This is probably because, children are not being given the right kind
          of teaching. Olympiads teach students from scratch. It makes
          conceptual learning clear. It ensures that students understand the
          fundamental aspects of each and every question. Science and
          Mathematics both require students to delve deep in the question.
          Teachers and parents play a crucial role in encouraging students to
          attempt Science or Maths Olympiad. Students get to learn new concepts,
          logics and facts behind the question. When students become comfortable
          attempting advanced level questions for Science or Maths Olympiad, it
          becomes easy for them to attempt school exams.
        </p>
      </div>

      {/* Content Section 3 (Buttons) */}
      <div
        style={{
          padding: "20px 60px",
          background: "#ffffff",
          color: "#000000",
          marginRight: "8rem",
          marginLeft: "7rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          borderRadius: "5px",
        }}
      >
        {[
          "CLASS 1",
          "CLASS 2",
          "CLASS 3",
          "CLASS 4",
          "CLASS 5",
          "CLASS 6",
          "CLASS 7",
          "CLASS 8",
          "CLASS 9",
          "CLASS 10",
        ].map((cls, i) => (
          <button
            key={i}
            style={{
              backgroundColor: "transparent",
              color: "#007bff",
              border: "2px solid #007bff",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "999px",
              cursor: "pointer",
              transition:
                "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
            }}
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
            {cls}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ComputerOlympiad;
