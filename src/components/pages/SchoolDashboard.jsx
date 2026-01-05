import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SchoolSidebar from "../schoolDashboard/SchoolSideBar.jsx";
import SchoolProfile from "../schoolDashboard/SchoolProfile.jsx";
import SchoolStudents from "../schoolDashboard/SchoolStudents.jsx";  // <-- ADD THIS

export default function SchoolDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("dashboard");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromUrl = params.get("tab");
    setTab(tabFromUrl || "dashboard");
  }, [location.search]);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    navigate(`?tab=${newTab}`, { replace: true });
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      
      {/* MAIN SECTION */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        
        {/* LEFT SIDEBAR */}
        <div style={{ width: "240px", background: "#1e293b", flexShrink: 0 }}>
          <SchoolSidebar activeTab={tab} onTabChange={handleTabChange} />
        </div>

        {/* RIGHT SECTION */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "30px 40px",
            background: "#f8fafc",
          }}
        >
          {/* School Dashboard */}
          {tab === "dashboard" && <SchoolProfile />}

          {/* Students Page (Your JSON component) */}
          {tab === "students" && <SchoolStudents />}

          {/* Other Pages */}
          {tab === "results" && <h2>Results Section Coming Soon</h2>}
          {tab === "certificates" && <h2>Certificates Section Coming Soon</h2>}
          {tab === "admitCards" && <h2>Admit Cards Section Coming Soon</h2>}
          {tab === "enquiries" && <h2>Enquiries Section Coming Soon</h2>}
          {tab === "settings" && <h2>Settings Section Coming Soon</h2>}
        </div>
      </div>

    </div>
  );
}
