import React from "react";

const Class2Page = () => {
  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        margin: 0,
        padding: 0,
        lineHeight: 1.4,
        backgroundColor: "white",
      }}
    >
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
            Essay Writing Competition Class 2
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
            Minds Marathon conducts National Essay Olympiad for students of
            class 2. It provides essay on books for Class 2 that consists of
            several topics. All topics are simple and easy to understand as per
            student’s requirement. Participating students are tested on their
            language abilities, thinking capacities and writing skills. Teachers
            along with parents must encourage students to participate in this
            exam to improve their grammar and essay writing aptitudes. This book
            can be used by students to study for their school English exam as
            well, where essay writing is an integral part of the exam. It helps
            them to perform well in school exams. It develops vocabulary,
            improves writing skills and encourages competition among one
            another. National Essay Olympiad or NEO as it is popularly called is
            the best platform to bring together young talent. It encourages
            reading and writing among students. It makes them confident to think
            about various topics to write for.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div
        style={{
          padding: "0px 60px",
          background: "#ffffff",
          marginLeft: "10rem",
          marginRight: "10rem",
          textAlign: "justify",
          fontWeight: 500,
        }}
      >
        <h1>Preparation Material for Class 2 Essay Olympiad</h1>
        <p>
          National Essay Olympiad Class 2 preparation material is provided by
          Minds Marathon. Here, students can not only apply and participate but
          also prepare well in advance for the exam. It conducts monthly tests
          through which students can be assured of regular practice. It also
          provides workbooks for the exam using which students can gain
          additional knowledge to write on any topic asked in the exam. For
          learners as young as class 2, this exam is an opportunity to build
          their writing skills, express their ideas and even discover knowledge
          about variety of topics.
        </p>
      </div>

      {/* Section 3 */}
      <div
        style={{
          padding: "0px 60px",
          background: "#ffffff",
          marginLeft: "10rem",
          marginRight: "10rem",
          textAlign: "justify",
          fontWeight: 500,
        }}
      >
        <h2>Topics For Essay Olympiad Class 2:</h2>
        <p>
          The topics on which students of class 2 are tested are as per their
          ability, knowledge and understanding, Minds Marathon has listed
          variety of topics as per their age which they can practice on their
          own or refer to workbooks. The topics are generic based on simple
          topics that all class 2 students are aware of. The basic format of any
          essay is the introduction, body and conclusion. Students must follow
          the same format when they write essays. Flexibility is also equally
          important. While students keep the basic format in mind, they can
          write according to the topic and their understanding on the given
          topic.
        </p>
        <ul>
          {[
            "Our Clothes",
            "Our Body",
            "Plants",
            "The Fruits",
            "The Sun",
            "Water is Life",
            "Various Flowers",
            "Wild and Pet Animals",
            "The Rain",
            "Birds",
            "The Sky",
            "My Teacher",
            "Vegetables We Eat",
            "Homes of Animals",
            "My Mother",
            "My Father",
            "My Grandparents",
            "Myself",
            "My Family",
            "My Town",
            "My Classroom",
            "My School",
            "My Home",
            "My Garden",
            "My Hobby",
            "Diwali",
            "The Peacock",
            "My Pet Animal",
            "My Best Friend",
            "My Country",
            "Our National Flag",
            "The Cow",
            "Why should we drink Milk?",
            "The Mango",
            "The Tiger",
          ].map((chapter, index) => (
            <li key={index}>{`Chapter ${index + 1}: ${chapter}`}</li>
          ))}
        </ul>
      </div>

      {/* Section 4 */}
      <div
        style={{
          padding: "0px 60px",
          background: "#ffffff",
          marginLeft: "10rem",
          marginRight: "10rem",
          textAlign: "justify",
          fontWeight: 500,
        }}
      >
        <h2>Essay Olympiad Books for Class 2</h2>
        <p>
          The best of essay books are available at Minds Marathon, which can be
          purchased for a nominal cost. These books are updated from time to
          time as per the present requirements. All books have variety of topics
          that students can read and refer to before they take part in the
          National Olympiad Exam. These books are very useful for all students.
          It helps students to decide what kind of essays to be written,
          brainstorm on topics, research the topic well, outline the essay and
          finally write it in your own words. Class 2 students must be
          encouraged to write in their own words. They may still be young to
          understand the nuances of writing, but appreciation and motivation
          from parents and teachers goes a long way in bringing the best out of
          all participants. When students refer to the essay books, they
          understand how to set the tone and grab users’ attention at the
          beginning.
        </p>
      </div>

      {/* Section 5 */}
      <div
        style={{
          maxWidth: "280px",
          height: "auto",
          marginLeft: "14rem",
          marginRight: "10rem",
        }}
      >
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ito-neso-essay-olympiad-class-2-workbook.jpg"
          alt="Workbook"
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

      {/* Section 6 */}
      <div
        style={{
          padding: "0px 60px",
          background: "#ffffff",
          marginLeft: "10rem",
          marginRight: "10rem",
          textAlign: "justify",
          fontWeight: 500,
        }}
      >
        <h1>Class 2 Essay Annual Olympiad and Monthly Olympiad -</h1>
        <h2>Essay Annual Olympiad Class 2 -</h2>
        <p>
          The annual Essay Olympiad is conducted by the Minds Marathon for all
          class 2 students. This exam tests students’ skills on writing essays
          in their own words. To apply for this exam, you need to fill up the
          registration form available on the link Student Registration. Here,
          fill in all details and get started with the exam. Parents can fill
          the form and encourage their children to take part in this exam. It is
          one of the most prestigious exam and a matter of great delight to see
          your young ones expressing themselves on different topics. It is one
          of the best Essay Writing Competition Class 2.
        </p>
        <p>
          Essay writing has a lot of benefits. It promotes critical thinking. It
          allows students to reflect on an issue and even reach a conclusion on
          their own. It makes students assess different arguments so that they
          are able to come up with better points. It also makes students learn
          through different views and perspectives. The other benefits of
          participating in this exam are improving your child’s language, word,
          syllable, style, spelling, phrase, grammar and everything related to
          writing. Writing for an audience helps students to think from
          different point of views, apart from bringing forward their individual
          point of view.
        </p>
      </div>

      {/* Section 7 */}
      <div
        style={{
          padding: "0px 60px",
          background: "#ffffff",
          marginLeft: "10rem",
          marginRight: "10rem",
          textAlign: "justify",
          fontWeight: 500,
        }}
      >
        <h2>Essay Monthly Olympiad Class 2 -</h2>
        <p>
          The essay monthly tests are similar to annual Olympiads; the only
          difference is that these are conducted every month. Students are given
          new topics to write on every month that ensures that are well prepared
          before the final exam. To apply for the monthly test, you can click
          the Student Registration button and register your child for the exam.
          After the registration is complete, you would get all details on your
          mobile number. You can even check our website for the timetable,
          syllabus, topics and every buy workbook before the NESO exam. When
          students practice essay writing, they build up a central idea around
          which they try to frame short sentences. It teaches them to lay down
          their points in a logical flow that appears smooth when read. In
          short, everything that they write, should make sense.
        </p>
        <p>
          When students practice writing since a young age, they develop
          excellent writing skills, enhanced language abilities and even general
          knowledge that helps to increase their confidence. They are able to
          participate in other Essay Writing Competition Class 2 conducted at
          class level, school level, inter school level or elsewhere. The
          Olympiad exam is here to make students into all-rounders who would
          have the capability to outshine themselves at national and
          international levels too.
        </p>
      </div>
    </div>
  );
};

export default Class2Page;
