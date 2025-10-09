import React from "react";

const EssayOlympiad = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, lineHeight: 1.6, backgroundColor: "white" }}>
      {/* Top Section */}
      <div style={{ backgroundColor: "#f9d84a", padding: "20px 60px", display: "flex", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "35px", fontWeight: "bold", color: "#000000", marginRight: "15px", marginLeft: "7rem" }}>
            Essay Olympiad
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
            Essay writing is an art itself. It requires impeccable knowledge of the subject, mastery of the English
            language, excellent sentence structure, and a decent vocabulary to write a good essay. National Essay Olympiad
            (NESO) is for those students who have all of these traits in them. This exam is open for students from Class 1
            to Class 10. The subject differs from mainstream subjects such as Mathematics, Science, General Knowledge,
            English, and Computers. It allows students to test their language skills. It encourages story-telling thus
            making it more interesting. Students must be well-versed with topics on which they attempt essay writing.
          </p>
        </div>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/National-Essay-Olympiad-Logo.jpg"
          alt="National Essay Olympiad Logo"
          style={{ width: "350px", height: "auto", marginRight: "8rem" }}
        />
      </div>

      {/* Content 1 */}
      <div
        style={{
          padding: "20px 60px",
          background: "#fff",
          color: "#000000",
          marginRight: "10rem",
          marginLeft: "7rem",
        }}
      >
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "30px" }}>
          How To Participate In National Essay Olympiad (NESO)
        </h2>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {[
            "Schools can contact the officials of Minds Marathon to participate in Essay Writing. Exam pattern is shared with participating schools that are further communicated to all students.",
            "National Essay Olympiad (NESO) is conducted on a National level.",
            "Essay Topics are given on-the-spot depending on the level and grade the student is studying in. General topics about current affairs or our surroundings are usually preferred.",
            "It is a good way to test their general knowledge on issues happening in and around us.",
            "Get in touch with your English teacher today to know more about National Essay Olympiad (NESO) exams.",
            "Minds Marathon rewards deserving students with prizes and awards topping in Essay Writing Competition.",
          ].map((text, index) => (
            <li
              key={index}
              style={{
                marginBottom: "15px",
                paddingLeft: "20px",
                position: "relative",
                fontSize: "15px",
              }}
            >
              <span style={{ position: "absolute", left: 0, fontWeight: "bold" }}>-</span> {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Content 2 */}
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
        <h2>Essay Olympiad Syllabus</h2>
        <p>
          Minds Marathon conducts the National Essay Olympiad or the NESO exam for all students from class 1 to class 10.
          This exam ensures students build excellent writing capabilities since a young age. It makes them write on variety
          of topics as per their class, age and caliber. The importance is given to the kind of words and phrases used,
          description, impeccable grammar, idea and overall presentation of the given topic. These topics can be personal
          experiences, important days and dates, current affairs and so on. Teachers believe that only when students read
          about different topics from different sources, they are able to write well in any of the Essay Writing
          Competitions. Thus, it is very important for them to refer to authentic books that would help them to develop
          excellent writing skills. The NESO exam is a non-conventional exam, a little different from routine academic
          subjects. However, this exam forms the base of students’ writing skills, which is very important for any career
          they choose.
        </p>
      </div>

      {/* Content 3 (Buttons) */}
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
        {Array.from({ length: 10 }, (_, i) => (
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
              transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.color = "#fff";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#007bff";
              e.target.style.boxShadow = "none";
            }}
          >
            CLASS {i + 1}
          </button>
        ))}
      </div>

      {/* Content 4 */}
      <div style={{ backgroundColor: "#f9d84a", padding: "20px 60px", alignItems: "center" }}>
        <h2 style={{ fontWeight: "bold", color: "#000000", marginRight: "15px", marginLeft: "7rem" }}>
          How to Prepare for Essay Olympiad
        </h2>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#000000",
            marginLeft: "7rem",
            marginRight: "8rem",
            textAlign: "justify",
          }}
        >
          To prepare for the National Essay Olympiad, you need to refer to the workbooks offered by Minds Marathon. Here,
          you will understand the topics that would be asked for each class. Also, you will be able to read and make your
          own points before the exam. The books would give students an insight on how to write, what to write and what is
          expected out of all participants. When students read different topics from the books, they get additional
          knowledge, which they can use at any given time. Students must start their preparation. It is said “The early
          bird catches the worm”, the same applies to all students who are keen on the NESO exam.
        </p>
      </div>

      {/* Content 5 */}
      <div
        style={{
          padding: "20px 60px",
          background: "#ffffff",
          marginLeft: "7rem",
          marginRight: "8rem",
          textAlign: "justify",
        }}
      >
        <h2>Essay Olympiad Workbook</h2>
        <p>
          Minds Marathon offers the best essay workbooks for all students from class 1 to class 10. Students can buy these
          workbooks from the website and start their preparation for the National Essay Olympiad exam. The workbooks are
          designed by professionals who have sound command over the language and also the topics. The books act as a friend
          and guide that helps them in their preparation. Students get to learn new ideas, phrases and general information
          when they read books. It is one of the best productive activities that can be introduced to students when they are
          in school. The essay workbook by Minds Marathon would help all students to outshine themselves with flying
          colors.
        </p>
      </div>

      {/* Image and Button */}
      <div style={{ maxWidth: "280px", height: "auto", marginLeft: "14rem", marginRight: "10rem" }}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/Essay%20Olympiad%20Main%20page_1.jpg"
          alt="Books"
          style={{
            maxWidth: "280px",
            height: "auto",
            display: "block",
            margin: "10px auto",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
          }}
        />
        <button
          style={{
            marginLeft: "5rem",
            backgroundColor: "transparent",
            color: "#007bff",
            border: "2px solid #007bff",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "999px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.color = "#fff";
            e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#007bff";
            e.target.style.boxShadow = "none";
          }}
        >
          Buy Books
        </button>
      </div>

      {/* Content 7 */}
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
        <h2>Essay Monthly Olympiad</h2>
        <p>
          Minds Marathon conducts monthly tests for the National Essay Olympiad (NESO) exam. As the name suggests these are
          monthly tests that make students familiar with topics each month. Through these tests, the organization ensures
          that participants are well exposed to the exam, its requirements and are given maximum practice before the annual
          Olympiad. To register for the monthly tests, please visit our Student Registration Page. Here, you would find
          simple details that you can fill and register for the exam. The monthly tests act as an ice-breaker before the
          final exam. It also helps them to write for the school tests where students are tested on different essay topics.
          It is the best way where students would pick up the nuances of writing.
        </p>
        <p>
          Those who enroll for the monthly tests find it easy to attempt questions asked in the final exams. This is because
          of the continuous exposure provided to all students well in advance. Essay writing is an art that cannot be built
          within a day. It takes years and years of practice to develop this skill. Students must take up this exam at the
          earliest to cultivate excellent writing abilities. Proficiency in writing is an art that can be enhanced with
          rigorous hard work, dedication and practice.
        </p>
      </div>
    </div>
  );
};

export default EssayOlympiad;
