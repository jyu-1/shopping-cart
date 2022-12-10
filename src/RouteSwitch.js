import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RouteSwitch;
