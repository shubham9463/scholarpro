import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StudentSidebar from "../studentDashboard/StudentSidebar.jsx";
import StudentProfile from "../studentDashboard/StudentProfile.jsx";
import Syllabus from "../studentDashboard/Syllabus.jsx";
import ExamCalendar from "../studentDashboard/ExamCalendar.jsx";
import Certificate from "../studentDashboard/Certificate.jsx";
import AdmitCard from "../studentDashboard/AdmitCard.jsx";
import Result from "../studentDashboard/Result.jsx";
import Quiz from "../studentDashboard/Quiz.jsx";
import Cart from "../studentDashboard/Cart.jsx";

export default function StudentDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState("prof");

  // ✅ Persistent cart using localStorage
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromUrl = params.get("tab");
    setTab(tabFromUrl || "prof");
  }, [location.search]);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    navigate(`?tab=${newTab}`, { replace: true });
  };

  // ✅ Add subjects to cart + store in localStorage
  const handleAddToCart = (subject) => {
    setCartItems((prev) => {
      if (!prev.includes(subject)) {
        const updated = [...prev, subject];
        localStorage.setItem("cartItems", JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  };

  // ✅ Remove single subject from cart
  const handleRemoveItem = (subject) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item !== subject);
      localStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  // ✅ Clear entire cart
  const handleClearCart = () => {
    setCartItems([]);
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  // ✅ Sync localStorage on any manual change (extra safety)
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "230px",
          backgroundColor: "#111827",
          borderRight: "1px solid #1f2937",
          flexShrink: 0,
          overflow: "hidden",
          height: "auto",
        }}
      >
        <StudentSidebar activeTab={tab} onTabChange={handleTabChange} />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <div style={{ width: "100%" }}>
          {tab === "prof" && <StudentProfile />}
          {tab === "syllabus" && <Syllabus />}
          {tab === "exam-calendar" && <ExamCalendar />}
          {tab === "certificate" && <Certificate />}
          {tab === "admit-card" && <AdmitCard />}
          {tab === "result" && <Result />}
          {tab === "quiz" && <Quiz onAddToCart={handleAddToCart} />}
          {tab === "cart" && (
            <Cart
              cartItems={cartItems}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}
