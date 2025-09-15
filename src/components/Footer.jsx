import React from "react";
import { studentLogout } from "../api/studentApi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { toast } from "react-toastify";

const Footer = () => {


  const handleLogout = async () => {
    try {
      const res = await studentLogout();
      if (res.status === 200) {
        localStorage.removeItem("isLoggedIn");
        toast.success("Logged out successfull");
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Something went wrong during logout");
    }
  };


  const columnStyle = {
    flex: "1",
    minWidth: "220px",
    padding: "0 20px",
    marginBottom: "25px",
  };

  const headingStyle = {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "15px",
    borderBottom: "2px solid #f39c12", // orange underline
    display: "inline-block",
    paddingBottom: "5px",
    letterSpacing: "0.5px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#f39c12", // orange on hover
  };

  const contactStyle = {
    color: "#fff",
    fontSize: "14px",
    marginBottom: "8px",
    lineHeight: "1.5",
  };

  return (
    <footer
      style={{
        background: "#0b3c87",
        color: "#fff",
        padding: "50px 60px 20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Olympiads */}
      <div style={columnStyle}>
        <h3 style={headingStyle}>Olympiads</h3>
        {[
          "Olympiad Books",
          "Science Olympiad - ISO",
          "Maths Olympiad - IMO",
          "English Olympiad - EIO",
          "GK Olympiad - GKIO",
          "Computer Olympiad - ICO",
          "Drawing Olympiad - IDO",
          "Essay Olympiad - NESO",
          "Social Olympiad - NSSO",
          "Olympiad Results",
          "Olympiad Exams",
        ].map((item, idx) => (
          <a
            key={idx}
            style={linkStyle}
            href="#"
            onMouseOver={(e) =>
              (e.currentTarget.style.color = linkHoverStyle.color)
            }
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Olympiad Info */}
      <div style={columnStyle}>
        <h3 style={headingStyle}>Olympiad Info</h3>
        {[
          "About Us",
          "Blogs",
          "Olympiad Exam Schedule",
          "Olympiad Winners",
          "Olympiad Exam Sample Papers",
          "How to Prepare for Olympiad Exam",
          "Olympiad Ranking",
          "Olympiad Features & Benefits",
          "FAQ",
          "Olympiad Syllabus",
        ].map((item, idx) => (
          <a
            key={idx}
            style={linkStyle}
            href="#"
            onMouseOver={(e) =>
              (e.currentTarget.style.color = linkHoverStyle.color)
            }
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Other Links */}
      <div style={columnStyle}>
        <h3 style={headingStyle}>Other Links</h3>
        {[
          "Olympiads Fee Structure",
          "Olympiad Winner Gallery",
          "Award Functions",
          "Annual Olympiad School Functions",
          "Olympiad Awards & Prizes",
          "Become A Coordinator",
          "Invite My School",
          "Our Corporate Office",
        ].map((item, idx) => (
          <a
            key={idx}
            style={linkStyle}
            href="#"
            onMouseOver={(e) =>
              (e.currentTarget.style.color = linkHoverStyle.color)
            }
            onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Contact Info */}
      <div style={columnStyle}>
        <h3 style={headingStyle}>Contact Info</h3>
        <p style={contactStyle}>
          <b>Toll Free:</b>{" "}
          <span style={{ color: "#f39c12" }}>1800 266 9192</span>
        </p>
        <p style={contactStyle}>022 2517 0711</p>
        <p style={contactStyle}>022 2517 0811</p>
        <p style={contactStyle}>
          <b>Mobile:</b>{" "}
          <span style={{ color: "#f39c12" }}>+91 9987930600</span>
        </p>
        <p style={contactStyle}>+91 9987621382</p>
        <p style={contactStyle}>
          <b>Email:</b> function@indiantalent.org
        </p>
        <p style={contactStyle}>registration@indiantalent.org</p>
        <p style={contactStyle}>toppers@indiantalent.org</p>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {/* Address + Social Media */}
      <div style={columnStyle}>
        <h3 style={headingStyle}>Indian Talent</h3>
        <p style={contactStyle}>
          No. 1005, Kailas Corporate Lounge, Veer Savarkar Marg, Powai Vikhroli
          Link Road, Vikhroli(W), Mumbai - 400079
        </p>

        <div style={{ display: "flex", gap: "12px", marginTop: "15px" }}>
          {[
            FaFacebookF,
            FaLinkedinIn,
            FaInstagram,
            FaYoutube,
            FaPinterestP,
            FaXTwitter,
          ].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              style={{
                color: "#fff",
                fontSize: "18px",
                border: "1px solid #fff",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#f39c12";
                e.currentTarget.style.color = "#0b3c87";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#fff";
              }}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
