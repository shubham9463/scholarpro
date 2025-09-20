import React from "react";

const ITOChampions = () => {
  const containerStyle = {
    background: "linear-gradient(135deg, WHITE 50%, pink 50%)",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "10px",
  };

  const lineStyle = {
    width: "40px",
    height: "3px",
    backgroundColor: "orange",
    margin: "auto",
    marginBottom: "20px",
  };

  const imageWrapperStyle = {
    border: "6px solid white",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
    marginBottom: "20px",
    maxWidth: "900px",
    width: "100%",
    marginTop: "20px",
    padding: "20px",

    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    

  };

  const imageStyle = {
    width: "100%",
    display: "block",
  };

  const footerStyle = {
    marginTop: "25px",
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    background: "linear-gradient(to right, yellow, pink)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Minds marathon Champions</h2>
      <div style={lineStyle}></div>
      <div style={imageWrapperStyle}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/home/ITO-Champions.webp" // replace with actual image path
          alt="MM Olympiad Champions"
          style={imageStyle}
        />
      </div>
      <h1 style={footerStyle}>MINDS MARATHON OLYMPIAD CHAMPIONS</h1>
    </div>
  );
};

export default ITOChampions;
