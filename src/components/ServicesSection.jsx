import React, { useState } from "react";

// Reusable Card Component
const ServiceCard = ({ image, title, items, buttonText }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        boxShadow: hover
          ? "0 8px 18px rgba(20, 248, 20, 0.97)"
          : "0 4px 10px rgba(0,0,0,0.15)",
        padding: "20px",
        textAlign: "center",
        width: "260px",
        height: "420px", // fixed height for same look
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
        transform: hover ? "translateY(-5px)" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "150px",

          marginBottom: "12px",
          objectFit: "cover",
        }}
      />

      {/* Title */}
      <h2
        style={{
          fontSize: "25px",
          fontWeight: "650",
          color: "#fcb903ff",
          marginBottom: "6px",
        }}
      >
        {title}
      </h2>

      <hr
        style={{
          margin: "8px auto",
          border: "none",
          borderTop: "1px solid #ddd",
          width: "80%",
        }}
      />

      {/* List Items */}
      <div
        style={{
          flex: "1",
          textAlign: "left",
          marginBottom: "15px",
          display: Array.isArray(items[0]) ? "flex" : "block", // side-by-side only for nested array
          justifyContent: "space-between",
        }}
      >
        {Array.isArray(items[0]) ? (
          items.map((col, colIndex) => (
            <ul key={colIndex} style={{ listStyle: "disc", paddingLeft: "18px" }}>
              {col.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    color: "#0e0d0fff",
                    marginBottom: "5px",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          ))
        ) : (
          items.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: "17px",
                fontWeight: "500",
                color: "#0e0d0fff",
                marginLeft: "18px",
                marginBottom: "5px",
              }}
            >
              {item}
            </li>
          ))
        )}
      </div>

      {/* Button with animated arrow */}
      <button
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "5px",
          border: "none",
          background: "#052566ff",
          color: "#fff",
          fontSize: "19px",
          fontWeight: "600",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px", // ✅ more space between text & arrow
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#003399";
          const circle = e.currentTarget.querySelector(".circle-border");
          if (circle) {
            circle.style.strokeDashoffset = "0"; // animate border
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#0044cc";
          const circle = e.currentTarget.querySelector(".circle-border");
          if (circle) {
            circle.style.strokeDashoffset = "75"; // reset
          }
        }}
      >
        {buttonText}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "26px",
            height: "26px",
            position: "relative",
          }}
        >
          →
          {/* SVG Circle for animation */}
          <svg
            width="26"
            height="26"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: "rotate(-90deg)", // start top, animate clockwise
            }}
          >
            <circle
              className="circle-border"
              cx="13"
              cy="13"
              r="12"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeDasharray="75"
              strokeDashoffset="75"
              style={{
                transition: "stroke-dashoffset 0.6s ease",
              }}
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "Olympiad Exams",
      image: "https://picsum.photos/260/120?random=1",
      items: [
        ["Science", "English", "Computer", "Drawing"], // left column
        ["Maths", "GK", "Essay", "Social"], // right column
      ],
      buttonText: "Enroll Now",
    },
    {
      title: "Monthly Olympiad",
      image: "https://picsum.photos/260/120?random=2",
      items: [
        "Topic Wise Questions",
        "Unlimited Practice Tests",
        "Monthly Assessment Tests",
      ],
      buttonText: "Enroll Now",
    },
    {
      title: "Study Material",
      image: "https://picsum.photos/260/120?random=3",
      items: ["Workbooks", "Previous Year Papers", "Power Pack", "Combo"],
      buttonText: "Buy Now",
    },
    {
      title: "JEE and NEET",
      image: "https://picsum.photos/260/120?random=4",
      items: ["Physics", "Chemistry", "Mathematics", "Biology"],
      buttonText: "Enroll Now",
    },
  ];

  return (
    <div
      style={{
        background: "#b3e5ec",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "35px",
          fontWeight: "1000",
          color: "#0f0e0eff",
          marginBottom: "50px",
          
        }}
      >
        Our Services
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
