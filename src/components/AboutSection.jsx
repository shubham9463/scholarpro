import React from "react";

const AboutSection = () => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        lineHeight: "1.6",
      }}
    >
      {/* Top Row - Image + About Text */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Image */}
        <img
          src="https://picsum.photos/260/120?random=1"
          alt="Indian Talent Olympiad"
          style={{
            width: "290px",
            height:"200px",
            marginTop:"25px",
            borderRadius: "6px",
            objectFit: "cover",
            border: "2px solid #ddd",
          }}
        />

        {/* About Content */}
        <div style={{ maxWidth: "700px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#0b2db1",
              marginBottom: "15px",
            }}
          >
            | About Indian Talent Olympiad
          </h2>
          <p style={{ marginBottom: "12px" }}>
            MM - Minds Marathon, is one of the leading Olympiad
            organizations in the country. Established in{" "}
            <strong>2013</strong>, it is proud to have associated with{" "}
            <strong style={{ color: "#0b2db1" }}>42,511+ schools</strong>. It has
            reached a network of{" "}
            <strong style={{ color: "#b30000" }}>1 crore+ students</strong>,
            recognized{" "}
            <strong style={{ color: "green" }}>2,00,000+ class toppers</strong>,
            and granted{" "}
            <strong style={{ color: "purple" }}>20,000+ scholarships</strong>.
          </p>
          <p>
            The organization is honored to have{" "}
            <strong>Olympian Champion P.T. Usha</strong> in the advisory
            committee, who is herself well-known for her achievements. ITO is a
            platform where talent is shown its right path. Talent is nothing
            without opportunity and we provide that opportunity to millions of
            students.
          </p>
        </div>
      </div>

      {/* 3 Info Boxes */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Box 1 */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            maxWidth: "360px",
            border: "2px dashed #1a73e8",
            borderRadius: "8px",
            padding: "20px",
            background: "#f5fbff",
          }}
        >
          <h3
style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#1a73e8",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Why Minds Marathon?
          </h3>
          <p style={{ fontSize: "15px", color: "#444", textAlign: "justify" }}>
            Empowering students nationwide to discover their unique talents,
            develop critical skills, and achieve academic excellence through
            recognition and rewards, while building a strong foundation for
            success in JEE and NEET—the gateways to India’s premier engineering
            and medical institutions.
          </p>
        </div>

        {/* Box 2 */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            maxWidth: "360px",
            border: "2px dashed #ff8800",
            borderRadius: "8px",
            padding: "20px",
            background: "#fff8f0",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#ff8800",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            What is the Minds Marathon?
          </h3>
          <p style={{ fontSize: "15px", color: "#444", textAlign: "justify" }}>
            A leading platform that conducts innovative Olympiad exams, provides
            comprehensive study materials, and offers scholarships to nurture
            young learners’ growth, helping them strengthen conceptual clarity
            and problem-solving skills.
          </p>
        </div>

        {/* Box 3 */}
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            maxWidth: "360px",
            border: "2px dashed #800080",
            borderRadius: "8px",
            padding: "20px",
            background: "#faf0ff",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#800080",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            How Does MM Work?
          </h3>
          <p style={{ fontSize: "15px", color: "#444", textAlign: "justify" }}>
            Students register online or via schools, participate in regular
            subject-wise Olympiad exams that enhance their academic and
            competitive abilities, and receive detailed performance feedback,
            rankings, and scholarships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
// File: src/components/AboutSection.jsx  OlympiadInfo