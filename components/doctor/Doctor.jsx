import React, { useEffect, useState, useRef } from "react";
import "./Doctor.css";
import Chart from "chart.js/auto";

const Doctor = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const chartVisitsRef = useRef(null);
  const chartConditionsRef = useRef(null);
  const visitsChartInstance = useRef(null);
  const conditionsChartInstance = useRef(null);

  useEffect(() => {
    // Destroy old charts to prevent duplication
    if (visitsChartInstance.current) {
      visitsChartInstance.current.destroy();
    }
    if (conditionsChartInstance.current) {
      conditionsChartInstance.current.destroy();
    }

    const visitsCtx = chartVisitsRef.current;
    const conditionsCtx = chartConditionsRef.current;

    // Only create charts if both canvases exist
    if (visitsCtx && conditionsCtx) {
      visitsChartInstance.current = new Chart(visitsCtx, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Visits",
              data: [8, 12, 15, 20, 18, 10, 14],
              borderColor: "#00ff99",
              fill: true,
              backgroundColor: "rgba(0,255,153,0.1)",
            },
          ],
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: "#999" } },
            y: { ticks: { color: "#999" } },
          },
        },
      });

      conditionsChartInstance.current = new Chart(conditionsCtx, {
        type: "pie",
        data: {
          labels: ["Hypertension", "Arrhythmia", "Other"],
          datasets: [
            {
              data: [50, 30, 20],
              backgroundColor: ["#00ff99", "#00cc77", "#006644"],
            },
          ],
        },
        options: {
          plugins: { legend: { labels: { color: "#ccc" } } },
        },
      });
    }

    // Cleanup when component unmounts
    return () => {
      if (visitsChartInstance.current) visitsChartInstance.current.destroy();
      if (conditionsChartInstance.current)
        conditionsChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="doctor-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile">
          <img src="https://via.placeholder.com/90" alt="Doctor" />
          <h3>Dr. Jane Smith</h3>
          <p>General Practitioner</p>
        </div>

        <div className="nav">
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Appointment Management</div>
          <div className="nav-item">Prescriptions</div>
          <div className="nav-item">Patients</div>
          <div className="nav-item">Availability / Schedule</div>
          <div className="nav-item">Health Trends</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main">
        <h1>Dashboard</h1>
        <div className="section-title">Today's tasks</div>

        {/* Statistic Cards */}
        <div className="card-grid">
          <div className="card">
            <h3>Appointments today</h3>
            <p>5 scheduled</p>
          </div>
          <div className="card">
            <h3>Total patients this week</h3>
            <p>23</p>
          </div>
          <div className="card">
            <h3>Total revenue this month</h3>
            <p>$6,450</p>
          </div>
          <div className="card">
            <h3>Pending prescriptions or reports</h3>
            <p>4</p>
          </div>
        </div>

        {/* Appointment Management */}
        <div className="appointment-section">
          <h3>Appointment Management</h3>
          <br />
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`tab-btn ${activeTab === "past" ? "active" : ""}`}
              onClick={() => setActiveTab("past")}
            >
              Past
            </button>
          </div>

          <div
            id="upcoming"
            className={`tab-content ${activeTab === "upcoming" ? "active" : ""}`}
          >
            <p>3 upcoming appointments for today.</p>
          </div>
          <div
            id="past"
            className={`tab-content ${activeTab === "past" ? "active" : ""}`}
          >
            <p>Past appointments summary will appear here.</p>
          </div>
        </div>

        {/* Charts */}
        <div className="charts">
          <div className="chart">
            <h3>Patient Visits</h3>
            <canvas ref={chartVisitsRef}></canvas>
          </div>
          <div className="chart">
            <h3>Patients by Condition</h3>
            <canvas ref={chartConditionsRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
