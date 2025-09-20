import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Components
import MainNavbar from "./components/MainNavbar.jsx";
import Footer from "./components/Footer.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import OlympiadInfo from "./components/OlympiadInfo.jsx";
import CardsSection from "./components/CardsSection.jsx";
import AwardFunctions from "./components/AwardFunctions.jsx";
import LaptopTabletWinners from "./components/LaptopTabletWinners.jsx";
import FelicitatingStudents from "./components/FelicitatingStudents.jsx";
import AwardSection from "./components/AwardSection.jsx";
// Pages
import Registration from "./components/Registration.jsx";
import SchoolRegistrationForm from "./components/pages/SchoolRegistrationForm.jsx";
import StudentRegistration from "./components/pages/StudentRegistration.jsx";

// Logins
import StudentLogin from "./components/LoginPage/StudentLogin.jsx";
import SchoolLogin from "./components/LoginPage/SchoolLogin.jsx";
import CoordinatorLogin from "./components/LoginPage/CoordinatorLogin.jsx";
import ITOChampions from "./components/ITOChampions.jsx";
import ITOAwardFunction from "./components/ITOAwardFunction.jsx";
import BranchOffices from "./components/BranchOffices.jsx";
import Testimonial from "./components/Testimonial.jsx";
import IITSponsorship from "./components/IITSponsorship.jsx";


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
                <OlympiadInfo />
                <CardsSection />
                <ITOChampions />
                <ITOAwardFunction></ITOAwardFunction>
                <AwardFunctions />
                <LaptopTabletWinners />
                <FelicitatingStudents/>
                <AwardSection/>
                <BranchOffices></BranchOffices>
                <Testimonial></Testimonial>
                <IITSponsorship></IITSponsorship>
              </>
            }
          />

          {/* Registration */}
          <Route
            path="/school-registration"
            element={<SchoolRegistrationForm />}
          />
          <Route
            path="/student-registration"
            element={<StudentRegistration />}
          />

          {/* Logins */}
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/school-login" element={<SchoolLogin />} />
          <Route path="/coordinator-login" element={<CoordinatorLogin />} />
        </Routes>

        <Footer />

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
