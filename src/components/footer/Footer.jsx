import footer from "./Footer.module.css";

const Footer = () => {

    const año = new Date().getFullYear();

    return ( 
        <div className={footer.container}>
            <div className={footer.div_text}>
                <p className={footer.p}>
                    Karim Gonzalez ©️ {año}
                </p>

            </div>
        </div> 
    );

}
 
export default Footer;