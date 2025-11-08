import React, { useState, useEffect } from "react";
import "./Appointment.css";

const appointmentsData = [
  {
    name: "Dr. Eleanor Pena",
    id: "#DR8590",
    date: "30 June 2024",
    time: "04:30 PM",
    specialty: "Dermatology",
    necessity: "Consultation",
    status: "success",
    doctorImg: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Dr. Arlene McCoy",
    id: "#DR8591",
    date: "29 June 2024",
    time: "04:45 PM",
    specialty: "Cardiology",
    necessity: "Consultation",
    status: "success",
    doctorImg: "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Dr. Kathryn Murphy",
    id: "#DR8592",
    date: "28 June 2024",
    time: "10:30 AM",
    specialty: "Dermatology",
    necessity: "Check-up",
    status: "success",
    doctorImg: "https://images.unsplash.com/photo-1612363584451-cd060fb62018?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Dr. Theresa Webb",
    id: "#DR8593",
    date: "27 June 2024",
    time: "10:45 AM",
    specialty: "General",
    necessity: "Consultation",
    status: "pending",
    doctorImg: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Dr. Dianne Russell",
    id: "#DR8594",
    date: "23 June 2024",
    time: "08:30 PM",
    specialty: "Nephrology",
    necessity: "Disease",
    status: "progress",
    doctorImg: "https://plus.unsplash.com/premium_photo-1682141125356-9ebba1fa94ea?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Dr. Courtney Henry",
    id: "#DR8595",
    date: "26 June 2024",
    time: "06:30 PM",
    specialty: "Anesthesiology",
    necessity: "Consultation",
    status: "success",
    doctorImg: "https://plus.unsplash.com/premium_photo-1661718954553-f775043016d5?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
  {
    name: "Dr. Courtney Henry",
    id: "#DR8596",
    date: "25 June 2024",
    time: "06:50 PM",
    specialty: "Geriatrics",
    necessity: "Check-up",
    status: "progress",
    doctorImg: "https://images.unsplash.com/photo-1731951039706-0e793240bb32?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  },
];

const Appointments = () => {
  const [appointments, setAppointments] = useState(appointmentsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredAppointments = appointments.filter(
    (a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "all" || a.status === statusFilter)
  );

  const deleteAppointment = (index) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      const updated = [...appointments];
      updated.splice(index, 1);
      setAppointments(updated);
    }
  };

  const total = appointments.length;
  const success = appointments.filter((a) => a.status === "success").length;
  const pending = appointments.filter((a) => a.status === "pending").length;
  const progress = appointments.filter((a) => a.status === "progress").length;

  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h1>All Appointments</h1>
        <span>{appointments.length} appointments</span>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-value">{total}</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{success}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{pending}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{progress}</div>
          <div className="stat-label">In Progress</div>
        </div>
      </div>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by doctor name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All Status</option>
          <option value="success">Success</option>
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
        </select>
      </div>

      <div className="appointment-list">
        {filteredAppointments.map((a, index) => (
          <div className="appointment-item" key={index}>
            <div className="doctor-header">
              <div className="doctor-info">
                <img src={a.doctorImg} alt="Doctor" className="doctor-photo" />
                <div>
                  <span>{a.name}</span>
                  <span>{a.id}</span>
                </div>
              </div>
              <div>
                <button className="action-btn">View Details</button>
                <button className="delete-btn" onClick={() => deleteAppointment(index)}>Delete</button>
              </div>
            </div>
            <div className="appointment-details">
              <div>Date: {a.date}</div>
              <div>Time: {a.time}</div>
              <div>Specialty: {a.specialty}</div>
              <div>Necessity: {a.necessity}</div>
              <div>Status: <span className={`status-${a.status}`}>{a.status}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
