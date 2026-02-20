import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Armada from "./pages/Armada";
import PaketLebaran from "./pages/PaketLebaran";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/armada" element={<Armada />} />
        <Route path="/paket-lebaran" element={<PaketLebaran />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
