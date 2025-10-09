import React from "react";

const Class5Page = () => {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', margin: 0, padding: 0, lineHeight: 1.4, backgroundColor: "white" }}>
      {/* content1 */}
      <div style={{ backgroundColor: "#ffdd57", padding: "20px 60px", display: "flex", alignItems: "center" }}>
        <div>
          <h1 style={{ marginLeft: "10rem", marginRight: "10rem" }}>Essay Writing Competition Class 5</h1>
          <p style={{ fontSize: "16px", fontWeight: 600, color: "#333", marginLeft: "10rem", marginRight: "10rem", textAlign: "justify" }}>
            National Essay Olympiad (NESO) for students of standard 5 helps them to improve their writing skills. It is conducted by Minds Marathon,
            one of the well-known names in the field of Olympiad exams. The organization provides Essay book for Class 5 that engages readers thoroughly.
            Books focus on increasing vocabulary and develop a strong command over the English language. Minds Marathon offers books that have
            well-written content on several topics such as APJ Abdul Kalam, A Rainy Day, Computer, Discipline, etc. The content is designed by a team
            of professionals who understand child psychology. It is designed as per student’s requirement and age. Teachers along with parents must
            encourage students to study from these books so that they develop language skills. These books are very informative that provide sound
            knowledge on different topics. Essay writing Competition increases knowledge of students.
          </p>
        </div>
      </div>

      {/* content2 */}
      <div style={{ padding: "0px 60px", background: "#ffffff", marginLeft: "10rem", marginRight: "10rem", textAlign: "justify", fontWeight: 500 }}>
        <h1>Preparation Material for Class 5 Essay Olympiad</h1>
        <p>
          Minds Marathon offers the best possible essay writing preparation material. It helps students to practice and participate in various Essay
          Writing Competition Class 5. Here, students can refer to the workbooks, understand the topics, get an idea about how to write essays and then
          write in their own language. Practice makes man perfect. Thus, students should never underestimate the importance of practicing to write for
          different topics. This would give them thorough knowledge about the sentence structure, ideas and the right phrases to use.
        </p>
      </div>

      {/* content3 */}
      <div style={{ padding: "0px 60px", background: "#ffffff", marginLeft: "10rem", marginRight: "10rem", textAlign: "justify", fontWeight: 500 }}>
        <h2>Topics For Essay Olympiad Class 5</h2>
        <p>
          Essay Topics for class 5 essay writing has been well-defined by Indian Talent Olympiad. The experts here understand the importance of writing
          and thus have chunked out content and topics that class 5 students can comfortably write. It helps students to develop a clear message. The
          topics are easy ad simple to understand. Students are free to express themselves in their own words. Every essay is a story that students
          want the readers to know. It is about conflict, change, truth and the way we should perceive the writer’s ideas. The topics can be fictional,
          historical, or topical in nature. Refer to the workbooks by Indian Talent Olympiad to know more about the topics asked in the National Essay
          Olympiad exam.
        </p>
        <ul>
          {[
            "Jawaharlal Nehru", "Mahatma Gandhi", "Mother Teresa", "APJ Abdul Kalam", "Dr. Varghese Kurian – The Milkman of India", "A Rainy Day",
            "A Market", "A Morning Walk", "The Newspaper", "Computer", "Television", "Mobile Phone", "The Policeman", "Our National Flower Lotus",
            "The Ganga", "Discipline", "My Best Friend", "A Visit to a Zoo", "Taj Mahal / A Visit to Historical Place", "A Visit to a Hill Station",
            "The Day I Will Never Forget / My Picnic", "My First Day at School", "My School Library", "Happiest Moment in My Life", "My Aim in Life",
            "My Favorite Book", "My Favorite Subject", "An Ideal Student", "Cricket – My Favourite Game", "Hockey – National Game of India",
            "Independence Day", "Republic Day", "Holi", "Christmas", "Milk – The Complete Meal", "The Camel", "A Street Hawker", "An Indian Wedding",
            "A Soldier", "Health is Wealth", "The Traffic Hazards in My City", "Autobiography of a Bicycle"
          ].map((chapter, index) => (
            <li key={index}>Chapter {index + 1}: {chapter}</li>
          ))}
        </ul>
      </div>

      {/* content4 */}
      <div style={{ padding: "0px 60px", background: "#ffffff", marginLeft: "10rem", marginRight: "10rem", textAlign: "justify", fontWeight: 500 }}>
        <h2>Essay Olympiad Books for Class 5</h2>
        <p>
          Minds Marathon provides the best essay books that students can refer to take part in the National Essay Olympiad Class 5 exam. These books are
          extremely beneficial to all students as it gives them immense confidence to prepare for different topics. The essay books teach students the
          basics of writing. It is an essential skill that stays with them till the end. It is the primary basis upon which students’ learning
          capabilities are judged. Gradually as they grow up, these skills are very useful in higher classes. It builds their communication skills,
          thinking skills and even problem solving abilities. Students who write, are taught to learn brainstorming skills. It helps them to use key
          points, examples and illustrations to express themselves well. Students who refer to these books learn to use the right words and phrases at
          the right time. It ensures that students learn to write for the eyes of the reader.
        </p>
      </div>

      {/* content5 */}
      <div style={{ maxWidth: "280px", height: "auto", marginLeft: "14rem", marginRight: "10rem" }}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/NESO-Essay-Olympiad-Class%205.jpg"
          alt="WorkBook"
          style={{ maxWidth: "280px", height: "auto", display: "block", margin: "10px auto", boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
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
          Buy Books
        </button>
      </div>

      {/* content6 */}
      <div style={{ padding: "0px 60px", background: "#ffffff", marginLeft: "10rem", marginRight: "10rem", textAlign: "justify", fontWeight: 500 }}>
        <h1>Class 5 Essay Annual Olympiad and Monthly Olympiad -</h1>
        <h2>Essay Annual Olympiad Class 5 -</h2>
        <p>
          Minds Marathon conducts the annual National Essay Olympiad for all class 5 students. This exam is conducted for all children who want to improve
          their writing skills. It is open to all students from different schools and boards. To register for the exam, please visit the Student
          Registration page, select Essay Olympiad and get started with the exam. The registration can be done within a few clicks. All details are
          available on the website. Teachers recommend maximum students to take part in this exam to improve their language abilities, writing, grammar,
          sentence structures and thus improve communication.
        </p>
        <p>
          Students who take part in this exam must try freewriting. This allows them to follow the impulses of their mind. It allows their thoughts and
          inspirations to appear in front of them. Students can build random sentences out of their freewill. Good writing means clear and concise writing.
          The exam teaches them to choose words wisely. Students are encouraged to use a natural tone, maintain a conversational style to make their
          readers comfortable. It is recommended to choose an active voice, review one’s own work, edit, paraphrase, rephrase and then submit the essay.
          Students are encouraged to read essays published by other authors to score well in the NESO exam.
        </p>
      </div>

      {/* content7 */}
      <div style={{ padding: "0px 60px", background: "#ffffff", marginLeft: "10rem", marginRight: "10rem", textAlign: "justify", fontWeight: 500 }}>
        <h2>Essay Monthly Olympiad Class 5 -</h2>
        <p>
          Minds Marathon National Essay Olympiad Class 5 through monthly tests that are held every month. These are practice tests that help students to
          prepare for the annual Olympiads. It also assists in their preparation for various essay writing competitions. Students who practice through the
          monthly Olympiads prepare for their school tests too. It develops excellent writing abilities since their childhood. To register for the monthly
          Olympiads, please visit the Student Registration page, fill up all the required details for class 5, choose NESO as the subject and get started.
          Monthly Olympiads are open for all students irrespective of the schools and boards they belong to.
        </p>
        <p>
          When students participate in the monthly Olympiads they get to brush up their grammar and writing abilities. It helps them to create an outline
          based on which the entire essay would be written. It helps them to keep a constant check on their English and grammar. This further makes them
          write impeccable sentences that forms a very good essay. If students read as much as they can well before the exam, it would further help them
          to learn to organize their writing. It would also help them to expand their basic statements into elaborate ones.
        </p>
      </div>
    </div>
  );
};

export default Class5Page;
