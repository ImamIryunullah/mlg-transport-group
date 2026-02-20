import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Armada from "./pages/Armada";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/armada" element={<Armada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
