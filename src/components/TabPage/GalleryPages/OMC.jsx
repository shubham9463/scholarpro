import React from "react";

const OMC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, backgroundColor: "#fff" }}>
      {/* Header */}
      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "left", fontSize: "28px", color: "#000" }}>
          Minds Marathon Media Coverage
        </h1>
      </div>

      {/* Image Section */}
      <div style={{ textAlign: "left", paddingLeft: "20px" }}>
        <img
          src="https://d21jfbz7ftz185.cloudfront.net/uploads/files/Olympiad-Media-Coverage_1.jpg"
          alt="Olympiad Media Coverage"
          style={{
            width: "320px",
            maxWidth: "100%",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Description */}
      <div
        style={{
          padding: "20px",
          lineHeight: 1.6,
          fontSize: "16px",
          color: "#333",
          maxWidth: "900px",
        }}
      >
        <p>
          For delivering information to the people, Media Coverage plays an important role.
          Newspapers & TV Coverage are a form of media. It is available in most remote regions,
          and is available in local languages. The progress of students participating and achieving
          awards and prizes in the Minds Marathon Exam of Indian Talent Minds Marathon are given
          recognitions through these newspapers. Many newspapers covered the event of prize
          distributions in the schools. It also highlighted the victory of students. Indian Talent
          Minds Marathon has a separate collection of the Minds Marathon Newspapers and Media
          Coverage feeds so that it brings the achievements of the students into notice of the
          visitors.
        </p>
      </div>

      {/* Media Coverage Links Section */}
      <div style={{ padding: "20px" }}>
        <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>Media Coverage Links:</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {[
            {
              name: "ANI NEWS",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/ANI-news.gif",
              link: "https://www.aninews.in",
              height: "88px",
            },
            {
              name: "BIG NEWS NETWORK",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/big-news-network.jpg",
              link: "https://www.bignewsnetwork.com",
              height: "43px",
            },
            {
              name: "BOMBAY NEWS",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/bombay-news.png",
              link: "https://www.bombaynews.net",
              height: "40px",
            },
            {
              name: "BUSINESS STANDARD",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/business-standard.png",
              link: "https://www.business-standard.com",
              height: "43px",
            },
            {
              name: "BUSINESS TODAY",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/business-today_1.png",
              link: "https://www.businesstoday.in",
              height: "50px",
            },
            {
              name: "DAILY HUNT",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/dailyhunt_1.png",
              link: "https://www.dailyhunt.in",
              height: "50px",
            },
            {
              name: "DALAL STREET INVESTMENT JOURNAL",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/dalal-street-investment-journal_1.png",
              link: "https://www.dsij.in",
              height: "50px",
            },
            {
              name: "DEMOCRATIC JAGAT",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/democratic%20jagat_1.png",
              link: "https://www.dsij.in",
              height: "50px",
            },
            {
              name: "HTDS CONTENT SERVICES",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/htds-content-services.png",
              link: "https://www.dsij.in",
              height: "50px",
            },
            {
              name: "IBTN9",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/ibtn9.png",
              link: "https://www.dsij.in",
              height: "53px",
            },
            {
              name: "IIFL",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/iifl.jpg",
              link: "https://www.dsij.in",
              height: "50px",
            },
            {
              name: "INDIAWEB2",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/indianweb2.png",
              link: "https://www.dsij.in",
              height: "47px",
            },
            {
              name: "INDIA TODAY",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/india-today.png",
              link: "https://www.dsij.in",
              height: "61px",
            },
            {
              name: "MUMBAI NEWS.NET",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/mumbai-news.png",
              link: "https://www.dsij.in",
              height: "32px",
            },
            {
              name: "NEW DELHI TIMES",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/new-delhi-times.png",
              link: "https://www.dsij.in",
              height: "25px",
            },
            {
              name: "OUTLOOK",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/outlook.jpg",
              link: "https://www.dsij.in",
              height: "32px",
            },
            {
              name: "START UP SUCCESS",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/start-up-success-stories.png",
              link: "https://www.dsij.in",
              height: "69px",
            },
            {
              name: "THE COVAI POST",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/the-covai-post.png",
              link: "https://www.dsij.in",
              height: "36px",
            },
            {
              name: "THE HANS INDIA",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/the-hans-india.png",
              link: "https://www.dsij.in",
              height: "25px",
            },
            {
              name: "THE WEEK",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/the-week.png",
              link: "https://www.dsij.in",
              height: "45px",
            },
            {
              name: "UNITED NEWS OF INDIA",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/united-news-of-india.jpg",
              link: "https://www.dsij.in",
              height: "33px",
            },
            {
              name: "WEB INDIA 123",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/web-india-123.png",
              link: "https://www.dsij.in",
              height: "28px",
            },
            {
              name: "YAHOO NEWS",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/yahoo-news.png",
              link: "https://www.dsij.in",
              height: "93px",
            },
            {
              name: "PTI NEWS",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/pti-news.jpg",
              link: "https://www.dsij.in",
              height: "89px",
            },
            {
              name: "INDIAS NEWS.NET",
              img: "https://d21jfbz7ftz185.cloudfront.net/uploads/files/indias-news-net.jpg",
              link: "https://www.dsij.in",
              height: "47px",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#0073e6",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: "150px",
                  height: item.height,
                  borderStyle: "solid",
                }}
              />
              <span style={{ fontSize: "16px" }}>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OMC;
