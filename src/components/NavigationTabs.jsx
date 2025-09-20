import React, { useState } from 'react';

const NavigationTabs = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="main-menu">
      <style jsx>{`
        .main-menu {
          position: relative;
          z-index: 999;
        }
        
        .navbar-header {
          display: none;
        }
        
        .navbar-collapse {
          display: block !important;
        }
        
        .navigation {
          display: flex;
          list-style: none;
           justify-content: flex-end;
          margin: 0;
          padding: 0;
          background: #fff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .navigation > li {
          position: relative;
          margin: 0;
        }
        
        .navigation > li > a {
          display: block;
          padding: 15px 20px;
          color: #333;
          text-decoration: none;
          font-weight: 500;
          border-right: 1px solid #eee;
          transition: all 0.3s ease;
        }
        
        .navigation > li > a:hover {
          background: #f8f9fa;
          color: #007bff;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 250px;
          font-size: 13px;
          font-weight: 500;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border: 1px solid #eee;
          display: none;
          z-index: 1000;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .dropdown:hover .dropdown-menu {
          display: block;
          will-change: transform;
        }
        
        .dropdown-menu li {
          position: relative;
        }
        
        .dropdown-menu li a {
          display: block;
          padding:5.5px ;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }
        
        .dropdown-menu li a:hover {
          background: #f8f9fa;
          color: #007bff;
        }
        
        .dropdown-menu .dropdown > ul {
          position: absolute;
          top: 0;
          left: 100%;
          min-width: 200px;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border: 1px solid #eee;
          display: none;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .dropdown-menu .dropdown:hover > ul {
          display: block;
        }
        
        .clearfix::after {
          content: "";
          display: table;
          clear: both;
        }
        
        @media (max-width: 768px) {
          .navbar-header {
            display: block;
            padding: 10px;
            background: #fff;
            border-bottom: 1px solid #eee;
          }
          
          .navbar-toggle {
            background: none;
            border: 1px solid #ccc;
            padding: 8px 12px;
            border-radius: 4px;
          }
          
          .icon-bar {
            display: block;
            width: 22px;
            height: 2px;
            background: #333;
            margin: 4px 0;
            border-radius: 1px;
          }
          
          .navbar-collapse {
            display: none;
          }
          
          .navbar-collapse.show {
            display: block !important;
          }
          
          .navigation {
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #fff;
            border-top: 1px solid #eee;
          }
          
          .navigation > li > a {
            border-right: none;
            border-bottom: 1px solid #eee;
          }
          
          .dropdown-menu {
            position: static;
            display: none;
            box-shadow: none;
            border: none;
            background: #f8f9fa;
          }
          
          .dropdown:hover .dropdown-menu {
            display: block;
          }
          
          .dropdown-menu .dropdown > ul {
            position: static;
            display: none;
            background: #f0f0f0;
          }
        }
        
        .button-gradient {
          transform: translateZ(0);
          opacity: 1;
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          text-decoration: none;
        }
        
        .button-gradient.animate {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
      `}</style>
      
      <div className="navbar-header">
        <button 
          type="button" 
          className="navbar-toggle" 
          onClick={toggleNav}
          aria-label="Navigation"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>

      <div className={`navbar-collapse collapse clearfix ${!isNavCollapsed ? 'show' : ''}`}>
        <ul className="navigation clearfix update_nav">
          
          {/* Olympiads Dropdown */}
          <li className="dropdown">
            <a href="#">Olympiads</a>
            <ul className="dropdown-menu">
              
              {/* Science Olympiad */}
              <li className="dropdown">
                <a href="https://www.indiantalent.org/international-science-olympiad" target="">Science Olympiad</a>
                <ul>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad" target="">Science Olympiad</a></li>
                  <li><a href="http://localhost:5173/student-registration" target="">Class 1</a></li>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad/class-2" target="">Class 2</a></li>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad/class-3" target="">Class 3</a></li>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad/class-4" target="">Class 4</a></li>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad/class-5" target="">Class 5</a></li>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad/class-6" target="">Class 6</a></li>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad/class-7" target="">Class 7</a></li>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad/class-8" target="">Class 8</a></li>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad/class-9" target="">Class 9</a></li>
                  <li><a href="https://www.indiantalent.org/international-science-olympiad/class-10" target="">Class 10</a></li>
                </ul>
              </li>

              {/* Maths Olympiad */}
              <li className="dropdown">
                <a href="https://www.indiantalent.org/international-maths-olympiad" target="">Maths Olympiad</a>
                <ul>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad" target="">Maths Olympiad</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-1" target="">Class 1</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-2" target="">Class 2</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-3" target="">Class 3</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-4" target="">Class 4</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-5" target="">Class 5</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-6" target="">Class 6</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-7" target="">Class 7</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-8" target="">Class 8</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-9" target="">Class 9</a></li>
                  <li><a href="https://www.indiantalent.org/international-maths-olympiad/class-10" target="">Class 10</a></li>
                </ul>
              </li>

              {/* English Olympiad */}
              <li className="dropdown">
                <a href="https://www.indiantalent.org/english-international-olympiad" target="">English Olympiad</a>
                <ul>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad" target="">English Olympiad</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-1" target="">Class 1</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-2" target="">Class 2</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-3" target="">Class 3</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-4" target="">Class 4</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-5" target="">Class 5</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-6" target="">Class 6</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-7" target="">Class 7</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-8" target="">Class 8</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-9" target="">Class 9</a></li>
                  <li><a href="https://www.indiantalent.org/english-international-olympiad/class-10" target="">Class 10</a></li>
                </ul>
              </li>

              {/* GK Olympiad */}
              <li className="dropdown">
                <a href="https://www.indiantalent.org/general-knowledge-international-olympiad" target="">GK Olympiad</a>
                <ul>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad" target="">GK Olympiad</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-1" target="">Class 1</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-2" target="">Class 2</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-3" target="">Class 3</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-4" target="">Class 4</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-5" target="">Class 5</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-6" target="">Class 6</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-7" target="">Class 7</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-8" target="">Class 8</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-9" target="">Class 9</a></li>
                  <li><a href="https://www.indiantalent.org/general-knowledge-international-olympiad/class-10" target="">Class 10</a></li>
                </ul>
              </li>

              {/* Computer Olympiad */}
              <li className="dropdown">
                <a href="https://www.indiantalent.org/international-computer-olympiad" target="">Computer Olympiad</a>
                <ul>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad" target="">Computer Olympiad</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-1" target="">Class 1</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-2" target="">Class 2</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-3" target="">Class 3</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-4" target="">Class 4</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-5" target="">Class 5</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-6" target="">Class 6</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-7" target="">Class 7</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-8" target="">Class 8</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-9" target="">Class 9</a></li>
                  <li><a href="https://www.indiantalent.org/international-computer-olympiad/class-10" target="">Class 10</a></li>
                </ul>
              </li>

              {/* Drawing Olympiad */}
              <li className="dropdown">
                <a href="https://www.indiantalent.org/international-drawing-olympiad" target="">Drawing Olympiad</a>
                <ul>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad" target="">Drawing Olyampid</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-1" target="">Class 1</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-2" target="">Class 2</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-3" target="">Class 3</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-4" target="">Class 4</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-5" target="">Class 5</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-6" target="">Class 6</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-7" target="">Class 7</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-8" target="">Class 8</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-9" target="">Class 9</a></li>
                  <li><a href="https://www.indiantalent.org/international-drawing-olympiad/class-10" target="">Class 10</a></li>
                </ul>
              </li>

              {/* Essay Olympiad */}
              <li className="dropdown">
                <a href="https://www.indiantalent.org/national-essay-olympiad" target="">Essay Olympiad</a>
                <ul>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad" target="">Essay Olympiad</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-1" target="">Class 1</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-2" target="">Class 2</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-3" target="">Class 3</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-4" target="">Class 4</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-5" target="">Class 5</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-6" target="">Class 6</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-7" target="">Class 7</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-8" target="">Class 8</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-9" target="">Class 9</a></li>
                  <li><a href="https://www.indiantalent.org/national-essay-olympiad/class-10" target="">Class 10</a></li>
                </ul>
              </li>

              {/* Social Study Olympiad */}
              <li className="dropdown">
                <a href="https://www.indiantalent.org/national-social-studies-olympiad" target="">Social Study Olympiad</a>
                <ul>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad" target="">Social Study Olympiad</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-1" target="">Class 1</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-2" target="">Class 2</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-3" target="">Class 3</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-4" target="">Class 4</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-5" target="">Class 5</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-6" target="">Class 6</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-7" target="">Class 7</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-8" target="">Class 8</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-9" target="">Class 9</a></li>
                  <li><a href="https://www.indiantalent.org/national-social-studies-olympiad/class-10" target="">Class 10</a></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Olympiad Details Dropdown */}
          <li className="dropdown">
            <a href="#">Olympiad Details</a>
            <ul className="dropdown-menu">
              <li><a href="https://www.indiantalent.org/olympiad-fee-structure-and-bank-details" target="">Olympiad Fee Structure</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-exam-schedule" target="">Olympiad Schedule</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-exam-pattern" target="">Olympiad Exam Pattern</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-features-benefits" target="">Olympiad Features & Benefits</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-studies" target="">Olympiad Studies</a></li>
              <li><a href="https://www.indiantalent.org/invite-school" target="">Invite My School</a></li>
              <li><a href="https://www.indiantalent.org/become-olympiad-coordinator" target="">Become Olympiad Cordinator</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-ranking" target="">Olympiad Ranking</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-results" target="">Olympiad Results</a></li>
              <li><a href="https://www.indiantalent.org/how-to-prepare" target="">How To Prepare For Olympiad Exams</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-awards-prizes" target="">Olympiad Awards & Prizes</a></li>
              <li><a href="https://www.indiantalent.org/blog" target="">Blogs</a></li>
              <li><a href="https://www.indiantalent.org/faq" target="">FAQ</a></li>
              <li><a href="https://www.indiantalent.org/video-feedback" target="">Video Feedback</a></li>
              <li><a href="https://www.indiantalent.org/contact-us" target="">Contact</a></li>
            </ul>
          </li>

          {/* Gallery Dropdown */}
          <li className="dropdown">
            <a href="#">Gallery</a>
            <ul className="dropdown-menu">
              <li><a href="https://www.indiantalent.org/olympiad-winners" target="">Olympiad Winners</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-winner-gallery" target="">Olympiad Winners Gallery</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-school-function" target="">Olympiad School Function</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-annual-award-functions" target="">Annual Award Function</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-media-coverage" target="">Olympiad Media Coverage</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-video-coverage" target="">Olympiad Video Coverage</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-best-drawings" target="">Olympiad Best Drawing</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-toppers" target="">Monthly Olympiad Toppers</a></li>
              <li><a href="https://www.indiantalent.org/olympiad-office-work-culture" target="">Olympiad Office Work Culture</a></li>
              <li><a href="https://www.indiantalent.org/online-olympiad-guidelines" target="">Olympiad Guidelines</a></li>
            </ul>
          </li>

          {/* Annual Exam Schedule */}
          <li>
            <a href="https://www.indiantalent.org/olympiad-exam-schedule" target="">Annual Exam Schedule</a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationTabs;