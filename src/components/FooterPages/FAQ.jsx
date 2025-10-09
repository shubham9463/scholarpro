import React from "react";

const FAQ = () => {
  const styles = {
    body: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      lineHeight: 1.4,
      margin: 0,
      fontSize: "18px",
      fontWeight: 500,
      color: "#000",
      padding: "0",
    },
    content: {
      margin: "2rem auto",
      maxWidth: "1200px",
      padding: "0 5%",
    },
    h1: {
      fontSize: "32px",
      fontWeight: 600,
      textAlign: "center",
      color: "#000",
    },
    h2: {
      color: "#000066",
      fontSize: "24px",
      fontWeight: 500,
      marginTop: "1.5rem",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 500,
      marginTop: "1rem",
    },
    p: {
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: 1.6,
      color: "#333",
      textAlign: "justify",
    },
    img: {
      width: "100%",
      maxWidth: "600px",
      display: "block",
      margin: "1.5rem auto",
      borderRadius: "8px",
      height: "auto",
    },
    strong: {
      fontWeight: 600,
    },
    responsiveGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "20px",
      alignItems: "center",
      justifyItems: "center",
      margin: "2rem 0",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.content}>
        <h1 style={styles.h1}>Frequently Asked Questions - FAQs</h1>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/FAQ.jpg"
          alt="FAQ"
          style={styles.img}
        />

        <h2 style={styles.h2}>
          What syllabus is covered in the Minds Marathon?
        </h2>
        <p style={styles.p}>
          Minds Marathon Organization is conducting exams at national &
          international level for State board, International board, ICSE & CBSE
          boards, for class 1 – 10. Students have to refer their specific board
          patterns, Olympiad books provided by Minds Marathon along with the
          previous year’s. The questions pattern are of multiple choice.
        </p>

        <h2 style={styles.h2}>
          What is the qualification to take the Minds Marathon Examination?
        </h2>
        <p style={styles.p}>
          Interested students can participate in Minds Marathon from their
          respective schools only (all boards). Students from class 1 – 10 can
          participate in all subjects for Olympiad exams. There are no other
          eligibility criteria.
        </p>
        <p style={styles.p}>
          Newly introduced Kindergarten exams for LGK/UKG i.e. Jr. Kg & Sr. Kg
          for Drawing and Handwriting subjects. Now the students studying from
          kindergarten to class 10 are eligible to participate in Olympiad
          examinations.
        </p>

        <h2 style={styles.h2}>
          How to Register to Take the Minds Marathon Examination?
        </h2>
        <p style={styles.p}>
          The registration process is available online and offline for new and
          existing schools. New schools can send a request at
          info@indiantalent.org or may contact on toll-free no. 1800 266 9192.
        </p>

        <h4 style={styles.h4}>Online process -</h4>
        <p style={styles.p}>
          Interested schools can fill the registration form by visiting our
          website www.indiantalent.org to complete the process.
        </p>

        <h4 style={styles.h4}>Offline process -</h4>
        <p style={styles.p}>
          Minds Marathon sends brochures/prospectus containing the registration
          details every year to all the schools.
        </p>
        <p style={styles.p}>
          Schools can download the registration forms from
          www.indiantalent.org/olympiad-downloads and send the hardcopy to Minds
          Marathon.
        </p>
        <p style={styles.p}>
          The Minds Marathon In-charge Teacher has to fill the registration form
          & enroll students as per the guidelines. Filled registration forms
          should be sent to the Minds Marathon office in Mumbai before the last
          date.
        </p>
        <p style={styles.p}>
          New Schools can get the brochure/prospectus by filling communication
          details at https://www.indiantalent.org/invite-school
        </p>

        <h2 style={styles.h2}>
          In what pattern the Minds Marathon Examination is conducted?
        </h2>
        <p style={styles.p}>For class 1st to class 10th exam duration is 65 minutes.</p>
        <h4 style={styles.h4}>Class No of Questions</h4>
        <p style={styles.p}>1-4: 35</p>
        <p style={styles.p}>5-10: 50</p>

        <h4 style={styles.h4}>
          Division of marks in question paper section wise:
        </h4>
        <p style={styles.p}>
          There will be two sections in each question paper for every class.
        </p>
        <p style={styles.p}>
          <strong style={styles.strong}>Section 1:</strong> MCQs related to
          subjects testing understanding of fundamentals.
        </p>
        <p style={styles.p}>
          <strong style={styles.strong}>Section 2:</strong> MCQs testing logical
          reasoning, problem-solving, and analytical skills.
        </p>
        <p style={styles.p}>
          <strong style={styles.strong}>Class 1–4:</strong> Section 1: 25 Marks;
          Section 2: 10 Marks.
        </p>
        <p style={styles.p}>
          <strong style={styles.strong}>Class 5–10:</strong> Section 1: 35
          Marks; Section 2: 15 Marks.
        </p>

        <h2 style={styles.h2}>
          What are the Participation Fees for the Minds Marathon Examination?
        </h2>
        <p style={styles.p}>
          Schools collect Rs.150 per subject per student. Rs.25 is retained by
          the school for administrative expenses.
        </p>

        <h2 style={styles.h2}>
          In how many languages the Minds Marathon Examination is conducted?
        </h2>
        <p style={styles.p}>
          Minds Marathon conducts exams in English only. Question paper follows
          MCQ format; students mark answers on OMR sheets.
        </p>

        <h2 style={styles.h2}>Can I take part in more than one Subject Exam?</h2>
        <p style={styles.p}>
          Yes, Minds Marathon conducts 9 Olympiad subjects. Students can
          participate in all as per interest and class eligibility.
        </p>

        <h2 style={styles.h2}>
          Can an individual student take part in these Minds Marathon
          Examinations?
        </h2>
        <p style={styles.p}>
          Students register through school if the school is participating. From
          2020, individual online tests are available weekly via mobile with
          prizes like Rs.1,00,000 and laptops.
        </p>

        <h2 style={styles.h2}>
          I am interested to participate — tell me the guidelines.
        </h2>
        <p style={styles.p}>
          Exam details are sent to schools via brochures and registration forms.
          Students can visit www.indiantalent.org for updates.
        </p>

        <h2 style={styles.h2}>
          Are there specific books students can refer before taking Olympiad
          exams?
        </h2>
        <p style={styles.p}>
          Students can refer to board syllabus and Olympiad books available on
          https://www.indiantalent.org/olympiad-books
        </p>

        <h2 style={styles.h2}>
          Can I get Sample Papers or Previous Year Question Papers?
        </h2>
        <p style={styles.p}>
          Yes, students can download them or buy via the Olympiad study app at
          https://www.indiantalent.org/olympiad-books
        </p>

        <h2 style={styles.h2}>What are the Criteria for Ranking?</h2>
        <p style={styles.p}>Please visit the official site for ranking criteria.</p>

        <h2 style={styles.h2}>
          How many students can take Olympiad examination from a school?
        </h2>
        <p style={styles.p}>
          Minimum 40 students are required from a school to register; no
          maximum limit.
        </p>

        <h2 style={styles.h2}>
          From where can a student get Preparation & Study Material?
        </h2>
        <p style={styles.p}>
          Study material can be ordered through the school or purchased directly
          from https://www.indiantalent.org/olympiad-books
        </p>

        <h2 style={styles.h2}>How do I Prepare for an Olympiad Exam?</h2>
        <p style={styles.p}>
          Olympiads improve problem-solving and analytical skills. Focus on
          regular practice, understanding the syllabus, and solving previous
          year papers.
        </p>

        <h2 style={styles.h2}>What are the benefits of the Olympiad?</h2>
        <p style={styles.p}>
          Olympiads enhance analytical, reasoning, and conceptual understanding
          while building confidence through recognition and rewards.
        </p>

        <h2 style={styles.h2}>
          How was your journey to a Science/Math Olympiad?
        </h2>
        <p style={styles.p}>
          Initially challenging, consistent practice using Olympiad books and
          papers improved understanding and confidence — helping in academics as
          well.
        </p>

        <h2 style={styles.h2}>What is Olympiad Examination?</h2>
        <p style={styles.p}>
          Olympiads are national and international competitive exams that help
          students showcase their knowledge and skills beyond academics.
        </p>

        <h2 style={styles.h2}>Are Olympiads difficult?</h2>
        <p style={styles.p}>
          Olympiads can be challenging, but proper study material and consistent
          practice make them easy to master.
        </p>

        <h2 style={styles.h2}>How do I Study for Olympiad Exams?</h2>
        <p style={styles.p}>
          Follow your board syllabus, use Olympiad books, and practice
          thoroughly with previous year papers for best results.
        </p>

        <h2 style={styles.h2}>
          What does it take to crack the International Mathematics Olympiad?
        </h2>
        <p style={styles.p}>
          It requires clear understanding, regular practice, effective time
          management, and thorough analysis of weak areas.
        </p>

        <h2 style={styles.h2}>Is it worth it to get good at Math Olympiad?</h2>
        <p style={styles.p}>
          Absolutely. Math Olympiad improves reasoning, problem-solving, and
          academic performance while nurturing lifelong skills.
        </p>

        <h2 style={styles.h2}>
          What are the Olympiads? How can one prepare for Olympiad for Grade 1?
        </h2>
        <p style={styles.p}>
          Olympiads introduce young learners to competition. Parents should help
          them practice with Olympiad books and previous papers at their pace.
        </p>

        <h2 style={styles.h2}>How do I apply for an International Olympiad?</h2>
        <p style={styles.p}>
          Registration can be online/offline via schools. Minds Marathon conducts
          national and international Olympiads for grades 1–10.
        </p>

        <h2 style={styles.h2}>How can I Prepare for Math Olympiad?</h2>
        <p style={styles.p}>
          Practice regularly, plan time wisely, and use Olympiad study material
          and previous year papers available at Minds Marathon.
        </p>

        <h2 style={styles.h2}>How to Check Olympiad Results?</h2>
        <p style={styles.p}>
          Visit https://www.indiantalent.org/olympiad-results and enter roll
          number to check your subject-wise results.
        </p>

        <h2 style={styles.h2}>Are IMO results declared?</h2>
        <p style={styles.p}>
          Yes, results were declared on 20th March 2021. Check using your roll
          number on the Minds Marathon website.
        </p>

        <h2 style={styles.h2}>Are Science Olympiad results declared?</h2>
        <p style={styles.p}>
          Yes, Science Olympiad results are declared annually on the official
          website. Log in to check rank, name, and award details.
        </p>

        <h2 style={styles.h2}>Olympiad results IGKO 2020</h2>
        <p style={styles.p}>
          The General Knowledge International Olympiad results were announced on
          20th March 2021. Students can check details via roll number login.
        </p>

        <h2 style={styles.h2}>Is IEO Result 2020 declared?</h2>
        <p style={styles.p}>
          Yes, IEO 2020 results were declared online. Visit
          https://www.indiantalent.org/olympiad-results to view rank and award.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
