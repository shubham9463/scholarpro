// import React, { useState, useRef } from 'react';

// const Navbar = () => {
//   const [activeTab, setActiveTab] = useState('OLYMPIADS');
//   const [showOlympiadDropdown, setShowOlympiadDropdown] = useState(false);
//   const [showDetailsDropdown, setShowDetailsDropdown] = useState(false);
//   const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);
//   const [selectedOlympiad, setSelectedOlympiad] = useState('English Olympiad');
  
//   // Refs for timeout management
//   const olympiadTimeoutRef = useRef(null);
//   const detailsTimeoutRef = useRef(null);
//   const galleryTimeoutRef = useRef(null);

//   const navigationTabs = [
//     'OLYMPIADS',
//     'OLYMPIAD DETAILS', 
//     'GALLERY',
//     'ANNUAL EXAM SCHEDULE'
//   ];

//   const registrationButtons = [
//     { text: 'Login', color: 'linear-gradient(135deg, #f97316, #ea580c)', icon: '🔐' },
//     { text: 'Student Registration', color: 'linear-gradient(135deg, #9333ea, #7c3aed)', icon: '👨‍🎓' },
//     { text: 'School Registration', color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', icon: '🏫' },
//     { text: 'Books', color: 'linear-gradient(135deg, #f97316, #fb923c)', icon: '📚' },
//     { text: 'Little Champ Registration', color: 'linear-gradient(135deg, #16a34a, #22c55e)', icon: '🏆' }
//   ];

//   const olympiadData = {
//     'Science Olympiad': {
//       icon: '🔬',
//       classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
//       color: '#10b981'
//     },
//     'Maths Olympiad': {
//       icon: '🧮',
//       classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
//       color: '#3b82f6'
//     },
//     'English Olympiad': {
//       icon: '📚',
//       classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
//       color: '#f97316'
//     },
//     'GK Olympiad': {
//       icon: '🌍',
//       classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
//       color: '#8b5cf6'
//     },
//     'Computer Olympiad': {
//       icon: '💻',
//       classes: ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
//       color: '#06b6d4'
//     },
//     'Drawing Olympiad': {
//       icon: '🎨',
//       classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'],
//       color: '#f59e0b'
//     },
//     'Essay Olympiad': {
//       icon: '✍️',
//       classes: ['Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
//       color: '#ef4444'
//     },
//     'Social Study Olympiad': {
//       icon: '🏛️',
//       classes: ['Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
//       color: '#84cc16'
//     }
//   };

//   const olympiadDetailsItems = [
//     { text: 'Olympiad Fee Structure', icon: '💰' },
//     { text: 'Olympiad Schedule', icon: '📅' },
//     { text: 'Olympiad Exam Pattern', icon: '📝' },
//     { text: 'Olympiad Features & Benefits', icon: '⭐' },
//     { text: 'Olympiad Studies', icon: '📖' },
//     { text: 'Invite My School', icon: '🏫' },
//     { text: 'Become Olympiad Cordinator', icon: '👨‍💼' },
//     { text: 'Olympiad Ranking', icon: '🏆' },
//     { text: 'Olympiad Results', icon: '📊' },
//     { text: 'How To Prepare For Olympiad Exam', icon: '📚' },
//     { text: 'Olympiad Awards & Prizes', icon: '🥇' },
//     { text: 'Blogs', icon: '📰' },
//     { text: 'FAQ', icon: '❓' },
//     { text: 'Video Feedback', icon: '📹' },
//     { text: 'Contact', icon: '📞' }
//   ];

//   const galleryItems = [
//     { text: 'Olympiad Winners', icon: '👑' },
//     { text: 'Olympiad Winners Gallery', icon: '🖼️' },
//     { text: 'Olympiad School Function', icon: '🎓' },
//     { text: 'Annual Award Function', icon: '🎉' },
//     { text: 'Olympiad Media Coverage', icon: '📺' },
//     { text: 'Olympiad Video Coverage', icon: '🎬' },
//     { text: 'Olympiad Best Drawing', icon: '🎨' },
//     { text: 'Monthly Olympiad Toppers', icon: '📈' },
//     { text: 'Olympiad Office Work Culture', icon: '🏢' },
//     { text: 'Olympiad Guidelines', icon: '📋' }
//   ];

//   const olympiadSubjects = Object.keys(olympiadData);

//   // Improved dropdown handlers with proper timeout management
//   const handleDropdownShow = (dropdownType) => {
//     // Clear any existing timeouts
//     if (olympiadTimeoutRef.current) clearTimeout(olympiadTimeoutRef.current);
//     if (detailsTimeoutRef.current) clearTimeout(detailsTimeoutRef.current);
//     if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);

//     // Close other dropdowns immediately
//     if (dropdownType === 'olympiad') {
//       setShowDetailsDropdown(false);
//       setShowGalleryDropdown(false);
//       setShowOlympiadDropdown(true);
//     } else if (dropdownType === 'details') {
//       setShowOlympiadDropdown(false);
//       setShowGalleryDropdown(false);
//       setShowDetailsDropdown(true);
//     } else if (dropdownType === 'gallery') {
//       setShowOlympiadDropdown(false);
//       setShowDetailsDropdown(false);
//       setShowGalleryDropdown(true);
//     }
//   };

//   const handleDropdownHide = (dropdownType) => {
//     const hideDropdown = () => {
//       if (dropdownType === 'olympiad') {
//         setShowOlympiadDropdown(false);
//       } else if (dropdownType === 'details') {
//         setShowDetailsDropdown(false);
//       } else if (dropdownType === 'gallery') {
//         setShowGalleryDropdown(false);
//       }
//     };

//     // Use timeout to allow smooth transitions
//     if (dropdownType === 'olympiad') {
//       olympiadTimeoutRef.current = setTimeout(hideDropdown, 150);
//     } else if (dropdownType === 'details') {
//       detailsTimeoutRef.current = setTimeout(hideDropdown, 150);
//     } else if (dropdownType === 'gallery') {
//       galleryTimeoutRef.current = setTimeout(hideDropdown, 150);
//     }
//   };

//   const handleOlympiadSelect = (subject) => {
//     setSelectedOlympiad(subject);
//   };

//   const handleClassSelect = (className) => {
//     console.log(`Selected: ${selectedOlympiad} - ${className}`);
//     setShowOlympiadDropdown(false);
//     // Add your navigation logic here
//   };

//   const handleDetailsItemSelect = (item) => {
//     console.log(`Selected Details: ${item}`);
//     setShowDetailsDropdown(false);
//     // Add your navigation logic here
//   };

//   const handleGalleryItemSelect = (item) => {
//     console.log(`Selected Gallery: ${item}`);
//     setShowGalleryDropdown(false);
//     // Add your navigation logic here
//   };

//   return (
//     <div style={{ width: '100%', backgroundColor: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
//       {/* Top Bar */}
//       <div style={{ 
//         background: 'linear-gradient(135deg, #1f2937, #374151)',
//         color: 'white', 
//         padding: '10px 16px',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         {/* Animated background pattern */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)',
//           animation: 'float 6s ease-in-out infinite'
//         }}></div>
        
//         <div style={{ 
//           maxWidth: '1280px', 
//           margin: '0 auto', 
//           display: 'flex', 
//           justifyContent: 'flex-start', 
//           alignItems: 'center', 
//           fontSize: '14px',
//           position: 'relative',
//           zIndex: 1
//         }}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
//             <div style={{ 
//               display: 'flex', 
//               alignItems: 'center', 
//               gap: '8px',
//               transition: 'all 0.3s ease',
//               cursor: 'pointer',
//               padding: '4px 8px',
//               borderRadius: '6px'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//               e.currentTarget.style.transform = 'translateY(-1px)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'transparent';
//               e.currentTarget.style.transform = 'translateY(0)';
//             }}>
//               <span style={{ fontSize: '16px' }}>📞</span>
//               <span style={{ fontWeight: '500' }}>1800 266 9192</span>
//             </div>
            
//             <div style={{ 
//               display: 'flex', 
//               alignItems: 'center', 
//               gap: '8px',
//               transition: 'all 0.3s ease',
//               cursor: 'pointer',
//               padding: '4px 8px',
//               borderRadius: '6px'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//               e.currentTarget.style.transform = 'translateY(-1px)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'transparent';
//               e.currentTarget.style.transform = 'translateY(0)';
//             }}>
//               <span style={{ fontSize: '16px' }}>✉️</span>
//               <span style={{ fontWeight: '500' }}>support@indiantalent.org</span>
//             </div>
            
//             <div style={{ 
//               display: 'flex', 
//               alignItems: 'center', 
//               gap: '8px',
//               transition: 'all 0.3s ease',
//               cursor: 'pointer',
//               padding: '4px 8px',
//               borderRadius: '6px'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//               e.currentTarget.style.transform = 'translateY(-1px)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'transparent';
//               e.currentTarget.style.transform = 'translateY(0)';
//             }}>
//               <div style={{ 
//                 width: '28px', 
//                 height: '28px', 
//                 background: 'linear-gradient(135deg, #dc2626, #ef4444)',
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center', 
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 8px rgba(220, 38, 38, 0.3)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px' }}>▶</span>
//               </div>
//               <span style={{ fontWeight: '500' }}>YouTube</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <div style={{ 
//         backgroundColor: 'white', 
//         boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)',
//         borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
//       }}>
//         <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' }}>
            
//             {/* Enhanced Logo Section */}
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <div style={{ 
//                 background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
//                 border: '2px solid #e2e8f0',
//                 padding: '16px 20px',
//                 borderRadius: '16px',
//                 boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
//                 transition: 'all 0.3s ease',
//                 cursor: 'pointer'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-2px)';
//                 e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
//               }}>
//                 <div style={{ textAlign: 'left' }}>
//                   <div style={{ 
//                     fontSize: '28px', 
//                     fontWeight: '800', 
//                     background: 'linear-gradient(135deg, #f97316, #ea580c)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text',
//                     letterSpacing: '-0.5px'
//                   }}>ITO</div>
//                   <div style={{ 
//                     fontSize: '11px', 
//                     color: '#64748b',
//                     fontWeight: '600',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.5px',
//                     marginTop: '2px'
//                   }}>World's No. 1</div>
//                   <div style={{ 
//                     fontSize: '13px', 
//                     fontWeight: '700', 
//                     color: '#1e293b',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.25px',
//                     marginTop: '4px'
//                   }}>INDIAN TALENT OLYMPIAD</div>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Registration Buttons */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//               {registrationButtons.map((button, index) => (
//                 <button
//                   key={index}
//                   style={{
//                     background: button.color,
//                     color: 'white',
//                     padding: '12px 18px',
//                     borderRadius: '12px',
//                     fontWeight: '600',
//                     fontSize: '13px',
//                     border: 'none',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '6px',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.5px'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = 'translateY(-3px) scale(1.02)';
//                     e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = 'translateY(0) scale(1)';
//                     e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
//                   }}
//                 >
//                   <span style={{ fontSize: '14px' }}>{button.icon}</span>
//                   <span>{button.text}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Enhanced Navigation Tabs */}
//           <div style={{ borderTop: '1px solid #f1f5f9', position: 'relative' }}>
//             <div style={{ display: 'flex', position: 'relative' }}>
//               {navigationTabs.map((tab, index) => (
//                 <div key={index} style={{ position: 'relative' }}>
//                   <button
//                     onClick={() => setActiveTab(tab)}
//                     onMouseEnter={() => {
//                       if (tab === 'OLYMPIADS') {
//                         handleDropdownShow('olympiad');
//                       } else if (tab === 'OLYMPIAD DETAILS') {
//                         handleDropdownShow('details');
//                       } else if (tab === 'GALLERY') {
//                         handleDropdownShow('gallery');
//                       }
//                     }}
//                     onMouseLeave={() => {
//                       if (tab === 'OLYMPIADS') {
//                         handleDropdownHide('olympiad');
//                       } else if (tab === 'OLYMPIAD DETAILS') {
//                         handleDropdownHide('details');
//                       } else if (tab === 'GALLERY') {
//                         handleDropdownHide('gallery');
//                       }
//                     }}
//                     style={{
//                       padding: '20px 28px',
//                       fontWeight: activeTab === tab ? '700' : '500',
//                       fontSize: '14px',
//                       border: 'none',
//                       backgroundColor: 'transparent',
//                       borderBottom: activeTab === tab ? '3px solid #f97316' : '3px solid transparent',
//                       color: activeTab === tab ? '#f97316' : '#64748b',
//                       cursor: 'pointer',
//                       transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                       position: 'relative',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px',
//                       overflow: 'visible',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '6px'
//                     }}
//                   >
//                     {activeTab === tab && (
//                       <div style={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(234, 88, 12, 0.05))',
//                         zIndex: -1
//                       }}></div>
//                     )}
//                     {tab}
//                     {(tab === 'OLYMPIADS' || tab === 'OLYMPIAD DETAILS' || tab === 'GALLERY') && (
//                       <span style={{ 
//                         fontSize: '10px', 
//                         marginLeft: '4px', 
//                         transition: 'transform 0.3s ease',
//                         transform: (tab === 'OLYMPIADS' && showOlympiadDropdown) || 
//                                   (tab === 'OLYMPIAD DETAILS' && showDetailsDropdown) || 
//                                   (tab === 'GALLERY' && showGalleryDropdown) ? 'rotate(180deg)' : 'rotate(0deg)'
//                       }}>▼</span>
//                     )}
//                   </button>

//                   {/* Dynamic Olympiad Dropdown Menu */}
//                   {tab === 'OLYMPIADS' && (
//                     <div
//                       onMouseEnter={() => handleDropdownShow('olympiad')}
//                       onMouseLeave={() => handleDropdownHide('olympiad')}
//                       style={{
//                         position: 'absolute',
//                         top: '100%',
//                         left: '0',
//                         zIndex: 1000,
//                         backgroundColor: 'white',
//                         boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)',
//                         borderRadius: '12px',
//                         border: '1px solid #e2e8f0',
//                         minWidth: '700px',
//                         opacity: showOlympiadDropdown ? 1 : 0,
//                         visibility: showOlympiadDropdown ? 'visible' : 'hidden',
//                         transform: showOlympiadDropdown ? 'translateY(0)' : 'translateY(-10px)',
//                         transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                         overflow: 'hidden'
//                       }}
//                     >
//                       <div style={{ display: 'flex' }}>
//                         {/* Left Side - Olympiad Subjects */}
//                         <div style={{ 
//                           flex: 1, 
//                           padding: '24px',
//                           borderRight: '1px solid #f1f5f9',
//                           background: 'linear-gradient(135deg, #ffffff, #f8fafc)'
//                         }}>
//                           <h3 style={{ 
//                             margin: '0 0 20px 0', 
//                             fontSize: '18px', 
//                             fontWeight: '800',
//                             color: '#1e293b',
//                             textTransform: 'uppercase',
//                             letterSpacing: '0.5px',
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '8px'
//                           }}>
//                             <span style={{ fontSize: '20px' }}>🏆</span>
//                             Olympiad Subjects
//                           </h3>
//                           {olympiadSubjects.map((subject, idx) => (
//                             <div
//                               key={idx}
//                               onClick={() => handleOlympiadSelect(subject)}
//                               style={{
//                                 padding: '14px 18px',
//                                 margin: '6px 0',
//                                 borderRadius: '10px',
//                                 cursor: 'pointer',
//                                 transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                                 fontSize: '15px',
//                                 fontWeight: '600',
//                                 color: selectedOlympiad === subject ? 'white' : '#475569',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: '12px',
//                                 backgroundColor: selectedOlympiad === subject ? olympiadData[subject].color : 'transparent',
//                                 border: selectedOlympiad === subject ? `2px solid ${olympiadData[subject].color}` : '2px solid transparent',
//                                 position: 'relative',
//                                 overflow: 'hidden'
//                               }}
//                               onMouseEnter={(e) => {
//                                 if (selectedOlympiad !== subject) {
//                                   e.target.style.backgroundColor = `${olympiadData[subject].color}15`;
//                                   e.target.style.borderColor = olympiadData[subject].color;
//                                   e.target.style.color = olympiadData[subject].color;
//                                   e.target.style.transform = 'translateX(6px)';
//                                 }
//                                 e.target.style.boxShadow = `0 8px 25px ${olympiadData[subject].color}30`;
//                               }}
//                               onMouseLeave={(e) => {
//                                 if (selectedOlympiad !== subject) {
//                                   e.target.style.backgroundColor = 'transparent';
//                                   e.target.style.borderColor = 'transparent';
//                                   e.target.style.color = '#475569';
//                                   e.target.style.transform = 'translateX(0)';
//                                   e.target.style.boxShadow = 'none';
//                                 }
//                               }}
//                             >
//                               {selectedOlympiad === subject && (
//                                 <div style={{
//                                   position: 'absolute',
//                                   top: 0,
//                                   left: 0,
//                                   right: 0,
//                                   bottom: 0,
//                                   background: `linear-gradient(135deg, ${olympiadData[subject].color}, ${olympiadData[subject].color}dd)`,
//                                   zIndex: -1
//                                 }}></div>
//                               )}
//                               <span style={{ fontSize: '18px' }}>{olympiadData[subject].icon}</span>
//                               <span>{subject}</span>
//                               {selectedOlympiad === subject && (
//                                 <div style={{
//                                   marginLeft: 'auto',
//                                   width: '8px',
//                                   height: '8px',
//                                   backgroundColor: 'white',
//                                   borderRadius: '50%',
//                                   animation: 'pulse 2s infinite'
//                                 }}></div>
//                               )}
//                             </div>
//                           ))}
//                         </div>

//                         {/* Right Side - Dynamic Class Selection */}
//                         <div style={{ 
//                           flex: 1, 
//                           padding: '24px',
//                           backgroundColor: '#f8fafc',
//                           background: `linear-gradient(135deg, #f8fafc, ${olympiadData[selectedOlympiad].color}08)`
//                         }}>
//                           <h3 style={{ 
//                             margin: '0 0 20px 0', 
//                             fontSize: '18px', 
//                             fontWeight: '800',
//                             color: olympiadData[selectedOlympiad].color,
//                             textTransform: 'uppercase',
//                             letterSpacing: '0.5px',
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '8px'
//                           }}>
//                             <span style={{ fontSize: '20px' }}>{olympiadData[selectedOlympiad].icon}</span>
//                             {selectedOlympiad}
//                           </h3>
//                           <div style={{ 
//                             display: 'grid', 
//                             gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
//                             gap: '10px' 
//                           }}>
//                             {olympiadData[selectedOlympiad].classes.map((className, idx) => (
//                               <div
//                                 key={idx}
//                                 onClick={() => handleClassSelect(className)}
//                                 style={{
//                                   padding: '12px 16px',
//                                   borderRadius: '10px',
//                                   cursor: 'pointer',
//                                   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                                   fontSize: '14px',
//                                   fontWeight: '600',
//                                   color: '#64748b',
//                                   backgroundColor: 'white',
//                                   border: '2px solid #e2e8f0',
//                                   textAlign: 'center',
//                                   position: 'relative',
//                                   overflow: 'hidden'
//                                 }}
//                                 onMouseEnter={(e) => {
//                                   e.target.style.backgroundColor = olympiadData[selectedOlympiad].color;
//                                   e.target.style.color = 'white';
//                                   e.target.style.borderColor = olympiadData[selectedOlympiad].color;
//                                   e.target.style.transform = 'translateY(-3px) scale(1.05)';
//                                   e.target.style.boxShadow = `0 8px 25px ${olympiadData[selectedOlympiad].color}40`;
//                                 }}
//                                 onMouseLeave={(e) => {
//                                   e.target.style.backgroundColor = 'white';
//                                   e.target.style.color = '#64748b';
//                                   e.target.style.borderColor = '#e2e8f0';
//                                   e.target.style.transform = 'translateY(0) scale(1)';
//                                   e.target.style.boxShadow = 'none';
//                                 }}
//                               >
//                                 {className}
//                               </div>
//                             ))}
//                           </div>
                          
//                           {/* Additional Info Section */}
//                           <div style={{
//                             marginTop: '20px',
//                             padding: '16px',
//                             backgroundColor: 'white',
//                             borderRadius: '10px',
//                             border: `2px solid ${olympiadData[selectedOlympiad].color}20`,
//                             textAlign: 'center'
//                           }}>
//                             <p style={{
//                               margin: 0,
//                               fontSize: '13px',
//                               color: '#64748b',
//                               fontWeight: '500'
//                             }}>
//                               📅 Available Classes: {olympiadData[selectedOlympiad].classes.length} | 
//                               ⏰ Registration Open | 
//                               🎯 Click any class to register
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Olympiad Details Dropdown Menu */}
//                   {tab === 'OLYMPIAD DETAILS' && (
//                     <div
//                       onMouseEnter={() => handleDropdownShow('details')}
//                       onMouseLeave={() => handleDropdownHide('details')}
//                       style={{
//                         position: 'absolute',
//                         top: '100%',
//                         left: '0',
//                         zIndex: 1000,
//                         backgroundColor: 'white',
//                         boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)',
//                         borderRadius: '12px',
//                         border: '1px solid #e2e8f0',
//                         minWidth: '500px',
//                         maxWidth: '600px',
//                         opacity: showDetailsDropdown ? 1 : 0,
//                         visibility: showDetailsDropdown ? 'visible' : 'hidden',
//                         transform: showDetailsDropdown ? 'translateY(0)' : 'translateY(-10px)',
//                         transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                         overflow: 'hidden'
//                       }}
//                     >
//                       <div style={{ 
//                         padding: '24px',
//                         background: 'linear-gradient(135deg, #ffffff, #f8fafc)'
//                       }}>
//                         <h3 style={{ 
//                           margin: '0 0 20px 0', 
//                           fontSize: '18px', 
//                           fontWeight: '800',
//                           color: '#1e293b',
//                           textTransform: 'uppercase',
//                           letterSpacing: '0.5px',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: '8px'
//                         }}>
//                           <span style={{ fontSize: '20px' }}>📋</span>
//                           Olympiad Details
//                         </h3>
//                         <div style={{ 
//                           display: 'grid', 
//                           gridTemplateColumns: '1fr', 
//                           gap: '8px',
//                           maxHeight: '400px',
//                           overflowY: 'auto',
//                           paddingRight: '8px'
//                         }}>
//                           {olympiadDetailsItems.map((item, idx) => (
//                             <div
//                               key={idx}
//                               onClick={() => handleDetailsItemSelect(item.text)}
//                               style={{
//                                 padding: '12px 16px',
//                                 borderRadius: '10px',
//                                 cursor: 'pointer',
//                                 transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                                 fontSize: '14px',
//                                 fontWeight: '500',
//                                 color: '#475569',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: '12px',
//                                 backgroundColor: 'transparent',
//                                 border: '2px solid transparent'
//                               }}
//                               onMouseEnter={(e) => {
//                                 e.target.style.backgroundColor = '#3b82f615';
//                                 e.target.style.borderColor = '#3b82f6';
//                                 e.target.style.color = '#3b82f6';
//                                 e.target.style.transform = 'translateX(6px)';
//                                 e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.15)';
//                               }}
//                               onMouseLeave={(e) => {
//                                 e.target.style.backgroundColor = 'transparent';
//                                 e.target.style.borderColor = 'transparent';
//                                 e.target.style.color = '#475569';
//                                 e.target.style.transform = 'translateX(0)';
//                                 e.target.style.boxShadow = 'none';
//                               }}
//                             >
//                               <span style={{ fontSize: '16px' }}>{item.icon}</span>
//                               <span>{item.text}</span>
//                               <div style={{
//                                 marginLeft: 'auto',
//                                 fontSize: '12px',
//                                 color: '#94a3b8'
//                               }}>→</div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}

//               {/* Gallery Dropdown Menu */}
// {tab === 'GALLERY' && (
//   <div
//     onMouseEnter={() => handleDropdownShow('gallery')}
//     onMouseLeave={() => handleDropdownHide('gallery')}
//     style={{
//       position: 'absolute',
//       top: '100%',
//       left: '0',
//       zIndex: 1000,
//       backgroundColor: 'white',
//       boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.1)',
//       borderRadius: '12px',
//       border: '1px solid #e2e8f0',
//       minWidth: '450px',
//       maxWidth: '550px',
//       opacity: showGalleryDropdown ? 1 : 0,
//       visibility: showGalleryDropdown ? 'visible' : 'hidden',
//       transform: showGalleryDropdown ? 'translateY(0)' : 'translateY(-10px)',
//       transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//       overflow: 'hidden'
//     }}
//   >
//     <div style={{ 
//       padding: '24px',
//       background: 'linear-gradient(135deg, #ffffff, #f8fafc)'
//     }}>
//       <h3 style={{ 
//         margin: '0 0 20px 0', 
//         fontSize: '18px', 
//         fontWeight: '800',
//         color: '#1e293b',
//         textTransform: 'uppercase',
//         letterSpacing: '0.5px',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '8px'
//       }}>
//         <span style={{ fontSize: '20px' }}>🖼️</span>
//         Gallery
//       </h3>
//       <div style={{ 
//         display: 'grid', 
//         gridTemplateColumns: '1fr', 
//         gap: '8px',
//         maxHeight: '350px',
//         overflowY: 'auto',
//         paddingRight: '8px'
//       }}>
//         {galleryItems.map((item, idx) => (
//           <div
//             key={idx}
//             onClick={() => handleGalleryItemSelect(item.text)}
//             style={{
//               padding: '12px 16px',
//               borderRadius: '10px',
//               cursor: 'pointer',
//               transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#475569',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '12px',
//               backgroundColor: 'transparent',
//               border: '2px solid transparent'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = '#8b5cf615';
//               e.currentTarget.style.borderColor = '#8b5cf6';
//               e.currentTarget.style.color = '#8b5cf6';
//               e.currentTarget.style.transform = 'translateX(6px)';
//               e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.15)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'transparent';
//               e.currentTarget.style.borderColor = 'transparent';
//               e.currentTarget.style.color = '#475569';
//               e.currentTarget.style.transform = 'translateX(0)';
//               e.currentTarget.style.boxShadow = 'none';
//             }}
//           >
//             <span style={{ fontSize: '16px' }}>{item.icon}</span>
//             <span>{item.text}</span>
//             <div style={{
//               marginLeft: 'auto',
//               fontSize: '12px',
//               color: '#94a3b8'
//             }}>→</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(1deg); }
//         }
        
//         @keyframes shimmer {
//           0% { background-position: -200% 0; }
//           100% { background-position: 200% 0; }
//         }
        
//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.7; transform: scale(1.1); }
//         }
//       `}</style>
//     </div>
//   );
// };

//     export default Navbar;