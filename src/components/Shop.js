import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const itemResponse = await fetch("https://fakestoreapi.com/products");

        const itemData = await itemResponse.json();

        const filteredItem = itemData.filter((item) => {
            return (
                item.category === "men's clothing" ||
                item.category === "women's clothing" ||
                item.category === "jewelery"
            );
        });
        setItems(filteredItem);
    };

    useEffect(() => {
        fetchItems();
        console.log("fetch once");
    }, []);

    return (
        <div className="main-flex">
            <div>
                {items.map((item) => (
                    <div key={item.id}>
                        <Link
                            to={`/shop/${item.id}`}
                            state={{
                                title: item.title,
                                description: item.description,
                                price: item.price,
                                rating: item.rating,
                                image: item.image,
                            }}
                        >
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
