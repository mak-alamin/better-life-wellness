import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />

        <Route path="checkout" element={<Checkout></Checkout>} />

        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />

        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </>
  );
}

export default App;
