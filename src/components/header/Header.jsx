import estilitos from "./header.module.css"


function Header (){


return(

<div className="encabezade">

    <div className = {estilitos.headerPrin}>
     <div className= {estilitos.h2container}>
       <div className ={estilitos.container_h2_boton}>
        <h2 className= {estilitos.h2}>Web Developer</h2>

       </div>
        
    </div>   

    {/* <button className = {estilitos.boton}>click</button> */}
    </div>



</div>





)




}

export default Header