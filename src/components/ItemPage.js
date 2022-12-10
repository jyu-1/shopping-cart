import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ItemPage = () => {
    const itemDetail = useLocation();
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(itemDetail.state);
    }, [itemDetail]);

    return (
        <div className="main-flex">
            <div>
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <div>
                    {itemDetail.state.rating.rate}:
                    {itemDetail.state.rating.count}
                </div>

                <div>
                    <img src={item.image} alt="shop item" />
                </div>
            </div>
        </div>
    );
};

export default ItemPage;
