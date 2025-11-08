import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Dashboard.css";

const Dashboard = () => {
  const chartRef = useRef(null);
  let healthChart = useRef(null); // keep chart reference

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart if it exists
    if (healthChart.current) healthChart.current.destroy();

    healthChart.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["M", "T", "W", "T", "F"],
        datasets: [
          {
            label: "Health Check-ins",
            data: [15, 20, 18, 22, 21],
            borderColor: "#15b364",
            backgroundColor: "rgba(21,179,100,0.1)",
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: "#15b364",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // allows full responsiveness
        scales: {
          x: {
            ticks: { color: "#aaa" },
            grid: { color: "#1f1f1f" },
          },
          y: {
            ticks: { color: "#aaa" },
            grid: { color: "#1f1f1f" },
          },
        },
        plugins: {
          legend: { labels: { color: "#15b364" } },
        },
      },
    });

    return () => {
      if (healthChart.current) healthChart.current.destroy();
    };
  }, []);

  return (
    <div className="dashboard-container">
      <div className="topbar">
        <h2>Welcome back, Emily 👋</h2>
        <div className="user">Profile</div>
      </div>

      <div className="dashboard">
        {/* Upcoming Appointments */}
        <div className="card">
          <h2>Upcoming Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dr. Meera Kapoor</td>
                <td>7 Nov</td>
                <td>10:30</td>
                <td className="status-confirmed">Confirmed</td>
              </tr>
              <tr>
                <td>Dr. John Thomas</td>
                <td>8 Nov</td>
                <td>04:00</td>
                <td className="status-pending">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Weekly Health Check-ins */}
        <div className="card graph">
          <h2>Weekly Health Check-ins</h2>
          <div className="chart-wrapper">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="card">
          <h2>Recent Reports</h2>
          <table>
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Date</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Blood Test</td>
                <td>5 Nov</td>
                <td>Lab Report</td>
              </tr>
              <tr>
                <td>X-Ray Chest</td>
                <td>3 Nov</td>
                <td>Radiology</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Prescriptions */}
        <div className="card">
          <h2>Prescriptions</h2>
          <div className="prescription">
            <div className="pill-icon">💊</div>
            <div className="prescription-details">
              <h4>Dr. Meera Kapoor</h4>
              <p>Amoxicillin 250mg</p>
            </div>
          </div>
          <div className="prescription">
            <div className="pill-icon">💊</div>
            <div className="prescription-details">
              <h4>Dr. John Thomas</h4>
              <p>Ongoing</p>
            </div>
          </div>
        </div>

        {/* Recent Chats */}
        <div className="card">
          <h2>Recent Chats</h2>
          <div className="chat">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Meera" />
            <div>
              <h4>Dr. Meera Kapoor</h4>
              <p>How are you feeling today?</p>
            </div>
          </div>
        </div>

        {/* Health Tips */}
        <div className="card">
          <h2>Health Tips</h2>
          <div className="tip"><span>💧</span>Drink 2L water daily</div>
          <div className="tip"><span>💉</span>Flu shots available — book now!</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
