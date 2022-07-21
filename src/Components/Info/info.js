import './Style.css'
import image3 from '../../Assets/galeria/Sin-título-1.svg'
import aso from '../../Assets/asociacion-1.png'
import aso1 from '../../Assets/logo-bomberos.png'
import aso2 from '../../Assets/logo-cabalho.png'

const Info = ()=>{
    return(
        <div className="container__general--85vh">
           <h3 className='box__objetivos--title'>Mision</h3>
            <img className='prueba3' src={image3} ></img>
            <div className='box__objetivos--tema-66'>   
                <h3 className='box__objetivos--tema-2'></h3>
                <p className='prueba4'>
                    Promover la concientizacion, cuidado y proteccion de la fauna silvestre, a traves de personal autorizado y especializado para la reinsercion de la fauna y proteccion de los habitats.
                </p>
            </div>      
            <div>
                <h3 className='box__objetivos--title'>Objetivos</h3>
                <img className='prueba3--invert' src={image3} ></img>
                <div className='prueba'>
                    <img className='prueba2' ></img>
                    <ul className='box__objetivos'>
                        <div className='box__objetivos--tema-1'></div>
                        <li className='box__objetivos--list'>
                        Promover, e impulsar el cuidado y la reinsercion de la 
                        fauna silvestre, preexistente en las zonas, amenazadas por el avance de la actividad humana.
                        </li>
                        <li className='box__objetivos--list'>
                        Incentivar los estudios, programas y proyectos a traves de
                        exposiciones, charlas educativas en instituciones y colegios, para
                        dinfundir el conocimiento y la importancia de los animales que se encuentra en su estado
                        natural donde habita en cualquier ambiente natural o artificial. 
                        todas ellas seran desarrolladas sin fines de lucro, por profesionales y/o personal habilitado.
                        </li>
                        <li className='box__objetivos--list'>
                        Brindar asesoramiento juridico e informacion a los asociados, a la comunidad 
                        y de formacion profesional, a traves de la web, la elaboracion de
                        publicaciones periodistica para el manejo, proteccion y conservacion de la fauna silvetres,
                        y de los animales domesticos, a cargos de
                        profesionales y/o personal habilitado.
                        </li>
                        <li className='box__objetivos--list'>
                        Generar y apoyar iniciativas propias de esta asociacion,
                        fomentando la creacion de centros de faunas silvestres
                        amenazadas, contribucion a la disminucion de las probalidades de extincion de especies, 
                        promoviendo su recuperacion, y la continuidad
                        de los procesos naturales, La que se encontrara a disposicion
                        de consulta tanto de especialistas como aficionados.
                        </li>
                        <li className='box__objetivos--list'>
                        Relacionarse y/o incorporarse a las federaciones y confederaciones,
                        entidades y organismos de caracter publico y/o privado con el mismo objetivo de la conservacion de la fauna y su habitat
                        </li>
                        <li className='box__objetivos--list'>
                        Promover e intercambiar informacion entre asociados, publicos en general, 
                        sobre los diversos temas que se vinculan con la zoologia, biologia, fisiologia
                        y etologia concretando la formacion de una biblioteca, hemeroteca, videoteca.
                        </li>
                        <li className='box__objetivos--list'>
                        Estimular y desarrollar programas, servicios, organizando viajes y actividades
                        entre sus asociados con el proposito de propender al mejoramiento intelectual y
                        cientifico de los mismos, sin fines de lucro.
                        </li>
                        <li className='box__objetivos--list'>
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
            <h3 className='box__objetivos--title'>Vision</h3>
            <div>
                <img className='prueba3' src={image3} ></img>
                <div className='box__objetivos--tema-66'>   
                    <h3 className='box__objetivos--tema-3'></h3>
                    <p className='prueba4'>
                        el cuidado y proteccion de la fauna con mayor facilidad,
                        tener un equipo de profesionales a cargo para poder reaccionar a cualquier situacion emergente, 
                        expandir la comunidad y generar autosustentabilidad, 
                        asociarnos con diferentes comunidades para que todos alcancen sus objetivos y se cumplan con calidad asegurada.
                    </p>
                </div>
            </div>
            <div>
                <h3>Nuestros socios:</h3>
                <div className='flex aso'>
                    <img className='asociaciones' src={aso}></img>
                    <img className='asociaciones' src={aso1}></img>
                    <img className='asociaciones' src={aso2}></img>
                </div>
            </div>
        </div>
    );
};

export default Info



