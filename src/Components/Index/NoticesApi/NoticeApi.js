import { useEffect, useRef } from 'react';
import '../Style.css';

const NoticesApi = ({title, description, url, source, img})=>{

    return(
    <div className='box__proyects-and-notice'>
        { img === null
        ?(<>
            <h3>{title}</h3>
            <p className='notice--description'>{`${description}`}</p>
            <a className='box__proyects-and-notice--links' href={url}>{source}</a>
        </>)
        :(
        <>
            <h3>{title}</h3>
            <a href={url}><img className='proyects' src={img}></img></a>
            <p className='notice--description'>{description}</p>
            <a className='box__proyects-and-notice--links' href={url}>{source}</a>
        </>
        )}  
    </div>
    )
}

export default NoticesApi

