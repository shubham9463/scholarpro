import React, { useState } from "react";

// -------------------------
// DUMMY JSON STUDENT DATA
// -------------------------
const dummyStudents = [
  {
    id: 1,
    name: "Aarav Sharma",
    class: "5",
    roll: "12",
    gender: "Male",
    dob: "2014-03-10",
    fatherName: "Rohit Sharma",
    motherName: "Priya Sharma",
    phone: "+91 9876543210",
    address: "Green Park, Delhi",
  },
  {
    id: 2,
    name: "Ananya Verma",
    class: "6",
    roll: "08",
    gender: "Female",
    dob: "2013-02-15",
    fatherName: "Amit Verma",
    motherName: "Swati Verma",
    phone: "+91 9123456780",
    address: "Model Town, Delhi",
  },
  {
    id: 3,
    name: "Krishna Mehta",
    class: "5",
    roll: "04",
    gender: "Male",
    dob: "2014-01-22",
    fatherName: "Sanjay Mehta",
    motherName: "Ritu Mehta",
    phone: "+91 9988776655",
    address: "Sector 12, Noida",
  },
];

export default function SchoolStudents() {
  const [students, setStudents] = useState(dummyStudents);
  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Search + Filter Logic
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesClass = filterClass
      ? student.class === filterClass
      : true;

    return matchesSearch && matchesClass;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* ---------------- Header ---------------- */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Students Management
      </h1>

      {/* ---------------- Search + Filter ---------------- */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            minWidth: "220px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            minWidth: "140px",
          }}
        >
          <option value="">All Classes</option>
          <option value="5">Class 5</option>
          <option value="6">Class 6</option>
        </select>
      </div>

      {/* ---------------- Student Table ---------------- */}
      <div
        style={{
          overflowX: "auto",
          background: "#fff",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #e5e7eb",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "700px",
          }}
        >
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Class</th>
              <th style={thStyle}>Roll No</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((stu) => (
              <tr key={stu.id}>
                <td style={tdStyle}>{stu.name}</td>
                <td style={tdStyle}>{stu.class}</td>
                <td style={tdStyle}>{stu.roll}</td>
                <td style={tdStyle}>{stu.phone}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => setSelectedStudent(stu)}
                    style={btnView}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}

            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                  No students found...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ---------------- Student Detail Modal ---------------- */}
      {selectedStudent && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <h2 style={{ marginBottom: "10px" }}>{selectedStudent.name}</h2>
            <p><b>Class:</b> {selectedStudent.class}</p>
            <p><b>Roll No:</b> {selectedStudent.roll}</p>
            <p><b>Gender:</b> {selectedStudent.gender}</p>
            <p><b>DOB:</b> {selectedStudent.dob}</p>
            <p><b>Father Name:</b> {selectedStudent.fatherName}</p>
            <p><b>Mother Name:</b> {selectedStudent.motherName}</p>
            <p><b>Phone:</b> {selectedStudent.phone}</p>
            <p><b>Address:</b> {selectedStudent.address}</p>

            <button
              onClick={() => setSelectedStudent(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                background: "#ef4444",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------
// INLINE CSS REUSABLE STYLES
// -------------------------------------

const thStyle = {
  padding: "12px",
  borderBottom: "2px solid #ddd",
  textAlign: "left",
  fontWeight: "600",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

const btnView = {
  padding: "6px 14px",
  borderRadius: "6px",
  background: "#3b82f6",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

// ---------------- Modal Styles ----------------

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

const modalBox = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "420px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};
