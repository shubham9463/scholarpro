import React from "react";

const Class6Page = () => {
  const baseStyle = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    margin: 0,
    padding: 0,
    lineHeight: 1.4,
    backgroundColor: "white",
  };

  const sectionStyle = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#007bff";
    e.target.style.color = "#fff";
    e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)";
  };

  const buttonOut = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#007bff";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={baseStyle}>
      {/* content1 */}
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
            Essay Writing Competition Class 6
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
            Minds Marathon conducts a national level essay writing competition
            for students of standard 6. The organization provides Essay book for
            Class 6 that are informative, educative and interesting to read. All
            books have variety of essay writing topics with essays written in
            simple language for students to read and understand on their own.
            The content is written by experts in the field of language. It
            encourages reading and writing skills among students. This exam
            makes them confident to compete with one another at national levels.
            It increases their confidence to tackle national exams at ease. They
            are tested on topics that hold a lot of importance in today’s times.
            Some of the topics include Mother Teresa, television, discipline,
            favourite book, a market, festivals of India and so on. It helps
            students to build vocabulary, learn new words and enhance their
            writing skills.
          </p>
        </div>
      </div>

      {/* content2 */}
      <div style={sectionStyle}>
        <h1>Preparation Material for Class 6 Essay Olympiad</h1>
        <p>
          Minds Marathon conducts the National Essay Olympiad Class 6 for which
          students need to practice using the best preparation material. This is
          available online and even can be bought through our website. The
          preparation material consists of workbooks, online tests in the form
          of monthly tests to enable students to prepare themselves well for the
          exam. It helps all class 6 students to improve their writing skills,
          come out with their own writing style and write with a lot of
          confidence.
        </p>
      </div>

      {/* content3 */}
      <div style={sectionStyle}>
        <h2>Topics For Essay Olympiad Class 6</h2>
        <p>
          National Essay Olympiad Class 6 is conducted by Minds Marathon. The
          topics for the exam are varied in nature. It brings together different
          topics for students to think and write on. It provides them maximum
          exposure and lets them to know how to write for topics from different
          categories. Essay writing is an art that must be built since childhood
          days. It encourages story-telling among all students that makes them
          good in communication. General topics are most likely to be asked in
          the annual Olympiad. Students can refer to the workbooks by Minds
          Marathon that would help them to understand what exactly will be asked
          in the exam.
        </p>
        <ul>
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
          ].map((chapter, index) => (
            <li key={index}>
              Chapter {index + 1}: {chapter}
            </li>
          ))}
        </ul>
      </div>

      {/* content4 */}
      <div style={sectionStyle}>
        <h2>Essay Olympiad Books for Class 6</h2>
        <p>
          Minds Marathon offers the best essay books that can be purchased
          online. These books allow students to prepare for the exam. They can
          read different topics, get an idea about how each topic is written and
          then come out with their own writings. The best way to prepare for the
          NESO exam is to choose a topic, read similar topics from the book,
          look at the sentence structure, note down points and then form your
          own statements.
        </p>
        <p>
          Brainstorming is an important activity involved in essay writing
          Olympiad exam. While brainstorming students need to write down ideas
          that come to their mind, include key points, state with examples,
          illustrations and use their own thinking. Once they have the outline
          ready, they can form short sentences and connect everything together.
          The key is to organize, write and revise. When students refer to the
          essay workbooks provided by Minds Marathon, they get a better
          understanding of how they can improve themselves.
        </p>
      </div>

      {/* content5 */}
      <div
        style={{
          maxWidth: "280px",
          height: "auto",
          marginLeft: "14rem",
          marginRight: "10rem",
        }}
      >
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ito-neso-essay-olympiad-class-6-workbook.jpg"
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
          style={{
            marginLeft: "5rem",
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
          onMouseOver={buttonHover}
          onMouseOut={buttonOut}
        >
          Buy Books
        </button>
      </div>

      {/* content6 */}
      <div style={sectionStyle}>
        <h1>Class 6 Essay Annual Olympiad and Monthly Olympiad -</h1>
        <h2>Essay Annual Olympiad Class 6 -</h2>
        <p>
          Minds Marathon conducts the Essay Writing Competition Class 6 through
          annual Olympiads. These are exams that open for all class 6 students.
          It encourages students from each and every corner of the country to
          come forward and take part in the exam. Participation is more
          important than winning. Thus, the organization charges minimum fees so
          that all children are able to participate comfortably. You can visit
          the Student Registration page and register for the annual Olympiads.
          These are exams that can be given through schools or even on an
          individual basis. Teachers believe that such extra competitions make
          students confident and better in the subject.
        </p>
        <p>
          When students prepare for the Olympiads, they need to use a strategy
          for the same. The first is to prepare the topic they are wanting to
          write. Students must do their own research, create an essay outline
          and think about what all can be written. Then they need to set their
          argument in the right direction. Developing the argument with evidence
          in the body is an important part of essay writing. The final step is
          to wrap the writing with a strong conclusion. When students
          participate in the essay Olympiad, they become used to writing and
          thus develop excellent written skills when they grow up.
        </p>
      </div>

      {/* content7 */}
      <div style={sectionStyle}>
        <h2>Essay Monthly Olympiad Class 6 -</h2>
        <p>
          Minds Marathon conducts monthly tests in the form of monthly
          Olympiads. It is probably the very few organizations that gives
          year-round practice to all participants. The organization believes
          that students must be given thorough exposure to questions asked in
          Olympiads, before they are taken on the actual platform. The monthly
          Olympiads solves the same purpose. To register for the monthly
          Olympiad, please visit the Student Registration page and select the
          NESO- monthly Olympiad. Teachers find this exam very useful as it
          helps all participants to prepare for the annual Olympiad and also for
          the school tests. It gives them maximum exposure to develop their
          writing skills.
        </p>
        <p>
          In the monthly tests, students are taught to catch reader’s attention.
          The reader needs to have relevant background information so that it
          would become easy for them to keep reading. The essay structure,
          title, basic outline, stating facts are all a part of a good essay.
          Students can start their essays with a question, an anecdote, or even
          a surprising fact to catch reader’s attention. This is called setting
          the stage. Further, all students must state their points clearly and
          slowly begin their main point. The essay monthly tests bring in a lot
          of exposure to all participants and thus makes them better writers in
          future.
        </p>
      </div>
    </div>
  );
};

export default Class6Page;
