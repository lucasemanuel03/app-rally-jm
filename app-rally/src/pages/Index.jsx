import '@/src/app/globals.css';
import ContainerCard from '../components/ContainerCard';
import YoutubeVideo from '../components/YotubeVideo';
import ItinerarioCard from '../components/ItinerarioCard';
import NoticiasCard from '../components/NoticiasCard';
import tramos from '../data/tamos';
import noticias from '../data/noticias';
import CuentaRegresiva from '../components/CuentaRegresiva';
import CarruselGanadores from '../components/CarruselGanadores';


function Index() {
  /* CARGA DE TRAMOS */
  let tramosList = [];
    tramos.forEach((tramo) => {
        tramosList.push(<ItinerarioCard tituloTramo={tramo.titulo} date={tramo.date} cantKm={tramo.cantKm} urlImage={tramo.urlImage} hora={tramo.hora}/>)
    })
    tramosList.push(<ItinerarioCard tituloTramo="VER TODOS" date="" hora="" urlImage='/images/ItinerarioImages/sta-catalina2.jpeg'/>)

  /* CARGA DE NOTICIAS */
  let noticiasList = [];
    noticias.forEach((noticia) => {
        noticiasList.push(<NoticiasCard titulo={noticia.titulo} subtitulo={noticia.subtitulo} urlImage={noticia.urlImagen}/>)
        
    })

  return (
    <div>
      <section className="relative animate-fade-in-down animate-delay-100">
        <img 
            className="object-cover w-screen max-h-150 h-80 sm:h-90 md:h-100 xl:h-115 mask-radial-at-center mask-radial-from-45% mask-radial-to-80%"
            alt="Fondo"
            src="/images/portada-rally.jpg">
        </img>
        <div
            className="absolute inset-0 bg-gradient-to-bl from-(--principal)/80  via-black/50 to-yellow-300/50 mask-radial-at-center mask-radial-from-45% mask-radial-to-80%">
        </div>
        <div className="flex items-center justify-center absolute inset-0 ">
            <div className="flex flex-col justify-items-center ">
                <h1 className="mb-5 text-3xl sm:text-5xl md:text-7xl animate-fade-in-right animate-delay-300 animate-duration-700">VIVÍ EL RALLY A FONDO</h1>
                <h3 className="text-(--yellow) text-xl sm:text-2xl animate-fade-in-right animate-delay-800 animate-duration-700">Rally Sudamericano Jesús María</h3>
                <h3 className="text-xl sm:text-2xl animate-fade-in-right animate-delay-800 animate-duration-700">Del 11 al 13 de Abril 2025</h3>
                <a href='https://www.paseshow.com.ar/' target='_blank' className='btn-primary mt-10 w-fit animate-fade-in-right animate-delay-1000 animate-duration-700'>COMPRÁ TUS ENTRADAS</a>
            </div>
        </div>
        </section>
      <div className='mt-20 animate-fade-in-down animate-delay-1000'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap justify-items-center items-center justify-center max-w-3xl mx-auto gap-2 ">
          
          <section className=''>
            <ContainerCard Componente={<CarruselGanadores/>} titulo="ÚLTIMOS GANADORES" tipo="fit"/>
          </section>

          <section className=''>
              <ContainerCard Componente={<CuentaRegresiva/>} titulo="CUENTA REGRESIVA" tipo='fit'/>
          </section>
        </div>
        
        <div className='flex flex-col justify-center items-center'>     
          <section className='mt-20'>
            <ContainerCard Componente={<YoutubeVideo/>}
                          titulo='ASÍ SE VIVE EL RALLY'/>
          </section>

          <section className='mt-20'>
            <ContainerCard Componente={tramosList} titulo='CONOCÉ LOS TRAMOS' estilos='flex justify-items-center gap-3 p-5  overflow-x-scroll'/>
          </section>

          <section className='mt-20'>
            <ContainerCard titulo='ÚLTIMAS NOVEDADES' Componente={noticiasList} estilos='grid justify-items-center gap-5 p-5'/>
          </section>
        </div>

      </div>
    </div>
  );
}
export default Index;