import '@/src/app/globals.css'
import TablaCompetidores from '../components/TablaCompetidores'
import json_competidores from "@/inscriptos_jesus_maria_2025.json"
import ContainerCard from '../components/ContainerCard'


function Competidores(){
    return(  
    <div className='flex flex-col justify-center items-center'>
        <div className='relative  flex flex-col justify-center items-center'>
            <img 
                className="object-cover w-screen max-h-170 h-80 sm:h-100 md:h-120 xl:h-130 mask-radial-at-center mask-radial-from-45% mask-radial-to-80%"
                alt="Fondo"
                src="/images/generales/competidores.jpeg">
            </img>
            <div
                className="absolute inset-0 bg-gradient-to-bl from-(--principal)/90  via-black/70 to-yellow-300/60 mask-radial-at-center mask-radial-from-45% mask-radial-to-80%">
            </div>
            <div className=' absolute inset-0 flex flex-col justify-center items-center'>
                <h1 className='mb-5 text-xl font-bold sm:text-3xl md:text-5xl animate-fade-in-right animate-delay-300 animate-duration-700 text-shadow-black/60 text-shadow-lg'>LISTADO OFICIAL DE COMPETIDORES</h1>
                <p className='text-(--yellow) text-md sm:text-2xl animate-fade-in-right animate-delay-800 animate-duration-700 text-shadow-black/60 text-shadow-lg'>Rally Sudamericano Jesús María Edición 2025</p>
            </div>

        </div>
            
        <div className='-mt-20 relative'>
            <ContainerCard 
                titulo='LISTADO DE COMPETIDORES'
                estilos='p-5'
                tipo='default'
                Componente={<TablaCompetidores competidores={json_competidores}/>}/>
        </div>
    </div>
    
)}

export default Competidores