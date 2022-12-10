import { Link } from "react-router-dom";

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
            <div>★★★★★ ({props.item.rating})</div>
            <div>${props.item.price}</div>
        </div>
    );
};

export default ShopItem;
