import React from "react";

const Class10Page = () => {
  const bodyStyle = {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    margin: 0,
    padding: 0,
    lineHeight: 1.4,
    backgroundColor: "white",
  };

  const content1Style = {
    backgroundColor: "#ffdd57",
    padding: "20px 60px",
    display: "flex",
    alignItems: "center",
  };

  const heading1Style = {
    marginLeft: "10rem",
    marginRight: "10rem",
  };

  const paragraph1Style = {
    fontSize: "16px",
    fontWeight: 600,
    color: "#333",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
  };

  const contentCommonStyle = {
    padding: "0px 60px",
    background: "#ffffff",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
    fontWeight: 500,
  };

  const listStyle = {
    listStyleType: "none",
  };

  return (
    <div style={bodyStyle}>
      {/* Section 1 */}
      <div style={content1Style}>
        <div>
          <h1 style={heading1Style}>Social Studies Olympiad Class 10</h1>
          <p style={paragraph1Style}>
            Class 10 is a crucial year in the lives of all students, parents,
            and teachers at large. It is the turning point where students need
            to take key decisions about their careers. Olympiad exams help
            students to master basic concepts. Social Studies Olympiad Class 10
            is open to students from all schools and all boards. This exam gives
            them the required exposure to different type of questions from the
            school syllabus. Social Science is a compulsory subject in class 10.
            It draws it content mainly from geography, history, civics, politics
            and economics. History includes India and the contemporary world
            part 2, geography includes contemporary India part 2, political
            science includes democratic politics part 2, and economics is all
            about understanding the economic development. Social science is an
            important subject that requires a lot of practice. Learning history
            might be tough for students, but with regular practice, students are
            able to pick up dates, events, personalities very easily.
          </p>
          <p style={paragraph1Style}>
            Social studies as a subject aim to train students to have
            participate in the most responsible manner in a diverse democratic
            society. Learning history may be difficult for students. Mugging up
            all the important concepts have never been of any help to anyone.
            Such knowledge is temporary and is washed away from the young mind
            very soon. Olympiad exam prepares students to remember concepts for
            a longer time. When students prepare for Olympiads, they prepare
            from an exam perspective. Thus, this preparation helps them in the
            long run. It assists their board exam preparation and also helps
            them when they participate in other national and international
            competitions. Any award won at the Olympiads holds a lot of
            importance. It helps them in further admissions to colleges and
            universities. Participate in the Social Studies Class 10 Olympiad
            exam to get your facts right and score well in the upcoming board
            exams.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div style={contentCommonStyle}>
        <h1>How to Prepare for Class 10 Social Studies Olympiad</h1>
        <p>
          Minds Marathon is happy to share some tips and tricks that would
          assist students in their Olympiad exam preparation. Students who have
          enrolled for the Social Studies Class 10 Olympiad exam must remember
          that this is an important exam that would help them in their future.
          This exam would improve their general knowledge. To prepare for this
          exam, students must read the class notes well along with the school
          textbooks. Referring to the NCERT study material always helps. Ask
          help from your teacher or your parents. Let them be your study guide.
          Quiz yourself often. Match your study style to the format of the exam.
          Olympiad exams are all conducted using the multiple choice pattern, so
          test yourself using the same pattern. This pattern is helpful to
          remember dates, names of personalities and events. Develop reading
          skills as social studies is one subject where students need to read a
          lot.
        </p>
      </div>

      {/* Section 3 */}
      <div style={contentCommonStyle}>
        <h2>Chapters For Social Studies Olympiad Class 10</h2>
        <p>
          The syllabus for the Social Studies Class 10 Olympiad exam is
          available on the website. The syllabus is the same that is prescribed
          by schools. The objective of the syllabus is to develop an
          understanding of the present world. Students get to know how human
          societies have evolved. It makes students realize that the process of
          change is continuous. Students develop an understanding of
          contemporary India with a historical perspective. It deepens their
          knowledge about India’s freedom struggle, the values and ideals that
          it presented. It makes students proud of their country and also
          appreciate the contribution of different people in the country.
        </p>
        <p>
          The syllabus is wide. Social Studies Olympiad Class 10 helps class 10
          students to cherish the values laid in the Indian constitution. It
          prepares them to take up different roles and responsibilities in the
          years to come. It develops an appreciation of India’s great culture,
          richness, oneness and appreciate the diversity in the land. The
          syllabus for the Olympiad is the same that is prescribed by schools.
          It is carefully crafted by subject matter experts who leave no stone
          unturned in bringing the best out of all participants. It develops
          social skills such as informed decision making, critical thinking and
          analytical thinking.
        </p>

        <ul style={listStyle}>
          {[
            "British Rule in India",
            "National Movement and Era of Gandhi",
            "Post Independent India",
            "Political development of 20th Century",
            "Imperialism",
            "World war - 1",
            "Post war-Economic depression",
            "Fascism, Nazism",
            "World War-2",
            "UNO",
            "European union",
            "Great Revolt of 1857",
            "Social and reform movement-19th century",
            "Cold war",
            "Partition of Bengal",
            "Muslim League",
            "Towards Independence and partition",
            "Constitution",
            "India and world peace",
            "Consumers Rights",
            "Democracy and diversity, Political",
            "Gender, Religion and Caste",
            "Legislature, Judiciary Executive",
            "Challenges to Democracy",
            "Sectors of Indian economy",
            "Money and Credit",
            "Globalization",
            "Federalism",
            "India",
            "World-Continents",
            "Earth",
            "Waste Management",
            "Naturals Resources, Regions, Climate",
            "Atmosphere, Hydrosphere, Lithosphere",
            "Map",
          ].map((chapter, index) => (
            <li key={index}>Chapter {index + 1}: {chapter}</li>
          ))}
        </ul>
      </div>

      {/* Section 4 */}
      <div style={contentCommonStyle}>
        <h2>Class 10 Social Studies Annual Olympiad</h2>
        <p>
          The Social Studies Olympiad Class 10 exam is conducted by Minds
          Marathon for all students irrespective of the schools or the boards
          they study in. This exam is important to bring the best out of all
          participants. It improves confidence, it makes students to focus on
          concepts. The registration for the exam can be done on our website
          using the Student Registration button on the home page. Schools can
          register their students using the School Registration button. Minds
          Marathon allows individual as well school registrations. At the end of
          the exam students would understand where they stand, they can analyze
          their strengths and weaknesses. They get familiar with distinct
          ideologies, declarations and engravings.
        </p>
        <p>
          The winners of the Olympiad are announced after a few weeks of the
          exam. Some of the competencies that students improve are remembering
          and understanding, applying concepts, formulating and analyzing the
          answer, and compiling information together. The exam schedule is
          available on the website. The social studies Olympiad exam is
          conducted using the first round. The exams are usually scheduled
          during the months of December and January after the half yearly exam,
          so that enough time is given to all participants to prepare for their
          board exams.
        </p>
      </div>
    </div>
  );
};

export default Class10Page;
