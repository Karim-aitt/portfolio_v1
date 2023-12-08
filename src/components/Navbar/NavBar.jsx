import styles from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            
            <Link to="/"> Homepage </Link>
            <Link to="/about"> Aboutpage </Link>
            
        </nav>
     );
}
 
export default Navbar;