import { useState, useEffect } from "react";

export default function ExamCalendar() {
  const [view, setView] = useState("list");
  const [selectedExam, setSelectedExam] = useState(null);
  const [filter, setFilter] = useState("");
  const [upcomingExam, setUpcomingExam] = useState(null);

  const exams = [
    { id: 1, subject: "Mathematics", type: "Final", date: "2025-11-10", grade: "Class 10", time: "10:00 AM", venue: "Room 101", notes: "Bring calculator" },
    { id: 2, subject: "Science", type: "Mid-term", date: "2025-11-12", grade: "Class 10", time: "11:00 AM", venue: "Lab 2", notes: "Wear lab coat" },
    { id: 3, subject: "English", type: "Project", date: "2025-11-15", grade: "Class 10", time: "09:00 AM", venue: "Room 102", notes: "Open book exam" },
    { id: 4, subject: "Social Studies", type: "Final", date: "2025-11-18", grade: "Class 10", time: "01:00 PM", venue: "Room 103", notes: "Essay writing" },
  ];

  const today = new Date();

  // Find next upcoming exam
  useEffect(() => {
    const futureExams = exams.filter(exam => new Date(exam.date) >= today);
    const nextExam = futureExams.sort((a,b) => new Date(a.date) - new Date(b.date))[0];
    setUpcomingExam(nextExam || null);
  }, []);

  const filteredExams = exams.filter(exam => exam.subject.toLowerCase().includes(filter.toLowerCase()));

  const daysInMonth = 30;
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => `2025-11-${String(i + 1).padStart(2, "0")}`);

  // Calculate countdown
  const getCountdown = (dateStr) => {
    const examDate = new Date(dateStr);
    const diff = examDate - today;
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    return `${days}d ${hours}h left`;
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#111827", marginBottom: "1rem", textAlign: "center" }}>
        Exam Calendar
      </h1>

      {/* Upcoming Exam Widget */}
      {upcomingExam && (
        <div style={{ marginBottom: "1.5rem", padding: "1rem", borderRadius: "0.8rem", backgroundColor: "#fef3c7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Next Exam: {upcomingExam.subject}</p>
            <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>{upcomingExam.grade} | {upcomingExam.date} | {upcomingExam.time}</p>
          </div>
          <p style={{ fontWeight: "600", color: "#b45309" }}>{getCountdown(upcomingExam.date)}</p>
        </div>
      )}

      {/* Filter & Toggle */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Search by subject..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid #d1d5db", flex: 1, marginRight: "1rem" }}
        />
        <div>
          <button onClick={() => setView("list")} style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none", marginRight: "0.5rem", backgroundColor: view==="list"?"#ec4899":"#e5e7eb", color: view==="list"?"#fff":"#111827", cursor: "pointer" }}>List</button>
          <button onClick={() => setView("calendar")} style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none", backgroundColor: view==="calendar"?"#ec4899":"#e5e7eb", color: view==="calendar"?"#fff":"#111827", cursor: "pointer" }}>Calendar</button>
        </div>
      </div>

      {/* List View */}
      {view === "list" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filteredExams.map(exam => {
            const isToday = exam.date === today.toISOString().slice(0,10);
            const isSelected = selectedExam?.id === exam.id;
            return (
              <div key={exam.id} onClick={() => setSelectedExam(isSelected ? null : exam)}
                style={{ position: "relative", padding:"1rem 1.5rem", borderRadius:"0.8rem", boxShadow:"0 5px 15px rgba(0,0,0,0.05)", backgroundColor:isSelected?"#ec4899":"#fff", color:isSelected?"#fff":"#111827", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", borderLeft: isToday?"4px solid #10b981":"4px solid transparent", transition:"all 0.3s" }}
              >
                <div>
                  <p style={{ fontWeight:"600", fontSize:"1.1rem" }}>{exam.subject}</p>
                  <p style={{ fontSize:"0.9rem", color:isSelected?"#fcd5e1":"#6b7280" }}>{exam.grade} | {exam.date} | {exam.type}</p>
                </div>
                <div style={{ fontWeight:"600", fontSize:"1rem" }}>{exam.time}</div>

                {/* Expanded Details */}
                {isSelected && (
                  <div style={{ position:"absolute", top:"100%", left:"50%", transform:"translateX(-50%)", marginTop:"0.5rem", width:"90%", maxWidth:"600px", backgroundColor:"#fff", color:"#111827", padding:"1rem", borderRadius:"0.8rem", boxShadow:"0 10px 20px rgba(0,0,0,0.1)", zIndex:10, display:"flex", flexDirection:"column", gap:"0.5rem" }}>
                    <p><strong>Venue:</strong> {exam.venue}</p>
                    <p><strong>Notes:</strong> {exam.notes}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Calendar View */}
      {view === "calendar" && (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:"0.5rem" }}>
          {monthDays.map(day => {
            const dayExams = exams.filter(exam => exam.date===day);
            const isToday = day === today.toISOString().slice(0,10);
            return (
              <div key={day} style={{ minHeight:"80px", borderRadius:"0.5rem", backgroundColor:isToday?"#10b981":"#f3f4f6", padding:"0.5rem", display:"flex", flexDirection:"column", justifyContent:"flex-start", fontSize:"0.8rem", color:isToday?"#fff":"#111827", cursor:"pointer" }}>
                <strong>{day.split("-")[2]}</strong>
                {dayExams.map(exam => (
                  <span key={exam.id} style={{ marginTop:"0.25rem", backgroundColor:"#ec4899", color:"#fff", padding:"0 0.25rem", borderRadius:"0.25rem", fontSize:"0.75rem" }}>{exam.subject}</span>
                ))}
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
}
