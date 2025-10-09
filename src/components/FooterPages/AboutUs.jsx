import React from "react";

const AboutUs = () => {
  const styles = {
    body: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      lineHeight: 1.4,
      margin: 0,
      fontSize: "18px",
      fontWeight: 400,
      color: "#333",
    },
    content1: {
      marginLeft: "13rem",
      marginRight: "13rem",
      textAlign: "justify",
    },
    h1: {
      color: "black",
      fontWeight: 500,
    },
    content2: {
      color: "black",
      marginLeft: "13rem",
      marginRight: "13rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    img: {
      width: "100%",
      maxWidth: "400px",
      height: "auto",
      borderRadius: "4px",
    },
    h4: {
      margin: "10px 0",
      fontWeight: "bold",
    },
    content3: {
      marginLeft: "13rem",
      marginRight: "13rem",
      textAlign: "justify",
      color: "#333",
    },
    h2: {
      marginTop: "20px",
      marginBottom: "0px",
      color: "black",
      fontWeight: 500,
    },
    h3: {
      marginTop: "0rem",
      marginBottom: "0.1rem",
      color: "black",
    },
    ul: {
      marginTop: "0rem",
    },
    strong: {
      color: "black",
    },
    paragraph: {
      marginTop: "0rem",
    },
    // Responsive adjustments
    responsiveContainer: {
      padding: "1rem",
    },
    "@media (maxWidth: 768px)": {
      content1: {
        marginLeft: "1rem",
        marginRight: "1rem",
      },
      content2: {
        marginLeft: "1rem",
        marginRight: "1rem",
      },
      content3: {
        marginLeft: "1rem",
        marginRight: "1rem",
      },
    },
  };

  return (
    <div style={styles.body}>
      {/* Content 1 */}
      <div style={styles.content1}>
        <h1 style={styles.h1}>About Us - Olympiad Exam Organization</h1>
        <p>
          Minds Marathon was established in 2013 by leading academician &
          scientists of the country, with the objectives of identifying and
          nurturing student talent leading to improved academic performance. It
          helps to assess the knowledge, level of understanding, and reasoning
          ability of students (Class 1 to Class 10) across India. Over 42,511+
          schools registered for the Minds Marathon Examinations till now and
          millions of students appeared in the Olympiad exams across India. Over
          the past years, we have won the trust of over 1 Crore parents. More
          than 7 lakh of teachers across the country have supported us in
          conducting our Minds Marathon event.
        </p>
        <p>
          ITO is a platform where talent is shown its right path. Talent is
          nothing without opportunity and we provide that opportunity to
          millions of students from Class 1 to Class 10 through our Olympiad
          examinations conducted for the students. These ITO exams are path to
          nurture their talent and enhance academic performance that would make
          their future a glorious story. Students represent tomorrow’s India and
          we ensure they meet their goal.
        </p>
        <p>
          The level examination designed in close co-ordination with experienced
          teachers, trainers and educationists aim to develop strong conceptual
          foundation of subjects, sharpen analytical thinking and problem
          solving skills. Over the last years, organization has striven to
          spread a proper understanding of Science, Mathematics, English,
          General Knowledge, Computer, Drawing, Essay & Social to young
          generation of the country.
        </p>
        <p>
          Minds Marathon is one of the well-known names in the field of
          education. It conducts the most prestigious Olympiad exams for
          students from class 1 to class 10. The organization was established in
          the year 2013, with a motive to make students aware and participate at
          national and international levels. The idea behind this organization
          is to bring out the best in all participants. It is glad to have Madam
          P.T. Usha as the Chief Advisor, who is herself renowned for her
          performance in Olympics. Being an Olympian champion, an Arjuna and
          Padmashree Awardee, she ensures to enlighten students and all those
          associated with Minds Marathon. The organization is headed by Mr.
          Jagadeesh Masarakal and Ms. Madhumathi Masarakal, and is supported by
          professionals from different fields. It has with it, IAS Officers, IIM
          Gold Medallists, Vice-Chancellors, Project Managers and Founders of
          notable organizations. It is the blessings and support of these
          individuals that the organization has come a long way since its
          inception. Today, it has a network of 42,511+ schools, 10 million
          students, 2,00,000+ class toppers and 20,000+ scholarship winners.
          Achievements by the schools and Minds Marathon have received quite a
          lot of media coverage. It has been featured in leading newspapers of
          the country such as India Today, Outlook, The Hindu and Deccan Herald,
          Times of India to name a few.
        </p>
        <p>
          The most popular National Academic Olympiad exams are conducted each
          year for class I to class X: International Science Olympiad (ISO) |
          International Mathematics Olympiad (IMO) | English International
          Olympiad (EIO) | General Knowledge International Olympiad (GKIO) |
          International Computer Olympiad (ICO) | International Drawing
          Olympiad (IDO) | National Essay Olympiad (NESO) | National Social
          Study Olympiad (NSSO) | International Spell E Olympiad (ISEO)
        </p>
        <p>
          Apart from bringing students on the same platform and allowing them to
          compete with another, it ensures that each and every participant
          receives the required study material from the organization. Thus, it
          has a team of subject matter experts who devise content for each
          class, keeping in mind each and every topic. The books are carefully
          designed by professionals who have a deep understanding of the
          subject. Questions are framed in such a way that creates interest in
          the mind of the readers. The organization also provides previous
          year’s question paper sets. Students can thus understand the type of
          questions asked in the final exam. It ensures that participants
          practice thoroughly before the final exam. It has also introduced
          Online Olympiads, so that students can attempt questions the whole
          year, before the final exam. This makes students well-equipped with
          the language of the question paper and are able to face any type of
          advanced level questions. The workbooks along with previous year’s
          question paper sets can be purchased from the website.
        </p>
        <p>
          Minds Marathon also grants scholarships to deserving candidates. It is
          one of the few organizations in the country that grants Rs 1,00,000
          scholarships every year for National Level Toppers from class 1 to
          class 10. It also awards a scholarship of Rs 40,000 to those who stand
          Second. Further, it rewards other Rank Holders by gifting them Tablets
          and Laptops. This encourages students to participate and perform
          better each time in Olympiads. Minds Marathon works only with one
          vision – making students of the country better citizens of tomorrow.
          Education is the best gift that can be given to any child. It is up to
          parents and teachers to nurture the talent in children. Olympiads are
          the best way in which this can be done. Enroll for Olympiad exams
          today!
        </p>
      </div>

      {/* Directors Section */}
      <div style={styles.content2}>
        <div>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ITO-Director.jpg"
            alt="Director"
            style={styles.img}
          />
          <h4 style={styles.h4}>DIRECTOR : MADHUMATHI MASARAKAL</h4>
        </div>
        <div>
          <img
            src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/ITO-Founder-And-Director_1.jpeg"
            alt="Founder"
            style={styles.img}
          />
          <h4 style={styles.h4}>FOUNDER & DIRECTOR: JAGADEESH MASARAKAL</h4>
        </div>
      </div>

      {/* Vision, Mission, Values */}
      <div style={styles.content3}>
        <h2 style={styles.h2}>Our Vision</h2>
        <p style={styles.paragraph}>
          To inspire students to achieve academic excellence by focusing on
          Talent Identification, Skill Development, Competitive Spirit,
          Scholarship Opportunities, and Academic Support—empowering young
          learners with the tools and encouragement to unlock their full
          potential and succeed in academic and future endeavors.
        </p>
        <h2 style={styles.h2}>Mission Statement</h2>
        <p style={styles.paragraph}>
          Minds Marathon is committed to nurturing and recognizing young talent
          across India and beyond through innovative Olympiad exams,
          comprehensive study materials, and accessible digital platforms. We
          strive to enhance students’ conceptual understanding, critical
          thinking, and problem-solving skills while fostering a spirit of
          healthy competition. Through scholarships, awards, and continuous
          support, we aim to motivate every learner to excel, grow holistically,
          and become future-ready global citizens.
        </p>
        <h3 style={styles.h3}>Core Values</h3>

        <ul style={styles.ul}>
          <li>
            <strong style={styles.strong}>Excellence:</strong> Pursuing the
            highest standards in educational assessments and learning resources
            to foster outstanding student performance.
          </li>
          <li>
            <strong style={styles.strong}>Integrity:</strong> Maintaining
            transparency, fairness, and ethics in all exams, scholarships, and
            interactions.
          </li>
          <li>
            <strong style={styles.strong}>Innovation:</strong> Embracing new
            technologies and pedagogies to continuously improve learning
            experiences and accessibility.
          </li>
          <li>
            <strong style={styles.strong}>Inclusivity:</strong> Ensuring
            opportunities for students from diverse geographies,
            socio-economic backgrounds, and academic levels.
          </li>
          <li>
            <strong style={styles.strong}>Empowerment:</strong> Enabling
            students to discover their potentials and build confidence through
            recognition and rewards.
          </li>
          <li>
            <strong style={styles.strong}>Collaboration:</strong> Partnering
            with schools, educators, parents, and communities to create a
            supportive learning ecosystem.
          </li>
          <li>
            <strong style={styles.strong}>Commitment:</strong> Dedicated to
            consistent growth, quality delivery, and lasting impact on student
            development.
          </li>
        </ul>

        <h2 style={styles.h2}>Who Conducts Olympiad Exams?</h2>
        <p style={styles.paragraph}>
          Minds Marathon is one of the best organizations that conducts Olympiad
          exams for students from class 1 to class 10. Some of the subjects of
          Olympiads include International Science Olympiad (ISO), International
          Maths Olympiad (IMO), General Knowledge International Olympiad (GKIO),
          International Computer Olympiad (ICO), International Drawing Olympiad
          (IDO), National Essay Olympiad (NESO), and National Social Studies
          Olympiad (NSSO). It conducts online as well offline exams. The annual
          exams are to be conducted in two slots namely December and February.
          Students can practice for these final exams by attempting weekly
          online tests. To know more about these tests, please visit the Student
          Test @ Home section.
        </p>

        <h2 style={styles.h2}>What Is International Olympiad Exam?</h2>
        <p style={styles.paragraph}>
          International Olympiad exams are academic exams conducted at global
          levels. It gives students from different countries a chance to compete
          at the same platform. Some of the exams in which students can attempt
          International Olympiad exams are International Science Olympiad (ISO),
          International Maths Olympiad (IMO), General Knowledge International
          Olympiad (GKIO), International Computer Olympiad (ICO), International
          Drawing Olympiad (IDO), National Essay Olympiad (NESO), and National
          Social Studies Olympiad (NSSO). All of these exams provide additional
          knowledge to all participants. It tests reasoning ability, analytical
          skills and boosts critical thinking from a young age. These are
          prestigious exams that bring a good name to students and schools at
          large.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
