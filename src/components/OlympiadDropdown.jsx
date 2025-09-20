import React, { useState } from 'react';

const OlympiadDropdown = () => {
  const [selectedOlympiad, setSelectedOlympiad] = useState('Science Olympiad');

  const olympiadData = {
    'Science Olympiad': ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    'Maths Olympiad': ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    'English Olympiad': ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    'GK Olympiad': ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    'Computer Olympiad': ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    'Drawing Olympiad': ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'],
    'Essay Olympiad': ['Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    'Social Study Olympiad': ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10']
  };

  const olympiadSubjects = Object.keys(olympiadData);

  return (
    <div style={{
      display: 'flex',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '600px',
      height: '400px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Left side - Olympiad subjects */}
      <div style={{
        width: '50%',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #ddd'
      }}>
        {olympiadSubjects.map((subject, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedOlympiad(subject)}
            style={{
              padding: '12px 16px',
              cursor: 'pointer',
              fontSize: '14px',
              color: selectedOlympiad === subject ? 'white' : '#333',
              backgroundColor: selectedOlympiad === subject ? '#333' : 'transparent',
              borderBottom: '1px solid #eee'
            }}
          >
            {subject}
          </div>
        ))}
      </div>

      {/* Right side - Classes */}
      <div style={{
        width: '50%',
        backgroundColor: 'white'
      }}>
        <div style={{
          padding: '12px 16px',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #eee',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          {selectedOlympiad}
        </div>
        
        {olympiadData[selectedOlympiad].map((className, idx) => (
          <div
            key={idx}
            style={{
              padding: '12px 16px',
              cursor: 'pointer',
              fontSize: '14px',
              color: '#333',
              borderBottom: '1px solid #f0f0f0'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f8f9fa';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
            }}
          >
            {className}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OlympiadDropdown;