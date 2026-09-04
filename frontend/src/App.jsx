import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import WorkOrders from "./pages/WorkOrders";
import Reservations from "./pages/Reservations";
import Transfers from "./pages/Transfers";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/inventory"
          element={<Inventory />}
        />

        <Route
          path="/workorders"
          element={<WorkOrders />}
        />

        <Route
          path="/reservations"
          element={<Reservations />}
        />

        <Route
          path="/transfers"
          element={<Transfers />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;