import React from 'react';
import { Play } from 'lucide-react'; // ✅ or any icon lib you are using

const TopBar = () => {
  const contactItems = [
    { icon: '📞', text: '1800 266 9192' },
    { icon: '✉️', text: 'support@indiantalent.org' }
  ];

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #1f2937, #374151)',
      color: 'white', 
      padding: '10px 16px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background pattern */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        fontSize: '14px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {contactItems.map((item, index) => (
            <div 
              key={index}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '6px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>{item.icon}</span> {/* ✅ just render emoji */}
              <span style={{ fontWeight: '500' }}>{item.text}</span>
            </div>
          ))}
          
          {/* YouTube Button */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '6px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{ 
              width: '28px', 
              height: '28px', 
              background: 'linear-gradient(135deg, #dc2626, #ef4444)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(220, 38, 38, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              <Play size={16} color="white" /> {/* ✅ fixed */}
            </div>
            <span style={{ fontWeight: '500' }}>YouTube</span>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
};

export default TopBar;
