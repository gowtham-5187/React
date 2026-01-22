import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Components/Home.jsx';
import Register from './Components/Register.jsx';
import Login from "./Components/Login.jsx";
import Navigation from "./Components/Navigation.jsx";
export default function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>      
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}