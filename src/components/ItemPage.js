import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemPage = () => {
    const [item, setItem] = useState({ images: "" });
    const { id } = useParams();

    const fetchItem = async (productId) => {
        const itemResponse = await fetch(
            `https://dummyjson.com/products/${productId}`
        );

        console.log(itemResponse);

        const itemData = await itemResponse.json();

        console.log(itemData);

        setItem(itemData);
    };

    useEffect(() => {
        fetchItem(id);
        console.log("fetch item");
    }, [id]);

    return (
        <div className="main-flex">
            <div>
                <div>{item.title}</div>
                <div>{item.description}</div>
                <div>{item.brand}</div>
                <div>{item.price}</div>
                <div>{item.rating}</div>
                <div>{item.stock}</div>
                <img src={item.images[0]} alt="product" />
            </div>
        </div>
    );
};

export default ItemPage;
