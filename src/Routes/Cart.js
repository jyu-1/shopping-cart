import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import catCart from "../assets/empty-cart.jpg";

const Cart = (props) => {
    const [emptyCart, setEmptyCart] = useState(true);

    useEffect(() => {
        if (props.cartItem.length === 0) {
            setEmptyCart(true);
        } else {
            setEmptyCart(false);
        }
    }, [props.cartItem.length]);

    useEffect(() => {
        document.title = `Lauren Official | Cart (${props.itemCount})`;
    }, [props.itemCount]);

    const quantityValidity = (id, num) => {
        if (num > 0) {
            props.updateQuantity(id, num);
        }
    };

    return (
        <div className="main-flex">
            {emptyCart ? (
                <div className="cart-empty">
                    <img src={catCart} alt="cat cart" />
                    <div>Your Cart is Empty</div>
                    <Link to={`/shop/`}>
                        <div>Click Here to Shop</div>
                    </Link>
                </div>
            ) : (
                <div className="cart">
                    {props.cartItem.map((e) => {
                        return (
                            <div key={e.id} className="cart-items">
                                <Link
                                    to={`/shop/${e.id}`}
                                    className="cart-item-image"
                                >
                                    <img
                                        src={e.thumbnail}
                                        alt="item"
                                        height={200}
                                        width={200}
                                    />
                                </Link>
                                <div className="cart-item-title">{e.title}</div>
                                <div className="cart-item-price">
                                    ${e.quantity * e.price}
                                </div>
                                <div className="cart-item-quantity">
                                    <button
                                        className="cart-decrease"
                                        onClick={() => {
                                            quantityValidity(
                                                e.id,
                                                Number(e.quantity) - 1
                                            );
                                        }}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        placeholder="Quantity"
                                        min={1}
                                        value={e.quantity}
                                        onChange={(event) => {
                                            quantityValidity(
                                                e.id,
                                                Number(event.target.value)
                                            );
                                        }}
                                    />
                                    <button
                                        className="cart-increase"
                                        onClick={() => {
                                            quantityValidity(
                                                e.id,
                                                Number(e.quantity) + 1
                                            );
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="cart-item-button">
                                    <button
                                        onClick={() => {
                                            props.deleteItem(e.id);
                                        }}
                                    >
                                        Remove Item
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    <div className="price-checkout-flex">
                        <div className="cart-total-price">
                            Total Price: ${props.totalPrice}
                        </div>
                        <button className="cart-checkout-button">
                            Check Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
