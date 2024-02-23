import React, {useContext} from "react"
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/authContext";

const NavLink = ({to, item}) => {
    return(
        <li>
            <Link
                to={to}
                style={{textDecoration: "none"}}>
                    {item}
                </Link>
        </li>
    );
};

const Navbar = () => {
    const {isAuthenthicated, login, logout} = useContext(AuthContext);
        const navdetail = [
            { navItem: "Home", path: "/" },
            { navItem: "About", path: "/about" },
            { navItem: "Community", path: "/community" },
            { navItem: "Faq", path: "/path" },
        ];

    return(
        <nav
        style={{
            backgroundColor: "green",
            textAlign: "right",
            display: "flex",
            justifyContent: "space-between",
        }}>
        <ul
            style={{
                textAlign: "right",
                display: "flex",
                gap: "20px",
                listStyle: "none"
        }}>

        {navdetail.map((elem) =>(
            <NavLink
                key={elem.navItem}
                to={elem.path}
                item={elem.navItem}
            />
        ))}   

        {/*<li>
            <Link to='/about'>About</Link>
        </li>*/} 
        
            </ul>
            { isAuthenthicated? (
                <button onClick={logout}>logout</button>
            ) : (
                <button onClick={login}>login</button>
            )}
        </nav>
    );
};

export default Navbar;