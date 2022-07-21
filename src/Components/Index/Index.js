import './Syle.css';
import React, {} from "react";
import {Link} from 'react-router-dom';
import quemaIlegal from '../../Assets/proyectos.jpeg'
import logoAso from '../../Assets/Logo-sin-nombre.png'

const Index = ()=>{

    return(
        <>
        <div className="container__general--85vh">
            <div className='hero-img'></div>
            <h1 className='box__index--title'>Quienes somos</h1>
            <img className='asociaciones' src={logoAso}></img>
            <p className="box__index--info-Company">Somos una <span>Asociacion civil</span> que 
                tiene su domicilio en la Provincia de 
                Buenos Aires con el objetivo y mision de cuidar,
                concientizar el medio ambiente y el cuidado de las especies animal que hay en este.
            </p>
            <Link 
            className='link--info' 
            to='/info'
            onClick={window.scrollY = "0"}
            >Leer más</Link>     
            <h1>Proyectos</h1>
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

export default Index