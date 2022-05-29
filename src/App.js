import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hoa_don from "./pages/hoadon/Hoa_don";
import Chi_tiet from "./pages/chitiet/Chi_tiet";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Email from "./components/Login/Email";
import Register from "./components/Register/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels_detail" element={<Hotel />} />
        <Route path="/hoadon" element={<Hoa_don />} />
        <Route path="/chitiet" element={<Chi_tiet/>}/>
        <Route path="/Login" element={<Email />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
