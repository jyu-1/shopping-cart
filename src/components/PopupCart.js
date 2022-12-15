import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import catCart from "../assets/empty-cart.jpg";

const PopupCart = (props) => {
    const [emptyCart, setEmptyCart] = useState(true);

    useEffect(() => {
        if (props.cartItem.length === 0) {
            setEmptyCart(true);
        } else {
            setEmptyCart(false);
        }
    }, [props.cartItem.length]);

    const quantityValidity = (id, num) => {
        if (num > 0) {
            props.updateQuantity(id, num);
        }
    };

    return (
        <>
            <div className={`modal ${props.displayModal ? "show" : ""}`}>
                <div className="modal-sticky">
                    <Link to="/cart">
                        <button
                            className="modal-checkout"
                            onClick={() => {
                                props.disableModal();
                            }}
                        >
                            Checkout
                        </button>
                    </Link>
                    <button
                        className="modal-close"
                        onClick={() => {
                            props.disableModal();
                        }}
                    >
                        Close Cart
                    </button>
                </div>
                {emptyCart ? (
                    <div className="modal-cart-empty">
                        <img src={catCart} alt="cat cart" />
                        <div>Your Cart is Empty</div>
                        <Link to={`/shop/`}>
                            <div
                                onClick={() => {
                                    props.disableModal();
                                }}
                            >
                                Click Here to Shop
                            </div>
                        </Link>
                    </div>
                ) : (
                    <div>
                        {props.cartItem.map((e) => {
                            return (
                                <div key={e.id} className="modal-cart-items">
                                    <Link
                                        to={`/shop/${e.id}`}
                                        className="modal-cart-item-image"
                                    >
                                        <img
                                            src={e.thumbnail}
                                            alt="item"
                                            height={100}
                                            width={100}
                                        />
                                    </Link>
                                    <div className="modal-cart-item-title">
                                        {e.title}
                                    </div>
                                    <div className="modal-cart-item-price">
                                        ${e.quantity * e.price}
                                    </div>
                                    <div className="modal-cart-item-quantity">
                                        <button
                                            className="modal-cart-decrease"
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
                                            className="modal-cart-increase"
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
                                    <div className="modal-cart-item-button">
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
                        </div>
                    </div>
                )}
            </div>
            <div
                className={`modal-overlay ${props.displayModal ? "show" : ""}`}
                onClick={() => {
                    props.disableModal();
                }}
            />
        </>
    );
};

export default PopupCart;
