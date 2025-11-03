import { useState } from "react";

export default function EnquiriesTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterMode, setFilterMode] = useState("all"); // "all", "today", "week"
  const rowsPerPage = 10;

  const [enquiries, setEnquiries] = useState([
    { id: 1, name: "Stacy Gomez", mobile: "8776654343", email: "balo@mailinator.com", message: "Ratione est veniam", dateTime: "03/08/2025, 02:15 am" },
    { id: 2, name: "Rahul Sharma", mobile: "9823456710", email: "rahul.sharma@mailinator.com", message: "Need details about scholarship process.", dateTime: "04/08/2025, 11:40 am" },
    { id: 3, name: "Emily Watson", mobile: "7654321890", email: "emily.watson@mailinator.com", message: "Can I apply for multiple programs?", dateTime: "06/08/2025, 09:25 pm" },
    { id: 4, name: "Amit Verma", mobile: "9988776655", email: "amit.verma@mailinator.com", message: "Please share the eligibility criteria.", dateTime: "08/08/2025, 05:10 pm" },
    { id: 5, name: "Sophia Lee", mobile: "8899776655", email: "sophia.lee@mailinator.com", message: "When will the next session start?", dateTime: "10/08/2025, 01:30 pm" },
    { id: 6, name: "Rohit Mehta", mobile: "9098765432", email: "rohit.mehta@mailinator.com", message: "I am facing issues submitting my form.", dateTime: "12/08/2025, 07:05 pm" },
    { id: 7, name: "Isabella Clark", mobile: "9123456780", email: "isabella.clark@mailinator.com", message: "Do you provide online interview slots?", dateTime: "15/08/2025, 10:45 am" },
    { id: 8, name: "Vikas Patel", mobile: "9812312345", email: "vikas.patel@mailinator.com", message: "I want to know about fee structure.", dateTime: "17/08/2025, 03:20 pm" },
    { id: 9, name: "Liam Johnson", mobile: "9345678210", email: "liam.johnson@mailinator.com", message: "How can I update my profile information?", dateTime: "20/08/2025, 08:10 pm" },
    { id: 10, name: "Neha Kapoor", mobile: "9876501234", email: "neha.kapoor@mailinator.com", message: "Is there any scholarship for foreign students?", dateTime: "23/08/2025, 04:50 pm" },
    { id: 11, name: "Alex Turner", mobile: "9112233445", email: "alex.turner@mailinator.com", message: "Can I schedule a call?", dateTime: "24/08/2025, 10:15 am" },
    { id: 12, name: "Priya Singh", mobile: "9876543210", email: "priya.singh@mailinator.com", message: "Need guidance for documents.", dateTime: "25/08/2025, 02:45 pm" },
    {
    id: 1,
    name: 'Stacy Gomez',
    mobile: '8776654343',
    email: 'balo@mailinator.com',
    message: 'Ratione est veniam',
    dateTime: '03/08/2025, 02:15 am'
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    mobile: '9823456710',
    email: 'rahul.sharma@mailinator.com',
    message: 'Need details about scholarship process.',
    dateTime: '04/08/2025, 11:40 am'
  },
  {
    id: 3,
    name: 'Emily Watson',
    mobile: '7654321890',
    email: 'emily.watson@mailinator.com',
    message: 'Can I apply for multiple programs?',
    dateTime: '06/08/2025, 09:25 pm'
  },
  {
    id: 4,
    name: 'Amit Verma',
    mobile: '9988776655',
    email: 'amit.verma@mailinator.com',
    message: 'Please share the eligibility criteria.',
    dateTime: '08/08/2025, 05:10 pm'
  },
  {
    id: 5,
    name: 'Sophia Lee',
    mobile: '8899776655',
    email: 'sophia.lee@mailinator.com',
    message: 'When will the next session start?',
    dateTime: '10/08/2025, 01:30 pm'
  },
  {
    id: 6,
    name: 'Rohit Mehta',
    mobile: '9098765432',
    email: 'rohit.mehta@mailinator.com',
    message: 'I am facing issues submitting my form.',
    dateTime: '12/08/2025, 07:05 pm'
  },
  {
    id: 7,
    name: 'Isabella Clark',
    mobile: '9123456780',
    email: 'isabella.clark@mailinator.com',
    message: 'Do you provide online interview slots?',
    dateTime: '15/08/2025, 10:45 am'
  },
  {
    id: 8,
    name: 'Vikas Patel',
    mobile: '9812312345',
    email: 'vikas.patel@mailinator.com',
    message: 'I want to know about fee structure.',
    dateTime: '17/08/2025, 03:20 pm'
  },
  {
    id: 9,
    name: 'Liam Johnson',
    mobile: '9345678210',
    email: 'liam.johnson@mailinator.com',
    message: 'How can I update my profile information?',
    dateTime: '20/08/2025, 08:10 pm'
  },
  {
    id: 10,
    name: 'Neha Kapoor',
    mobile: '9876501234',
    email: 'neha.kapoor@mailinator.com',
    message: 'Is there any scholarship for foreign students?',
    dateTime: '23/08/2025, 04:50 pm'
  },
  ]);

  const getTodayEnquiries = () => {
    const today = new Date();
    const todayStr = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
    return enquiries.filter((e) => e.dateTime.startsWith(todayStr)).length;
  };

  const getThisWeekEnquiries = () => {
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    return enquiries.filter((e) => {
      const [datePart] = e.dateTime.split(",");
      const [day, month, year] = datePart.split("/");
      const enquiryDate = new Date(year, month - 1, day);
      return enquiryDate >= weekAgo && enquiryDate <= today;
    }).length;
  };

  // Filtered list with search + stat card filter
  const filteredEnquiries = enquiries.filter((enquiry) => {
    const matchesSearch =
      searchTerm === "" ||
      enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.mobile.includes(searchTerm) ||
      enquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.message.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filterMode === "today") {
      const today = new Date();
      const todayStr = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
      return enquiry.dateTime.startsWith(todayStr);
    }

    if (filterMode === "week") {
      const today = new Date();
      const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      const [datePart] = enquiry.dateTime.split(",");
      const [day, month, year] = datePart.split("/");
      const enquiryDate = new Date(year, month - 1, day);
      return enquiryDate >= weekAgo && enquiryDate <= today;
    }

    return true;
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredEnquiries.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredEnquiries.length / rowsPerPage);

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const handleDelete = (id) => setEnquiries(enquiries.filter((e) => e.id !== id));
  const handleDownload = () => {
    const csvContent = [
      ["Name", "Mobile", "Email", "Message", "Date & Time"],
      ...filteredEnquiries.map((e) => [e.name, e.mobile, e.email, e.message, e.dateTime]),
    ].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "enquiries.csv";
    a.click();
  };
  const handleClearFilters = () => { setSearchTerm(""); setFromDate(""); setToDate(""); setFilterMode("all"); setCurrentPage(1); };

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", padding: "28px", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: "700", color: "#1f2937" }}> Enquiries ({filteredEnquiries.length})</h2>
        <button onClick={handleDownload} style={{ padding: "10px 18px", fontSize: "15px", border: "none", borderRadius: "6px", cursor: "pointer", backgroundColor: "#2563eb", color: "#fff" }}>⬇ Download CSV</button>
      </div>

      {/* Search */}
      <input type="text" placeholder=" Search by name, phone, email, or message..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #d1d5db", outline: "none", marginBottom: "20px", fontSize: "15px" }} />

      {/* Filters */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>From Date</label>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>To Date</label>
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #d1d5db" }} />
          </div>
        </div>
        <button onClick={handleClearFilters} style={{ padding: " 7px", borderRadius: "6px", backgroundColor: "#6b7280", color: "white" , width:"150px" , height:"40px"}}>Clear Filters</button>
      </div>
{/* Table */}
<div style={{ 
  backgroundColor: "#fff", 
  borderRadius: "10px", 
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)", 
  overflowX: "auto"
}}>
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead style={{ backgroundColor: "#10b981" }}>
      <tr>
        <th style={{ padding: "18px 20px" }}>Name</th>
        <th style={{ padding: "18px 20px" }}>Mobile</th>
        <th style={{ padding: "18px 20px" }}>Email</th>
        <th style={{ padding: "18px 20px" }}>Message</th>
        <th style={{ padding: "18px 20px" }}>Date & Time</th>
        <th style={{ padding: "18px 20px" }}>Action</th>
      </tr>
    </thead>
    <tbody>
      {currentRows.map((e, i) => (
        <tr key={e.id} style={{ backgroundColor: i % 2 === 0 ? "#f9fafb" : "#fff", height: "60px" }}>
          <td style={{ padding: "16px 20px" }}>{e.name}</td>
          <td style={{ padding: "16px 20px" }}>{e.mobile}</td>
          <td style={{ padding: "16px 20px" }}>
            <a href={`mailto:${e.email}`} style={{ color: "#0a0a0ac2", textDecoration: "none",fontSize:"15px",fontWeight:"2000px" }}>{e.email}</a>
          </td>
          <td style={{ padding: "16px 20px" }}>{e.message}</td>
          <td style={{ padding: "16px 20px" }}>{e.dateTime}</td>
          <td style={{ padding: "16px 20px" }}>
            <button onClick={() => handleDelete(e.id)} style={{ color: "#dc2626", fontWeight: "600", cursor: "pointer", border: "none", background: "transparent" }}> Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Pagination */}
      <div style={{ marginTop: "16px", display: "flex", justifyContent: "center", gap: "12px" }}>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>

      {/* Stats (Clickable) */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px", gap: "16px", flexWrap: "wrap" }}>
        <div style={{ flex: "1", minWidth: "200px", borderRadius: "12px", padding: "22px", textAlign: "center", color: "#fff", fontWeight: "600", backgroundColor: "#2563eb", cursor: "pointer" }} onClick={() => { setFilterMode("all"); setCurrentPage(1); }}>
          <div style={{ fontSize: "32px" }}>{enquiries.length}</div>
          <div>Total Enquiries</div>
        </div>
        <div style={{ flex: "1", minWidth: "200px", borderRadius: "12px", padding: "22px", textAlign: "center", color: "#fff", fontWeight: "600", backgroundColor: "#10b981", cursor: "pointer" }} onClick={() => { setFilterMode("today"); setCurrentPage(1); }}>
          <div style={{ fontSize: "32px" }}>{getTodayEnquiries()}</div>
          <div>Today's Enquiries</div>
        </div>
        <div style={{ flex: "1", minWidth: "200px", borderRadius: "12px", padding: "22px", textAlign: "center", color: "#fff", fontWeight: "600", backgroundColor: "#a855f7", cursor: "pointer" }} onClick={() => { setFilterMode("week"); setCurrentPage(1); }}>
          <div style={{ fontSize: "32px" }}>{getThisWeekEnquiries()}</div>
          <div>This Week</div>
        </div>
      </div>
    </div>
  );
}
