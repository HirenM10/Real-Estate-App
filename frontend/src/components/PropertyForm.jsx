import { useState } from "react";

export default function PropertyForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    price: "",
    address: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.type ||
      !form.price ||
      !form.address ||
      !form.description
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");
    onSubmit({ ...form, price: parseInt(form.price), spaces: [] });
    setForm({ name: "", type: "", price: "", address: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Property Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Property Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g., Sunny Villa"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Address</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="123 Main St, City"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Write a short description..."
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
          rows="3"
        ></textarea>
      </div>

      {/* Type */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Type</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="">Select Type</option>
          <option value="1">House</option>
          <option value="2">Apartment</option>
          <option value="3">Condo</option>
        </select>
      </div>

      {/* Price */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Price ($)
        </label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="e.g., 250000"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Error */}

      {error && (
        <p className="text-red-500 bg-red-100 border border-red-300 rounded p-2 text-sm">
          {error}
        </p>
      )}

      {/* Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Add Property
      </button>
    </form>
  );
}
