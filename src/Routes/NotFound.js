import { useEffect } from "react";
import errorImg from "../assets/error.jpg";

const NotFound = () => {
    useEffect(() => {
        document.title = "Lauren Official | Page Not Found";
    }, []);

    return (
        <div className="main-flex">
            <div className="not-found-page">
                <img src={errorImg} alt="dog" />
                <div>404: Page not found</div>
            </div>
        </div>
    );
};

export default NotFound;
