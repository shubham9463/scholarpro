import React from "react";

const ITOAwardFunction = () => {
  const containerStyle = {
    background: "linear-gradient(51deg, white 50%, pink 50%)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "40px 20px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#800000", // dark red
    marginBottom: "20px",
    textAlign: "center",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    width: "100%",
    backgroundColor: "rgba(255, 221, 221, 0.03)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
  };

  const cardStyle = {
    background: "white",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const captionStyle = {
    padding: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#800000",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>MINDS MARATHON AWARD FUNCTION</h1>

      <div style={gridContainerStyle}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <img src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/home/ITO-award-functions.webp" alt="Award Winners" style={imgStyle} />
          <p style={captionStyle}>
            INDIAN TALENT OLYMPIAD - AWARD WINNERS <br /> 2015-16 OLYMPIAD EXAMS
          </p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <img src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/home/ITO-award-functions.webp" alt="National Toppers" style={imgStyle} />
          <p style={captionStyle}>
            INDIAN TALENT OLYMPIAD - NATIONAL TOPPERS <br /> WINNERS 2018-19
            OLYMPIAD EXAMS
          </p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <img src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/home/ITO-award-functions.webp" alt="Scholarship Winners" style={imgStyle} />
          <p style={captionStyle}>
            NATIONAL & STATE SCHOLARSHIP WINNERS <br /> FELICITATED BY DR. KIRAN
            BEDI MADAM & SAINA NEHWAL MADAM
          </p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <img src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/home/ITO-award-functions.webp" alt="Toppers" style={imgStyle} />
          <p style={captionStyle}>
            INDIAN TALENT OLYMPIAD - TOPPERS <br /> FELICITATED BY KAILASH
            SATYARTHI SIR
          </p>
        </div>

        {/* Card 5 */}
        <div style={cardStyle}>
          <img src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/home/ITO-award-functions.webp" alt="Scholarship Prize" style={imgStyle} />
          <p style={captionStyle}>
            SCHOLARSHIP CASH PRIZE WINNING STUDENTS <br /> FELICITATED BY DR.
            KIRAN BEDI MADAM
          </p>
        </div>

        {/* Card 6 */}
        <div style={cardStyle}>
          <img src="https://d21jfbz7ftz185.cloudfront.net/assets/user_assets/custom/img/home/ITO-award-functions.webp" alt="National Scholarship" style={imgStyle} />
          <p style={captionStyle}>
            NATIONAL & STATE LEVEL SCHOLARSHIP WINNERS <br /> FELICITATED BY P.
            BP. KOTUR SIR
          </p>
        </div>
      </div>
    </div>
  );
};

export default ITOAwardFunction;
