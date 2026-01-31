import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Components/Home.jsx'
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import Navigation from "./Components/Navigation.jsx";
import AddProduct from "./Components/Addproduct.jsx";
import Cart from './Components/Cart.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>      
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}