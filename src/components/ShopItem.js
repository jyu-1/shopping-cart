import { Link } from "react-router-dom";

const ShopItem = (props) => {
    console.log(props.item);
    return (
        <div>
            <Link to={`/shop/${props.item.id}`}>
                <img
                    src={props.item.thumbnail}
                    alt="products"
                    height={400}
                    width={300}
                />
            </Link>
            <div>{props.item.title}</div>
            <div style={{ color: "red" }}>★★★★★ ({props.item.rating})</div>
            <div>${props.item.price}</div>
        </div>
    );
};

export default ShopItem;
