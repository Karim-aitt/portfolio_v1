import avatar from "./Avatar.module.css"

const Avatar = () => {
    return ( 
    <aside className={avatar.aside}>
        <div className={avatar.div_img}>
            <img className={avatar.img} src="src/assets/avatar.png" />
        </div>
        <div className={avatar.div}>
            <h2 className={avatar.h2}>KARIM</h2>
            <p className={avatar.p}>Desarrollador Web Full Stack</p>
            <ul className={avatar.ul}>
                <li>
                    <a href="https://www.linkedin.com/in/karimdev/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto: karim.gonzalez.ait@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Karim-aitt">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    </aside> 
    );
}
 
export default Avatar;