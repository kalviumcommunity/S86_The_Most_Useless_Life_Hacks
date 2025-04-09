// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hello from ASAP App</h1>
      <Link to="/add">
        <button>Add New Entity</button>
      </Link>
    </div>
  );
}

export default Home;
