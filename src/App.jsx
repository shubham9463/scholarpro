import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainNavbar from './components/MainNavbar.jsx'
import Footer from './components/Footer.jsx'
import Registration from './components/Registration.jsx'
function App() {
  return (
    <div>
      <MainNavbar />   {/* full width */}
      <div className="max-w-7xl mx-auto px-4">
        {/* your page content here */}
        
       <div>
          <Registration/>
        </div> 
      </div>
      <div><Footer/></div>
    </div>
  );
}


export default App
