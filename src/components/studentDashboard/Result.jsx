import { useState, useEffect } from "react";
import jsPDF from "jspdf"; // install if not added: npm install jspdf

export default function Result() {
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const studentId = "MM12345"; // Replace with logged-in student's ID

  // Fetch result details
  useEffect(() => {
    const fetchResult = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/results/${studentId}`);
        if (!res.ok) throw new Error("Failed to load result");
        const data = await res.json();
        setResultData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchResult();
  }, []);

  // Download result as PDF
  const handleDownload = () => {
    if (!resultData) return;
    setDownloading(true);

    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("MIND MARATHON - RESULT", 70, 20);
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Student Name: ${resultData.studentName}`, 20, 40);
    doc.text(`Class: ${resultData.class}`, 20, 50);
    doc.text(`Roll No: ${resultData.rollNo}`, 20, 60);
    doc.text(`Exam: ${resultData.examName}`, 20, 70);
    doc.text(`Exam Date: ${resultData.examDate}`, 20, 80);

    let y = 95;
    doc.setFont("helvetica", "bold");
    doc.text("Subject-wise Marks:", 20, y);
    y += 8;
    doc.setFont("helvetica", "normal");

    resultData.subjects.forEach((sub) => {
      doc.text(`${sub.name}: ${sub.marks} / ${sub.total}`, 25, y);
      y += 8;
    });

    y += 5;
    doc.text(`Total Marks: ${resultData.totalMarks}`, 20, y);
    y += 8;
    doc.text(`Percentage: ${resultData.percentage}%`, 20, y);
    y += 8;
    doc.text(`Grade: ${resultData.grade}`, 20, y);
    y += 8;
    doc.text(`Rank: ${resultData.rank}`, 20, y);

    doc.setFont("helvetica", "italic");
    doc.text("Congratulations on your performance!", 20, y + 20);

    doc.save(`${resultData.studentName}_Result.pdf`);
    setDownloading(false);
  };

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading Result...</p>;

  if (!resultData)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No Result Found</p>;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        backgroundColor: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#ec4899" }}>
        Mind Marathon - Exam Result
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
        Performance Summary
      </p>

      {/* Student Info */}
      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: "1rem",
          borderRadius: "0.5rem",
          marginBottom: "1.5rem",
          textAlign: "left",
        }}
      >
        <p><strong>Name:</strong> {resultData.studentName}</p>
        <p><strong>Class:</strong> {resultData.class}</p>
        <p><strong>Roll No:</strong> {resultData.rollNo}</p>
        <p><strong>Exam:</strong> {resultData.examName}</p>
        <p><strong>Exam Date:</strong> {resultData.examDate}</p>
      </div>

      {/* Subject Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "1.5rem",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#ec4899", color: "#fff" }}>
            <th style={{ padding: "0.7rem", border: "1px solid #f3f4f6" }}>Subject</th>
            <th style={{ padding: "0.7rem", border: "1px solid #f3f4f6" }}>Marks</th>
            <th style={{ padding: "0.7rem", border: "1px solid #f3f4f6" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {resultData.subjects.map((sub, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 ? "#fff" : "#f9fafb" }}>
              <td style={{ padding: "0.6rem", border: "1px solid #e5e7eb" }}>{sub.name}</td>
              <td style={{ padding: "0.6rem", border: "1px solid #e5e7eb" }}>{sub.marks}</td>
              <td style={{ padding: "0.6rem", border: "1px solid #e5e7eb" }}>{sub.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <div
        style={{
          backgroundColor: "#f9fafb",
          borderRadius: "0.5rem",
          padding: "1rem",
          textAlign: "left",
        }}
      >
        <p><strong>Total Marks:</strong> {resultData.totalMarks}</p>
        <p><strong>Percentage:</strong> {resultData.percentage}%</p>
        <p><strong>Grade:</strong> {resultData.grade}</p>
        <p><strong>Rank:</strong> {resultData.rank}</p>
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
          cursor: downloading ? "not-allowed" : "pointer",
          fontWeight: "500",
          transition: "0.3s",
        }}
      >
        {downloading ? "Downloading..." : "📥 Download Result"}
      </button>
    </div>
  );
}
