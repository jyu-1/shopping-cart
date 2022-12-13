import { useEffect } from "react";
import { Link } from "react-router-dom";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home5.jpg";

const Home = () => {
    useEffect(() => {
        document.title = "Lauren Official | Home";
    }, []);

    return (
        <div className="home-page">
            <img src={home1} alt="pic1" />
            <div className="home-text">
                <div>NEW STYLES WEEKLY</div>
                <div>BEST FASHION STORE OF 2022</div>
                <Link to="/shop">
                    <button className="home-text-button">SHOP NOW</button>
                </Link>
            </div>
            <img src={home2} alt="pic2" />
            <img src={home3} alt="pic3" />
            <img src={home4} alt="pic4" />
            <img src={home5} alt="pic5" />
        </div>
    );
};

export default Home;
