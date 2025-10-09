import React from "react";

const OOWC = () => {
  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif", backgroundColor: "white" }}>
      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          color: "black",
          marginTop: "20px",
          fontSize: "clamp(20px, 4vw, 32px)",
        }}
      >
        Minds Marathon Office Work Culture
      </h1>

      {/* Main Image */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/Olympiad-Office-Work-Culture.jpg"
          alt="Olympiad Office Work Culture"
          style={{
            maxWidth: "90%",
            height: "auto",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        />
      </div>

      {/* Description */}
      <p
        style={{
          margin: "20px auto",
          maxWidth: "900px",
          fontSize: "16px",
          lineHeight: 1.6,
          textAlign: "justify",
          color: "#333",
          padding: "0 10px",
        }}
      >
        Indian Talent Minds Marathon being a leading Minds Marathon organization makes sure that the
        office atmosphere remains pleasant and positive to work. Work ethics are followed strictly
        by every engaged employee to make smooth functioning of the work as a positive working
        culture attracts talents and innovations. Minds Marathon office work culture is maintained
        to make the office environment healthy. Indian Talent Olympiad looks forward for giving the
        best to the employees and maintain the work balance for smooth functionality. Team work is
        what that keeps the functioning of the work run smoothly.
      </p>

      {/* Corporate Office Section */}
      <h2
        style={{
          margin: "40px 20px 10px",
          color: "#0066cc",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        CORPORATE OFFICE
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          margin: "0 20px 30px",
        }}
      >
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/scholarship_video_thumbs/indian-talent-infrastructure.jpg"
          alt="Corporate Office"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        />
      </div>

      {/* Our Organisation Section */}
      <h2
        style={{
          margin: "20px 20px 10px",
          color: "#0066cc",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        OUR ORGANISATION
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          margin: "0 20px 60px",
        }}
      >
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/scholarship_video_thumbs/new_videos_olympiad_intro.jpg"
          alt="Our Organisation"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        />
      </div>

      {/* WhatsApp Chat Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            padding: "12px 20px",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "14px",
            display: "inline-block",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default OOWC;
