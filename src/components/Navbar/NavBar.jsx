import navbar from './Navbar.module.css'


const Navbar = () => {
    return ( 
        <nav className={navbar.nav}>
            <div>
                <a className={navbar.a} href="#about"> A </a>
            </div>
            <div className={navbar.div_a}>
                <a className={navbar.a} href="#about"> A </a>
            </div>
            
        </nav>
     );
}
 
export default Navbar;