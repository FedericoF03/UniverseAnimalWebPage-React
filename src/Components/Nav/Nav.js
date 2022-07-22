import Logo from '../../Assets/Logo-UAWP-letras.jpg';
import MenuBurger from '../../Assets/lines_menu_burger_icon_123889.png';
import './Style.css';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Nav = ()=>{
    const menuRef = useRef();
    const [openMenu, setOpenMenu] = useState(false);
    
    const menuButton = ()=>{
        if(openMenu) {
            menuRef.current.style.opacity = '1';
            menuRef.current.style.clipPath = 'inset(0 0 0 0)';
            setOpenMenu(false);  
        } else {
            menuRef.current.style.opacity = '';
            menuRef.current.style.clipPath = '';
            setOpenMenu(true);
        }
    };

    return(
        <div className='container__nav'>
            <Link className='nav--logo' to="/"><img  src={Logo}></img></Link>
            <img 
            className='nav--menu-Burger' 
            onClick={menuButton} 
            src={MenuBurger}>
            </img>
            <ul ref={menuRef} className='nav--menu'>
                <li className='nav__list'>
                    <Link 
                    className='nav__list--link' 
                    onClick={menuButton} 
                    to='/'>Inicio
                    </Link>
                </li>
                <li className='nav__list'>
                    <Link className='nav__list--link' 
                    onClick={menuButton} 
                    to='/info'>Info
                    </Link>
                </li>
                <li className='nav__list'>
                    <Link className='nav__list--link' 
                    onClick={menuButton} 
                    to='/Galeria'>Animales
                    </Link>
                </li>
                <li className='nav__list'>
                    <Link className='nav__list--link' 
                    onClick={menuButton} 
                    to='/donaciones'>Donaciones
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav