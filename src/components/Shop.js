import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const itemsResponse = await fetch(
            "https://dummyjson.com/products?limit=50&skip=35"
        );

        const itemsData = await itemsResponse.json();

        setItems(itemsData.products);
    };

    useEffect(() => {
        fetchItems();
        console.log("fetch items");
    }, []);

    return (
        <div className="main-flex">
            <div>
                {items.map((item) => (
                    <div key={item.id}>
                        <Link to={`/shop/${item.id}`}>{item.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
