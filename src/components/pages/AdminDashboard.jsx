import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ScholarshipSidebar from '../dashboard/Sidebar.jsx';
import StudentCardTable from '../dashboard/Students.jsx';
import SchoolTable from '../dashboard/SchoolTable.jsx'; // <-- Import SchoolTable
import ImageUploader from '../dashboard/ImageUploader.jsx';
import EnquiriesTable from '../Dashboard/Enquiries.jsx';
import Dash from '../Dashboard/Dash.jsx';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState('dash');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    setTab(tabFromUrl || 'dash');
  }, [location.search]);

  const handleTabChange = (newTab) => {
    setTab(newTab);
    navigate(`?tab=${newTab}`, { replace: true });
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        marginTop: '10px',
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: '260px',
          backgroundColor: 'white',
          borderRight: '1px solid #e5e7eb',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        }}
      >
        <ScholarshipSidebar activeTab={tab} onTabChange={handleTabChange} />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: '16px',
          overflow: 'auto',
        }}
      >
        {tab === 'dash' && <Dash />}
        {tab === 'students' && <StudentCardTable />}
        {tab === 'school' && <SchoolTable />} {/* <-- Added School tab */}
        {tab === 'upload' && <ImageUploader />}
        {tab === 'banner' && <ImageUploader />}
        {tab === 'enquiries' && <EnquiriesTable />}
      </div>
    </div>
  );
}
