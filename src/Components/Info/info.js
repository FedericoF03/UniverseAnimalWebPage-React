import './Style.css'
import galeria2 from '../../Assets/galeria/Sin-título-1.svg'
import galeria3 from '../../Assets/galeria/Sin-título-1 copy.svg'


const imageProyect = require.context('../../Assets', true)

const Info = ()=>{
    return(
        <div className="container__general--85vh">
            <h1>Sobre nosotros</h1>
            <p><span>La Asociacion civil universo animal</span>
                tiene su domicilio legal en la Provincia de 
                Buenos Aires y se trata sobre una asociacion con el objetivo y mision de cuidar,
                concientizar el medio ambiente y el cuidado de las especies animal que hay en este.
            </p>
            <div className='owners'></div>
            <div>
                <h3 className='box__objetivos--title'>Objetivos</h3>
                <img className='prueba2' src={galeria2}></img>
                <div className='prueba'>
                    <ul className='box__objetivos'>
                        <div className='box__objetivos--tema-1'>texto</div>
                        <li className='box__objetivos--list'>
                        Promover, e impulsar el cuidado y la reinsercion de la 
                        fauna silvestre, compuesta de mamiferos aves y reptiles autoctonas,
                        preexistente en las zonas, amenazadas por el avance de la actividad humana
                        </li>
                        <li className='box__objetivos--list'>
                        Incentivar los estudios, programas y proyectos a traves de
                        exposiciones, charlas educativas en instituciones y colegios, para
                        dinfundir el conocimiento y la importancia de los animales
                        vertebrados e invertebrados que se encuentra en su estado
                        natural de libertad donde habita de forma permanente, circunstancial o momentanea
                        en cualquier ambiente natural o artificial. todas ellas seran desarrolladas
                        sin fines de lucro, por profesionales y/o personal habilitado.
                        </li>
                        <li className='box__objetivos--list'>
                        Brindar asesoramiento juridico e informacion a los asociados, a la comunidad 
                        y de formacion profesional, a traves de la web, la elaboracion de
                        publicaciones periodistica en capacitacion y asesoria para el manejo, proteccion
                        y conservacion de la fauna silvetres, y de los animales domesticos, a cargos de
                        profesionales y/o personal habilitado.
                        </li>
                        <li className='box__objetivos--list'>
                        Generar y apoyar iniciativas propias de esta asociacion,
                        fomentando la creacion de centros de faunas silvestres
                        amenazadas, para la conservacion y contribucion a la disminucion
                        de las probalidades de extincion de especies silvestres de alto
                        significado, promoviendo su recuperacion, y la continuidad
                        de los procesos naturales, La que se encontrara a disposicion
                        de consulta tanto de especialistas como aficionados y asi orientar
                        a mejorar la calidad de vida del hombre en el ecosistema.
                        </li>
                        <li className='box__objetivos--list'>
                        Relacionarse y/o incorporarse a las federaciones y confederaciones,
                        entidades y organismos de caracter publico y/o privado dedicados a fines
                        similares previa adopcion de los acuerdos pertinentes.
                        </li>
                        <li className='box__objetivos--list'>
                        Promover e intercambiar informacion entre asociados, publicos en general, 
                        sobre los diversos temas que se vinculan con la zoologia, biologia, fisiologia
                        y etologia concretando la formacion de una biblioteca, hemeroteca, videoteca, la cual se regira conforma
                        a las leyes que rigen a las bibliotecas.
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
                        Nacionales o Extranjeras para llevar adelante los fines de esta entidad. Todas las actividades seran
                        desarrolladas sin fines de lucro y en cuanto correspondan, por personal idoneo o profesion habilitado.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 className='box__objetivos--tema-2'>Mision</h3>
                <img className='prueba3' src={galeria3}></img>
                <div className='prueba4'>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        In in mauris nisl. Mauris non 
                        nibh sit amet ante ornare tincidunt 
                        consequat in justo. Fusce ultricies est eget 
                    </p>
                </div>
            </div>
            <div>
                <h3 className='box__objetivos--tema-3'>Forma de trabajo</h3>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    In in mauris nisl. Mauris non 
                    nibh sit amet ante ornare tincidunt 
                    consequat in justo. Fusce ultricies est eget 
                </p>
            </div>
            <div>
                <h3>Este trabajo de obras es gracias y junto a:</h3>
                <img className='asociaciones'></img>
            </div>
        </div>
    );
};

export default Info



