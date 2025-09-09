import React from 'react';
import { Lock, GraduationCap, School, Book } from 'lucide-react';

const RegistrationButtons = () => {
  const registrationButtons = [
    { text: 'Login', color: 'linear-gradient(135deg, #f97316, #ea580c)', icon: Lock },
    { text: 'Student Registration', color: 'linear-gradient(135deg, #9333ea, #7c3aed)', icon: GraduationCap },
    { text: 'School Registration', color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', icon: School },
    { text: 'Books', color: 'linear-gradient(135deg, #f97316, #fb923c)', icon: Book },
  ];

  return (
    <div
      className="registration-buttons"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
      }}
    >
      {registrationButtons.map((button, index) => {
        const IconComponent = button.icon;
        return (
          <button
            key={index}
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
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              width: 'auto',
              flex: '1 1 auto',
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
