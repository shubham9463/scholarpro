import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dash() {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([
    { id: 1, name: "Stacy Gomez", date: "03/08/2025" },
    { id: 2, name: "Rahul Sharma", date: "04/08/2025" },
    { id: 3, name: "Emily Watson", date: "06/08/2025" },
  ]);

  const [applications, setApplications] = useState([
    { id: 1, student: "John Doe", date: "03/08/2025" },
    { id: 2, student: "Jane Smith", date: "04/08/2025" },
  ]);

  const [examsThisWeek] = useState(5);
  const [newNotifs, setNewNotifs] = useState([]);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = enquiries.length * 100;
    const timer = setInterval(() => {
      start += 10;
      if (start >= end) {
        setStudentCount(end);
        clearInterval(timer);
      } else {
        setStudentCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [enquiries]);

  useEffect(() => {
    const timer = setInterval(() => {
      const messages = [
        "New student registered 🎓",
        "Application approved ✅",
        "Exam schedule updated 📅",
        "Payment received 💰",
      ];
      const random = messages[Math.floor(Math.random() * messages.length)];
      setNewNotifs((prev) => [
        ...prev.slice(-4),
        { msg: random, time: new Date().toLocaleTimeString() },
      ]);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const styles = {
    container: {
      fontFamily: "Inter, Arial, sans-serif",
      padding: "40px",
      backgroundColor: "#f9fafb",
      color: "#111827",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
    },
    title: { fontSize: "43px", fontWeight: "700" },
    statsContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      marginBottom: "40px",
    },
    statCard: {
      flex: 1,
      minWidth: "240px",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    },
    progressBarOuter: {
      height: "8px",
      borderRadius: "8px",
      backgroundColor: "#e5e7eb",
      marginTop: "10px",
    },
    progressBarInner: (value, color) => ({
      width: `${value}%`,
      height: "8px",
      borderRadius: "8px",
      backgroundColor: color,
      transition: "width 0.6s ease",
    }),
    cardsContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      marginBottom: "40px",
    },
    actionCard: {
      flex: 1,
      minWidth: "240px",
      borderRadius: "16px",
      padding: "24px",
      color: "#fff",
      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    },
    notifContainer: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    },
    notifItem: {
      padding: "10px 0",
      borderBottom: "1px solid #e5e7eb",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Dashboard Overview</h1>
      </div>

      {/* Stats */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <h3>Total Students</h3>
          <h2>{studentCount}</h2>
          <div style={styles.progressBarOuter}>
            <div style={styles.progressBarInner(70, "#10b981")}></div>
          </div>
        </div>

        <div style={styles.statCard}>
          <h3>Total Schools</h3>
          <h2>{applications.length * 20}</h2>
          <div style={styles.progressBarOuter}>
            <div style={styles.progressBarInner(50, "#3b82f6")}></div>
          </div>
        </div>

        <div style={styles.statCard}>
          <h3>Exams Scheduled</h3>
          <h2>{examsThisWeek}</h2>
          <div style={styles.progressBarOuter}>
            <div style={styles.progressBarInner(90, "#f59e0b")}></div>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div style={styles.cardsContainer}>
        <div style={{ ...styles.actionCard, backgroundColor: "#10b981" }}>
          <h3>Recent Enquiries</h3>
          <p>{enquiries.length} new this week</p>
          <button
            onClick={() => navigate("/admin-dashboard?tab=enquiries")} // ✅ same route pattern as Stats.jsx
            style={{
              marginTop: "12px",
              padding: "10px 14px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#fff",
              color: "#10b981",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            View All
          </button>
        </div>

        <div style={{ ...styles.actionCard, backgroundColor: "#f97316" }}>
          <h3>Total Applications</h3>
          <p>{applications.length} pending</p>
          <button
            onClick={() => navigate("/admin-dashboard?tab=students")} // ✅ also added this
            style={{
              marginTop: "12px",
              padding: "10px 14px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#fff",
              color: "#f97316",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Review Now
          </button>
        </div>

        <div style={{ ...styles.actionCard, backgroundColor: "#3b82f6" }}>
          <h3>Exam Management</h3>
          <p>{examsThisWeek} this week</p>
          <button
            onClick={() => navigate("/dashboard?tab=exams")}
            style={{
              marginTop: "12px",
              padding: "10px 14px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#fff",
              color: "#3b82f6",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Manage
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div style={styles.notifContainer}>
        <h3 style={{ marginBottom: "10px" }}>🔔 Recent Notifications</h3>
        {newNotifs.length === 0 ? (
          <p style={{ color: "#9ca3af" }}>No notifications yet...</p>
        ) : (
          newNotifs.map((n, i) => (
            <div key={i} style={styles.notifItem}>
              <strong>{n.msg}</strong>
              <div style={{ fontSize: "12px", color: "#9ca3af" }}>{n.time}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
