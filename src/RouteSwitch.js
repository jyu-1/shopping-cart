import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ItemPage from "./components/ItemPage";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Nav />
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/shop/:id" element={<ItemPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ErrorBoundary>
            <Footer />
        </BrowserRouter>
    );
};

export default RouteSwitch;
