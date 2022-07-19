import './Syle.css';
import React, {} from "react";
import {Link} from 'react-router-dom';

const Start = ()=>{

    return(
        <>
        <div className="container__general--85vh">
            <div className='hero-img'></div>
            <h1>Quienes somos</h1>
            <p><span>Somos una Asociacion civil que</span>
                tiene su domicilio en la Provincia de 
                Buenos Aires con el objetivo y mision de cuidar,
                concientizar el medio ambiente y el cuidado de las especies animal que hay en este.
            </p>
            <Link 
            className='nav__list--link' 
            to='/info'>info...</Link>     
            <h1>Proyectos ahora mismo</h1>
            <div>
                <div>
                    <img className='proyects'></img>
                    <p>Quema de pastisales ilegales en misiones.</p>
                </div>
            </div>
           
        </div>
        </>
    );


};

export default Start