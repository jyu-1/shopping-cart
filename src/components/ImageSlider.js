import { useState } from "react";

const ImageSlider = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const length = props.slides.length;

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    };

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
    };

    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <button className="slider-prev-button" onClick={prevSlide}>
                &#8656;
            </button>
            <button className="slider-next-button" onClick={nextSlide}>
                &#8658;
            </button>
            <img
                src={props.slides[currentImage]}
                alt="product slider"
                width={500}
                height={600}
            />
            <div className="slider-selector">
                {props.slides.map((slide, index) => {
                    return currentImage === index ? (
                        <button
                            className="slider-selector-button"
                            key={index}
                            onClick={() => {
                                setCurrentImage(index);
                            }}
                        >
                            &#9679;
                        </button>
                    ) : (
                        <button
                            className="slider-selector-button"
                            key={index}
                            onClick={() => {
                                setCurrentImage(index);
                            }}
                        >
                            &#9675;
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageSlider;
