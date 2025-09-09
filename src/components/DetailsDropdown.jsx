import React from 'react';
import { 
  DollarSign, 
  Calendar, 
  FileText, 
  Star, 
  BookOpen, 
  School, 
  UserCheck, 
  Trophy, 
  BarChart3, 
  GraduationCap, 
  Award, 
  Newspaper, 
  HelpCircle, 
  Video, 
  Phone,
  ClipboardList,
  ChevronRight
} from 'lucide-react';

const DetailsDropdown = ({ showDropdown, onItemSelect, onMouseEnter, onMouseLeave }) => {
  const olympiadDetailsItems = [
    { text: 'Olympiad Fee Structure', icon: DollarSign },
    { text: 'Olympiad Schedule', icon: Calendar },
    { text: 'Olympiad Exam Pattern', icon: FileText },
    { text: 'Olympiad Features & Benefits', icon: Star },
    { text: 'Olympiad Studies', icon: BookOpen },
    { text: 'Invite My School', icon: School },
    { text: 'Become Olympiad Cordinator', icon: UserCheck },
    { text: 'Olympiad Ranking', icon: Trophy },
    { text: 'Olympiad Results', icon: BarChart3 },
    { text: 'How To Prepare For Olympiad Exam', icon: GraduationCap },
    { text: 'Olympiad Awards & Prizes', icon: Award },
    { text: 'Blogs', icon: Newspaper },
    { text: 'FAQ', icon: HelpCircle },
    { text: 'Video Feedback', icon: Video },
    { text: 'Contact', icon: Phone }
  ];

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'absolute',
        top: '100%',
        left: '0',
        zIndex: 1000,
        backgroundColor: 'white',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        border: '1px solid #e2e8f0',
        minWidth: '500px',
        maxWidth: '600px',
        opacity: showDropdown ? 1 : 0,
        visibility: showDropdown ? 'visible' : 'hidden',
        transform: showDropdown ? 'translateY(0)' : 'translateY(-10px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        padding: '24px',
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
          <ClipboardList size={20} />
          Olympiad Details
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '8px',
          maxHeight: '400px',
          overflowY: 'auto',
          paddingRight: '8px'
        }}>
          {olympiadDetailsItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onItemSelect(item.text)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'transparent',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#3b82f615';
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.color = '#3b82f6';
                  e.target.style.transform = 'translateX(6px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = 'transparent';
                  e.target.style.color = '#475569';
                  e.target.style.transform = 'translateX(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <IconComponent size={16} />
                <span>{item.text}</span>
                <div style={{
                  marginLeft: 'auto',
                  color: '#94a3b8'
                }}>
                  <ChevronRight size={12} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsDropdown;