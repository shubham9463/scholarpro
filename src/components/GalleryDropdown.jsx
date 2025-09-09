import React from 'react';
import { 
  Crown, 
  Image, 
  GraduationCap, 
  PartyPopper, 
  Tv, 
  Video, 
  Palette, 
  TrendingUp, 
  Building2, 
  FileCheck,
  Images,
  ChevronRight
} from 'lucide-react';

const GalleryDropdown = ({ showDropdown, onItemSelect, onMouseEnter, onMouseLeave }) => {
  const galleryItems = [
    { text: 'Olympiad Winners', icon: Crown },
    { text: 'Olympiad Winners Gallery', icon: Image },
    { text: 'Olympiad School Function', icon: GraduationCap },
    { text: 'Annual Award Function', icon: PartyPopper },
    { text: 'Olympiad Media Coverage', icon: Tv },
    { text: 'Olympiad Video Coverage', icon: Video },
    { text: 'Olympiad Best Drawing', icon: Palette },
    { text: 'Monthly Olympiad Toppers', icon: TrendingUp },
    { text: 'Olympiad Office Work Culture', icon: Building2 },
    { text: 'Olympiad Guidelines', icon: FileCheck }
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
        minWidth: '450px',
        maxWidth: '550px',
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
          <Images size={20} />
          Gallery
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '8px',
          maxHeight: '350px',
          overflowY: 'auto',
          paddingRight: '8px'
        }}>
          {galleryItems.map((item, idx) => {
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
                  e.currentTarget.style.backgroundColor = '#8b5cf615';
                  e.currentTarget.style.borderColor = '#8b5cf6';
                  e.currentTarget.style.color = '#8b5cf6';
                  e.currentTarget.style.transform = 'translateX(6px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = '#475569';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
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

export default GalleryDropdown;