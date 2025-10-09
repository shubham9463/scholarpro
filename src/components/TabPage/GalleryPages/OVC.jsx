import React from "react";

const OVC = () => {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
        padding: "10px",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          marginTop: "30px",
          fontSize: "clamp(22px, 4vw, 32px)",
        }}
      >
        Minds Marathon Video Coverage
      </h1>

      {/* Image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "20px 0",
        }}
      >
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/olympiad-video-coverage.jpg"
          alt="Olympiad Video Coverage"
          style={{
            height: "auto",
            width: "100%",
            maxWidth: "300px",
            margin: "10px",
            borderRadius: "6px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* Paragraph */}
      <p
        style={{
          maxWidth: "900px",
          margin: "20px auto",
          fontSize: "16px",
          lineHeight: 1.6,
          textAlign: "justify",
          color: "#333",
          padding: "0 10px",
        }}
      >
        P. T. USHA Madam inviting Students &amp; Schools to participate in INDIAN
        TALENT Minds Marathon to get maximum ACADEMIC Benefits. Indian Talent
        Minds Marathon Video Coverage covers entire series of events of the
        organization and Minds Marathon updates. It shows the events highlights
        in an interesting way. Office Infrastructures, office environment,
        students achievement, etc. are featured in the Video Coverage section.
      </p>
    </div>
  );
};

export default OVC;
