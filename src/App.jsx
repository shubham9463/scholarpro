import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SchoolRegistrationForm from './components/pages/SchoolRegistrationForm.jsx';
import StudentRegistration from './components/pages/StudentRegistration.jsx';
import MainNavbar from './components/MainNavbar.jsx';
import Footer from './components/Footer.jsx';
import Registration from './components/Registration.jsx';
import StudentLogin from './components/LoginPage/StudentLogin.jsx';
import SchoolLogin from './components/LoginPage/SchoolLogin.jsx';
import CoordinatorLogin from './components/LoginPage/CoordinatorLogin.jsx';

// import other components/pages as needed

function App() {
  return (
    <Router>
      <div>
        <MainNavbar />

      <Routes>
  <Route path="/" element={<Registration />} />

  {/* Registration */}
  <Route path="/school-registration" element={<SchoolRegistrationForm />} />
  <Route path="/student-registration" element={<StudentRegistration />} />

  {/* Login */}
  <Route path="/student-login" element={<StudentLogin />} />
  <Route path="/school-login" element={<SchoolLogin />} />
  <Route path="/coordinator-login" element={<CoordinatorLogin />} />
</Routes>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
