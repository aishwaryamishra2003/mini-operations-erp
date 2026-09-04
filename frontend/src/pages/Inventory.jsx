import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Inventory() {
  const [inventory, setInventory] = useState([]);

  const [form, setForm] = useState({
    itemName: "",
    category: "",
    location: "",
    batchNo: "",
    physicalQty: 0,
    reservedQty: 0,
  });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.get("/inventory", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setInventory(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const createInventory = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await api.post(
        "/inventory",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("SUCCESS =", res.data);

      alert("Inventory Added");

      setForm({
        itemName: "",
        category: "",
        location: "",
        batchNo: "",
        physicalQty: 0,
        reservedQty: 0,
      });

      fetchInventory();
    } catch (err) {
      console.log("ERROR =", err.response?.data);
      console.error(err);

      alert("Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="page-title">
          Inventory Management
        </h1>

        <div className="card">
          <h2>Add Inventory Item</h2>

          <input
            value={form.itemName}
            placeholder="Item Name"
            onChange={(e) =>
              setForm({
                ...form,
                itemName: e.target.value,
              })
            }
          />

          <input
            value={form.category}
            placeholder="Category"
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
          />

          <input
            value={form.location}
            placeholder="Location"
            onChange={(e) =>
              setForm({
                ...form,
                location: e.target.value,
              })
            }
          />

          <input
            value={form.batchNo}
            placeholder="Batch No"
            onChange={(e) =>
              setForm({
                ...form,
                batchNo: e.target.value,
              })
            }
          />

          <input
            type="number"
            value={form.physicalQty}
            placeholder="Physical Qty"
            onChange={(e) =>
              setForm({
                ...form,
                physicalQty: Number(
                  e.target.value
                ),
              })
            }
          />

          <input
            type="number"
            value={form.reservedQty}
            placeholder="Reserved Qty"
            onChange={(e) =>
              setForm({
                ...form,
                reservedQty: Number(
                  e.target.value
                ),
              })
            }
          />

          <button onClick={createInventory}>
            Add Inventory
          </button>
        </div>

        <div
          className="card"
          style={{ marginTop: "20px" }}
        >
          <h2>Inventory List</h2>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Location</th>
                <th>Physical Qty</th>
                <th>Reserved Qty</th>
                <th>Available Qty</th>
              </tr>
            </thead>

            <tbody>
              {inventory.map((item) => (
                <tr key={item.id}>
                  <td>{item.itemName}</td>
                  <td>{item.category}</td>
                  <td>{item.location}</td>
                  <td>{item.physicalQty}</td>
                  <td>{item.reservedQty}</td>
                  <td>{item.availableQty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}