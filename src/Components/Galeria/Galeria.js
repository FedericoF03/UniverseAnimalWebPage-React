import { useEffect, useRef, useState } from 'react';
import './Style.css';
import './Style-desktop.css';

const animalsGalery = require.context('../../Assets/galeria', true);
let url = "http://localhost:3000/galeria.json"

const Galeria = ()=>{
    const [galeryDinamic, setGaleryDinamic] = useState(null)
    const [loading, setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modal, setModal] = useState("galeria-img-test")

    const modalRef = useRef()

    useEffect(()=>{
        peticion()
    }, [])

    useEffect(()=>{
        
    }, [modalOpen])

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
                    onClick={()=>{
                        setModal(el.img)
                        modalRef.current.style.display = "flex"
                        setModalOpen(true)
                    }}
                    className='galery__box__button' >+</button>
                    <img className='cards' src={animalsGalery(`./${el.img}.jpeg`)}></img>
                </div>
                ))
                :"cargando"
            }</div>
            <div>
                {
                    loading
                    ?<div 
                    onClick={()=>{
                        modalRef.current.style.display = "none"
                        setModalOpen(false)
                    }}
                    ref={modalRef} className='modal'>
                        <img className='modal--img' src={animalsGalery(`./${modal}.jpeg`)}></img>
                    </div>
                    : <div className='modal'>No hay imagenes disponibles.</div>
                }
            </div>
        </div>
    )
}

export default Galeria