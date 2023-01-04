import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { Routes, Route} from "react-router-dom";
import './App.css';
import Category from "./components/Category/Caterory";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Category/>
    </> 
  );
}

export default App;
