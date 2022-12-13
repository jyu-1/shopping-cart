import { NavLink } from "react-router-dom";

const Nav = (props) => {
    const activeClassName = "active-nav-class";
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
            >
                <div className="logo active-nav">LAUREN</div>
            </NavLink>
            <ul className="nav-links">
                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    <li className="active-nav">SHOP</li>
                </NavLink>
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }
                >
                    <li className="cart-align active-nav">
                        <CartIcon />
                        <span className="cart-number">{props.itemCount}</span>
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
};

const CartIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16"
        >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
    );
};

export default Nav;
