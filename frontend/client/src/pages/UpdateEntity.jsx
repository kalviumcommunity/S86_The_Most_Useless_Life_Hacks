import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateEntity() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/entities/${id}`)
      .then((res) => {
        setName(res.data.name);
        setType(res.data.type);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/entities/${id}`, { name, type })
      .then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update Entity</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateEntity;
