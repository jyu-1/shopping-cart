import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                <div>Cart is Empty</div>
            ) : (
                <div className="cart">
                    {props.cartItem.map((e) => {
                        return (
                            <div key={e.id}>
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
                                    ${e.price}
                                </div>
                                <div className="cart-item-quantity">
                                    <button className="cart-decrease">-</button>
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
                                    <button className="cart-increase">+</button>
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
                    <div>Total Price: ${props.totalPrice}</div>
                </div>
            )}
        </div>
    );
};

export default Cart;
