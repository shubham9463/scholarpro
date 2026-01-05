import React, { useState } from "react";

export default function Quiz({ onAddToCart }) {
  const subjects = ["Mathematics", "Science", "English", "Social Studies", "Computer"];
  const [unlockedSubject, setUnlockedSubject] = useState(null);
  const [addedSubjects, setAddedSubjects] = useState([]);
  const [flippedSubjects, setFlippedSubjects] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [actionType, setActionType] = useState(""); // "free" or "cart"

  

  // Motivational popup
  const [showMotivationModal, setShowMotivationModal] = useState(false);
  const [motivationMessage, setMotivationMessage] = useState("");

  const handleSelectSubject = (subject) => {
    if (!unlockedSubject) {
      setSelectedSubject(subject);
      setActionType("free");
      setShowConfirmModal(true);
    } else if (!addedSubjects.includes(subject) && subject !== unlockedSubject) {
      setSelectedSubject(subject);
      setActionType("cart");
      setShowConfirmModal(true);
    }
  };

  const markFlipped = (subject) => {
    setFlippedSubjects((prev) => (!prev.includes(subject) ? [...prev, subject] : prev));
  };

  const confirmAction = () => {
    if (actionType === "free") {
      setUnlockedSubject(selectedSubject);
      markFlipped(selectedSubject);

      // Add free subject to cart with price 0
      onAddToCart && onAddToCart({ name: selectedSubject, price: 0 });
    } else if (actionType === "cart") {
      const updatedSubjects = [...addedSubjects, selectedSubject];
      setAddedSubjects(updatedSubjects);
      markFlipped(selectedSubject);

      // Add paid subject to cart with price 199
      onAddToCart && onAddToCart({ name: selectedSubject, price: 199 });

      // Show motivational popup every 2 subjects added
      if (updatedSubjects.length % 2 === 0) {
        setMotivationMessage("🔥 You’re doing great! Keep adding more subjects!");
        setShowMotivationModal(true);
      }
    }
    setShowConfirmModal(false);
  };

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", fontFamily: "Segoe UI, sans-serif" }}>
      <h2 style={{ marginBottom: "15px" }}>🎯 Quiz Subjects</h2>
      <p style={{ color: "#555", marginBottom: "20px" }}>
        Select your quiz subjects. Your first subject is <b>FREE</b>. Others go to cart.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "15px" }}>
        {subjects.map((subject) => {
          const isUnlocked = unlockedSubject === subject;
          const isAdded = addedSubjects.includes(subject);
          const isFlipped = flippedSubjects.includes(subject);

          return (
            <div key={subject} style={{ perspective: "900px" }}>
              <div className={`flip-card ${isFlipped ? "is-flipped" : ""}`} style={{ width: "100%", height: "140px" }}>
                <div
                  className="flip-card-inner"
                  style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform 0.6s" }}
                >
                  {/* Front */}
                  <div
                    className="flip-card-front"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backfaceVisibility: "hidden",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      padding: "15px",
                      textAlign: "center",
                      background: isUnlocked || isAdded ? "#e0f2fe" : "#f9fafb",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4 style={{ margin: 0 }}>{subject}</h4>
                    {isUnlocked ? (
                      <button disabled style={{ background: "#22c55e", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "5px" }}>
                        ✅ Unlocked
                      </button>
                    ) : isAdded ? (
                      <button disabled style={{ background: "#3b82f6", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "5px" }}>
                        Added to Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSelectSubject(subject)}
                        style={{ background: "#2563eb", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}
                      >
                        {unlockedSubject ? "Add to Cart" : "Unlock Free"}
                      </button>
                    )}
                  </div>
{/* Back */}
<div
  className="flip-card-back"
  style={{
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    background: isUnlocked ? "#ecfdf5" : "#eef2ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
  }}
>
  {isUnlocked ? (
    <>
      <div style={{ fontSize: "20px" }}>✅ Unlocked</div>
      <div style={{ fontSize: "13px", color: "#065f46" }}>Added to Cart (Free)</div>
      <button
        onClick={() => {
          // Remove free subject completely
          setUnlockedSubject(null);
          setFlippedSubjects((prev) => prev.filter((s) => s !== subject));
          onAddToCart && onAddToCart({ name: subject, remove: true });
        }}
        style={{
          background: "#ef4444",
          color: "#fff",
          border: "none",
          padding: "6px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "13px",
        }}
      >
        Remove
      </button>
    </>
  ) : (
    <>
      <div style={{ fontSize: "20px" }}>🛒 Added</div>
      <div style={{ fontSize: "13px", color: "#3730a3" }}>Proceed to Cart to pay</div>
      <button
        onClick={() => {
          // Remove paid subject completely
          setAddedSubjects((prev) => prev.filter((s) => s !== subject));
          setFlippedSubjects((prev) => prev.filter((s) => s !== subject));
          onAddToCart && onAddToCart({ name: subject, remove: true });
        }}
        style={{
          background: "#ef4444",
          color: "#fff",
          border: "none",
          padding: "6px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "13px",
        }}
      >
        Remove
      </button>
    </>
  )}
</div>


                </div>
              </div>
              <style>{`.flip-card.is-flipped .flip-card-inner { transform: rotateY(180deg); }`}</style>
            </div>
          );
        })}
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
          <div style={{ background: "#fff", padding: "25px", borderRadius: "10px", width: "90%", maxWidth: "380px", textAlign: "center" }}>
            <h3 style={{ marginBottom: "12px" }}>Confirm Action</h3>
            <p style={{ marginBottom: "20px", color: "#444" }}>
              {actionType === "free"
                ? `Unlock ${selectedSubject} for FREE?`
                : `Add ${selectedSubject} to cart for ₹199?`}
            </p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button onClick={() => setShowConfirmModal(false)} style={{ background: "#e5e7eb", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "500" }}>Cancel</button>
              <button
                onClick={confirmAction}
                style={{ background: actionType === "free" ? "#10b981" : "#2563eb", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "500" }}
              >
                {actionType === "free" ? "Yes, Unlock" : "Yes, Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Motivational Modal */}
      {showMotivationModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1200 }}>
          <div style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)", padding: "30px", borderRadius: "12px", width: "90%", maxWidth: "400px", textAlign: "center", color: "#78350f" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>💬 Keep Going!</h2>
            <p style={{ fontSize: "16px", marginBottom: "20px" }}>{motivationMessage}</p>
            <button onClick={() => setShowMotivationModal(false)} style={{ background: "#f59e0b", color: "#fff", border: "none", padding: "10px 18px", borderRadius: "6px", cursor: "pointer", fontWeight: "500" }}>Got it 👍</button>
          </div>
        </div>
      )}
    </div>
  );
}
