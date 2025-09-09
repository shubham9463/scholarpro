import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavigationTabs = ({ 
  activeTab, 
  onTabClick, 
  showOlympiadDropdown, 
  showDetailsDropdown, 
  showGalleryDropdown,
  onDropdownShow,
  onDropdownHide
}) => {
  const navigationTabs = [
    'OLYMPIADS',
    'OLYMPIAD DETAILS', 
    'GALLERY',
    'ANNUAL EXAM SCHEDULE'
  ];

  return (
    <div style={{ borderTop: '1px solid #f1f5f9', position: 'relative' }}>
      <div 
        className="nav-tabs-container"
        style={{ display: 'flex', position: 'relative', flexWrap: 'wrap' }}
      >
        {navigationTabs.map((tab, index) => (
          <div key={index} style={{ position: 'relative', flex: '1 1 auto' }}>
            <button
              onClick={() => onTabClick(tab)}
              onMouseEnter={() => {
                if (tab === 'OLYMPIADS') {
                  onDropdownShow('olympiad');
                } else if (tab === 'OLYMPIAD DETAILS') {
                  onDropdownShow('details');
                } else if (tab === 'GALLERY') {
                  onDropdownShow('gallery');
                }
              }}
              onMouseLeave={() => {
                if (tab === 'OLYMPIADS') {
                  onDropdownHide('olympiad');
                } else if (tab === 'OLYMPIAD DETAILS') {
                  onDropdownHide('details');
                } else if (tab === 'GALLERY') {
                  onDropdownHide('gallery');
                }
              }}
              className="nav-btn"
              style={{
                padding: '23px 28px',
                fontWeight: activeTab === tab ? '700' : '500',
                fontSize: '14px',
                border: 'none',
                backgroundColor: 'transparent',
                borderBottom: activeTab === tab ? '3px solid #f97316' : '3px solid transparent',
                color: activeTab === tab ? '#f97316' : '#64748b',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                overflow: 'visible',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                width: '100%',
                justifyContent: 'space-between'
              }}
            >
              {activeTab === tab && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.05))',
                  zIndex: -1
                }}></div>
              )}
              {tab}
              {(tab === 'OLYMPIADS' || tab === 'OLYMPIAD DETAILS' || tab === 'GALLERY') && (
                <ChevronDown 
                  size={12} 
                  style={{ 
                    transition: 'transform 0.3s ease',
                    transform: (tab === 'OLYMPIADS' && showOlympiadDropdown) || 
                              (tab === 'OLYMPIAD DETAILS' && showDetailsDropdown) || 
                              (tab === 'GALLERY' && showGalleryDropdown) ? 'rotate(180deg)' : 'rotate(0deg)'
                  }} 
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .nav-tabs-container {
            flex-direction: column;
          }

          .nav-tabs-container .nav-btn {
            font-size: 13px !important;
            padding: 16px 20px !important;
            text-align: left;
          }
        }

        @media (max-width: 425px) {
          .nav-tabs-container .nav-btn {
            font-size: 12px !important;
            padding: 14px 18px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NavigationTabs;
