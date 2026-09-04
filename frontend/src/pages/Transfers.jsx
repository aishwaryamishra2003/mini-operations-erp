import { useEffect, useState } from "react";
import api from "../services/api";

export default function Transfers() {
  const [transfers, setTransfers] = useState([]);

  const [form, setForm] = useState({
    itemName: "",
    fromLocation: "",
    toLocation: "",
    quantity: 0,
  });

  useEffect(() => {
    fetchTransfers();
  }, []);

  const fetchTransfers = async () => {
    const token = localStorage.getItem("token");

    const res = await api.get("/transfers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTransfers(res.data);
  };

  const createTransfer = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/transfers",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Transfer Created");

      fetchTransfers();

    } catch (err) {
      console.error(err);
      alert("Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Transfers</h1>

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
        placeholder="From Location"
        onChange={(e) =>
          setForm({
            ...form,
            fromLocation: e.target.value,
          })
        }
      />

      <input
        placeholder="To Location"
        onChange={(e) =>
          setForm({
            ...form,
            toLocation: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Quantity"
        onChange={(e) =>
          setForm({
            ...form,
            quantity: Number(e.target.value),
          })
        }
      />

      <button onClick={createTransfer}>
        Create Transfer
      </button>

      <hr />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Item</th>
            <th>From</th>
            <th>To</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {transfers.map((t) => (
            <tr key={t.id}>
              <td>{t.itemName}</td>
              <td>{t.fromLocation}</td>
              <td>{t.toLocation}</td>
              <td>{t.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}