import { use } from "react";

async function fetchGroceries() {
  const res = await fetch("https://fakestoreapi.com/products"); // sample API
  if (!res.ok) {
    throw new Error("Failed to fetch groceries");
  }
  return res.json();
}

const groceriesPromise = fetchGroceries();

export default function Grocery() {
  // React 19 "use()" hook suspends until groceriesPromise resolves
  const groceries = use(groceriesPromise);

  return (
   <div className="min-h-screen bg-white px-6 py-10 pt-28">
  <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    🛒 Grocery Items
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {groceries.map((item) => (
      <div
        key={item.id}
        className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-contain mb-4"
        />

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {item.title}
        </h2>

        <p className="text-gray-600 text-sm mb-3">
          {item.description.substring(0, 80)}...
        </p>

        <p className="text-sm font-medium text-blue-600">
          Category: {item.category}
        </p>

        <p className="text-xl font-bold text-gray-900 mt-3">
          💰 ${item.price}
        </p>
      </div>
    ))}
  </div>
</div>

  );
}
