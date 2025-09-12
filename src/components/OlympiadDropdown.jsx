import React from 'react';
import { Microscope, Calculator, BookOpen, Globe, Monitor, Palette, PenTool, Building, Trophy, Calendar, Clock, Target } from 'lucide-react';

const OlympiadDropdown = ({ 
  showDropdown, 
  selectedOlympiad, 
  onOlympiadSelect, 
  onClassSelect, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  const olympiadData = {
    'Science Olympiad': {
      icon: Microscope,
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
      color: '#10b981'
    },
    'Maths Olympiad': {
      icon: Calculator,
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
      color: '#3b82f6'
    },
    'English Olympiad': {
      icon: BookOpen,
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
      color: '#f97316'
    },
    'GK Olympiad': {
      icon: Globe,
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
      color: '#8b5cf6'
    },
    'Computer Olympiad': {
      icon: Monitor,
      classes: ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
      color: '#06b6d4'
    },
    'Drawing Olympiad': {
      icon: Palette,
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'],
      color: '#f59e0b'
    },
    'Essay Olympiad': {
      icon: PenTool,
      classes: ['Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
      color: '#ef4444'
    },
    'Social Study Olympiad': {
      icon: Building,
      classes: ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
      color: '#84cc16'
    }
  };

  const olympiadSubjects = Object.keys(olympiadData);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'absolute',
        top: '100%',
        left: '0',
        transform: 'translateX(40px)', // Shift dropdown right
        zIndex: 1000,
        backgroundColor: 'white',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        minWidth: '700px',
        opacity: showDropdown ? 1 : 0,
        visibility: showDropdown ? 'visible' : 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden'
      }}
    >
      <div style={{ display: 'flex' }}>
        {/* Left: Olympiad Subjects */}
        <div style={{ 
          flex: 1, 
          padding: '24px',
          borderRight: '1px solid #f1f5f9',
          background: 'linear-gradient(135deg, #ffffff, #f8fafc)'
        }}>
          <h3 style={{ 
            margin: '0 0 20px 0', 
            fontSize: '18px', 
            fontWeight: '800',
            color: '#1e293b',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Trophy size={20} />
            Olympiad Subjects
          </h3>

          {olympiadSubjects.map((subject, idx) => {
            const IconComponent = olympiadData[subject].icon;
            return (
              <div
                key={idx}
                onClick={() => onOlympiadSelect(subject)}
                style={{
                  padding: '14px 18px',
                  margin: '6px 0',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: selectedOlympiad === subject ? 'white' : '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: selectedOlympiad === subject ? olympiadData[subject].color : 'transparent',
                  border: selectedOlympiad === subject ? `2px solid ${olympiadData[subject].color}` : '2px solid transparent',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedOlympiad !== subject) {
                    e.target.style.backgroundColor = `${olympiadData[subject].color}15`;
                    e.target.style.borderColor = olympiadData[subject].color;
                    e.target.style.color = olympiadData[subject].color;
                    e.target.style.transform = 'translateX(6px)';
                    e.target.style.boxShadow = `0 8px 25px ${olympiadData[subject].color}30`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedOlympiad !== subject) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = 'transparent';
                    e.target.style.color = '#475569';
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {selectedOlympiad === subject && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${olympiadData[subject].color}, ${olympiadData[subject].color}dd)`,
                    zIndex: -1
                  }}></div>
                )}
                <IconComponent size={18} />
                <span>{subject}</span>
                {selectedOlympiad === subject && (
                  <div style={{
                    marginLeft: 'auto',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite'
                  }}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Class List */}
        <div style={{ 
          flex: 1, 
          padding: '24px',
          background: `linear-gradient(135deg, #f8fafc, ${olympiadData[selectedOlympiad].color}08)`
        }}>
          <h3 style={{ 
            margin: '0 0 20px 0', 
            fontSize: '18px', 
            fontWeight: '800',
            color: olympiadData[selectedOlympiad].color,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            {React.createElement(olympiadData[selectedOlympiad].icon, { size: 20 })}
            {selectedOlympiad}
          </h3>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
            gap: '10px' 
          }}>
            {olympiadData[selectedOlympiad].classes.map((className, idx) => (
              <div
                key={idx}
                onClick={() => onClassSelect(className)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#64748b',
                  backgroundColor: 'white',
                  border: '2px solid #e2e8f0',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = olympiadData[selectedOlympiad].color;
                  e.target.style.color = 'white';
                  e.target.style.borderColor = olympiadData[selectedOlympiad].color;
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = `0 8px 25px ${olympiadData[selectedOlympiad].color}40`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#64748b';
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {className}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '20px',
            padding: '16px',
            backgroundColor: 'white',
            borderRadius: '10px',
            border: `2px solid ${olympiadData[selectedOlympiad].color}20`,
            textAlign: 'center'
          }}>
            <p style={{
              margin: 0,
              fontSize: '13px',
              color: '#64748b',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={14} /> Available Classes: {olympiadData[selectedOlympiad].classes.length}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} /> Registration Open
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Target size={14} /> Click any class to register
              </span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default OlympiadDropdown;
