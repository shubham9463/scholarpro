import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationTabs = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsNavCollapsed(true); // close nav on mobile after click
  };

  return (
    <nav className="main-menu">
      <style jsx>{`
        /* Keep all your existing CSS exactly as-is */
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
          background: #1e1f1fff;
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
          background: #101011ff;
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
            <a href="#" onClick={(e) => e.preventDefault()}>Olympiads</a>
            <ul className="dropdown-menu">

              <li className="dropdown">
                <a href="#" onClick={(e) => e.preventDefault()}>Science Olympiad</a>
                <ul>
                  <li><a href="#" onClick={() => handleNavigate('/science-Olympiad')}>Science Olympiad</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-1')}>Class 1</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-2')}>Class 2</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-3')}>Class 3</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-4')}>Class 4</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-5')}>Class 5</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-6')}>Class 6</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-7')}>Class 7</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-8')}>Class 8</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-9')}>Class 9</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/science-class-10')}>Class 10</a></li>
                  {/* Add more classes if needed */}
                </ul>
              </li>

              <li className="dropdown">
                <a href="#" onClick={(e) => e.preventDefault()}>Maths Olympiad</a>
                <ul>
                  <li><a href="#" onClick={() => handleNavigate('/Maths-Olympiad')}>Maths Olympiad</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-1')}>Class 1</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-2')}>Class 2</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-3')}>Class 3</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-4')}>Class 4</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-5')}>Class 5</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-6')}>Class 6</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-7')}>Class 7</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-8')}>Class 8</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-9')}>Class 9</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths-class-10')}>Class 10</a></li>
                </ul>
              </li>


              <li className="dropdown">
  <a href="#" onClick={(e) => e.preventDefault()}>English Olympiad</a>
  <ul>
    <li><a href="#" onClick={() => handleNavigate('/english-olympiad')}>English Olympiad</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-1')}>Class 1</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-2')}>Class 2</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-3')}>Class 3</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-4')}>Class 4</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-5')}>Class 5</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-6')}>Class 6</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-7')}>Class 7</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-8')}>Class 8</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-9')}>Class 9</a></li>
    <li><a href="#" onClick={() => handleNavigate('/english-class-10')}>Class 10</a></li>
  </ul>
</li>



 <li className="dropdown">
                <a href="#" onClick={(e) => e.preventDefault()}>Gk Olympiad</a>
                <ul>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class1')}>Gk Olympiad</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class2')}>Class 1</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 2</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 3</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 4</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 5</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 6</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 7</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 8</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 9</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 10</a></li>
                </ul>
              </li>


 <li className="dropdown">
                <a href="#" onClick={(e) => e.preventDefault()}>Computer Olympiad</a>
                <ul>
                  <li><a href="#" onClick={() => handleNavigate('/computer-Olympiad')}>Computer Olympiad</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-1')}>Class 1</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-2')}>Class 2</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-3')}>Class 3</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-4')}>Class 4</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-5')}>Class 5</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-6')}>Class 6</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-7')}>Class 7</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-8')}>Class 8</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-9')}>Class 9</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/computer-class-10')}>Class 10</a></li>
                </ul>
              </li>


 <li className="dropdown">
                <a href="#" onClick={(e) => e.preventDefault()}>Drawing Olympiad</a>
                <ul>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-Olympiad')}>Drawing Olympiad</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-1')}>Class 1</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-2')}>Class 2</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-3')}>Class 3</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-4')}>Class 4</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-5')}>Class 5</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-6')}>Class 6</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-7')}>Class 7</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-8')}>Class 8</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-9')}>Class 9</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/drawing-class-10')}>Class 10</a></li>
                </ul>
              </li>


 <li className="dropdown">
                <a href="#" onClick={(e) => e.preventDefault()}>Essay Olympiad</a>
                <ul>
                  <li><a href="#" onClick={() => handleNavigate('/essay-Olympiad')}>Essay Olympiad</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-1')}>Class 1</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-2')}>Class 2</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-3')}>Class 3</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-4')}>Class 4</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-5')}>Class 5</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-6')}>Class 6</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-7')}>Class 7</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-8')}>Class 8</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-9')}>Class 9</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/essay-class-10')}>Class 10</a></li>
                </ul>
              </li>


 <li className="dropdown">
                <a href="#" onClick={(e) => e.preventDefault()}>Social study Olympiad</a>
                <ul>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class1')}>Social study Olympiad</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class2')}>Class 1</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 2</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 3</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 4</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 5</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 6</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 7</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 8</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 9</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/maths/class3')}>Class 10</a></li>
                </ul>
              </li>



              {/* Add other Olympiads the same way */}

            </ul>
          </li>

          {/* Olympiad Details Dropdown */}
          <li className="dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}>Olympiad Details</a>
            <ul className="dropdown-menu">
              <li><a href="#" onClick={() => handleNavigate('/olympiad-fee')}>Olympiad Fee Structure</a></li>
              <li><a href="#" onClick={() => handleNavigate('/olympiad-schedule')}>Olympiad Schedule</a></li>
              <li><a href="#" onClick={() => handleNavigate('/olympiad-schedule')}>Olympiad Schedule</a></li>
              <li><a href="#" onClick={() => handleNavigate('/olympiad-schedule')}>Olympiad Schedule</a></li>
              <li><a href="#" onClick={() => handleNavigate('/olympiad-schedule')}>Olympiad Schedule</a></li>
                <li><a href="#" onClick={() => handleNavigate('/olympiad-schedule')}>Olympiad Schedule</a></li>
                  <li><a href="#" onClick={() => handleNavigate('/olympiad-schedule')}>Olympiad Schedule</a></li>
                    <li><a href="#" onClick={() => handleNavigate('/olympiad-schedule')}>Olympiad Schedule</a></li>
                      <li><a href="#" onClick={() => handleNavigate('/olympiad-schedule')}>Olympiad Schedule</a></li>
                        <li><a href="#" onClick={() => handleNavigate('/olympiad-schedule')}>Olympiad Schedule</a></li>
              {/* Add more details links */}
            </ul>
          </li>

          {/* Gallery Dropdown */}
          <li className="dropdown">
            <a href="#" onClick={(e) => e.preventDefault()}>Gallery</a>
            <ul className="dropdown-menu">
              <li><a href="#" onClick={() => handleNavigate('/OW')}>Olympiad Winners</a></li>
              <li><a href="#" onClick={() => handleNavigate('/OWG')}>Olympiad Winners Gallery</a></li>
              <li><a href="#" onClick={() => handleNavigate('/OSF')}>Olympiad School Function</a></li>
              <li><a href="#" onClick={() => handleNavigate('/AAF')}>Annual Award Function</a></li>
              <li><a href="#" onClick={() => handleNavigate('/OMC')}>Olympiad Media Coverage</a></li>
              <li><a href="#" onClick={() => handleNavigate('/OVC')}>Olympiad Video Coverage</a></li>
              <li><a href="#" onClick={() => handleNavigate('/OBD')}>Olympiad Best Drawing</a></li>
              <li><a href="#" onClick={() => handleNavigate('/MOT')}>Monthly Olympiad Toppers</a></li>
              <li><a href="#" onClick={() => handleNavigate('/OOWC')}>Olympiad Office Work Culture</a></li>
              <li><a href="#" onClick={() => handleNavigate('/OG')}>Olympiad Guidelines</a></li>
            </ul>
          </li>

          {/* Annual Exam Schedule */}
          <li>
            <a href="#" onClick={() => handleNavigate('/annual-exam-schedule')}>Annual Exam Schedule</a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavigationTabs;
