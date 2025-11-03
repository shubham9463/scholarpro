import { useState, useEffect } from "react";

export default function Certificate() {
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const studentId = "12345"; // Replace this with actual logged-in student ID

  // Fetch certificate details (for display)
  useEffect(() => {
    const fetchCertificate = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/certificates/${studentId}`);
        if (!res.ok) throw new Error("Failed to load certificate");
        const data = await res.json();
        setCertificateData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificate();
  }, []);

  // Download certificate as file
  const handleDownload = async () => {
    try {
      setDownloading(true);
      const res = await fetch(`http://localhost:5000/api/certificates/download/${studentId}`, {
        method: "GET",
      });
      if (!res.ok) throw new Error("Download failed");

      // Convert response to blob
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a hidden link to download
      const a = document.createElement("a");
      a.href = url;
      a.download = `Certificate_${studentId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Error downloading certificate.");
    } finally {
      setDownloading(false);
    }
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading certificate...</p>;
  if (!certificateData) return <p style={{ textAlign: "center", marginTop: "2rem" }}>No certificate found.</p>;

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1rem" }}>
        Certificate of Achievement
      </h1>
      <hr style={{ width: "60%", margin: "1rem auto", borderColor: "#e5e7eb" }} />

      <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "#4b5563" }}>
        This is to certify that
      </p>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ec4899", margin: "0.5rem 0" }}>
        {certificateData.studentName}
      </h2>
      <p style={{ fontSize: "1rem", color: "#4b5563" }}>
        has successfully completed the course
      </p>
      <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#111827", marginTop: "0.5rem" }}>
        {certificateData.courseName}
      </h3>

      <div style={{ marginTop: "1.5rem", color: "#6b7280" }}>
        <p>Issued on: <strong>{certificateData.issueDate}</strong></p>
        <p>Certificate ID: {certificateData.certificateId}</p>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={downloading}
        style={{
          marginTop: "2rem",
          backgroundColor: downloading ? "#9ca3af" : "#10b981",
          color: "#fff",
          padding: "0.7rem 1.5rem",
          border: "none",
          borderRadius: "9999px",
          cursor: downloading ? "not-allowed" : "pointer",
          fontWeight: "500",
          transition: "0.3s",
        }}
      >
        {downloading ? "Downloading..." : "📥 Download Certificate"}
      </button>
    </div>
  );
}
