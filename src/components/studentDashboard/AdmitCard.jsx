import { useState, useEffect } from "react";
import jsPDF from "jspdf"; // install if not already: npm install jspdf

export default function AdmitCard() {
  const [admitData, setAdmitData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const studentId = "MM12345"; // Replace with actual logged-in student's ID

  // Fetch admit card details from backend
  useEffect(() => {
    const fetchAdmitData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/admit/${studentId}`);
        if (!res.ok) throw new Error("Failed to fetch admit card");
        const data = await res.json();
        setAdmitData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmitData();
  }, []);

  // Download admit card as PDF
  const handleDownload = () => {
    if (!admitData) return;
    setDownloading(true);

    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("MIND MARATHON - ADMIT CARD", 60, 20);

    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Student Name: ${admitData.studentName}`, 20, 40);
    doc.text(`Registration No: ${admitData.registrationNo}`, 20, 50);
    doc.text(`Class: ${admitData.class}`, 20, 60);
    doc.text(`Exam Center: ${admitData.examCenter}`, 20, 70);
    doc.text(`Exam Date: ${admitData.examDate}`, 20, 80);
    doc.text(`Reporting Time: ${admitData.reportingTime}`, 20, 90);
    doc.text(`Roll No: ${admitData.rollNo}`, 20, 100);

    doc.setFont("helvetica", "italic");
    doc.text("Please bring this Admit Card and a valid school ID card to the exam center.", 20, 120);

    doc.save(`${admitData.studentName}_AdmitCard.pdf`);
    setDownloading(false);
  };

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading Admit Card...</p>;

  if (!admitData)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No Admit Card Available</p>;

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        backgroundColor: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "2rem",
        textAlign: "center",
        border: "2px solid #ec4899",
      }}
    >
      {/* Header */}
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#ec4899" }}>
        MIND MARATHON - ADMIT CARD
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
        Kindly verify all details before the examination.
      </p>

      {/* Student Details */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          textAlign: "left",
          backgroundColor: "#f9fafb",
          padding: "1rem 1.5rem",
          borderRadius: "0.8rem",
        }}
      >
        <p><strong>Student Name:</strong> {admitData.studentName}</p>
        <p><strong>Registration No:</strong> {admitData.registrationNo}</p>
        <p><strong>Class:</strong> {admitData.class}</p>
        <p><strong>Roll No:</strong> {admitData.rollNo}</p>
        <p><strong>Exam Center:</strong> {admitData.examCenter}</p>
        <p><strong>Exam Date:</strong> {admitData.examDate}</p>
        <p><strong>Reporting Time:</strong> {admitData.reportingTime}</p>
        <p><strong>Exam Duration:</strong> {admitData.examDuration}</p>
      </div>

      {/* Footer note */}
      <div style={{ marginTop: "1.5rem", color: "#6b7280", fontSize: "0.9rem" }}>
        <p>
          Students must carry this Admit Card along with a valid School ID card on the exam day.
        </p>
        <p style={{ marginTop: "0.5rem" }}>Unauthorized duplication is prohibited.</p>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={downloading}
        style={{
          marginTop: "2rem",
          backgroundColor: downloading ? "#9ca3af" : "#10b981",
          color: "#fff",
          padding: "0.8rem 1.5rem",
          border: "none",
          borderRadius: "9999px",
          fontWeight: "500",
          cursor: downloading ? "not-allowed" : "pointer",
          transition: "0.3s",
        }}
      >
        {downloading ? "Downloading..." : "📥 Download Admit Card"}
      </button>
    </div>
  );
}
