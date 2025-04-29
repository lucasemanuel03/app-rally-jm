import CarruselGanadores from "../components/CarruselGanadores";
import ContainerCard from "../components/ContainerCard";
import CuentaRegresiva from "../components/CuentaRegresiva";
import ItinerarioCard from "../components/ItinerarioCard";
import NoticiasCard from "../components/NoticiasCard";
import YoutubeVideo from "../components/YotubeVideo";
import noticias from "../data/noticias";
import tramos from "../data/tamos";

function Index(){

    let tramosList = [];
    tramos.forEach((tramo) => {
        tramosList.push(<ItinerarioCard tituloTramo={tramo.titulo} date={tramo.date} cantKm={tramo.cantKm} urlImage={tramo.urlImage} hora={tramo.hora}/>)
    })
    tramosList.push(<ItinerarioCard tituloTramo="VER TODOS" date="" hora="" urlImage='/images/ItinerarioImages/sta-catalina2.jpeg'/>)
    let noticiasList = [];
    noticias.forEach((noticia) => {
        noticiasList.push(<NoticiasCard titulo={noticia.titulo} subtitulo={noticia.subtitulo} urlImage={noticia.urlImagen}/>)
        
    })
    
    return(
        
        <div className=" grid justify-items-center">
            {/* ES GRID PARA QUE FUNCIONE ES Firefox, ya que no considera justify si es flex */}

            <section className="relative">
                <img 
                    className="object-cover"
                    alt="Fondo"
                    src="/images/portada-rally.jpg">
                </img>
                <div
                    className="absolute h- inset-0 bg-gradient-to-r from-(--principal)/70 via-(--yellow)/40 to-transparent">
                </div>
                <div className="flex items-center absolute inset-0">
                    <div className=" flex-col justify-items-center ml-7 text-shadow-xs/50">
                        <h1 className="mb-5 text-2xl sm:text-5xl">VIVÍ EL RALLY A FONDO</h1>
                        <h3 className="text-(--yellow) text-xl">Rally Sudamericano Jesús María</h3>
                        <h3 className="text-xl">Del 11 al 13 de Abril 2025</h3>
                    </div>
                </div>
            </section>

            <br/>
            <h2 className="section-title">AUSPICIANTES</h2>
            <section className="m-10 bg-amber-50">
                <img src="/images/Banner_950x150_1-21.gif"></img>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 justify-center">
                <section>
                    <ContainerCard Componente={<CarruselGanadores/>} titulo="ÚLTIMOS GANADORES"/>
                </section>

                <section>
                    <ContainerCard Componente={<CuentaRegresiva/>} titulo="CUENTA REGRESIVA"/>
                </section>

            </section>

            <section>
                <ContainerCard 
                    Componente={tramosList}
                    titulo="ITINERARIO"
                    estilos="grid sm:grid-cols-2 sm:grid-rows-2 gap-5 grid-cols-1 p-5"
                    />
            </section>

            <section>
                <ContainerCard 
                    Componente={<YoutubeVideo/>}
                    titulo="¡ASÍ SE VIVE EL RALLY!"
                    />
            </section>

            <section>
                <ContainerCard 
                    Componente={noticiasList}
                    titulo="ÚLTIMAS NOTICIAS"
                    estilos="flex flex-col gap-5 p-5"
                    />
            </section>

            
            
        </div>
    )
}

export default Index;