import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <Link to="/">
                <div>LAUREN</div>
            </Link>
            <ul className="nav-links">
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart [{props.itemCount}]</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
