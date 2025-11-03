import { useState, useMemo } from "react";

export default function SchoolTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    boardName: "all",
    city: "all",
    district: "all",
    course: "all",
  });

  const [schools] = useState([
    {
      _id: "1",
      schoolName: "LPU",
      principalName: "Dr. Amar Singh",
      mobileNo: "9876543210",
      emailId: "contact@lpu.edu",
      address: "Laxmi Nagar, New Delhi",
      city: "New Delhi",
      district: "Delhi",
      pinCode: "110092",
      boardName: "CBSE",
      totalStudents: 1200,
      affiliatedCourses: "Science, Commerce"
    },
    {
      _id: "2",
      schoolName: "B.P Mandal College",
      principalName: "Mr. Rajesh Kumar",
      mobileNo: "9876512345",
      emailId: "info@bpcollege.edu",
      address: "Darbhanga, Patna",
      city: "Patna",
      district: "Bihar",
      pinCode: "800001",
      boardName: "State Board",
      totalStudents: 800,
      affiliatedCourses: "Science, Arts"
    },
    {
      _id: "3",
      schoolName: "Sunrise Public School",
      principalName: "Mrs. Anjali Sharma",
      mobileNo: "9835447219",
      emailId: "sunrise@edu.com",
      address: "Madhubani",
      city: "Madhubani",
      district: "Bihar",
      pinCode: "847211",
      boardName: "ICSE",
      totalStudents: 950,
      affiliatedCourses: "Commerce, Arts"
    },
     {
    _id: "1",
    schoolName: "LPU",
    principalName: "Dr. Amar Singh",
    mobileNo: "9876543210",
    emailId: "contact@lpu.edu",
    address: "Laxmi Nagar, New Delhi",
    city: "New Delhi",
    district: "Delhi",
    pinCode: "110092",
    boardName: "CBSE",
    totalStudents: 1200,
    affiliatedCourses: "Science, Commerce"
  },
  {
    _id: "2",
    schoolName: "B.P Mandal College",
    principalName: "Mr. Rajesh Kumar",
    mobileNo: "9876512345",
    emailId: "info@bpcollege.edu",
    address: "Darbhanga, Patna",
    city: "Patna",
    district: "Bihar",
    pinCode: "800001",
    boardName: "State Board",
    totalStudents: 800,
    affiliatedCourses: "Science, Arts"
  },
  {
    _id: "3",
    schoolName: "Sunrise Public School",
    principalName: "Mrs. Anjali Sharma",
    mobileNo: "9835447219",
    emailId: "sunrise@edu.com",
    address: "Madhubani",
    city: "Madhubani",
    district: "Bihar",
    pinCode: "847211",
    boardName: "ICSE",
    totalStudents: 950,
    affiliatedCourses: "Commerce, Arts"
  },
 

    // Add more schools as needed
  ]);

  const filterOptions = useMemo(() => {
    const boards = [...new Set(schools.map(s => s.boardName))];
    const cities = [...new Set(schools.map(s => s.city))];
    const districts = [...new Set(schools.map(s => s.district))];
    const courses = [...new Set(schools.map(s => s.affiliatedCourses))];
    return { boards, cities, districts, courses };
  }, [schools]);

  const filteredSchools = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    return schools.filter((school) => {
      const matchesSearch =
        search === "" ||
        school.schoolName.toLowerCase().includes(search) ||
        school.emailId.toLowerCase().includes(search) ||
        school.mobileNo.toString().includes(search);

      const matchesBoard = filters.boardName === "all" || school.boardName === filters.boardName;
      const matchesCity = filters.city === "all" || school.city === filters.city;
      const matchesDistrict = filters.district === "all" || school.district === filters.district;
      const matchesCourse = filters.course === "all" || school.affiliatedCourses === filters.course;

      return matchesSearch && matchesBoard && matchesCity && matchesDistrict && matchesCourse;
    });
  }, [searchTerm, filters, schools]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f3f4f6', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: '#111827' }}>
        School List ({filteredSchools.length})
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
          { label: 'Board', value: filters.boardName, options: filterOptions.boards, key: 'boardName' },
          { label: 'City', value: filters.city, options: filterOptions.cities, key: 'city' },
          { label: 'District', value: filters.district, options: filterOptions.districts, key: 'district' },
          { label: 'Courses', value: filters.course, options: filterOptions.courses, key: 'course' }
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
          <thead style={{ backgroundColor: '#3b82f6' }}>
            <tr>
              {['School Name', 'Principal', 'Mobile', 'Email', 'Address', 'City', 'District', 'PinCode', 'Board', 'Total Students', 'Courses'].map(header => (
                <th key={header} style={{ padding: '16px', fontSize: '14px', fontWeight: 600, color: '#1f2937', textAlign: 'left', whiteSpace: 'nowrap' }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredSchools.length > 0 ? (
              filteredSchools.map(school => (
                <tr key={school._id} style={{ borderBottom: '1px solid #e5e7eb', transition: 'all 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#edcd4c62'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <td style={{ padding: '14px', fontWeight: 500 }}>{school.schoolName}</td>
                  <td style={{ padding: '14px' }}>{school.principalName}</td>
                  <td style={{ padding: '14px' }}>{school.mobileNo}</td>
                  <td style={{ padding: '14px' }}>{school.emailId}</td>
                  <td style={{ padding: '14px' }}>{school.address}</td>
                  <td style={{ padding: '14px' }}>{school.city}</td>
                  <td style={{ padding: '14px' }}>{school.district}</td>
                  <td style={{ padding: '14px' }}>{school.pinCode}</td>
                  <td style={{ padding: '14px' }}>{school.boardName}</td>
                  <td style={{ padding: '14px' }}>{school.totalStudents}</td>
                  <td style={{ padding: '14px' }}>{school.affiliatedCourses}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" style={{ padding: '32px', textAlign: 'center', color: '#6b7280', fontSize: '15px' }}>
                  No schools found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
