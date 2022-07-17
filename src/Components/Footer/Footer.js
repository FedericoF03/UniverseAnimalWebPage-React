import './Style.css'
import face from '../../Assets/iconmonstr-facebook-6.svg'
import ig from '../../Assets/iconmonstr-instagram-11.svg'

const Footer = ()=>{

    return(
        <div className="container__footer">
            <p className='box__follow-text'>Seguinos</p>
            <div>
                <img className='box__red-social' src={face}></img>
                <img className='box__red-social' src={ig}></img>
            </div>
            <p>Manera de colaborar</p>
            <a>Donaciones</a>
            <p>Conoce sobre nosotros</p>
            <p>Animales</p>
            <a>info</a>
            <p>Contacto</p>
        </div>
    )
};

export default Footer