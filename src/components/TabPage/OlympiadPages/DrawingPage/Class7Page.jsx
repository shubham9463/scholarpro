import React from "react";

const Class7Page = () => {
  const commonFont = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    margin: 0,
    padding: 0,
    lineHeight: 1.4,
    backgroundColor: "white",
  };

  return (
    <div style={commonFont}>
      {/* Content 1 */}
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
            Pencil Sketch Drawing Class 7
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
            Minds Marathon conducts International Drawing Olympiad (IDO) for
            students of class 7. Students can take part in Drawing competition
            through their school. In Class 7 Drawing book, various themes may
            come across the students. Each child may have a different point of
            view when it comes to drawing on a particular theme or topic.
            Students put their creative perceptions on the paper in very
            prolific way in making pencil sketch drawing. Splash of colours
            enhances the art work. Developing skills at grade level shows growth
            and students tend to discover more. Drawing offers the widest
            possible scope for the expression of artistic intentions.Schools
            urge parents to encourage their children to take part in this exam.
          </p>
        </div>
      </div>

      {/* Content 2 */}
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
        <h1>Preparation Material for Class 7 Drawing Olympiad</h1>
        <p>
          Minds Marathon provides the most useful preparation material for
          Drawing Competition class 7. These books are for the International
          Drawing Olympiad (IDO) conducted by the organization for all class 7
          students. The preparation material guides students to practice and
          prepare for the exam. It is designed by experts who are well-known in
          the field of art. Learning to draw some of the best strokes takes
          years of training. So, it is advised that students should start early
          so that they can form a base for their preparation.
        </p>
      </div>

      {/* Content 3 */}
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
        <h2>Topics For Drawing Olympiad Class 7</h2>
        <p>
          Minds Marathon provides topics for Drawing Olympiad Class 7, which
          students can refer to and use their own imagination to come out with
          the best of art forms. Topics are generally as per the age and class
          so that students do not feel overwhelmed. The number of skills
          required to master strokes takes time. Drawing helps students to stay
          calm and control their minds. When children are engaged in artistic
          works, they take their minds off from what is stressing them. They
          realize that they are unnecessarily overthinking about things that are
          not really important. Thus, it teaches them to calm their anxiety
          levels. The topics for the Olympiad exam are as per the understanding
          of students.
        </p>
        <ul>
          <li>Chapter 1: Vertical Blending</li>
          <li>Chapter 2: Autumn Scene</li>
          <li>Chapter 3: Print Making</li>
          <li>
            Chapter 4: Object Drawing - Brinjal Graphite Pencils And Tube
            Colours
          </li>
          <li>Chapter 5: Memory Drawing - Children Playing At The Beach</li>
          <li>Chapter 6: Design In A Circle</li>
          <li>Chapter 7: Still Life</li>
          <li>Chapter 8: A Young Man Sitting By The Sea Side</li>
          <li>Chapter 9: Designing A Vase</li>
          <li>Chapter 10: Creative Warli</li>
          <li>Chapter 11: Designing A Tray</li>
          <li>Chapter 12: Colour The Picture</li>
        </ul>
      </div>

      {/* Content 4 */}
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
        <h2>Drawing Books for Class 7</h2>
        <p>
          Minds Marathon provides Class 7 Drawing book that are extremely
          helpful to show students the right way to prepare for all drawing
          competitions including the International Drawing Olympiad (IDO). The
          workbooks have different topics with detailed explanation that helps
          students to express their emotions, train their minds and expand their
          communication. Students who refer to these workbooks find it easy to
          develop their drawing skills. It helps them to discover themselves.
          They can reflect upon their own drawings and then refer to the
          workbooks for improvisations if any. Drawing is something that can be
          improved upon time and again. It makes students happier each time they
          come close to their imagination and what is mentioned in the drawing
          books. It makes them more confident, gives them an extra sense of
          identify and purpose in life. Drawing is something with which children
          can grow up in life. It is one of the best hobbies introduced when
          they are still in school.
        </p>
      </div>

      {/* Content 5 */}
      <div
        style={{
          maxWidth: "280px",
          height: "auto",
          marginLeft: "14rem",
          marginRight: "10rem",
        }}
      >
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IDO-Drawing-Olympiad-Class-7.jpg"
          alt="Drawing Book"
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

      {/* Content 6 */}
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
        <h2>Drawing Annual Olympiad Exam Class 7</h2>
        <p>
          Minds Marathon Drawing Exam Class 7 is conducted for all those
          interested in art, drawing and painting. The organization calls it the
          International Drawing Olympiad (IDO) exam, which gives students
          maximum exposure to learn creative skills. Students can register
          online for this exam using the Student Registration page. Once the
          registration is complete all details are sent to the registered mobile
          number. Drawing exam helps students to showcase their talent to their
          peers. They can get inspired from these drawings and thus motivate
          each other. It is an excellent learning experience for all students of
          class 7.
        </p>
        <p>
          Some students may have a natural inclination for drawing well. But
          others can always develop this skill from a young age. Minds Marathon
          provides the required training to become great artists of the future.
          A number of career options are dependent on drawing. Students of class
          7 who learn to draw and even score well in the drawing Olympiad can
          think of careers in graphic designing, product designing, multimedia
          specialist, art director, art teaching, illustrator and even system
          designer. The marks and ranks scored at the Olympiads help students to
          build their careers on the same lines. Register for the annual Drawing
          Olympiad today.
        </p>
      </div>

      {/* Content 7 */}
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
        <h2>Drawing Monthly Practice Test Series Class 7</h2>
        <p>
          Minds Marathon conducts the Drawing Olympiad Class 7 exam every month
          also called the monthly Olympiad. This test is for all class 7
          students to practice for the annual drawing Olympiad well in advance.
          We all know nobody can become an artist in a day. It takes several
          months, and sometimes even years to become very good in basic skills
          such as drawing, painting and sketching. Students who participate in
          the monthly drawing Olympiad prepare for the exam thoroughly. You can
          register for this exam using the same Student Registration page and
          select Drawing Olympiad under the Monthly Olympiads.
        </p>
        <p>
          Drawing is a very pleasurable experience that costs very little but is
          a very emotive form of communication and expressing oneself. Drawing
          is worth all the effort taken. Line drawing is the most basic forms of
          drawing that students practice when they prepare for the exam.
          Students need to fine tune themselves on lines, edges, shapes so that
          the drawings become visually appealing. It is one of the best brain
          exercises that helps students to use their left and their right brain.
          It makes them better in strategic thinking, problem solving skills and
          soft skills, which are highly recommended in today’s competitive
          world.
        </p>
      </div>
    </div>
  );
};

export default Class7Page;
