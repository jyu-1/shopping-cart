import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
import Cart from "./Routes/Cart";
import NotFound from "./Routes/NotFound";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ItemPage from "./components/ItemPage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop/:id" element={<ItemPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RouteSwitch;
