import React, { useState } from "react";

function App() {
  const [entities, setEntities] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type) return;

    const newEntity = {
      id: Date.now(),
      name,
      type,
    };

    setEntities([...entities, newEntity]); // Add new entity to list
    setName("");
    setType("");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">ASAP - Add Entity</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block font-medium">Type</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter type"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Entity
        </button>
      </form>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-2">Entity List</h2>
      {entities.length === 0 ? (
        <p>No entities added yet.</p>
      ) : (
        <ul className="space-y-2">
          {entities.map((entity) => (
            <li key={entity.id} className="border p-2 rounded">
              <strong>{entity.name}</strong> - {entity.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
