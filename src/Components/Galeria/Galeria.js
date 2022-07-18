import { useEffect, useState } from 'react';
import './Style.css';

const animalsGalery = require.context('../../Assets/galeria', true);

const Galeria = ()=>{
    const [galeryDinamic, setGaleryDinamic] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        peticion()
    }, [])

    let peticion =  async ()=>{
        let resJ = await fetch('http://localhost:3000/galeria.json')
        let res = await resJ.json()
        setGaleryDinamic(res)    
        setLoading(true)
    }

   
    return(
        <div className="container__box__galeria">
            <h3>Galeria</h3>
            <div className="container__box__galeria2">{
                loading
                ?galeryDinamic.imagen.map(el=>(
                <img key={el.id} className='image' src={animalsGalery(`./${el.img}.jpeg`)}></img>
                ))
                :"cargando"
            }</div>
        </div>
    )
}

export default Galeria