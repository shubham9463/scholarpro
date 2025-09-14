import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import MainNavbar from "./components/MainNavbar.jsx";
import Footer from "./components/Footer.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import OlympiadInfo from "./components/OlympiadInfo.jsx";

// Pages
import Registration from "./components/Registration.jsx";
import SchoolRegistrationForm from "./components/pages/SchoolRegistrationForm.jsx";
import StudentRegistration from "./components/pages/StudentRegistration.jsx";

// Logins
import StudentLogin from "./components/LoginPage/StudentLogin.jsx";
import SchoolLogin from "./components/LoginPage/SchoolLogin.jsx";
import CoordinatorLogin from "./components/LoginPage/CoordinatorLogin.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <MainNavbar />

        <Routes>
          {/* Home Page with Registration + Services */}
          <Route
            path="/"
            element={
              <>
                <Registration />
                <ServicesSection />
                <AboutSection />
                <OlympiadInfo/>
              </>
            }
          />

          {/* Registration */}
          <Route path="/school-registration" element={<SchoolRegistrationForm />} />
          <Route path="/student-registration" element={<StudentRegistration />} />

          {/* Logins */}
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
