import './Style.css'
import './Style-Tablet.css'
import './Style-Notebook.css';
import './Style-Desktop.css';
import images from '../../utils/image_object'

const Info = ()=>{
    return(
        <div className="container__general--85vh">
           <h3 className='box__info--title'>Mision</h3>
            <img className='box__info--svg-decoration' src={images.img1} ></img>
            <div className='box__info--background-green'>   
                <div className='box__mision--img'></div>
                <p className='box__info--text'>
                    Promover la concientizacion, cuidado y proteccion de la fauna silvestre, a traves de personal autorizado y especializado para la reinsercion de la fauna y proteccion de los habitats.
                </p>
            </div>      
            <div>
                <h3 className='box__info--title'>Objetivos</h3>
                <img className='box__info--svg-decoration-invert' src={images.img1} ></img>
                <div className='box__objectives__background-green'>
                    <img className='box__objectives--img' ></img>
                    <ul className='box__objectives'>
                        <li className='box__objectives--list'>
                        Promover, e impulsar el cuidado y la reinsercion de la 
                        fauna silvestre, preexistente en las zonas, amenazadas por el avance de la actividad humana.
                        </li>
                        <li className='box__objectives--list'>
                        Incentivar los estudios, programas y proyectos a traves de
                        exposiciones, charlas educativas en instituciones y colegios, para
                        dinfundir el conocimiento y la importancia de los animales que se encuentra en su estado
                        natural donde habita en cualquier ambiente natural o artificial. 
                        todas ellas seran desarrolladas sin fines de lucro, por profesionales y/o personal habilitado.
                        </li>
                        <li className='box__objectives--list'>
                        Brindar asesoramiento juridico e informacion a los asociados, a la comunidad 
                        y de formacion profesional, a traves de la web, la elaboracion de
                        publicaciones periodistica para el manejo, proteccion y conservacion de la fauna silvetres,
                        y de los animales domesticos, a cargos de
                        profesionales y/o personal habilitado.
                        </li>
                        <li className='box__objectives--list'>
                        Generar y apoyar iniciativas propias de esta asociacion,
                        fomentando la creacion de centros de faunas silvestres
                        amenazadas, contribucion a la disminucion de las probalidades de extincion de especies, 
                        promoviendo su recuperacion, y la continuidad
                        de los procesos naturales, La que se encontrara a disposicion
                        de consulta tanto de especialistas como aficionados.
                        </li>
                        <li className='box__objectives--list'>
                        Relacionarse y/o incorporarse a las federaciones y confederaciones,
                        entidades y organismos de caracter publico y/o privado con el mismo objetivo de la conservacion de la fauna y su habitat
                        </li>
                        <li className='box__objectives--list'>
                        Promover e intercambiar informacion entre asociados, publicos en general, 
                        sobre los diversos temas que se vinculan con la zoologia, biologia, fisiologia
                        y etologia concretando la formacion de una biblioteca, hemeroteca, videoteca.
                        </li>
                        <li className='box__objectives--list'>
                        Estimular y desarrollar programas, servicios, organizando viajes y actividades
                        entre sus asociados con el proposito de propender al mejoramiento intelectual y
                        cientifico de los mismos, sin fines de lucro.
                        </li>
                        <li className='box__objectives--list'>
                        Realizacion de festivales, eventos y reuniones con fines sociales y culturales.
                        Establecer, gestionar convenios de cooperacion, trabajo, y salud especialmente
                        en la sanidad animal, la calidad de la atencion sanitaria, su accesibilidad y sostenibilidad
                        a nivel: Profesion, tecnico, cientifico y social con organismos gubernamentales, organismos
                        no gubernamentales, Organismo nacionales, Internacionales, Universidades, Empresas Publicas y/o privadas,
                        Nacionales o Extranjeras para llevar adelante los fines de esta entidad. 
                        Todas las actividades seran desarrolladas sin fines de lucro y en cuanto correspondan, por personal profesional habilitado.
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className='box__info--title'>Vision</h3>
            <div>
                <img className='box__info--svg-decoration' src={images.img1} ></img>
                <div className='box__info--background-green'>   
                    <h3 className='box__vision--img'></h3>
                    <p className='box__info--text'>
                        el cuidado y proteccion de la fauna con mayor facilidad,
                        tener un equipo de profesionales a cargo para poder reaccionar a cualquier situacion emergente, 
                        expandir la comunidad y generar autosustentabilidad, 
                        asociarnos con diferentes comunidades para que todos alcancen sus objetivos y se cumplan con calidad asegurada.
                    </p>
                </div>
            </div>
            <div>
                <h3>Nuestros socios:</h3>
                <div className='flex box__associations'>
                    <img className='associations' src={images.img2}></img>
                    <img className='associations' src={images.img3}></img>
                    <img className='associations' src={images.img4}></img>
                </div>
            </div>
        </div>
    );
};

export default Info



