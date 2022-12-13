import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        document.title = "Lauren Official | Page Not Found";
    }, []);

    return <div className="main-flex">404: Page not found</div>;
};

export default NotFound;
