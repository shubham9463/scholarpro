import React from "react";

const Class4Page = () => {
  const styles = {
    body: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      margin: 0,
      padding: 0,
      lineHeight: 1.4,
      backgroundColor: "white",
    },
    content1: {
      backgroundColor: "#ffdd57",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    content1h1: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
    content1p: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#333",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
    },
    content: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: "500",
    },
    content5: {
      maxWidth: "280px",
      height: "auto",
      marginLeft: "14rem",
      marginRight: "10rem",
    },
    content5img: {
      maxWidth: "280px",
      height: "auto",
      display: "block",
      margin: "10px auto",
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    button: {
      marginLeft: "5rem",
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.content1}>
        <div>
          <h1 style={styles.content1h1}>Essay Writing Competition Class 4</h1>
          <p style={styles.content1p}>
            National Essay Olympiad (NESO) is an essay writing competition for
            students of standard 4. It is conducted by Minds Marathon, one of the
            best Olympiad organizations that provides books for the same. All
            books have different topics of essay writing. Students can study from
            essay book for Class 4 and participate in the exam. Books help them to
            get good marks in essay writing in their school exams as well. Topics
            for essay writing are easy to understand. Some of them include our
            clothes, various flowers, my teacher, the sky, birds, the rain,
            vegetables, pet animals and so on. The language used in the book is
            simple and as per student’s standards. It encourages self-study among
            children. The content is written using simple language as per
            student’s requirements. It improves their grammar and language skills.
            It goes a long way in developing a flair for writing.
          </p>
        </div>
      </div>

      <div style={styles.content}>
        <h1>Preparation Material for Class 4 Essay Olympiad</h1>
        <p>
          Essay preparation material for class 4 students is available at Indian
          Talent Olympiad in the form of workbooks and even monthly tests. The
          books ensure that students are provided the required guidance and taught
          what is expected in the exam. The monthly tests ensure that with regular
          practice they improve their writing skills and master the art form well
          before the annual Olympiads. The preparation material helps students to
          not only prepare for Olympiads but also for Essay Writing Competition
          Class 4.
        </p>
      </div>

      <div style={styles.content}>
        <h2>Topics For Essay Olympiad Class 4</h2>
        <p>
          Class 4 students are expected to write long and short essays about
          topics that they would be familiar with. There are numerous essay topics
          that students can read and prepare themselves accordingly. The Essay
          Topics range from current affairs to personal opinions, experiences to
          personalities, environment to science and technology, and so on. There
          are different categories of topics given in the workbooks provided by
          Minds Marathon. When students refer to one category, they would have an
          understanding of how to write essays from similar categories. Thus, it
          becomes easy for them to prepare for variety of topics. It gives them
          the required confidence to write on different topics.
        </p>
        <ul>
          <li>Chapter 1: Our Clothes</li>
          <li>Chapter 2: Our Body</li>
          <li>Chapter 3: Plants</li>
          <li>Chapter 4: The Fruits</li>
          <li>Chapter 5: The Sun</li>
          <li>Chapter 6: Water is Life</li>
          <li>Chapter 7: Various Flowers</li>
          <li>Chapter 8: Wild and Pet Animals</li>
          <li>Chapter 9: The Rain</li>
          <li>Chapter 10: Birds</li>
          <li>Chapter 11: The Sky</li>
          <li>Chapter 12: My Teacher</li>
          <li>Chapter 13: Vegetables We Eat</li>
          <li>Chapter 14: Homes of Animals</li>
          <li>Chapter 15: My Mother</li>
          <li>Chapter 16: My Father</li>
          <li>Chapter 17: My Grandparents</li>
          <li>Chapter 18: Myself</li>
          <li>Chapter 19: My Family</li>
          <li>Chapter 20: My Town</li>
          <li>Chapter 21: My Classroom</li>
          <li>Chapter 22: My School</li>
          <li>Chapter 23: My Home</li>
          <li>Chapter 24: My Garden</li>
          <li>Chapter 25: My Hobby</li>
          <li>Chapter 26: Diwali</li>
          <li>Chapter 27: The Peacock</li>
          <li>Chapter 28: My Pet Animal</li>
          <li>Chapter 29: My Best Friend</li>
          <li>Chapter 30: My Country</li>
          <li>Chapter 31: Our Nat</li>
        </ul>
      </div>

      <div style={styles.content}>
        <h2>Essay Olympiad Books for Class 4</h2>
        <p>
          Minds Marathon provides workbooks for the National Essay Olympiad Class
          4 exam. These workbooks help students to think in the right direction
          and write excellent essays. It improves their writing skills, which is
          one of the most important component of this exam. Essay writing is an
          important part of study that increases understanding, helps the process
          of learning and provides a clarification behind thoughts. It allows
          students to analyze source material and also to pass on critical
          judgement. Those who refer to essay workbooks by Minds Marathon improve
          their existing knowledge, gain confidence to become excellent writers in
          the future. It shapes their thinking and writing abilities. Writing
          improves the speech of a person. It gives them the confidence to
          participate in debates and express their viewpoints. Using the essay
          workbooks, students can write descriptive, argumentative, narrative and
          expository essays. The books teach them to start the essay with a brief
          introduction that prepares the audience to read, develops the main idea
          in the body and ends with a brief conclusion bringing the essay to a
          logical end.
        </p>
      </div>

      <div style={styles.content5}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/NESO-Essay-Olympiad-Class%204.jpg"
          alt="WorkBook"
          style={styles.content5img}
        />
        <button
          style={styles.button}
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

      <div style={styles.content}>
        <h1>Class 4 Essay Annual Olympiad and Monthly Olympiad -</h1>
        <h2>Essay Annual Olympiad Class 4 -</h2>
        <p>
          Minds Marathon conducts the NESO exam for class 4 students which is an
          annual Olympiad conducted every year. This exam is open for all students
          who want to improve their writing skills and also win prizes at national
          and international levels. There are no minimum eligibility criteria for
          this exam. Minds Marathon. All students can participate irrespective of
          the school, state or board they are studying in. To register for the
          annual Olympiads, you need to visit the Student Registration page,
          select National Essay Olympiad as the chosen subject, buy books if
          required, pay the fees and get started. The registration process can be
          completed within a few clicks.
        </p>
        <p>
          One of the best advantage of participating in such essay writing
          competition is that it encourages self-study among all children. The
          content may be simple as per student understanding, but they learn to
          express their views in the best possible way. It improves their language
          and grammar skills. It helps them to develop an excellent flair for
          writing. It promotes critical thinking that makes students to form an
          opinion, and thus reflect upon an issue. It makes students assess
          different arguments to help them to come up with strong points. Students
          learn to observe different views and perspectives.
        </p>
      </div>

      <div style={styles.content}>
        <h2>Essay Monthly Olympiad Class 4 -</h2>
        <p>
          Minds Marathon conducts the National Essay Olympiad Class 4 in the form
          of annual and monthly tests. The annual tests are conducted once a year,
          whereas the monthly tests are conducted every month. It gives excellent
          practice as student are in regular touch with various essay topics. The
          organization ensures that they are given maximum exposure before the
          annual Olympiads. To register for the monthly Olympiads, you need to
          register by clicking on the Student Registration button. This will
          further take you to the monthly Olympiads page, where you can register
          for the exam. Fill up all the required details and get started with the
          exam.
        </p>
        <p>
          Teachers believe that writing yields number of intellectual, emotional,
          psychological and even physiological benefits to all participants. Some
          of the advantages of writing include improved memory, great feelings of
          happiness, and the best way to improve personal skills. Essay writing
          further helps to evaluate students’ research skills, analytical skills,
          persuasive skills and thus assists overall development. Writing is one
          of the best activities that needs to be introduced as early as possible.
          It helps them to write basic outline that further helps them to write
          wonderful essays. Register for the monthly and the annual Olympiads with
          the Minds Marathon.
        </p>
      </div>
    </div>
  );
};

export default Class4Page;
