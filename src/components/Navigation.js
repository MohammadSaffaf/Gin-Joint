import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav>
            <ul id="navi">
            <li>
        <Link to="/">HOME</Link>
        </li>
        <li>
        <Link to="/ENTERTAIMENT">ENTERTAIMENT</Link>
        </li>
        <li>
        <Link to="/SHOP">SHOP</Link>
        </li>
        <li>
        <Link to="/EVENTS">EVENTS</Link>
        </li>
        <li>
        <Link to="/Contact">CONTACT</Link>
        </li>
                
            </ul>
        </nav>
     );
}
 
export default Navigation;
