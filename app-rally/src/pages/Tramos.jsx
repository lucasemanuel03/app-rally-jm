import '@/src/app/globals.css';
import Tramo from '../components/Tramo';
import ContainerCard from '../components/ContainerCard';
import tramos2 from '../data/tramos';

function Tramos() {

    /*Creando componentes TRAMO */
    let listaTramo1 = [];
    let listaTramo2 = [];
    let listaTramo3 = [];

    tramos2.forEach((tramo) => {
        switch(tramo.dia){
            case 1:
                listaTramo1.push(<Tramo nombreTramo={tramo.nombreTramo} hora={tramo.hora} distancia={tramo.distancia} tipo={tramo.tipo}/>)
                break;
            case 2:
                listaTramo2.push(<Tramo nombreTramo={tramo.nombreTramo} hora={tramo.hora} distancia={tramo.distancia} tipo={tramo.tipo}/>)
                break;
            case 3:
                listaTramo3.push(<Tramo nombreTramo={tramo.nombreTramo} hora={tramo.hora} distancia={tramo.distancia} tipo={tramo.tipo}/>)
                break;
            default:
        }
    })


    return (
    <div className='flex flex-col justify-center items-center'>
        <div className='relative  flex flex-col justify-center items-center'>
            <img 
                className="object-cover w-screen max-h-170 h-80 sm:h-100 md:h-120 xl:h-130 mask-radial-at-center mask-radial-from-45% mask-radial-to-80%"
                alt="Fondo"
                src="/images/generales/especialAnfiteatro1.jpeg">
            </img>
            <div
                className="absolute inset-0 bg-gradient-to-bl from-(--principal)/90  via-black/70 to-yellow-300/60 mask-radial-at-center mask-radial-from-45% mask-radial-to-80%">
            </div>
            <div className=' absolute inset-0 flex flex-col justify-center items-center'>
                <h1 className='mb-5 text-xl font-bold sm:text-3xl md:text-5xl animate-fade-in-right animate-delay-300 animate-duration-700 text-shadow-black/60 text-shadow-lg'>ITINERARIO 2025</h1>
                <p className='text-(--yellow) text-md sm:text-2xl animate-fade-in-right animate-delay-800 animate-duration-700 text-shadow-black/60 text-shadow-lg'>Rally Sudamericano Jesús María Edición 2025</p>
            </div>

        </div>

      <div className='flex flex-col gap-10 relative -m-20 z-20'>
        <div className='flex flex-col justify-center items-center'>
            <ContainerCard Componente={listaTramo1} titulo='VIERNES 11' tipo='default' estilos='flex flex-col gap-5'/>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <ContainerCard Componente={listaTramo2} titulo='SÁBADO 12' tipo='default' estilos='flex flex-col gap-5'/>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <ContainerCard Componente={listaTramo3} titulo='DOMINGO 13' tipo='default' estilos='flex flex-col gap-5'/>
        </div>

      </div>
    </div>
  );
}

export default Tramos;