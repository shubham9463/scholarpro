import React from "react";

const Class10Page = () => {
  const contentStyle = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    margin: 0,
    padding: 0,
    lineHeight: 1.4,
    backgroundColor: "white",
  };

  const sectionBase = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  const buttonStyle = {
    marginLeft: "5rem",
    backgroundColor: "transparent",
    color: "#007bff",
    border: "2px solid #007bff",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "999px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
  };

  const handleHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover ? "#007bff" : "transparent";
    e.target.style.color = isHover ? "#fff" : "#007bff";
    e.target.style.boxShadow = isHover
      ? "0 6px 12px rgba(0, 123, 255, 0.4)"
      : "none";
  };

  return (
    <div style={contentStyle}>
      {/* Section 1 */}
      <div
        style={{
          backgroundColor: "#ffdd57",
          padding: "20px 60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ marginLeft: "10rem", marginRight: "10rem" }}>
            Essay Writing Competition Class 10
          </h1>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#333",
              marginLeft: "10rem",
              marginRight: "10rem",
              textAlign: "justify",
            }}
          >
            Minds Marathon provides books for National Essay Olympiad class 1.
            All books are informative and educative. This is a national level
            Olympiad exam conducted for all students across the country. This
            exam is organized for students of standard 10. Essay book for Class
            10 are designed by experts that consists of topics and sample
            essays. Some of the topics for essay writing include Missile Man of
            India – Dr A.P.J Abdul Kalam, Importance of Education, Republic Day,
            Narendra Modi, Autobiography of a book, If I were a Prime Minister,
            Unity in Diversity and so on. Some of these Essay topics come as a
            part of school syllabus in their English exam as well. These books
            can be used by students for studying for their school exams.
            Students benefit immensely from these books as it improves
            knowledge, assists their writing skills and helps them to score well
            in exams.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div style={sectionBase}>
        <h1>Preparation Material for Class 10 Essay Olympiad</h1>
        <p>
          The Essay Writing Competition Class 10 is available at Minds Marathon
          for all participants. Students who are taking part in essay Olympiad
          or even in other similar competitions can make the most of these study
          material. It gives them an exposure and an idea about the expected
          topics, the way to write for the topics and improve their writing
          skills. Class 10 is the turning point in all students’ life when
          parents and teachers must give them the right guidance.
        </p>
      </div>

      {/* Section 3 */}
      <div style={sectionBase}>
        <h2>Topics For Essay Olympiad Class 10</h2>
        <p>
          The Essay Topics for class 10 are as per the ability of all grade 10
          students. They are tested on different topics to gauge their
          understanding of the world around. Students can refer to as many study
          material as they want and read different topics of essays. Essay
          writing is an integral part of all students right from high school to
          their graduation. Students in different age groups have different
          abilities to write essays. Writing is one of the best endeavors that
          helps to shape their futures. An essay can be short or long that
          supports the topic of discussion.
        </p>
        <ul style={{ lineHeight: "1.8" }}>
          {[
            "Mahatma Gandhi",
            "Subhash Chandra Bose",
            "Missile Man of India – Dr A.P.J Abdul Kalam",
            "Narendra Modi",
            "My Neighbour",
            "Republic Day",
            "Festivals of India",
            "My Favourite festival – Dussehra",
            "My Favorite Book",
            "Autobiography of a Book",
            "The Importance of Education",
            "A Cricket Match",
            "Urban Life versus Rural Life",
            "A Dust Storm",
            "Blessings of Science",
            "My Aim in Life",
            "My Hobby / Things I like to do during My Pastime",
            "The Happiest Day of My Life",
            "If I were The Prime Minister!",
            "The 'Lotus Temple'",
            "My Visit to Agra and Taj Mahal",
            "A Visit to an Exhibition",
            "The Person I Admire – Mother Teresa",
            "An hour at the railway platform",
            "Complete Blackout a Day – Before Examination",
            "The Generation Gap",
            "My Idea of a Happy Life",
            "Global Warming",
            "Role of Computers and Internet in Everyday Life",
            "Plastic – A Boon or a Bane?",
            "Life in a Big City",
            "Craze of Western Culture",
            "Unity in Diversity",
            "Pollution: A Threat to Life",
            "Terrorism",
            "Liberty is not Anarchy",
          ].map((topic, index) => (
            <li key={index}>Chapter {index + 1}: {topic}</li>
          ))}
        </ul>
      </div>

      {/* Section 4 */}
      <div style={sectionBase}>
        <h2>Essay Olympiad Books for Class 10</h2>
        <p>
          Minds Marathon provides essay workbooks for class 10 Olympiad
          preparation that is available on the website. These are ideal for
          National Essay Olympiad Class 10. The books help students to write
          explicitly. It develops essential skills that are required to improve
          one’s writing. It develops the ability to read, write, think, organize,
          analyze, interpret, and communicate in an efficient manner. It helps
          students to build up formal and organized writing that passes
          information with clarity. The best that it does is, it helps students
          in their learning, builds vocabulary, and enables them to have a
          distinct style of writing. Students who have excellent writing
          capabilities, are able to complete other assignments. The essay books
          ensure that students are in regular touch with writing and can able to
          write on any given topic. With regular practice, hard work and
          determination, students can become proficient in writing. Students can
          also motivate others to write well through their writings.
        </p>
      </div>

      {/* Image + Button */}
      <div style={{ maxWidth: "280px", marginLeft: "14rem", marginRight: "10rem" }}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/NESO-Essay-Olympiad-Class%2010.jpg"
          alt="WorkBook"
          style={{
            maxWidth: "280px",
            height: "auto",
            display: "block",
            margin: "10px auto",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
          }}
        />
        <button
          style={buttonStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Buy Books
        </button>
      </div>

      {/* Section 6 */}
      <div style={sectionBase}>
        <h1>Class 10 Essay Annual Olympiad and Monthly Olympiad -</h1>
        <h2>Essay Annual Olympiad Class 10</h2>
        <p>
          The National Essay Olympiad exam is an annual Olympiad conducted every
          year by Minds Marathon. This exam is the best way to enhance individual
          writing skills. Through this exam, students can win prizes at the
          national and international levels. Certificates won at this level brings
          a lot of confidence to all students. It is a matter of great pride for
          all participants, their parents, teachers, and even the school. To
          register for the NESO exam, please visit the Student Registration page.
          Fill up the required fields for class 10 NESO exam and get started.
          Writing an essay develops a routine, which is paramount in learning.
        </p>
        <p>
          Through one’s writings, students discover that they can improve
          themselves in various ways. In order to be proficient, students must
          take part in various such competitions, expose themselves to different
          topics and come out with excellent write-ups. They can also be an
          inspiration to others who would like to read their write-ups. Essay
          writing enables students to reflect upon an issue, and reach a
          conclusion. It teaches them critical thinking skills that are required
          in today’s times. It portrays the comprehension of the subject material.
          Students are able to gain deep knowledge on different topics such as
          history, geography, current affairs, politics, sports, environment,
          nature, science and technology and even personal experiences.
        </p>
      </div>

      {/* Section 7 */}
      <div style={sectionBase}>
        <h2>Essay Monthly Olympiad Class 10</h2>
        <p>
          Minds Marathon conducts the monthly tests that are very helpful for all
          students of class 10 to improve their writing. Through these tests, they
          are in constant touch with different topics. They gain a fair knowledge
          about how and what to write. The value of writing a good essay goes
          beyond education as it extends to students’ working life too. To get a
          good name in the work place, students must have excellent writing
          capabilities. One need to possess a good command over the language,
          grammar, phrases, sentences and key points. Thus, essay writing helps
          all students to become successful in their future. Essay writing shapes
          students in all directions making them a global citizen.
        </p>
        <p>
          To participate in the monthly tests, please visit the Student
          Registration page. Here, you can select NESO exam class 10 and get
          started. The page is user-friendly which parents, teachers or even
          students can fill. The registration does not take much time. It can be
          completed within a few minutes, just by a few clicks. Essay writing
          creates positive curiosity in all minds. It drives an individual to
          search for proper understanding of all issues. When students think
          deeply on issues, it molds them into independent individuals who look
          out for truth while writing.
        </p>
      </div>
    </div>
  );
};

export default Class10Page;
