import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Modern Styles | Home";
    }, []);

    return <div className="main-flex">Home</div>;
};

export default Home;
