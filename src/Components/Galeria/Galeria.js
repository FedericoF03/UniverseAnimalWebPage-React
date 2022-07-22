import { useEffect, useState } from 'react';
import './Style.css';

const animalsGalery = require.context('../../Assets/galeria', true);
let url = "http://localhost:3000/galeria.json"

const Galeria = ()=>{
    const [galeryDinamic, setGaleryDinamic] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        peticion()
    }, [])

    let peticion =  async ()=>{
        let resJ = await fetch(url)
        let res = await resJ.json()
        setGaleryDinamic(res)    
        setLoading(true)
    }


    return(
        <div className="container__box__galery">
            <h3 className='galery__box__title'>Galeria</h3>
            <div className="galery__box__cards">
                {loading
                ?galeryDinamic.imagen.map(el=>(
                <div className='box__cards' key={el.id}>
                    <button 
                    onClick={""}
                    className='galery__box__button' >+</button>
                    <img className='cards' src={animalsGalery(`./${el.img}.jpeg`)}></img>
                </div>
                ))
                :"cargando"
            }</div>
        </div>
    )
}

export default Galeria