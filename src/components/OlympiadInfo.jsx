import React, { useEffect, useRef } from "react";

const OlympiadInfo = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && iframeRef.current) {
          // Add autoplay and mute
          const src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1";
          iframeRef.current.src = src;
        }
      },
      {
        threshold: 0.5, // play when 50% of the video is visible
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f5f9fc",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#222",
          marginBottom: "8px",
          textAlign: "center",
        }}
      >
        What Are Olympiad Exams?
      </h2>
      <div
        style={{
          width: "60px",
          height: "3px",
          backgroundColor: "#f0c419",
          marginBottom: "40px",
        }}
      ></div>

      {/* Main Container */}
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          width: "100%",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side - Video Card */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          <iframe
            ref={iframeRef}
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1"
            title="Olympiad Intro Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - Text */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            textAlign: "left",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              color: "#444",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            Olympiad exams are national-level competitive tests designed to
            nurture logical thinking, problem-solving, and academic excellence
            from an early age.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#444",
              lineHeight: "1.6",
              marginBottom: "30px",
            }}
          >
            <strong>Why participate?</strong> To challenge yourself, gain
            recognition, and grow beyond school curriculum.
          </p>
          <button
            style={{
              padding: "14px 28px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
          >
            Explore Olympiad Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default OlympiadInfo;
