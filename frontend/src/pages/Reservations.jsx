import { useEffect, useState } from "react";
import api from "../services/api";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  const [form, setForm] = useState({
    itemName: "",
    location: "",
    reservedQty: 0,
    reservedBy: "",
  });

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    const token = localStorage.getItem("token");

    const res = await api.get("/reservations", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setReservations(res.data);
  };

  const createReservation = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/reservations",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Reservation Created");

      fetchReservations();

    } catch (err) {
      console.error(err);
      alert("Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Reservations</h1>

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
        placeholder="Reserved Qty"
        onChange={(e) =>
          setForm({
            ...form,
            reservedQty: Number(e.target.value),
          })
        }
      />

      <input
        placeholder="Reserved By"
        onChange={(e) =>
          setForm({
            ...form,
            reservedBy: e.target.value,
          })
        }
      />

      <button onClick={createReservation}>
        Create Reservation
      </button>

      <hr />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Item</th>
            <th>Location</th>
            <th>Qty</th>
            <th>Reserved By</th>
          </tr>
        </thead>

        <tbody>
          {reservations.map((r) => (
            <tr key={r.id}>
              <td>{r.itemName}</td>
              <td>{r.location}</td>
              <td>{r.reservedQty}</td>
              <td>{r.reservedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}