import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StudentSidebar from "../studentDashboard/StudentSidebar.jsx";
import StudentProfile from "../studentDashboard/StudentProfile.jsx";
import Syllabus from "../studentDashboard/Syllabus.jsx";
import ExamCalendar from "../studentDashboard/ExamCalendar.jsx";
import Certificate from "../studentDashboard/Certificate.jsx";
import AdmitCard from "../studentDashboard/AdmitCard.jsx";
import Result from "../studentDashboard/Result.jsx";

export default function StudentDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("prof");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromUrl = params.get("tab");
    setTab(tabFromUrl || "prof");
  }, [location.search]);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    navigate(`?tab=${newTab}`, { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        overflow: "hidden", // removes all scrollbars from layout
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "230px",
          backgroundColor: "#111827",
          borderRight: "1px solid #1f2937",
          flexShrink: 0,
          overflow: "hidden", // ensures no sidebar scrollbars
          height: "auto", // adjusts height based on content
        }}
      >
        <StudentSidebar activeTab={tab} onTabChange={handleTabChange} />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto", // allows scrolling only for content area
        }}
      >
        <div style={{ width: "100%" }}>
          {tab === "prof" && <StudentProfile />}
          {tab === "syllabus" && <Syllabus />}
          {tab === "exam-calendar" && <ExamCalendar />}
          {tab === "certificate" && <Certificate />}
          {tab === "admit-card" && <AdmitCard />}
          {tab === "result" && <Result />}
        </div>
      </div>
    </div>
  );
}
