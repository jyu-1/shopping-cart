import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <div>Logo</div>
            </Link>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
