import avatar from "./Avatar.module.css"

const Avatar = () => {
    return ( 
    <aside className={avatar.aside}>
        <div className={avatar.div_img}>
            <img className={avatar.img} src="src/assets/avatar.png" />
        </div>
        <div className={avatar.div}>
            <h2 className={avatar.h2}>Karim</h2>
            <p className={avatar.p}>Desarrollador Web Full Stack</p>
            <ul className={avatar.ul}>
                <li>
                    <a>i</a>
                </li>
                <li>
                    <a>i</a>
                </li>
                <li>
                    <a>i</a>
                </li>
            </ul>
        </div>
    </aside> 
    );
}
 
export default Avatar;