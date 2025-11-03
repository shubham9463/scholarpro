import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SchoolSidebar from "../schoolDashboard/SchoolSideBar.jsx";

export default function SchoolDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("home");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromUrl = params.get("tab");
    setTab(tabFromUrl || "home");
  }, [location.search]);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    navigate(`?tab=${newTab}`, { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "stretch",
        minHeight: "calc(100vh - 160px)", // fits perfectly between navbar & footer
        backgroundColor: "#f9fafb",
        overflow: "hidden", // removes any page scrollbars
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "240px",
          backgroundColor: "#1e293b",
          borderRight: "1px solid #334155",
          flexShrink: 0,
          overflow: "hidden", // no scrollbars here
          height: "auto",
        }}
      >
        <SchoolSidebar activeTab={tab} onTabChange={handleTabChange} />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "30px 40px",
          overflow: "auto", // only content scrolls if needed
        }}
      >
        <h2
          style={{
            color: "#0f172a",
            fontWeight: "700",
            fontSize: "1.8rem",
            marginBottom: "10px",
          }}
        >
          🏫 School Dashboard
        </h2>
        <p style={{ color: "#475569", fontSize: "1rem" }}>
          Welcome to the <strong>Mind Marathon School Panel</strong>. Manage
          your students, results, and certificates here.
        </p>
      </div>
    </div>
  );
}
