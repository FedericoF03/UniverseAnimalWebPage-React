import './Syle.css';
import NoticesApi from './NoticesApi/NoticeApi';
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import quemaIlegal from '../../Assets/proyectos.jpeg';
import logoAso from '../../Assets/Logo-sin-nombre.png';
import before from '../../Assets/galeria/atras.png'
import after from '../../Assets/galeria/proximo.png'

const Index = ()=>{

    const [info, setInfo] = useState([]);
    const [numberSlider, setNumberSlider] = useState(0)

    useEffect(()=>{
        petition();
    }, [])

    const petition = async()=>{
        let json = await fetch("http://api.mediastack.com/v1/news?access_key=f29879c9d3d289744466591dd54632c0&languages=es&keywords=fauna&limit=3");
        let res = await json.json();
        res.data.forEach(el=> {
                
            let object = {
                    title: el.title,
                    description: el.description,
                    url: el.url,
                    source: el.source,
                    img: el.image,
                };
                setInfo(info=>[...info, object]);
        });
    };

    return(
        <>
        <div className="container__general--85vh">
            <div className='hero-img'></div>
            <h1 className='box__index--title'>Quienes somos</h1>
            <img className='box__logo--aso' src={logoAso}></img>
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
            <h3 className='box__index--proyects-notice--title'>Proyectos</h3>
            <div>
                <div>
                    <img className='proyects' src={quemaIlegal}></img>
                    <p>Documetacion sobre quema ilegal en misiones.</p>
                </div>
            </div>
            <h3 className='box__index--proyects-notice--title'>Noticias de la semana</h3>
            <div className='flex box__slider'>
                <button
                className='slider-lft'
                type={"button"}
                onClick={()=>setNumberSlider(
                    numberSlider <= 0
                    ? info.length - 1
                    : numberSlider - 1)}
                ><img src={before}></img></button>
                {
                info[numberSlider]
                ?<NoticesApi
                title={info[numberSlider].title}
                description={info[numberSlider].description}
                url={info[numberSlider].url}
                source={info[numberSlider].source}
                img={info[numberSlider].img}
                key={info[numberSlider + "1"]}
                ></NoticesApi>
                : <div className='charge'>Cargando...</div>
            }
            <button 
            className='slider-rgt'
            onClick={()=>setNumberSlider(
                info.length - 1 > numberSlider
                ? numberSlider + 1
                : 0 )}
            ><img src={after}></img>
            </button>
            </div>
        </div>
        </>
    );


};

export default Index