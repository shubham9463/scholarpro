import { useState, useMemo } from "react";

export default function StudentTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    scholarship: "all",
    schoolCollege: "all",
    studentClass: "all",
    city: "all",
    district: "all",
  });
  const [students] = useState([
  {
    _id: "1",
    studentName: "Lucifer MorningStar",
    mobileNo: "9546463596",
    emailId: "devil69@gmail.com",
    studentClass: "12th/PUC - Science",
    schoolCollege: "LPU",
    aadharNo: "8946 5132 6548",
    address: "Laxmi Nagar, New Delhi",
    city: "New Delhi",
    district: "Delhi",
    pinCode: "110092",
    boardName: "CBSE",
    combination: "PCM",
    scholarship: "Merit-based",
    paymentStatus: "Success"
  },
  {
    _id: "2",
    studentName: "Shivam Jha",
    mobileNo: "8945612345",
    emailId: "shivamjha@gmail.com",
    studentClass: "9th",
    schoolCollege: "B.P Mandal College of Engineering",
    aadharNo: "7894 6512 3489",
    address: "Darbhanga, Patna",
    city: "Patna",
    district: "Bihar",
    pinCode: "800001",
    boardName: "CBSE",
    combination: "Science",
    scholarship: "Need-based",
    paymentStatus: "Pending"
  },
  {
    _id: "3",
    studentName: "Ramshobit Kumar",
    mobileNo: "9835447219",
    emailId: "ramu@gmail.com",
    studentClass: "12th/PUC - Commerce",
    schoolCollege: "B.P Mandal College of Engineering",
    aadharNo: "7845 1321 5468",
    address: "Madhubani",
    city: "Madhubani",
    district: "Bihar",
    pinCode: "847211",
    boardName: "CBSE",
    combination: "Commerce",
    scholarship: "Merit-based",
    paymentStatus: "Success"
  },
  {
    _id: "4",
    studentName: "Nitish Kumar",
    mobileNo: "9835281827",
    emailId: "nitishsarkar@gmail.com",
    studentClass: "10th",
    schoolCollege: "B.P Mandal College of Engineering",
    aadharNo: "8794 6513 2456",
    address: "Addarsh Vihar Colony, Ruppaspur",
    city: "Vaishali",
    district: "Bihar",
    pinCode: "844101",
    boardName: "CBSE",
    combination: "General",
    scholarship: "Sports",
    paymentStatus: "Pending"
  },
  {
    _id: "5",
    studentName: "Surjeet Kumar",
    mobileNo: "8946513256",
    emailId: "surjeet@gmail.com",
    studentClass: "12th/PUC - Commerce",
    schoolCollege: "B.P Mandal College of Engineering",
    aadharNo: "7845 6146 8965",
    address: "Addarsh Vihar Colony, Ruppaspur",
    city: "Vaishali",
    district: "Bihar",
    pinCode: "844101",
    boardName: "CBSE",
    combination: "Commerce",
    scholarship: "Merit-based",
    paymentStatus: "Success"
  },

    // ... rest of your students
  ]);

  const filterOptions = useMemo(() => {
    const scholarships = [...new Set(students.map((s) => s.scholarship))];
    const schools = [...new Set(students.map((s) => s.schoolCollege))];
    const classes = [...new Set(students.map((s) => s.studentClass))];
    const cities = [...new Set(students.map((s) => s.city))];
    const states = [...new Set(students.map((s) => s.district))];
    return { scholarships, schools, classes, cities, states };
  }, [students]);

  const filteredStudents = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    return students.filter((student) => {
      const matchesSearch =
        search === "" ||
        student.studentName.toLowerCase().includes(search) ||
        student.emailId.toLowerCase().includes(search) ||
        student.mobileNo.toString().includes(search);

      const matchesScholarship = filters.scholarship === "all" || student.scholarship === filters.scholarship;
      const matchesSchool = filters.schoolCollege === "all" || student.schoolCollege === filters.schoolCollege;
      const matchesClass = filters.studentClass === "all" || student.studentClass === filters.studentClass;
      const matchesCity = filters.city === "all" || student.city === filters.city;
      const matchesDistrict = filters.district === "all" || student.district === filters.district;

      return matchesSearch && matchesScholarship && matchesSchool && matchesClass && matchesCity && matchesDistrict;
    });
  }, [searchTerm, filters, students]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
   <div style={{ padding: '24px', backgroundColor: '#f3f4f6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
  <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#111827' }}>
    Student List ({filteredStudents.length})
  </h2>

  {/* Search */}
  <div style={{ marginBottom: '20px' }}>
    <input
      type="text"
      placeholder="Search by name, mobile, or email..."
      style={{
        width: '97%',
        padding: '12px 16px',
        fontSize: '15px',
        borderRadius: '10px',
        border: '1px solid #d1d5db',
        outline: 'none',
        transition: 'all 0.3s',
        backgroundColor: 'white',
      }}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onFocus={(e) => (e.target.style.borderColor = '#f97316')}
      onBlur={(e) => (e.target.style.borderColor = '#d1d5db')}
    />
  </div>

  {/* Filters */}
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '30px' }}>
    {[
      { label: 'Scholarship', value: filters.scholarship, options: filterOptions.scholarships, key: 'scholarship' },
      { label: 'School/College', value: filters.schoolCollege, options: filterOptions.schools, key: 'schoolCollege' },
      { label: 'Class', value: filters.studentClass, options: filterOptions.classes, key: 'studentClass' },
      { label: 'City', value: filters.city, options: filterOptions.cities, key: 'city' },
      { label: 'State', value: filters.district, options: filterOptions.states, key: 'district' }
    ].map(filter => (
      <select
        key={filter.key}
        value={filter.value}
        onChange={e => handleFilterChange(filter.key, e.target.value)}
        style={{
          padding: '10px 14px',
          fontSize: '14px',
          borderRadius: '10px',
          border: '1px solid #d1d5db',
          backgroundColor: 'white',
          color: '#374151',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
        onFocus={(e) => e.target.style.borderColor = '#f97316'}
        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
      >
        <option value="all">All {filter.label}s</option>
        {filter.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    ))}
  </div>

  {/* Table */}
  <div style={{ overflowX: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', backgroundColor: 'white' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1000px' }}>
      <thead style={{ backgroundColor: '#f59e0b' }}>
        <tr>
          {['Name', 'Mobile', 'Email', 'Class', 'School/College', 'Aadhar No', 'Address', 'City', 'District', 'Scholarship', 'Payment Status'].map(header => (
            <th key={header} style={{ padding: '16px', fontSize: '14px', fontWeight: 600, color: '#1f2937', textAlign: 'left', whiteSpace: 'nowrap' }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredStudents.length > 0 ? (
          filteredStudents.map(student => (
            <tr key={student._id} style={{ borderBottom: '1px solid #e5e7eb', transition: 'all 0.2s', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#edcd4c62'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
            >
              <td style={{ padding: '14px', fontWeight: 500 }}>{student.studentName}</td>
              <td style={{ padding: '14px' }}>{student.mobileNo}</td>
              <td style={{ padding: '14px' }}>{student.emailId}</td>
              <td style={{ padding: '14px' }}>{student.studentClass}</td>
              <td style={{ padding: '14px' }}>{student.schoolCollege}</td>
              <td style={{ padding: '14px' }}>{student.aadharNo}</td>
              <td style={{ padding: '14px' }}>{student.address}</td>
              <td style={{ padding: '14px' }}>{student.city}</td>
              <td style={{ padding: '14px' }}>{student.district}</td>
              <td style={{ padding: '14px' }}>{student.scholarship}</td>
              <td style={{ padding: '14px' }}>{student.paymentStatus}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="11" style={{ padding: '32px', textAlign: 'center', color: '#6b7280', fontSize: '15px' }}>
              No students found matching your criteria.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
}
