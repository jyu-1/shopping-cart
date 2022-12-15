import { Link } from "react-router-dom";
import StarReview from "./StarReview";

const ShopItem = (props) => {
    return (
        <div className="shop-item">
            <Link to={`/shop/${props.item.id}`}>
                <img
                    src={props.item.thumbnail}
                    alt="products"
                    height={400}
                    width={300}
                />
            </Link>
            <div className="shop-item-brand">{props.item.brand}</div>
            <div>{props.item.title}</div>
            <span>
                <StarReview rating={props.item.rating} /> {props.item.rating}
            </span>
            <span>
                $ <span className="shop-item-price">{props.item.price}</span>
            </span>
            <button
                className="shop-item-button"
                onClick={() => {
                    props.addItem(props.item, 1);
                    props.enableModal();
                }}
            >
                Add To Cart
            </button>
        </div>
    );
};

export default ShopItem;
