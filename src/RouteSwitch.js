import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
import Cart from "./Routes/Cart";
import NotFound from "./Routes/NotFound";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ItemPage from "./components/ItemPage";
import { useEffect, useState } from "react";

const RouteSwitch = () => {
    const [cartItem, setCartItem] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [displayModal, setDisplayModal] = useState(false);

    const addItem = (itemObject, itemQuantity) => {
        setCartItem(() => {
            if (cartItem.some((item) => item.id === itemObject.id)) {
                return cartItem.map((e) => {
                    if (e.id === itemObject.id) {
                        return {
                            ...e,
                            quantity: e.quantity + itemQuantity,
                        };
                    } else {
                        return e;
                    }
                });
            } else {
                return [...cartItem, { ...itemObject, quantity: itemQuantity }];
            }
        });
    };

    const deleteItem = (itemId) => {
        setCartItem(cartItem.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId, itemQuantity) => {
        setCartItem(
            cartItem.map((item) => {
                if (item.id === itemId) {
                    return { ...item, quantity: itemQuantity };
                } else return item;
            })
        );
    };

    useEffect(() => {
        setTotalPrice(
            cartItem.reduce((total, current) => {
                return total + current.price * current.quantity;
            }, 0)
        );

        setItemCount(
            cartItem.reduce((total, current) => {
                return total + current.quantity;
            }, 0)
        );
    }, [cartItem]);

    useEffect(() => {
        if (displayModal === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [displayModal]);

    const disableModal = () => {
        setDisplayModal(false);
    };

    const enableModal = () => {
        setDisplayModal(true);
    };

    return (
        <BrowserRouter basename="/shopping-cart">
            <Nav
                cartItem={cartItem}
                deleteItem={deleteItem}
                totalPrice={totalPrice}
                updateQuantity={updateQuantity}
                itemCount={itemCount}
                enableModal={enableModal}
                disableModal={disableModal}
                displayModal={displayModal}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/shop"
                    element={
                        <Shop addItem={addItem} enableModal={enableModal} />
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItem={cartItem}
                            deleteItem={deleteItem}
                            totalPrice={totalPrice}
                            updateQuantity={updateQuantity}
                            itemCount={itemCount}
                        />
                    }
                />
                <Route
                    path="/shop/:id"
                    element={
                        <ItemPage addItem={addItem} enableModal={enableModal} />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RouteSwitch;
