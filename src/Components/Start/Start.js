import './Syle.css';
import React, {} from "react";

const imageProyect = require.context('../../Assets', true)

const Start = ()=>{




    return(
        <>
        <div className="container__general--85vh">
            <div className='hero-img'>Universo Animal</div>
            <h1>Proyectos ahora mismo</h1>
            <div>
                <div>
                    <img className='proyects' src={imageProyect('./proyectos.jpeg')}></img>
                    <p>Quema de pastisales ilegales en misiones.</p>
                </div>
            </div>
           
        </div>
        </>
    );


};

export default Start