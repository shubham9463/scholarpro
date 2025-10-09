import React from "react";

const Class2Page = () => {
  const styles = {
    body: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      margin: 0,
      padding: 0,
      lineHeight: 1.4,
      backgroundColor: "white",
    },
    textBox: {
      backgroundColor: "#ffdd57",
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
    },
    textBoxH1: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
    textBoxP: {
      fontSize: 16,
      fontWeight: 600,
      color: "#333",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
    },
    content1: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content1P: {
      marginTop: 0,
      fontSize: 18,
      lineHeight: 1.3,
      color: "#333",
    },
    content1Ul: {
      fontSize: 18,
      color: "#333",
      marginTop: 15,
    },
    content2: {
      backgroundColor: "#ffdd57",
      padding: "20px 100px",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    imgc: {
      textAlign: "center",
      margin: "0 20px",
    },
    imgcImg: {
      maxWidth: 280,
      height: "auto",
      display: "block",
      margin: "10px auto",
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
    },
    button: {
      backgroundColor: "transparent",
      color: "#007bff",
      border: "2px solid #007bff",
      padding: "10px 20px",
      fontSize: 16,
      borderRadius: 999,
      cursor: "pointer",
      transition:
        "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    },
    content3: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content4: {
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content5: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.textBox}>
        <div>
          <h1 style={styles.textBoxH1}>GK Olympiad Class 2</h1>
          <p style={styles.textBoxP}>
            Students studying in 2nd grade are assumed to know the basics taught
            in grade 1. Teachers often conduct revision as part of the syllabus.
            General Knowledge Class 2 Olympiad Exams for students consists of
            topics such as surrounding, India and the world, entertainment,
            sports, current affairs and so on. Questions are framed keeping in
            mind the recent developments in and around the world. Minds
            Marathon’s GK Class 2 books are in accordance with the level of
            understanding of the children as well as it is competitive at
            national level. The course content is of high quality that provides
            in-depth knowledge to children. Practicing General Knowledge book
            for Class 2 aid towards holistic development of a child. It makes
            children confident to appear in different national and international
            exams. It makes them industry-ready at a small age. It acts as a
            guiding star for young minds, which set their first foot with dreams
            and aspirations.
          </p>
        </div>
      </div>

      <div style={styles.content1}>
        <h1>Preparation Material for Class 2 General Knowledge Olympiad</h1>
        <h2>Topics For Olympiad Class 2</h2>
        <p style={styles.content1P}>
          The GK Olympiad for class 2 is one of the best ways to inculcate
          general awareness in young minds. Children as young as 6 or 7 have
          inquisitive minds. To satisfy their thirst for knowledge, Minds
          Marathon is here with its online GK exam. The topics for this exam are
          very generic. This exam ensures that students become more aware about
          their surroundings. It teaches them about plants, animals, science,
          technology, language, literature, entertainment, sports, arts, fun,
          and many more interesting topics. General Knowledge is as important as
          other subjects that are taught in school. Although the marks scored in
          this exam does not count for the total marks, it helps students in the
          long run.
        </p>

        <p style={styles.content1P}>
          Minds Marathon’s online tests in GK for class 2 is the best way to
          increase their general awareness. The more students get acquainted
          with current affairs, the better they become in knowing their
          surroundings. GK for grade 2 focuses on topics that are fun to learn.
          Mathematics is one such subject that is made fun through GK. The
          questions asked from this topic include figures, numbers, before,
          after, equal, clock and other word problems. Similarly, from science,
          some questions that are asked are about the human body, teeth, plant,
          paper, animals and their habitats, houses, clothes, traffic signals
          and lot more.
        </p>

        <p style={styles.content1P}>
          Test on general awareness informs parents how up-to-date their
          children are. All students must have ample knowledge about what is
          taught in class, but many times bookish knowledge does not help
          children. In order to succeed in all walks of life, students must have
          knowledge from different fields. Other questions include about the
          states in India, the first man to step on moon, capitals of countries,
          capitals of states in India, largest and smallest animals, vitamins
          and minerals, tallest statue in the world, Prime Ministers of India,
          planets, famous personalities, sports, currencies and so on.
        </p>

        <p style={styles.content1P}>
          Online Olympiad registration are open for students of class 2. To
          register for the online Olympiad, please read about the two types of
          exams conducted by the organization.
        </p>

        <ul style={styles.content1Ul}>
          <li>Chapter 1: Me & My Surroundings</li>
          <li>Chapter 2: Plants & Animals</li>
          <li>Chapter 3: India & The World</li>
          <li>Chapter 4: Science & Technology</li>
          <li>Chapter 5: Language & Literature</li>
          <li>Chapter 6: Entertainment</li>
          <li>Chapter 7: Sports</li>
          <li>Chapter 8: Math Fun</li>
          <li>Chapter 9: Life Skills</li>
          <li>Chapter 10: Current Affairs</li>
          <li>Chapter 11: Logical Reasoning</li>
        </ul>
      </div>

      <div style={styles.content2}>
        <div style={styles.imgc}>
          <h2>General Knowledge Book</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/GKIO-General-Knowledge-Olympiad-Class%202.jpg"
            alt="WORKBOOK"
            style={styles.imgcImg}
          />
          <button style={styles.button}>BUY NOW</button>
        </div>

        <div style={styles.imgc}>
          <h2>General Knowledge Question Paper</h2>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/gk-previous-year-question-paper-class-2.jpg"
            alt="PYQ"
            style={styles.imgcImg}
          />
          <button style={styles.button}>BUY NOW</button>
        </div>
      </div>

      <div style={styles.content3}>
        <h1>Class 2 General Knowledge Annual Olympiad and Monthly Olympiad</h1>
        <h2>Annual Olympiad</h2>
        <p style={styles.content1P}>
          The annual Olympiads are conducted in December and February. The
          annual Olympiad for class 2 is conducted in online and offline mode in
          which students are asked 35 and 50 questions respectively for class 1
          to 4 and class 5 to 10 students. The total time limit to answer all
          questions is 45 minutes for the online exam and 65 minutes for the
          offline exam. Offline exams can be taken in the school premises. The
          online exam can be taken using any tablet or smartphone. They need a
          stable internet connection to take these tests at home. It is a good
          habit to develop general awareness skills from a young age. In order
          to excel in academics, they must have knowledge on current affairs and
          other happenings. Minds Marathon is a friendly platform that allows
          students to excel in academics. Olympiad exams are a one-stop solution
          for kids to develop multiple skills. There are unlimited advantages of
          taking the online GK exam. It exposes students to a whole new world of
          knowledge. It assists mental growth. Students tend to learn new
          topics, new words and thus build up their vocabulary. Children become
          sharper and more attentive to what’s happening around them. They
          become expressive and have an opinion of their own.
        </p>

        <p style={styles.content1P}>
          With the advent of technology, parents cannot be dependent on schools
          for everything. Today, life has become so competitive that parents at
          home have to share the responsibility of making their children better
          citizens of tomorrow. The GK questions asked for all class 2 students
          are as per the intellectual capacity of these children.
        </p>

        <p style={styles.content1P}>
          Register for online Olympiads today at Minds Marathon. Online Olympiad
          registrations 2020-21 are open for all aspirants.
        </p>
      </div>

      <div style={styles.content4}>
        <button style={styles.button}>REGISTER NOW</button>
      </div>

      <div style={styles.content5}>
        <h2>Monthly Olympiads</h2>
        <p style={styles.content1P}>
          The monthly Olympiads for students of class 2 in GK are conducted
          online. The tests include 30 multiple choice questions, for which
          students are given 25 minutes. These questions are based on the topics
          that were previously discussed. To know about the details of the exam,
          please visit the Monthly Olympiad section on the home page. The
          monthly tests are conducted every month on different topics. It is one
          of the best ways to keep students engaged throughout the year.
        </p>

        <p style={styles.content1P}>
          Online Olympiad registration can be done through the website of Minds
          Marathon. Here, students can opt only for the GK exam or opt for the
          combo packs. The combo packs give them access to subjects such as
          Maths, English Science, and GK. All of these exams are based on the
          school syllabus. The tests for all the subjects are conducted online.
          Students can choose any of the subjects or all of them as per their
          preferences. They need a smartphone or a tablet to take these exams.
        </p>

        <p style={styles.content1P}>
          General Knowledge is one subject that imparts skills on general
          awareness. It is very important for the holistic development of all
          children. It becomes easy for them to answer questions when they take
          part in other competitive exams. Thus, parents must motivate their
          children to register and participate in the online Olympiad exam
          conducted by Minds Marathon.
        </p>
      </div>
    </div>
  );
};

export default Class2Page;
