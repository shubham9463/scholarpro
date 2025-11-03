import { useState } from "react";
import jsPDF from "jspdf"; // <-- install this with: npm install jspdf

export default function Syllabus() {
  const [activeGrade, setActiveGrade] = useState("Class 1");
  const [expandedSubjects, setExpandedSubjects] = useState({});
  const [completedTopics, setCompletedTopics] = useState({});

  const grades = [
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
    "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  ];

  // You can later fetch this from backend instead of hardcoding.
  const syllabusData = {
    "Class 1": [
      { subject: "Mathematics", topics: ["Numbers", "Addition", "Subtraction"] },
      { subject: "English", topics: ["Alphabets", "Reading", "Writing"] },
      { subject: "Science", topics: ["Plants", "Animals", "Weather"] },
    ],
    "Class 2": [
      { subject: "Mathematics", topics: ["Multiplication", "Division", "Fractions"] },
      { subject: "English", topics: ["Grammar", "Comprehension"] },
      { subject: "Science", topics: ["Plants", "Animals", "Water Cycle"] },
    ],
    "Class 10": [
      { subject: "Mathematics", topics: ["Algebra", "Geometry", "Probability"] },
      { subject: "Science", topics: ["Physics", "Chemistry", "Biology"] },
      { subject: "English", topics: ["Literature", "Writing Skills"] },
    ],
  };

  // Expand/Collapse subjects
  const toggleSubject = (subject) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [subject]: !prev[subject],
    }));
  };

  // Mark topic completed
  const toggleTopicCompletion = (subject, topic) => {
    setCompletedTopics((prev) => {
      const subjectCompleted = prev[subject] || [];
      if (subjectCompleted.includes(topic)) {
        return { ...prev, [subject]: subjectCompleted.filter((t) => t !== topic) };
      } else {
        return { ...prev, [subject]: [...subjectCompleted, topic] };
      }
    });
  };

  // Calculate progress
  const getProgress = (subject) => {
    const total = syllabusData[activeGrade].find((s) => s.subject === subject)?.topics.length || 0;
    const completed = completedTopics[subject]?.length || 0;
    return total === 0 ? 0 : Math.round((completed / total) * 100);
  };

  // Download syllabus as PDF
  const handleDownloadSyllabus = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Syllabus for ${activeGrade}`, 20, 20);

    let y = 35;
    doc.setFontSize(12);
    syllabusData[activeGrade]?.forEach((subject, i) => {
      doc.text(`${i + 1}. ${subject.subject}`, 20, y);
      y += 8;

      subject.topics.forEach((topic) => {
        doc.text(`- ${topic}`, 28, y);
        y += 7;
        if (y > 270) { // auto new page
          doc.addPage();
          y = 20;
        }
      });
      y += 5;
    });

    doc.save(`${activeGrade}_Syllabus.pdf`);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      {/* Header */}
      <h1 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "bold", color: "#111827", marginBottom: "2rem" }}>
        Interactive Syllabus
      </h1>

      {/* Download Button */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
        <button
          onClick={handleDownloadSyllabus}
          style={{
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            padding: "0.7rem 1.4rem",
            borderRadius: "9999px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          📥 Download {activeGrade} Syllabus
        </button>
      </div>

      {/* Grade Tabs */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
        {grades.map((grade) => (
          <button
            key={grade}
            onClick={() => setActiveGrade(grade)}
            style={{
              padding: "0.5rem 1.2rem",
              borderRadius: "9999px",
              border: activeGrade === grade ? "2px solid #ec4899" : "2px solid #e5e7eb",
              backgroundColor: activeGrade === grade ? "#ec4899" : "#fff",
              color: activeGrade === grade ? "#fff" : "#111827",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            {grade}
          </button>
        ))}
      </div>

      {/* Subjects */}
      <div>
        {syllabusData[activeGrade]?.map((sub) => {
          const isExpanded = expandedSubjects[sub.subject];
          const progress = getProgress(sub.subject);
          return (
            <div
              key={sub.subject}
              style={{
                marginBottom: "1rem",
                borderRadius: "0.8rem",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              {/* Subject Header */}
              <div
                onClick={() => toggleSubject(sub.subject)}
                style={{
                  padding: "1rem 1.5rem",
                  backgroundColor: isExpanded ? "#ec4899" : "#f3f4f6",
                  color: isExpanded ? "#fff" : "#1f2937",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.3s",
                }}
              >
                <span>{sub.subject}</span>
                <span>{isExpanded ? "▲" : "▼"}</span>
              </div>

              {/* Progress Bar */}
              <div style={{ height: "6px", width: "100%", backgroundColor: "#e5e7eb" }}>
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "#ec4899",
                    transition: "width 0.3s",
                  }}
                />
              </div>

              {/* Topics */}
              {isExpanded && (
                <div style={{ backgroundColor: "#f9fafb", padding: "1rem 1.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {sub.topics.map((topic, idx) => {
                    const completed = completedTopics[sub.subject]?.includes(topic);
                    return (
                      <span
                        key={idx}
                        onClick={() => toggleTopicCompletion(sub.subject, topic)}
                        style={{
                          padding: "0.4rem 0.8rem",
                          borderRadius: "0.5rem",
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          border: completed ? "1px solid #9ca3af" : "1px solid #e5e7eb",
                          backgroundColor: completed ? "#d1fae5" : "#fff",
                          color: completed ? "#065f46" : "#374151",
                          transition: "all 0.2s",
                        }}
                      >
                        {completed && "✔️"} {topic}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
