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

    return (
        <div className="main-flex">
            {emptyCart ? (
                <div>Cart is Empty</div>
            ) : (
                <div className="cart">
                    {props.cartItem.map((e) => {
                        return (
                            <div key={e.id}>
                                <Link to={`/shop/${e.id}`}>
                                    <img
                                        src={e.thumbnail}
                                        alt="item"
                                        height={200}
                                        width={200}
                                    />
                                </Link>
                                <hr />
                                <div>{e.title}</div>
                                <div>${e.price}</div>
                                <div>Quantity: {e.quantity}</div>
                                <button
                                    onClick={() => {
                                        props.deleteItem(e.id);
                                    }}
                                >
                                    Remove Item
                                </button>
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
