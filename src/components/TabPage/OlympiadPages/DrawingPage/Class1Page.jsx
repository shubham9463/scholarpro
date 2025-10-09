import React from "react";

const Class1Page = () => {
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
    content1H1: {
      marginLeft: "10rem",
      marginRight: "10rem",
    },
    content1P: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#333",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
    },
    content2: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
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
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content5: {
      maxWidth: "280px",
      height: "auto",
      marginLeft: "14rem",
      marginRight: "10rem",
    },
    img: {
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
    content6: {
      padding: "0px 60px",
      background: "#ffffff",
      marginLeft: "10rem",
      marginRight: "10rem",
      textAlign: "justify",
      fontWeight: 500,
    },
    content7: {
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
      {/* Section 1 */}
      <div style={styles.content1}>
        <div>
          <h1 style={styles.content1H1}>Drawing Olympiad Class 1</h1>
          <p style={styles.content1P}>
            International Drawing Olympiad (IDO) is a drawing and colouring exam conducted by Minds Marathon in several schools across India.
          </p>
          <p style={styles.content1P}>
            Drawing competition class 1 for students generally targets inspiring students to enhance their drawing skills. Students get hands on experience of handling pencils and making studies of different techniques. Knowledge of different types of lines - thick, thin, vertical, horizontal, diagonal, curve, spiral, wavy and zigzag lines and, basics like shapes, combinations and extensions are tested in this exam. Class 1 Drawing book is designed by the experts in drawing subject. Drawing Exam class 1 helps to maintain a balance between academics and art skills. It is the best way to enhance one’s imagination. Teachers along with parents must encourage students to participate in this exam. Drawing is one of the best hobbies developed by children of this age. It is one of the easiest ways to encourage talent and keep them busy.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div style={styles.content2}>
        <h1>Preparation Material for Class 1 Drawing Olympiad</h1>
        <p>
          Students of class 1 need to refer to authentic preparation material that would guide them in their International Drawing Olympiad (IDO). These may be online material, workbooks, previous year’s question paper sets and other such references. When students have the access to such material, it becomes easy for them to understand what would be expected in the exam. Drawing competition class 1 enables all children to draw with free minds. It is a competition conducted to enhance thinking skills along with creativity.
        </p>
      </div>

      {/* Section 3 */}
      <div style={styles.content3}>
        <h2>Topics For Drawing Olympiad Class 1</h2>
        <p>
          Class 1 students are considered to be observant by nature. They have an inquisitive bent of mind. They also have the tendency to express very well through drawings. This brings out their feelings in the most innocent forms...
        </p>
        <ul>
          <li>Chapter 1: Background Patterns</li>
          <li>Chapter 2: A Pen Stand</li>
          <li>Chapter 3: A Blimp</li>
          <li>Chapter 4: A Hanging Toy</li>
          <li>Chapter 5: Rocking Horse</li>
          <li>Chapter 6: Colourful Kite</li>
          <li>Chapter 7: Funny Scare Crow</li>
          <li>Chapter 8: Colourful Boats</li>
          <li>Chapter 9: Space Rocket</li>
          <li>Chapter 10: Charlie Robot</li>
          <li>Chapter 11: Teddy And Spidy</li>
          <li>Chapter 12: Christmas Tree</li>
        </ul>
      </div>

      {/* Section 4 */}
      <div style={styles.content4}>
        <h2>Drawing Books for Class 1:</h2>
        <p>
          Minds Marathon provides the best of workbooks for Drawing Exam Class 1. These books are designed by creative personalities, artists and other experts who have a flair for the subject...
        </p>
      </div>

      {/* Image + Button */}
      <div style={styles.content5}>
        <img
          style={styles.img}
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IDO-Drawing-Olympiad-Class-1.jpg"
          alt="Drawing Book"
        />
        <button style={styles.button}>Buy Books</button>
      </div>

      {/* Section 6 */}
      <div style={styles.content6}>
        <h2>Drawing Annual Olympiad Exam Class 1</h2>
        <p>
          Minds Marathon conducts the International Drawing Olympiad (IDO), which is an annual Olympiad conducted for all class 1 students...
        </p>
      </div>

      {/* Section 7 */}
      <div style={styles.content7}>
        <h2>Drawing Monthly Practice Test Series Class 1</h2>
        <p>
          Winners are not born in a day. It takes years and years of practice to win the International Drawing Olympiad...
        </p>
      </div>
    </div>
  );
};

export default Class1Page;
