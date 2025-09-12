import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, GraduationCap, School, Book } from 'lucide-react';

const RegistrationButtons = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const registrationButtons = [
    { text: 'Login', color: 'linear-gradient(135deg, #f97316, #ea580c)', icon: Lock },
    { text: 'Student Registration', color: 'linear-gradient(135deg, #9333ea, #7c3aed)', icon: GraduationCap, link: '/student-registration' },
    { text: 'School Registration', color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', icon: School, link: '/school-registration' },
    { text: 'Books', color: 'linear-gradient(135deg, #f97316, #fb923c)', icon: Book, link: '/books' },
  ];

  const loginOptions = [
    { text: 'Student Login', color: 'linear-gradient(135deg, #f97316, #ea580c)', link: '/student-login' },
    { text: 'School Login', color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', link: '/school-login' },
    { text: 'Coordinator Login', color: 'linear-gradient(135deg, #16a34a, #22c55e)', link: '/coordinator-login' },
  ];

  return (
    <div
      className="registration-buttons"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        position: 'relative',
      }}
    >
      {registrationButtons.map((button, index) => {
        const IconComponent = button.icon;

        if (button.text === 'Login') {
          return (
            <div key={index} style={{ position: 'relative', flex: '1 1 auto' }}>
              <button
                className="reg-btn"
                style={{
                  background: button.color,
                  color: 'white',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '13px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  width: '100%',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
                onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.02)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                }}
              >
                <IconComponent size={14} />
                <span>{button.text}</span>
              </button>

              {showLoginDropdown && (
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    left: 0,
                    width: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  }}
                >
                  {loginOptions.map((option, idx) => (
                    <Link
                      key={idx}
                      to={option.link}
                      style={{ textDecoration: 'none', width: '100%' }}
                      onClick={() => setShowLoginDropdown(false)}
                    >
                      <button
                        style={{
                          width: '100%',
                          padding: '12px 18px',
                          borderRadius: '12px',
                          border: 'none',
                          background: option.color,
                          color: '#fff',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          cursor: 'pointer',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px) scale(1.02)';
                          e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0) scale(1)';
                          e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                        }}
                      >
                        {option.text}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link to={button.link} key={index} style={{ textDecoration: 'none', flex: '1 1 auto' }}>
            <button
              className="reg-btn"
              style={{
                background: button.color,
                color: 'white',
                padding: '12px 18px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '13px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                width: '100%',
                justifyContent: 'center',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.02)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
              }}
            >
              <IconComponent size={14} />
              <span>{button.text}</span>
            </button>
          </Link>
        );
      })}

      {/* ✅ Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .registration-buttons {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }

          .registration-buttons .reg-btn {
            width: 100% !important;
            font-size: 14px !important;
            padding: 14px 16px !important;
          }
        }

        @media (max-width: 425px) {
          .registration-buttons .reg-btn {
            font-size: 12px !important;
            padding: 12px 14px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RegistrationButtons;
