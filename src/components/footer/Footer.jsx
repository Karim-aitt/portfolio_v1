
import { useState } from "react";

const Footer = (props) => {

    let telefono = props.numero;

    const [numeroNuevo, setNumeroNuevo] = useState(0)

    function cambiar(){
        setNumeroNuevo(1234)
    }


    return ( 
        <>
            <hr />
            <h2>Contacto</h2>
            <p>telefono {telefono}</p>
            <p>{numeroNuevo}</p>

            <button onClick={cambiar}>
                Cambiar
            </button>
        </> 
    );

}
 
export default Footer;