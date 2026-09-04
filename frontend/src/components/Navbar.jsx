import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#1e293b",
        padding: "15px",
      }}
    >
      <Link
        to="/dashboard"
        style={{ color: "white", marginRight: 20 }}
      >
        Dashboard
      </Link>

      <Link
        to="/inventory"
        style={{ color: "white", marginRight: 20 }}
      >
        Inventory
      </Link>

      <Link
        to="/workorders"
        style={{ color: "white", marginRight: 20 }}
      >
        Work Orders
      </Link>

      <Link
        to="/reservations"
        style={{ color: "white", marginRight: 20 }}
      >
        Reservations
      </Link>

      <Link
        to="/transfers"
        style={{ color: "white" }}
      >
        Transfers
      </Link>
    </nav>
  );
}