import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarReview from "./StarReview";

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
                setErrorMessage(`Product ${productId} not found.`);
                setGoodFetch(false);
            } else {
                setErrorMessage("Unknown Request");
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
                <div className="item-page">
                    <img src={item.images[0]} alt="product" />
                    <div>
                        <div>Brand: {item.brand}</div>
                        <div>{item.title}</div>
                        <StarReview rating={item.rating} />({item.rating})
                        <hr />
                        <div>${item.price}</div>
                        <div>{item.stock} in stock</div>
                        <div>{item.description}</div>
                        <input
                            type="number"
                            placeholder="Quantity"
                            defaultValue="1"
                            min={1}
                        ></input>
                        <button>Add to Cart</button>
                    </div>
                </div>
            ) : (
                <div>{errorMessage}</div>
            )}
        </div>
    );
};

export default ItemPage;
