import { Link } from "react-router-dom";

const Cart = (props) => {
    return (
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
        </div>
    );
};

export default Cart;
