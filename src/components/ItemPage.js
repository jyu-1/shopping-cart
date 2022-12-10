import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemPage = () => {
    const [item, setItem] = useState({ images: "" });
    const [goodFetch, setGoodFetch] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();

    const fetchItem = async (productId) => {
        try {
            const itemResponse = await fetch(
                `https://dummyjson.com/products/${productId}`
            );

            if (itemResponse.status === 200) {
                const itemData = await itemResponse.json();
                setItem(itemData);
                setGoodFetch(true);
            } else if (itemResponse.status === 404) {
                setErrorMessage(`${productId} not found.`);
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
        fetchItem(id);
        console.log("fetch item");
    }, [id]);

    return (
        <div className="main-flex">
            {goodFetch ? (
                <div>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                    <div>{item.brand}</div>
                    <div>{item.price}</div>
                    <div>{item.rating}</div>
                    <div>{item.stock}</div>
                    <img src={item.images[0]} alt="product" />
                </div>
            ) : (
                <div>{errorMessage}</div>
            )}
        </div>
    );
};

export default ItemPage;
