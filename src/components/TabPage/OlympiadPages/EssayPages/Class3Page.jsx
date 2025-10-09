import React from "react";

const Class3Page = () => {
  const bodyStyle = {
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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

  const content1Style = {
    backgroundColor: "#ffdd57",
    padding: "20px 60px",
    display: "flex",
    alignItems: "center",
  };

  const h1Style = {
    marginLeft: "10rem",
    marginRight: "10rem",
  };

  const pStyle = {
    fontSize: "16px",
    fontWeight: 600,
    color: "#333",
    marginLeft: "10rem",
    marginRight: "10rem",
    textAlign: "justify",
  };

  const content5Style = {
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

  const buttonHoverStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    boxShadow: "0 6px 12px rgba(0, 123, 255, 0.4)",
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div style={bodyStyle}>
      {/* Section 1 */}
      <div style={content1Style}>
        <div>
          <h1 style={h1Style}>Essay Writing Competition Class 3</h1>
          <p style={pStyle}>
            National Essay Olympiad for students of class 3 is conducted by Minds Marathon, a leading Olympiad exam organization in India. It provides books that are rich in topics for essay writing. Essay book for Class 3 includes several topics that help students to get ideas, frame their own sentences, build-up vocabulary and develop a flair for the language. It improves their grammar and teaches them correct sentence structures. Teachers recommend students to use this book to improve their essay writing skills. This being a national level competition allows students from different schools across the country to compete with one another on a single platform. Students become confident when they participate in Essay exam. All these books can be used to study for their school exams as well. It provides a fair idea on what exactly to write in various topics covered.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div style={sectionStyle}>
        <h1>Preparation Material for Class 3 Essay Olympiad</h1>
        <p>
          The National Essay Olympiad Class 3 preparation material is available for all students who want to improve their writing skills. The material is in the form of workbooks that can be purchased from India Talent Olympiad. All of these books are very informative and educative. It gives students a fair idea about how to write essays, the sentence structure, the format and most importantly how to grab readers’ attention. By referring to these preparation material, students can make the most of the NESO exam.
        </p>
      </div>

      {/* Section 3 */}
      <div style={sectionStyle}>
        <h2>Topics For Essay Olympiad Class 3</h2>
        <p>
          Minds Marathon defines topics for essay writing as per the age and class of participants. So, class 3 students are given to write on topics which they are familiar with. It teaches them to pattern and format of an essay and gives them ideas on how to write on any given topic. The rule of thumb is to first write the title and the develop the outline using the words given in the topic. They should further develop topic words into small sentences and add more relevant details. Students can refer to the class 3 workbooks for Essay Topics and prepare themselves for the exam.
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
            "Why should be drink Milk?",
            "The Mango",
            "The Tiger",
          ].map((topic, index) => (
            <li key={index}>Chapter {index + 1}: {topic}</li>
          ))}
        </ul>
      </div>

      {/* Section 4 */}
      <div style={sectionStyle}>
        <h2>Essay Olympiad Books for Class 3</h2>
        <p>
          Students who participate in the Essay Writing Competition Class 3 must refer to different books to get more ideas. Minds Marathon workbooks provide all students with workbooks that they can purchase on the website. The essay books are very helpful for their preparation. These books are designed by experts who understand the capabilities of students studying in class 3. The topics are as per their understanding. Essay writing is one exam that gives students the privilege and the liberty to express themselves freely. It develops a writing style, which is very useful in the long run. Students are encouraged to check their writings thus are also taught proof reading skills.
        </p>
        <p>
          Essay writing brings with itself communication and thinking skills. Through writing it makes our thinking visible. It further fosters children’s ability to refine their ideas and thoughts. Students are taught to gather enough supportive statements either in agreement or in disagreement of whatever they write. This makes them form a strong opinion about things in life. It helps them to take part in debates and substantiate their statements with strong viewpoints.
        </p>
      </div>

      {/* Image and Button */}
      <div style={content5Style}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/NESO-Essay-Olympiad-Class%203.jpg"
          alt="WorkBook"
          style={imgStyle}
        />
        <button
          style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Buy Books
        </button>
      </div>

      {/* Section 6 */}
      <div style={sectionStyle}>
        <h1>Class 3 Essay Annual Olympiad and Monthly Olympiad</h1>
        <h2>Essay Annual Olympiad Class 3</h2>
        <p>
          Minds Marathon conducts National Essay Olympiad Class 3, which is an annual Olympiad conducted for all interested students. The registration for this exam can be done through the website. The registration is open for all students without any eligibility criteria. The organization aims to bring all children together on the same platform and express themselves freely. Students who participate in the annual Olympiad practice their writing skills right from their childhood. This helps them when they reach an age where they need to take up exams such as the IELTS and TOEFL. To register for the NESO exam, please visit the School Registration page, fill up all details for class 3 Olympiad and get started with your preparation.
        </p>
        <p>
          The main reason that we write is to communicate with others. After we write essays, the next step is to see if our writings stimulate interest in the readers. Our writings also help us to reflect on experiences. It acts as an inspiration to many. Students develop reading habit since their childhood. It is believed that books are our best friends. It not only keeps us occupied in the most productive way, but also enlightens us with new ideas. Register for the NESO exam today.
        </p>
      </div>

      {/* Section 7 */}
      <div style={sectionStyle}>
        <h2>Essay Monthly Olympiad Class 3</h2>
        <p>
          India Talent Olympiad conducts monthly tests for the NESO – the National Essay Olympiad exam for all students of class 3. This exam ensures that students are habitual to writing essays each month. This acts like a preparation well in advance for the annual Olympiads. Through monthly tests students are exposed to variety of topics. It becomes very easy for them to write essays in their school tests too as they are used to form ideas and opinions on their own. To register for the monthly tests for class 3, you may visit the School Registration page and apply for the same. The registration is open for all interested children.
        </p>
        <p>
          There are several benefits of participating in the monthly tests. When students practice writing skills they meet a voice that is distinct. Good writing makes writers feel proud of their skills. The best encouragement is when readers would want to read more. This skill is best developed in the growing years of individuals. Students get to learn relevant background information to write good essays. Writing is a never ending process, which can be best developed when children are still young. Parents and teachers must encourage all children to participate in the monthly tests for essay writing.
        </p>
      </div>
    </div>
  );
};

export default Class3Page;
