import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function WorkOrders() {
  const [workOrders, setWorkOrders] = useState([]);

  const [form, setForm] = useState({
    workOrderId: "",
    itemName: "",
    location: "",
    requiredQty: 0,
    assignedUser: "",
  });

  useEffect(() => {
    fetchWorkOrders();
  }, []);

  const fetchWorkOrders = async () => {
    const token = localStorage.getItem("token");

    const res = await api.get("/workorders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setWorkOrders(res.data);
  };

  const createWorkOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/workorders",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Work Order Created");

      fetchWorkOrders();
    } catch (err) {
      console.error(err);
      alert("Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="page-title">
          Work Orders
        </h1>

        <div className="card">
          <h2>Create Work Order</h2>

          <input
            placeholder="Work Order ID"
            onChange={(e) =>
              setForm({
                ...form,
                workOrderId: e.target.value,
              })
            }
          />

          <input
            placeholder="Item Name"
            onChange={(e) =>
              setForm({
                ...form,
                itemName: e.target.value,
              })
            }
          />

          <input
            placeholder="Location"
            onChange={(e) =>
              setForm({
                ...form,
                location: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Required Qty"
            onChange={(e) =>
              setForm({
                ...form,
                requiredQty: Number(e.target.value),
              })
            }
          />

          <input
            placeholder="Assigned User"
            onChange={(e) =>
              setForm({
                ...form,
                assignedUser: e.target.value,
              })
            }
          />

          <button onClick={createWorkOrder}>
            Create Work Order
          </button>
        </div>

        <div
          className="card"
          style={{ marginTop: "20px" }}
        >
          <h2>Work Order List</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>Location</th>
                <th>Required Qty</th>
                <th>Shortage Qty</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {workOrders.map((wo) => (
                <tr key={wo.id}>
                  <td>{wo.workOrderId}</td>
                  <td>{wo.itemName}</td>
                  <td>{wo.location}</td>
                  <td>{wo.requiredQty}</td>
                  <td>{wo.shortageQty}</td>
                  <td>{wo.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}