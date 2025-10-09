import React from "react";

const Class7Page = () => {
  const bodyStyle = {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    margin: 0,
    padding: 0,
    lineHeight: 1.4,
    backgroundColor: "white",
  };

  const content1 = {
    backgroundColor: "#ffdd57",
    padding: "20px 60px",
    display: "flex",
    alignItems: "center",
  };

  const h1Margin = { marginLeft: "10rem", marginRight: "10rem" };

  const pStyle = {
    fontSize: "16px",
    fontWeight: 600,
    color: "#333",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
  };

  const sectionStyle = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  const content5 = {
    maxWidth: "280px",
    height: "auto",
    marginLeft: "14rem",
    marginRight: "10rem",
  };

  const imgStyle = {
    maxWidth: "280px",
    height: "auto",
    display: "block",
    margin: "10px auto",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
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
    <div style={bodyStyle}>
      <div style={content1}>
        <div>
          <h1 style={h1Margin}>Essay Writing Competition Class 7</h1>
          <p style={pStyle}>
            Minds Marathon offers essay writing books for National Essay Olympiad
            (NESO) exam, which is conducted across the country. It is a national
            level exam where students are judged on their writing skills. Essay
            writing does not require vast experience in writing but a proper
            knowledge about the elements required in essay could take you towards
            perfection. In this way, it would become the easiest task for you and
            the continuous writing activity will give you wide range experience
            and in depth knowledge. Minds Marathon books on Essay may be
            beneficial in widening student’s oral as well as written communication.
            Essay writing task is best for the students to learn and increase
            knowledge. Students can be a part of National Essay Olympiad exam by
            enrolling their name from their respective school.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <h1>Preparation Material for Class 7 Essay Olympiad</h1>
        <p>
          Essay writing is one of the best ways to express one’s ideas. At times
          children feel difficult to communicate with one another. But, it is
          always easy when they write down their points and express themselves
          freely. Essay Writing Competition Class 7 preparation material is
          available at Minds Marathon. Here, you will find both short essays and
          long essays. Class specific essays especially for grade 7 are arranged
          accordingly. Students can refer to workbooks, read the essays and even
          write on various topics on their own to prepare for the exam.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>Topics For Essay Olympiad Class 7</h2>
        <p>
          Class 7 Essay Topics are related to different categories. The topics are
          to enhance one’s existing writing capabilities. It teaches them
          analytical skills of writing. Minds Marathon has curated a list of
          variety of English Essay topics for class 7 that will help them in their
          practice sessions. This is to intensify students’ vocabulary and to
          encourage them to write on their own. The workbooks have variety of
          essay topics for all students in different categories. This encourages
          them to work on their imagination, creative mind, and thus practice
          writing. Students learn the art of story-telling through essay writing.
        </p>
        <ol>
          {[
            "Jawaharlal Nehru",
            "Mahatma Gandhi",
            "Mother Teresa",
            "APJ Abdul Kalam",
            "Dr. Varghese Kurian – The Milkman of India",
            "A Rainy Day",
            "A Market",
            "A Morning Walk",
            "The Newspaper",
            "Computer",
            "Television",
            "Mobile Phone",
            "The Policeman",
            "Our National Flower Lotus",
            "The Ganga",
            "Discipline",
            "My Best Friend",
            "A Visit to a Zoo",
            "Taj Mahal / A Visit to Historical Place",
            "A Visit to a Hill Station",
            "The Day I Will Never Forget / My Picnic",
            "My First Day at School",
            "My School Library",
            "Happiest Moment in My Life",
            "My Aim in Life",
            "My Favorite Book",
            "My Favorite Subject",
            "An Ideal Student",
            "Cricket – My Favourite Game",
            "Hockey – National Game of India",
            "Independence Day",
            "Republic Day",
            "Holi",
            "Christmas",
            "Milk – The Complete Meal",
            "The Camel",
            "A Street Hawker",
            "An Indian Wedding",
            "A Soldier",
            "Health is Wealth",
            "The Traffic Hazards in My City",
            "Autobiography of a Bicycle",
          ].map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ol>
      </div>

      <div style={sectionStyle}>
        <h2>Essay Olympiad Books for Class 7</h2>
        <p>
          Minds Marathon provides essay books through which they can pick a topic,
          read how essays are written for the given topic, analyze and understand
          statements and come up with their own styles of writing. The essay
          workbooks teach students to prepare an outline of the ideas they have in
          mind. It teaches them how to write an opening statement. Students then
          can slowly move towards writing the body of the essay. The introduction
          and the conclusion are the two main points present in an essay. These
          determine how well an essay is written. The essay books teach exactly
          what is required for all students. It teaches them how to form
          statements, connect phrases, describe things, and thus create a picture
          in the reader’s mind. Writing is a skill that cannot be learnt in a day.
          It takes years of dedicated practice to master the art of writing. The
          idea of conducting the NESO exam is to make students efficient writers.
        </p>
      </div>

      <div style={content5}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/NESO-Essay-Olympiad-Class%207.jpg"
          alt="Workbook"
          style={imgStyle}
        />
        <button
          style={buttonStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Buy Books
        </button>
      </div>

      <div style={sectionStyle}>
        <h1>Class 7 Essay Annual Olympiad and Monthly Olympiad -</h1>
        <h2>Essay Annual Olympiad Class 7 -</h2>
        <p>
          Minds Marathon conducts the National Essay Olympiad Class 7 in the form
          of annual Olympiads. This exam gives them the confidence to take part at
          national level and even international level writing competitions. To
          register for the exam, please click the Student Registration page, fill
          up all details for class 7, buy class 7 workbooks and get started. The
          registration happens within a few clicks. It is a matter of great pride
          to see young students taking part in such writing competitions. It gives
          them a lot of confidence to continue and improve writing in their
          growing years.
        </p>
        <p>
          When students write essays, they capture an event. They can use
          descriptive writing that involves paying attention to minute details.
          Students must be encouraged to use their own imagination. They can use
          dynamic words to engage the reader. At the same time, it is believed
          that simple, clear and concise language must be used in all writings.
          Students can use their point of view to express themselves. They learn
          to write detailed character descriptions. Creative writing exercises
          helps them to write beautifully when in their future. At times, sensory
          details also apply to writing. The objective of a good writing is to get
          the reader feel as if they are there with you.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>Essay Monthly Olympiad Class 7 -</h2>
        <p>
          Minds Marathon conducts monthly essay Olympiads for all students. These
          ensure that students are in touch with writing every month. It gives
          them maximum practice the whole year that helps them to write well in
          the annual Olympiads. To register for the monthly Olympiads, please
          visit the Student Registration page, and fill in all details for the
          monthly tests. You may even buy books and get started with your practice.
          The registration happens within a few minutes. When students take part
          in the monthly tests, they learn to write different types of essays.
          They include descriptive, argumentative, narrative, thought-provoking
          and so on. When students write argumentative essays they need to start
          with an argument. Next, they must say why they agree or disagree with the
          topic. Presenting the evidence with facts, quotes, examples are the best
          way to support evidence.
        </p>
        <p>
          Students who participate in the monthly tests learn how to take the
          reader straight into the experience so that they are left engaged and
          immersed. Teachers must encourage maximum participation in such tests.
          They learn to form their opinions, come up with new ideas and write
          efficiently for the given topics. Participate in the NESO exam today and
          be prepared for the upcoming exam.
        </p>
      </div>
    </div>
  );
};

export default Class7Page;
