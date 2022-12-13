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
            <hr />
            <div>{props.item.title}</div>
            <StarReview rating={props.item.rating} /> ({props.item.rating})
            <div>${props.item.price}</div>
            <button
                onClick={() => {
                    props.addItem(props.item, 1);
                }}
            >
                Add To Cart
            </button>
        </div>
    );
};

export default ShopItem;
