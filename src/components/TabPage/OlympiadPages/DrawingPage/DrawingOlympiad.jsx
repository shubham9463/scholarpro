import React from "react";

const DrawingOlympiad = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, lineHeight: "1.6", backgroundColor: "white" }}>
      {/* Top Section */}
      <div style={{ backgroundColor: "#f9d84a", padding: "20px 60px", display: "flex", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "35px", fontWeight: "bold", color: "#000000", marginRight: "15px", marginLeft: "7rem" }}>
            International Drawing Olympiad
          </h1>
          <p style={{ fontSize: "16px", fontWeight: 500, color: "#1c1b1b", marginLeft: "7rem", marginRight: "4rem", textAlign: "justify" }}>
            International Drawing Olympiad (IDO) exams are conducted once a year at National level in respective schools. Apart from excelling in
            academics, it is important for students to focus on soft skills such as drawing, painting, sketching, and so on. There are many students in
            India who have exceptional drawing skills. Schools engage students in such activities in the free time to encourage young talent. Teachers
            are in a better position to identify students who are interested in different art forms. The activities conducted in school are enough for
            teachers to identify imagination of students. Drawing Competition is open for students from Class 1 to Class 10. The objective behind such
            exam is to enhance and sharpen creativity among them. It allows students to maintain a balance between academics and co-curricular
            activities. Drawing is the best form of expression, which reveals true imagination.
          </p>
        </div>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/Interational-Drawing-Olympiad-Logo.jpg"
          alt="Drawing Olympiad Logo"
          style={{ width: "350px", height: "auto", marginRight: "8rem" }}
        />
      </div>

      {/* Content1 */}
      <div style={{ padding: "20px 60px", background: "#fff", color: "#000000", marginRight: "10rem", marginLeft: "7rem" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "30px" }}>How To Participate In International Drawing Olympiad</h2>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {[
            "To participate in International Drawing Olympiad (IDO) exams, students can contact their art teacher in respective schools.",
            "Minds Marathon is one such organization which believes in bringing out the hidden talent in students through Drawing Competition.",
            "The ITO is based in Mumbai, but has collaborated with schools across the country. Schools can register online and opt for Olympiad exams. This is the right platform for talented students to showcase their interest and aptitude for art.",
            "Olympiad exams play an important role in nurturing child’s future. It makes them ready to face national level competitions. The exam is conducted in their respective schools.",
            "Teachers should encourage students to participate in this exam as it is unique exam, to spread their imagination on the paper in the form of drawings and paintings.",
            "Minds Marathon rewards deserving students with prizes and awards topping in International Drawing Olympiad exam.",
          ].map((item, i) => (
            <li key={i} style={{ marginBottom: "15px", paddingLeft: "20px", position: "relative", fontSize: "15px" }}>
              <span style={{ position: "absolute", left: 0, fontWeight: "bold" }}>-</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Content2 */}
      <div style={{ padding: "20px 60px", background: "#ffffff", marginLeft: "7rem", marginRight: "8rem", textAlign: "justify", marginTop: "-10px" }}>
        <h2>Drowing Olympiad Syllabus</h2>
        <p>
          The syllabus for the International Drawing Olympiad (IDO) exam is according to the age and class of students. This exam is conducted for
          classes 1 to 10 and thus the syllabus is different for each class. Students are tested on their ability to draw, express their creativity,
          theme, color combination, choice of topics, message conveyed, attractiveness and so on. Each and every child has a unique ability to express
          in his/ her own ways. Drawing is one such subject that improves concentration, motivates the young mind and also conveys messages in the best
          possible way. Class level drawing competitions are conducted in all schools, but competitions conducted at national levels hold a lot of
          importance. Students are given cash awards, scholarships, excellence certificates, medals and so on for showcasing their talent to the world.
          Students who draw well and can express through their strokes are believed to be very talented. Drawing skills can be built up at any age. The
          earlier they start, the better it is for them to excel.
        </p>
      </div>

      {/* Content3 */}
      <div style={{ padding: "20px 60px", background: "#ffffff", color: "#000000", marginRight: "8rem", marginLeft: "7rem", display: "flex", flexWrap: "wrap", gap: "0.4rem", borderRadius: "5px" }}>
        {[...Array(10)].map((_, i) => (
          <button
            key={i}
            style={{
              backgroundColor: "transparent",
              color: "#007bff",
              border: "2px solid #007bff",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "999px",
              cursor: "pointer",
              transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#007bff", e.target.style.color = "#fff", e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#007bff", e.target.style.boxShadow = "none")}
          >
            CLASS {i + 1}
          </button>
        ))}
      </div>

      {/* Content4 */}
      <div style={{ backgroundColor: "#f9d84a", padding: "20px 60px", alignItems: "center" }}>
        <h2 style={{ fontWeight: "bold", color: "#000000", marginRight: "15px", marginLeft: "7rem" }}>How to Prepare for Drawing Olympiad</h2>
        <p style={{ fontSize: "16px", fontWeight: 500, color: "#000000", marginLeft: "7rem", marginRight: "8rem", textAlign: "justify" }}>
          To prepare for Drawing Olympiad, students need to be aware of the syllabus. They need to refer to good resources in the form of workbooks to
          understand the requirements of the exam. Early preparation is always beneficial to all participants. Students can practice drawing on their own
          looking at pictures, bring their own ideas to life in the best way possible. Preparing for drawing competition is not a challenging task. You
          need to have your perspective in place. Take some time and decide what you need to draw. You can refer to previous drawings, add in your
          creativity, decide your view and start at eye-level. Those pursuing a career in fine arts, architecture, interior designing, fashion designing
          and other creative fields must take part in this exam. Since the pattern and ideology of these exams are different from other subjects,
          students need to prepare for the IDO exam separately. Those who prepare for the Drawing Olympiad automatically score well in the Creative
          Ability Test, which is conducted at various colleges and universities for creative courses.
        </p>
      </div>

      {/* Content5 */}
      <div style={{ padding: "20px 60px", background: "#ffffff", marginLeft: "7rem", marginRight: "8rem", textAlign: "justify" }}>
        <h2>Drawing Olympiad Workbook</h2>
        <p>
          Minds Marathon provides workbooks for the International Drawing Olympiad (IDO) exam. These are available for classes 1 to 10. Here, students
          can refer to different drawing patterns, strokes, color combinations, ideas, perspectives, views and develop individual skills. The workbooks
          can be purchased from our official website at a nominal cost. The books have class-wise topics that students can refer to enhance their
          creativity. Step by step tutorial is present in all the drawing workbooks by Minds Marathon. Students find these workbooks very useful to train
          in themselves. Parents can also help their young ones to focus on individual topics, and assist them to master the perfect stroke.
        </p>
      </div>

      {/* Content6 */}
      <div style={{ maxWidth: "280px", height: "auto", marginLeft: "14rem", marginRight: "10rem" }}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/IDO-Drawing-Olympiad-Workbook.jpg"
          alt="Books"
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
          onMouseOver={(e) => (e.target.style.backgroundColor = "#007bff", e.target.style.color = "#fff", e.target.style.boxShadow = "0 6px 12px rgba(0, 123, 255, 0.4)")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#007bff", e.target.style.boxShadow = "none")}
        >
          Buy Books
        </button>
      </div>

      {/* Content7 */}
      <div style={{ padding: "20px 60px", background: "#ffffff", marginLeft: "7rem", marginRight: "8rem", textAlign: "justify", marginTop: "-10px" }}>
        <h2>Drawing Monthly Practice Test Series</h2>
        <p>
          Minds Marathon conducts monthly exams for drawing. These are conducted for all classes from class 1 to class 10. As the name suggests, students
          are tested every month on different topics. Those who participate in the drawing monthly tests are given access to several other tests that
          students can participate in. Every month students are tested on one topic which they need to draw in front of the camera and upload. The
          monthly tests are conducted in the most transparent manner. These are online tests where students need to sit in front of the laptop/ mobile/
          tablet and take the test. The audio and video should be switched on at all times.
        </p>
        <p>
          Minds Marathon monitors students using artificial intelligence so that there is no scope for tampering the exam in any way. It records audio,
          video, and has other features such as eye ball recognition to ensure that there is fairness in the exam. It also announces monthly winners and
          gives participants cash prizes, scholarship awards, excellence certificates, and medals to motivate them. This inspires all participants to
          give their best in the drawing exam. To register for the monthly test, please visit the Student Registration button, this will take you to the
          registration page. Here, you can select International Drawing Olympiad (IDO) as your preferred subject along with other subjects you may be
          interested in. Fill up all the details, pay the fees and you are ready to begin with your drawing exam.
        </p>
      </div>
    </div>
  );
};

export default DrawingOlympiad;
