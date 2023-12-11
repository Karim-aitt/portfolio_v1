import navbar from './Navbar.module.css'


const Navbar = () => {
    return ( 
        <nav className={navbar.nav}>

            <div className={navbar.div_a}>
                <a className={navbar.a} href="#aboutMe"> 
                    <i className="fa-regular fa-address-card fa-xl"></i> 
                </a>
            </div>

            <div className={navbar.div_a}>
                <a className={navbar.a} href="#skills"> 
                    <i className="fa-solid fa-thumbtack fa-xl"></i>
                </a>
            </div>

            <div className={navbar.div_a}>
                <a className={navbar.a} href="#laboral"> 
                    <i className="fa-solid fa-briefcase fa-xl"></i>
                </a>
            </div>
            
            <div className={navbar.div_a}>
                <a className={navbar.a} href="#educacion"> 
                    <i className="fa-solid fa-graduation-cap fa-xl"></i>
                </a>
            </div>

            <div className={navbar.div_a}>
                <a className={navbar.a} href="#projects"> 
                    <i className="fa-solid fa-code-branch fa-xl"></i>
                </a>
            </div>
        </nav>
     );
}
 
export default Navbar;