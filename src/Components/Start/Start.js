import './Syle.css';
import React, {} from "react";
import {Link} from 'react-router-dom';
import quemaIlegal from '../../Assets/proyectos.jpeg'
import logoAso from '../../Assets/Logo-sin-nombre.png'

const Start = ()=>{

    return(
        <>
        <div className="container__general--85vh">
            <div className='hero-img'></div>
            <h1>Quienes somos</h1>
            <img className='asociaciones' src={logoAso}></img>
            <p><span>Somos una Asociacion civil que </span>
                tiene su domicilio en la Provincia de 
                Buenos Aires con el objetivo y mision de cuidar,
                concientizar el medio ambiente y el cuidado de las especies animal que hay en este.
            </p>
            <Link 
            className='nav__list--link' 
            to='/info'>mas info...</Link>     
            <h1>Proyectos ahora mismo</h1>
            <div>
                <div className='notice'>
                    <img className='proyects' src={quemaIlegal}></img>
                    <p>Documetacion sobre quema ilegal en misiones.</p>
                </div>
            </div>
           
        </div>
        </>
    );


};

export default Start