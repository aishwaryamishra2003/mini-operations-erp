import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    inventory: 0,
    workOrders: 0,
    transfers: 0,
    reservations: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
  try {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const [
      inventoryRes,
      workOrdersRes,
      transfersRes,
      reservationsRes,
    ] = await Promise.all([
      api.get("/inventory", config),
      api.get("/workorders", config),
      api.get("/transfers", config),
      api.get("/reservations", config),
    ]);

    console.log("Inventory:", inventoryRes.data);
    console.log("WorkOrders:", workOrdersRes.data);
    console.log("Transfers:", transfersRes.data);
    console.log("Reservations:", reservationsRes.data);

    setStats({
      inventory: inventoryRes.data.length,
      workOrders: workOrdersRes.data.length,
      transfers: transfersRes.data.length,
      reservations: reservationsRes.data.length,
    });

  } catch (err) {
    console.error("Dashboard Error:", err);
  }
};

  return (
  <div>

    {/* Navbar */}
    <div className="navbar">
      <h2>Mini Operations ERP</h2>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>

    <div className="container">

      {/* Welcome Section */}
      <div className="hero">
        <h1>Welcome Back 👋</h1>
        <p>
          Manage inventory, work orders,
          transfers and reservations.
        </p>
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <Link to="/inventory">Inventory</Link>
        <Link to="/workorders">Work Orders</Link>
        <Link to="/transfers">Transfers</Link>
        <Link to="/reservations">Reservations</Link>
      </div>

      {/* Stats Cards */}
<div className="stats-grid">

  <div className="stat-card">
    <div className="stat-icon">📦</div>
    <div className="stat-number">
      {stats.inventory}
    </div>
    <h3>Inventory</h3>
    <p>Manage stock and materials</p>
  </div>

  <div className="stat-card">
    <div className="stat-icon">📝</div>
    <div className="stat-number">
      {stats.workOrders}
    </div>
    <h3>Work Orders</h3>
    <p>Create and track jobs</p>
  </div>

  <div className="stat-card">
    <div className="stat-icon">🚚</div>
    <div className="stat-number">
      {stats.transfers}
    </div>
    <h3>Transfers</h3>
    <p>Move inventory between locations</p>
  </div>

  <div className="stat-card">
    <div className="stat-icon">🔒</div>
    <div className="stat-number">
      {stats.reservations}
    </div>
    <h3>Reservations</h3>
    <p>Reserve inventory stock</p>
  </div>

</div>

      {/* Recent Activity */}
      <div className="card">
        <h2 style={{ marginBottom: "20px" }}>
          Recent Activity
        </h2>

        <table>
          <thead>
            <tr>
              <th>Module</th>
              <th>Action</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Inventory</td>
              <td>Items Added</td>
              <td>Today</td>
            </tr>

            <tr>
              <td>Transfer</td>
              <td>Location Transfer</td>
              <td>Today</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
);
}