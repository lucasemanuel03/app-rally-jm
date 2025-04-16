import CarruselGanadores from "../components/CarruselGanadores";
import CuentaRegresiva from "../components/CuentaRegresiva";
import GanadoresCard from "../components/GanadoresCard";
import ItinerarioCard from "../components/ItinerarioCard";
import NoticiasCard from "../components/NoticiasCard";

function Index(){
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

            <section className="m-10">
                <h2 className="section-title">ÚLTIMOS GANADORES</h2>
                <CarruselGanadores/>
            </section>

            <section className="mt-5">
                <h2 className="section-title">CUENTA REGRESIVA</h2>
                <CuentaRegresiva />
            </section>

            <section className="flex flex-col items-center mt-5">
                <h2 className="section-title">ITINERARIO</h2>
                <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-5 grid-cols-1">
                <ItinerarioCard tituloTramo="SSS1 SUPER ESPECIAL JESÚS MARÍA" date="Viernes 11" hora="19:30" cantKm={1.32} urlImage='/images/ItinerarioImages/super-jm.jpg'/>
                <ItinerarioCard tituloTramo="LAS MARGARITAS" date="Viernes 11" hora="11:00" cantKm={5.18}/>
                <ItinerarioCard tituloTramo="SS2 STA. CATALINA - LA PAMPA(I)" date="Sábado 12" hora="08:28" cantKm={9.68} urlImage='/images/ItinerarioImages/sta-catalina2.jpeg'/>
                <ItinerarioCard tituloTramo="VER TODOS" date="" hora="" urlImage='/images/ItinerarioImages/sta-catalina2.jpeg'/>
                </div>
           </section>

           <section className="mt-5 flex flex-col items-center">
                <h2 className="section-title">ÚLTIMAS NOTICIAS</h2>
                <div className="flex flex-col gap-5">
                    <NoticiasCard titulo="Eduardo Baca: “Es emocionante ver este escenario”"
                                urlImage="/images/noticiasImage/noticia2.png" 
                                subtitulo="En un marco espectacular, el predio del Festival de la Doma y el Folklore se transformó en un escenario mágico que dio el puntapié inicial a una competencia inolvidable del Campeonato."/>   
                    <NoticiasCard titulo="¡Que comience la acción!" subtitulo="Tras las verificaciones administrativas y técnicas, los equipos comenzaron este jueves el reconocimiento de los tramos."/>
                </div>
            </section>
        </div>
    )
}

export default Index;