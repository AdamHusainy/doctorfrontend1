<<<<<<< HEAD
// File: src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Faq from './components/Faq';
import Cta from './components/Cta';

function App() {
  return (
    <div className="bg-black relative overflow-x-hidden">
      <main>
        <Hero />
        <Brands />
        <HowItWorks />
        <Services />
        <Faq />
        <Cta />
      </main>
=======
import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import Appointment from "../components/Appointment";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">User-Dashboard</div>
        <div className="menu">
          <a
            href="#"
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            🏠 Dashboard
          </a>
          <a
            href="#"
            className={activePage === "appointment" ? "active" : ""}
            onClick={() => setActivePage("appointment")}
          >
            📅 Appointments
          </a>
          <a href="#">💊 Prescriptions</a>
          <a href="#">📂 Reports</a>
          <a href="#">💬 Messages</a>
          <a href="#">⚙️ Settings</a>
          <a href="#">🚪 Logout</a>
        </div>
      </div>

      {/* Main content */}
      <div className="main">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "appointment" && <Appointment />}
      </div>
>>>>>>> 2befdaf (new commit)
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 2befdaf (new commit)
