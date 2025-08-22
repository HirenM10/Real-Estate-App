import PropertyForm from "../components/PropertyForm";
import { api } from "../api/mockApi";
import { useState } from "react";
import axios from "axios";

export default function AddPropertyPage() {
  const [message, setMessage] = useState("");

  const handleAdd = async (property) => {
    try {
      const response = await axios.post(
        "http://localhost:5180/api/properties",
        property
      );
      //setProperties(response.data.items);
      //setTotalCount(response.data.totalCount);
    } catch (err) {
      console.error("Error adding property", err);
    }

    setMessage("Property added successfully!");
  };

  return (
    <div className="flex justify-center bg-gray-50 py-12">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add Property
        </h1>
        <PropertyForm onSubmit={handleAdd} />
        {message && (
          <p className="mt-4 text-green-700 bg-green-100 border border-green-300 rounded p-2 text-center">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
