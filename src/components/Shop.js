import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    const [items, setItems] = useState([]);
    const [goodFetch, setGoodFetch] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchItems = async () => {
        try {
            const itemsResponse = await fetch(
                "https://dummyjson.com/products?limit=50&skip=35"
            );

            if (itemsResponse.status === 200) {
                const itemsData = await itemsResponse.json();
                setItems(itemsData.products);
                setGoodFetch(true);
            } else if (itemsResponse.status === 404) {
                setErrorMessage(`Item list not found.`);
                setGoodFetch(false);
            } else {
                setErrorMessage("Bad Request");
                setGoodFetch(false);
            }
        } catch (error) {
            setErrorMessage("API Failure");
            setGoodFetch(false);
        }
    };

    useEffect(() => {
        fetchItems();
        console.log("fetch items");
    }, []);

    return (
        <div className="main-flex">
            {goodFetch ? (
                <div>
                    {items.map((item) => (
                        <div key={item.id}>
                            <Link to={`/shop/${item.id}`}>{item.title}</Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>{errorMessage}</div>
            )}
        </div>
    );
};

export default Shop;
