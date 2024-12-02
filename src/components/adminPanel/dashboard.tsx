import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Tour } from "../../types/api"; // Import the type

const Dashboard = () => {
  const [tours, setTours] = useState<Tour[]>([]); // Specify the type for tours array
  const router = useRouter();

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch("/api/tours");
      const data = await response.json();
      setTours(data);
    };

    fetchTours();
  }, []);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this tour?");
    if (!confirm) return;

    await fetch(`/api/tours`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={() => router.push("/admin/manage-tours")}>Add New Tour</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id}>
              <td>{tour.name}</td>
              <td>{tour.description}</td>
              <td>{tour.price}</td>
              <td>
                <button onClick={() => router.push(`/admin/manage-tours?id=${tour.id}`)}>Edit</button>
                <button onClick={() => handleDelete(tour.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
