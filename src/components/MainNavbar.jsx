import React, { useState, useRef } from "react";
import TopBar from "./TopBar";
import Logo from "./Logo";
import RegistrationButtons from "./RegistrationButtons";
import NavigationTabs from "./NavigationTabs";
import OlympiadDropdown from "./OlympiadDropdown";
import DetailsDropdown from "./DetailsDropdown";
import GalleryDropdown from "./GalleryDropdown";

const MainNavbar = () => {
  const [activeTab, setActiveTab] = useState("OLYMPIADS");
  const [showOlympiadDropdown, setShowOlympiadDropdown] = useState(false);
  const [showDetailsDropdown, setShowDetailsDropdown] = useState(false);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
  const [selectedOlympiad, setSelectedOlympiad] = useState("English Olympiad");
  const [menuOpen, setMenuOpen] = useState(false); // 👈 mobile toggle

  // Refs for timeout management
  const olympiadTimeoutRef = useRef(null);
  const detailsTimeoutRef = useRef(null);
  const galleryTimeoutRef = useRef(null);

  const handleDropdownShow = (dropdownType) => {
    if (olympiadTimeoutRef.current) clearTimeout(olympiadTimeoutRef.current);
    if (detailsTimeoutRef.current) clearTimeout(detailsTimeoutRef.current);
    if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);

    if (dropdownType === "olympiad") {
      setShowDetailsDropdown(false);
      setShowGalleryDropdown(false);
      setShowOlympiadDropdown(true);
    } else if (dropdownType === "details") {
      setShowOlympiadDropdown(false);
      setShowGalleryDropdown(false);
      setShowDetailsDropdown(true);
    } else if (dropdownType === "gallery") {
      setShowOlympiadDropdown(false);
      setShowDetailsDropdown(false);
      setShowGalleryDropdown(true);
    }
  };

  const handleDropdownHide = (dropdownType) => {
    const hideDropdown = () => {
      if (dropdownType === "olympiad") setShowOlympiadDropdown(false);
      if (dropdownType === "details") setShowDetailsDropdown(false);
      if (dropdownType === "gallery") setShowGalleryDropdown(false);
    };

    if (dropdownType === "olympiad")
      olympiadTimeoutRef.current = setTimeout(hideDropdown, 150);
    if (dropdownType === "details")
      detailsTimeoutRef.current = setTimeout(hideDropdown, 150);
    if (dropdownType === "gallery")
      galleryTimeoutRef.current = setTimeout(hideDropdown, 150);
  };

  const handleOlympiadSelect = (subject) => {
    setSelectedOlympiad(subject);
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Top Bar */}
      <TopBar />

      {/* Main Navigation */}
      <div
        style={{
          backgroundColor: "white",
          boxShadow:
            "0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 0",
            }}
          >
            {/* Logo */}
            <Logo />

            {/* Hamburger for mobile */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                cursor: "pointer",
              }}
              className="hamburger"
            >
              <div
                style={{
                  width: "24px",
                  height: "3px",
                  background: "#000",
                  margin: "5px 0",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "3px",
                  background: "#000",
                  margin: "5px 0",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "3px",
                  background: "#000",
                  margin: "5px 0",
                }}
              />
            </div>

            {/* Registration Buttons (hidden on mobile) */}
            <div className="desktop-only">
              <RegistrationButtons />
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              style={{
                background: "#f9fafb",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
              className="mobile-menu"
            >
              <RegistrationButtons />
              <NavigationTabs
                activeTab={activeTab}
                onTabClick={setActiveTab}
                showOlympiadDropdown={showOlympiadDropdown}
                showDetailsDropdown={showDetailsDropdown}
                showGalleryDropdown={showGalleryDropdown}
                onDropdownShow={handleDropdownShow}
                onDropdownHide={handleDropdownHide}
              />
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="desktop-only" style={{ position: "relative" }}>
            <NavigationTabs
              activeTab={activeTab}
              onTabClick={setActiveTab}
              showOlympiadDropdown={showOlympiadDropdown}
              showDetailsDropdown={showDetailsDropdown}
              showGalleryDropdown={showGalleryDropdown}
              onDropdownShow={handleDropdownShow}
              onDropdownHide={handleDropdownHide}
            />

            {/* Olympiad Dropdown */}
            {showOlympiadDropdown && (
              <div
                style={{ position: "absolute", top: "100%", left: "0", zIndex: 1000 }}
              >
                <OlympiadDropdown
                  showDropdown={showOlympiadDropdown}
                  selectedOlympiad={selectedOlympiad}
                  onOlympiadSelect={handleOlympiadSelect}
                  onClassSelect={() => setShowOlympiadDropdown(false)}
                  onMouseEnter={() => handleDropdownShow("olympiad")}
                  onMouseLeave={() => handleDropdownHide("olympiad")}
                />
              </div>
            )}

            {/* Details Dropdown */}
            {showDetailsDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "112px",
                  zIndex: 1000,
                }}
              >
                <DetailsDropdown
                  showDropdown={showDetailsDropdown}
                  onItemSelect={() => setShowDetailsDropdown(false)}
                  onMouseEnter={() => handleDropdownShow("details")}
                  onMouseLeave={() => handleDropdownHide("details")}
                />
              </div>
            )}

            {/* Gallery Dropdown */}
            {showGalleryDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "280px",
                  zIndex: 1000,
                }}
              >
                <GalleryDropdown
                  showDropdown={showGalleryDropdown}
                  onItemSelect={() => setShowGalleryDropdown(false)}
                  onMouseEnter={() => handleDropdownShow("gallery")}
                  onMouseLeave={() => handleDropdownHide("gallery")}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MainNavbar;
