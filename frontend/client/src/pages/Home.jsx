import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [entities, setEntities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEntities();
  }, []);

  const fetchEntities = () => {
    axios.get("http://localhost:5000/api/entities")
      .then((res) => setEntities(res.data));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/entities/${id}`)
      .then(() => fetchEntities());
  };

  return (
    <div>
      <h2>Entity List</h2>
      <p>DEBUG: entities length = {entities.length}</p>
      {entities.length === 0 ? (
        <p>No entities found.</p>
      ) : (
        entities.map((entity) => (
          <div key={entity._id}>
            {entity.name} - {entity.type}
            <button onClick={() => navigate(`/update/${entity._id}`)}>Edit</button>
            <button onClick={() => handleDelete(entity._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
