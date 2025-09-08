import { use } from "react";

async function fetchGroceries() {
  const res = await fetch("https://fakestoreapi.com/products"); // sample API
  if (!res.ok) {
    throw new Error("Failed to fetch groceries");
  }
  return res.json();
}

// Run the fetch once at module level
const groceriesPromise = fetchGroceries();

export default function Grocery() {
  // React 19 "use()" hook suspends until groceriesPromise resolves
  const groceries = use(groceriesPromise);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Grocery Items</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {groceries.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "contain",
                marginBottom: "12px",
              }}
            />
            <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
              {item.title}
            </h2>
            <p style={{ color: "#666", fontSize: "14px", marginBottom: "8px" }}>
              {item.description.substring(0, 80)}...
            </p>
            <p
              style={{ fontSize: "14px", fontWeight: "bold", color: "#007BFF" }}
            >
              Category: {item.category}
            </p>
            <p
              style={{ fontSize: "16px", fontWeight: "bold", marginTop: "8px" }}
            >
              💰 ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
