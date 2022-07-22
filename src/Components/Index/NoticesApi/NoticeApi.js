import '../Syle.css';

const NoticesApi = ({title, description, url, source, img})=>{
    return(
    <div className='box__proyects-and-notice'>
        
        { img === null
        ?(<>
            <h3>{title}</h3>
            <p>{`${description}`}</p>
            <a className='box__proyects-and-notice--links' href={url}>{source}</a>
        </>)
        :(
        <>
            <h3>{title}</h3>
            <a href={url}><img className='proyects' src={img}></img></a>
            <p>{description}</p>
            <a className='box__proyects-and-notice--links' href={url}>{source}</a>
        </>
        )}
        
    </div>
    )
}

export default NoticesApi

