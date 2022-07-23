import './Style.css'
import './Style-Desktop.css'
import face from '../../Assets/icons8-facebook-nuevo.svg'
import ig from '../../Assets/iconmonstr-instagram-11.svg'
import email from '../../Assets/email-svgrepo-com.svg'
import wp from '../../Assets/icons8-whatsapp.svg'
import { Link } from 'react-router-dom'

const Footer = ()=>{

    return(
        <div className="container__footer">
            <div className='footer--filter'>
                <div>
                    <p className='box__follow-text'>Siguenos!</p>
                    <div className='webs-desktop'>
                        <a href='https://www.facebook.com/UniversoAnimalArgentina'><img className='box__red-social' src={face}></img></a>
                        <a href='https://www.instagram.com/Julio.espinosa.54738/'><img className='box__red-social' src={ig}></img></a>
                    </div>
                </div>
            <div className='flex box__links'>
                <p className='box__links--titles'>Manera de colaborar</p>
                <ul className='flex box__footer__unorde__links'>
                    <Link 
                    className='box__links--link'
                    onClick={()=>window.scrollTo(0,0)}
                    to='/'
                    >Inicio</Link>
                    <Link 
                    className='box__links--link'
                    onClick={()=>window.scrollTo(0,0)}
                    to='/info'
                    >Conoce sobre nosotros</Link>
                    <Link 
                    className='box__links--link'
                    to='/Galeria'
                    onClick={()=>window.scrollTo(0,0)}
                    >Galeria</Link>
                    <Link 
                    className='box__links--link'
                    to='/donaciones'
                    onClick={()=>window.scrollTo(0,0)}
                    >Donaciones</Link>
                </ul>
            </div>
            <div>
                <p className='box__links--titles'>Contacto</p>
                <div className='flex conteiner__box--contact'>
                    <div className='box--contact'>
                        <img className='box--email-wp' src={email}></img>
                        <a className='web-email'>UniversoAnimal.gmail.com</a>
                    </div>
                    <div className='box--contact'>
                        <img className='box--email-wp' src={wp}></img>
                        <a className='web-number'>11-24040708</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Footer