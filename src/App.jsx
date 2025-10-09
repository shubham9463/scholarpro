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

import ScienceOlympiad from "./components/TabPage/OlympiadPages/SciencePages/ScienceOlympiad.jsx";
import Class1Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass1Page.jsx";
import Class2Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass2Page.jsx";
import Class3Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass3Page.jsx";
import Class4Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass4Page.jsx";
import Class5Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass5Page.jsx";
import Class6Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass6Page.jsx";
import Class7Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass7Page.jsx";
import Class8Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass8Page.jsx";
import Class9Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass9Page.jsx";
import Class10Page from "./components/TabPage/OlympiadPages/SciencePages/ScienceClass10Page.jsx";

// Maths Olympiad Pages
import MathsOlympiad from "./components/TabPage/OlympiadPages/MathsPages/MathsOlympiad.jsx";
import MathsClass1Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass1Page.jsx";
import MathsClass2Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass2Page.jsx";
import MathsClass3Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass3Page.jsx";
import MathsClass4Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass4Page.jsx";
import MathsClass5Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass5Page.jsx";
import MathsClass6Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass6Page.jsx";
import MathsClass7Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass7Page.jsx";
import MathsClass8Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass8Page.jsx";
import MathsClass9Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass9Page.jsx";
import MathsClass10Page from "./components/TabPage/OlympiadPages/MathsPages/MathsClass10Page.jsx";
// English Olympiad Pages
import EnglishOlympiad from "./components/TabPage/OlympiadPages/EnglishPage/EnglishOlympiad.jsx";
import EnglishClass1Page from "./components/TabPage/OlympiadPages/EnglishPage/Class1Page.jsx";
import EnglishClass2Page from "./components/TabPage/OlympiadPages/EnglishPage/Class2Page.jsx";
import EnglishClass3Page from "./components/TabPage/OlympiadPages/EnglishPage/Class3Page.jsx";
import EnglishClass4Page from "./components/TabPage/OlympiadPages/EnglishPage/Class4Page.jsx";
import EnglishClass5Page from "./components/TabPage/OlympiadPages/EnglishPage/Class5Page.jsx";
import EnglishClass6Page from "./components/TabPage/OlympiadPages/EnglishPage/Class6Page.jsx";
import EnglishClass7Page from "./components/TabPage/OlympiadPages/EnglishPage/Class7Page.jsx";
import EnglishClass8Page from "./components/TabPage/OlympiadPages/EnglishPage/Class8Page.jsx";
import EnglishClass9Page from "./components/TabPage/OlympiadPages/EnglishPage/Class9Page.jsx";
import EnglishClass10Page from "./components/TabPage/OlympiadPages/EnglishPage/Class10Page.jsx";


import ComputerOlympiad from "./components/TabPage/OlympiadPages/ComputerPages/ComputerOlympiad.jsx";
import ComputerClass1Page from "./components/TabPage/OlympiadPages/ComputerPages/Class1Page.jsx";
import ComputerClass2Page from "./components/TabPage/OlympiadPages/ComputerPages/Class2Page.jsx";
import ComputerClass3Page from "./components/TabPage/OlympiadPages/ComputerPages/Class3Page.jsx";
import ComputerClass4Page from "./components/TabPage/OlympiadPages/ComputerPages/Class4Page.jsx";
import ComputerClass5Page from "./components/TabPage/OlympiadPages/ComputerPages/Class5Page.jsx";
import ComputerClass6Page from "./components/TabPage/OlympiadPages/ComputerPages/Class6Page.jsx";
import ComputerClass7Page from "./components/TabPage/OlympiadPages/ComputerPages/Class7Page.jsx";
import ComputerClass8Page from "./components/TabPage/OlympiadPages/ComputerPages/Class8Page.jsx";
import ComputerClass9Page from "./components/TabPage/OlympiadPages/ComputerPages/Class9Page.jsx";
import ComputerClass10Page from "./components/TabPage/OlympiadPages/ComputerPages/Class10Page.jsx";

import EssayOlympiad from "./components/TabPage/OlympiadPages/EssayPages/EssayOlympiad.jsx";
import EssayClass1Page from "./components/TabPage/OlympiadPages/EssayPages/Class1Page.jsx";
import EssayClass2Page from "./components/TabPage/OlympiadPages/EssayPages/Class2Page.jsx";
import EssayClass3Page from "./components/TabPage/OlympiadPages/EssayPages/Class3Page.jsx";
import EssayClass4Page from "./components/TabPage/OlympiadPages/EssayPages/Class4Page.jsx"; 
import EssayClass5Page from "./components/TabPage/OlympiadPages/EssayPages/Class5Page.jsx";
import EssayClass6Page from "./components/TabPage/OlympiadPages/EssayPages/Class6Page.jsx";
import EssayClass7Page from "./components/TabPage/OlympiadPages/EssayPages/Class7Page.jsx";
import EssayClass8Page from "./components/TabPage/OlympiadPages/EssayPages/Class8Page.jsx";
import EssayClass9Page from "./components/TabPage/OlympiadPages/EssayPages/Class9Page.jsx";
import EssayClass10Page from "./components/TabPage/OlympiadPages/EssayPages/Class10Page.jsx";

import DrawingOlympiad from "./components/TabPage/OlympiadPages/DrawingPage/DrawingOlympiad.jsx";
import DrawingClass1Page from "./components/TabPage/OlympiadPages/DrawingPage/Class1Page.jsx";
import DrawingClass2Page from "./components/TabPage/OlympiadPages/DrawingPage/Class2Page.jsx";
import DrawingClass3Page from "./components/TabPage/OlympiadPages/DrawingPage/Class3Page.jsx";
import DrawingClass4Page from "./components/TabPage/OlympiadPages/DrawingPage/Class4Page.jsx";
import DrawingClass5Page from "./components/TabPage/OlympiadPages/DrawingPage/Class5Page.jsx";
import DrawingClass6Page from "./components/TabPage/OlympiadPages/DrawingPage/Class6Page.jsx";
import DrawingClass7Page from "./components/TabPage/OlympiadPages/DrawingPage/Class7Page.jsx";
import DrawingClass8Page from "./components/TabPage/OlympiadPages/DrawingPage/Class8Page.jsx";
import DrawingClass9Page from "./components/TabPage/OlympiadPages/DrawingPage/Class9Page.jsx";
import DrawingClass10Page from "./components/TabPage/OlympiadPages/DrawingPage/Class10Page.jsx";

import AAF from "./components/TabPage/GalleryPages/AAF.jsx";
import OMC from "./components/TabPage/GalleryPages/OMC.jsx";
import OSF from "./components/TabPage/GalleryPages/OSF.jsx";
import OWG from "./components/TabPage/GalleryPages/OWG.jsx";
import OBD from "./components/TabPage/GalleryPages/OBD.jsx";
import OG from "./components/TabPage/GalleryPages/OG.jsx";
import OOWC from "./components/TabPage/GalleryPages/OOWC.jsx";
import OVC from "./components/TabPage/GalleryPages/OVC.jsx";
import OW from "./components/TabPage/GalleryPages/OW.jsx";
import MOT from "./components/TabPage/GalleryPages/MOT.jsx";

import AboutUs from "./components/FooterPages/AboutUs.jsx";
import HowToPrepare from "./components/FooterPages/HowToPrepare.jsx";
import FAQ from "./components/FooterPages/FAQ.jsx";
import OlympiadExamSchedule from "./components/FooterPages/OlympiadExamSchedule.jsx";
import OlympiadFeatures from "./components/FooterPages/OLympiadFeatures.jsx";
import OlympiadRanking from "./components/FooterPages/OlympiadRanking.jsx";











// Logins
import StudentLogin from "./components/LoginPage/StudentLogin.jsx";
import SchoolLogin from "./components/LoginPage/SchoolLogin.jsx";
import CoordinatorLogin from "./components/LoginPage/CoordinatorLogin.jsx";

// Other Sections
import ITOChampions from "./components/ITOChampions.jsx";
import ITOAwardFunction from "./components/ITOAwardFunction.jsx";
import BranchOffices from "./components/BranchOffices.jsx";
import Testimonial from "./components/Testimonial.jsx";
import IITSponsorship from "./components/IITSponsorship.jsx";

import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import ChatbotHelp from "./components/ChatbotHelp.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <MainNavbar />

        <Routes>
          {/* Home Page */}
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
                <ITOAwardFunction />
                <AwardFunctions />
                <LaptopTabletWinners />
                <FelicitatingStudents />
                <AwardSection />
                <BranchOffices />
                <Testimonial />
                <IITSponsorship />
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

          {/* Science Olympiad Routes */}
          <Route path="/science-Olympiad" element={<ScienceOlympiad />} />
          <Route path="/science-class-1" element={<Class1Page />} />
          <Route path="/science-class-2" element={<Class2Page />} />
          <Route path="/science-class-3" element={<Class3Page />} />
          <Route path="/science-class-4" element={<Class4Page />} />
          <Route path="/science-class-5" element={<Class5Page />} />
          <Route path="/science-class-6" element={<Class6Page />} />
          <Route path="/science-class-7" element={<Class7Page />} />
          <Route path="/science-class-8" element={<Class8Page />} />
          <Route path="/science-class-9" element={<Class9Page />} />
          <Route path="/science-class-10" element={<Class10Page />} />
          {/* Maths Olympiad Routes */}
          <Route path="/maths-Olympiad" element={<MathsOlympiad />} />
          <Route path="/maths-class-1" element={<MathsClass1Page />} />
          <Route path="/maths-class-2" element={<MathsClass2Page />} />
          <Route path="/maths-class-3" element={<MathsClass3Page />} />
          <Route path="/maths-class-4" element={<MathsClass4Page />} />
          <Route path="/maths-class-5" element={<MathsClass5Page />} />
          <Route path="/maths-class-6" element={<MathsClass6Page />} />
          <Route path="/maths-class-7" element={<MathsClass7Page />} />
          <Route path="/maths-class-8" element={<MathsClass8Page />} />
          <Route path="/maths-class-9" element={<MathsClass9Page />} />
          <Route path="/maths-class-10" element={<MathsClass10Page />} />

          <Route path="/english-Olympiad" element={<EnglishOlympiad />} />
          <Route path="/english-class-1" element={<EnglishClass1Page />} />
          <Route path="/english-class-2" element={<EnglishClass2Page />} />         
          <Route path="/english-class-3" element={<EnglishClass3Page />} />
          <Route path="/english-class-4" element={<EnglishClass4Page />} />
          <Route path="/english-class-5" element={<EnglishClass5Page />} />
          <Route path="/english-class-6" element={<EnglishClass6Page />} />
          <Route path="/english-class-7" element={<EnglishClass7Page />} />
          <Route path="/english-class-8" element={<EnglishClass8Page />} />
          <Route path="/english-class-9" element={<EnglishClass9Page />} />
          <Route path="/english-class-10" element={<EnglishClass10Page />} />
         
         
          <Route path="/computer-Olympiad" element={<ComputerOlympiad />} />
<Route path="/computer-class-1" element={<ComputerClass1Page />} />
<Route path="/computer-class-2" element={<ComputerClass2Page />} />
<Route path="/computer-class-3" element={<ComputerClass3Page />} />
<Route path="/computer-class-4" element={<ComputerClass4Page />} />
<Route path="/computer-class-5" element={<ComputerClass5Page />} />
<Route path="/computer-class-6" element={<ComputerClass6Page />} />
<Route path="/computer-class-7" element={<ComputerClass7Page />} />
<Route path="/computer-class-8" element={<ComputerClass8Page />} />
<Route path="/computer-class-9" element={<ComputerClass9Page />} />
<Route path="/computer-class-10" element={<ComputerClass10Page />} />

          <Route path="/essay-Olympiad" element={<EssayOlympiad />} />
          <Route path="/essay-class-1" element={<EssayClass1Page />} />
          <Route path="/essay-class-2" element={<EssayClass2Page />} />
          <Route path="/essay-class-3" element={<EssayClass3Page />} />
          <Route path="/essay-class-4" element={<EssayClass4Page />} />
          <Route path="/essay-class-5" element={<EssayClass5Page />} />
          <Route path="/essay-class-6" element={<EssayClass6Page />} />
          <Route path="/essay-class-7" element={<EssayClass7Page />} />
          <Route path="/essay-class-8" element={<EssayClass8Page />} />
          <Route path="/essay-class-9" element={<EssayClass9Page />} />
          <Route path="/essay-class-10" element={<EssayClass10Page />} />

          <Route path="/drawing-Olympiad" element={<DrawingOlympiad />} />
          <Route path="/drawing-class-1" element={<DrawingClass1Page />} />
          <Route path="/drawing-class-2" element={<DrawingClass2Page />} />
          <Route path="/drawing-class-3" element={<DrawingClass3Page />} />
          <Route path="/drawing-class-4" element={<DrawingClass4Page />} />
          <Route path="/drawing-class-5" element={<DrawingClass5Page />} />
          <Route path="/drawing-class-6" element={<DrawingClass6Page />} />
          <Route path="/drawing-class-7" element={<DrawingClass7Page />} />
          <Route path="/drawing-class-8" element={<DrawingClass8Page />} />
          <Route path="/drawing-class-9" element={<DrawingClass9Page />} />
          <Route path="/drawing-class-10" element={<DrawingClass10Page />} />

          <Route path="/aaf" element={<AAF />} />
          <Route path="/omc" element={<OMC />} />
          <Route path="/osf" element={<OSF />} />
          <Route path="/owg" element={<OWG />} />
          <Route path="/obd" element={<OBD />} />
          <Route path="/og" element={<OG />} />
          <Route path="/oowc" element={<OOWC />} />
          <Route path="/ovc" element={<OVC />} />
          <Route path="/ow" element={<OW />} />
          <Route path="/MOT" element={<MOT />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-to-prepare" element={<HowToPrepare />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/olympiad-exam-schedule" element={<OlympiadExamSchedule />} />
          <Route path="/olympiad-features-benefits" element={<OlympiadFeatures />} />
          <Route path="/olympiad-ranking" element={<OlympiadRanking />} />

          {/* Fallback Route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>

        <Footer />

        {/* Floating Components */}
        <ScrollToTopButton />
        <ChatbotHelp />

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
