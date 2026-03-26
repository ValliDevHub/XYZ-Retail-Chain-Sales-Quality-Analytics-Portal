import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Sales from "./Pages/Sales";
import Quality from "./Pages/Quality";
import About from "./Pages/About";
function App() {
  return (
   <BrowserRouter>
  <Sidebar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sales" element={<Sales />} />
    <Route path="/quality" element={<Quality />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;