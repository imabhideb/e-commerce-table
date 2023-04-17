import MainTable from "./Components/MainTable";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FurnitureDetails from "./Components/FurnitureDetails";
import AddData from "./Components/AddData";
import Home from "./Home";

function App() {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/additems" element={<AddData/>} />
          <Route path="/shopitems" element={<MainTable/>} />
          <Route path="/details" element={<FurnitureDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
