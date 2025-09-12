import React from "react";
import { ChevronDown } from "lucide-react";

const NavigationTabs = ({
  activeTab,
  onTabClick,
  showOlympiadDropdown,
  showDetailsDropdown,
  showGalleryDropdown,
  onDropdownShow,
  onDropdownHide,
}) => {
  const navigationTabs = [
    "OLYMPIADS",
    "OLYMPIAD DETAILS",
    "GALLERY",
    "ANNUAL EXAM SCHEDULE",
  ];

  // ✅ Toggle dropdowns on click
  const handleTabClick = (tab) => {
    onTabClick(tab);

    if (tab === "OLYMPIADS") {
      showOlympiadDropdown ? onDropdownHide("olympiad") : onDropdownShow("olympiad");
    } else if (tab === "OLYMPIAD DETAILS") {
      showDetailsDropdown ? onDropdownHide("details") : onDropdownShow("details");
    } else if (tab === "GALLERY") {
      showGalleryDropdown ? onDropdownHide("gallery") : onDropdownShow("gallery");
    }
  };

  return (
    <div style={{ borderTop: "1px solid #f1f5f9", position: "relative" }}>
      <div
        className="nav-tabs-container"
        style={{
          display: "flex",
          position: "relative",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          gap: "8px",
        }}
      >
        {navigationTabs.map((tab, index) => (
          <div key={index} style={{ position: "relative", flex: "0 0 auto" }}>
            <button
              onClick={() => handleTabClick(tab)}
              className="nav-btn"
              style={{
                padding: "18px 20px",
                fontWeight: activeTab === tab ? "700" : "500",
                fontSize: "13px",
                border: "none",
                backgroundColor: "transparent",
                borderBottom:
                  activeTab === tab
                    ? "3px solid #f97316"
                    : "3px solid transparent",
                color: activeTab === tab ? "#f97316" : "#64748b",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                textTransform: "uppercase",
                letterSpacing: "0.4px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                width: "100%",
                justifyContent: "space-between",
                minWidth: "160px",
              }}
            >
              {activeTab === tab && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.05))",
                    zIndex: -1,
                  }}
                ></div>
              )}
              {tab}
              {(tab === "OLYMPIADS" ||
                tab === "OLYMPIAD DETAILS" ||
                tab === "GALLERY") && (
                <ChevronDown
                  size={12}
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      (tab === "OLYMPIADS" && showOlympiadDropdown) ||
                      (tab === "OLYMPIAD DETAILS" && showDetailsDropdown) ||
                      (tab === "GALLERY" && showGalleryDropdown)
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/*Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .nav-tabs-container {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
          .nav-tabs-container .nav-btn {
            font-size: 12.5px !important;
            padding: 14px 18px !important;
            text-align: left;
            justify-content: space-between;
          }
        }
        @media (max-width: 425px) {
          .nav-tabs-container .nav-btn {
            font-size: 12px !important;
            padding: 12px 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NavigationTabs;
