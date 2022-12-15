import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarReview from "./StarReview";
import errorImg from "../assets/error.jpg";
import ImageSlider from "./ImageSlider";

const ItemPage = (props) => {
    const [item, setItem] = useState({ images: "" });
    const [goodFetch, setGoodFetch] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [quantity, setQuantity] = useState(1);
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

    const quantityValidity = (num) => {
        if (num > 0) {
            setQuantity(num);
        }
    };

    useEffect(() => {
        fetchItem(id);
    }, [id]);

    useEffect(() => {
        if (item.title !== undefined) {
            document.title = `Lauren Official | ${item.title}`;
        } else {
            document.title = `Lauren Official | Not Found`;
        }
    }, [item.title]);

    return (
        <div className="main-flex">
            {goodFetch ? (
                <div className="item-page">
                    <ImageSlider slides={item.images} />
                    <div className="item-page-rightside">
                        <div className="item-page-brand">
                            Brand: {item.brand}
                        </div>
                        <div className="item-page-title">{item.title}</div>
                        <div className="item-page-price">${item.price}</div>
                        <span className="item-page-rating">
                            <StarReview rating={item.rating} /> {item.rating}
                        </span>
                        <div className="item-page-description">
                            Description:
                        </div>
                        <div className="item-page-description-two">
                            {item.description}
                        </div>
                        <div className="item-page-stock">
                            {item.stock} in stock
                        </div>
                        <div>Free Shipping!</div>
                        <div className="item-page-quantity">
                            <button
                                className="item-decrease"
                                onClick={() => {
                                    quantityValidity(Number(quantity) - 1);
                                }}
                            >
                                -
                            </button>
                            <input
                                className="item-page-input"
                                type="number"
                                value={quantity}
                                placeholder="Quantity"
                                min={1}
                                onChange={(e) => {
                                    quantityValidity(Number(e.target.value));
                                }}
                            />
                            <button
                                className="item-increase"
                                onClick={() => {
                                    quantityValidity(Number(quantity) + 1);
                                }}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="item-page-add"
                            onClick={() => {
                                props.addItem(item, quantity);
                                props.enableModal();
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ) : (
                <div className="item-page-error">
                    <img src={errorImg} alt="dog" />
                    <div>{errorMessage}</div>
                </div>
            )}
        </div>
    );
};

export default ItemPage;
