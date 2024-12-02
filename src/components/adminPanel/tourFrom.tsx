import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Tour } from "../../types/api"; // Import the type

const TourForm = () => {
  const [tour, setTour] = useState<Tour | null>(null); // Type the state as Tour or null for new tour
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchTour = async () => {
        const response = await fetch(`/api/tours?id=${id}`);
        const data = await response.json();
        setTour({ ...data, id }); // Add the id field from query parameter
      };

      fetchTour();
    } else {
      setTour({ id: "", name: "", description: "", price: 0, availability: 0 });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = id ? "PUT" : "POST";
    await fetch("/api/tours", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...tour, id }),
    });

    router.push("/admin");
  };

  if (!tour) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? "Edit Tour" : "Add New Tour"}</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={tour.name}
          onChange={(e) => setTour({ ...tour, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={tour.description}
          onChange={(e) => setTour({ ...tour, description: e.target.value })}
          required
        ></textarea>
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={tour.price}
          onChange={(e) => setTour({ ...tour, price: parseFloat(e.target.value) })}
          required
        />
      </div>
      <div>
        <label>Availability</label>
        <input
          type="number"
          value={tour.availability}
          onChange={(e) => setTour({ ...tour, availability: parseInt(e.target.value) })}
          required
        />
      </div>
      <button type="submit">{id ? "Update Tour" : "Create Tour"}</button>
    </form>
  );
};

export default TourForm;
