import MainTable from "./Components/MainTable";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import FurnitureDetails from "./Components/FurnitureDetails";


function App() {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainTable />} />
          <Route path="/details" element={<FurnitureDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
