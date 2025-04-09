import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEntity from "./pages/AddEntity";
import UpdateEntity from "./pages/UpdateEntity";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEntity />} />
        <Route path="/update/:id" element={<UpdateEntity />} />
      </Routes>
    </Router>
  );
}

export default App;
