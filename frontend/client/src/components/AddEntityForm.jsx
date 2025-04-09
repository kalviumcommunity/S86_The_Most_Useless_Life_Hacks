// src/components/AddEntityForm.jsx
import { useState } from "react";
import axios from "axios";

function AddEntityForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/entities", {
        name,
        role,
      });
      setMessage("Entity added successfully!");
      setName("");
      setRole("");
    } catch (error) {
      setMessage("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <label>Role: </label>
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add Entity</button>
      <p>{message}</p>
    </form>
  );
}

export default AddEntityForm;
