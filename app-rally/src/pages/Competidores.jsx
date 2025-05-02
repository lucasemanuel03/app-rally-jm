import '@/src/app/globals.css'
import TablaCompetidores from '../components/TablaCompetidores'
import json_competidores from "@/inscriptos_jesus_maria_2025.json"
import ContainerCard from '../components/ContainerCard'


function Competidores(){
    return(  
    <div className='flex flex-col justify-center items-center'>
        <div className='p-10'>
            <h1>LISTADO DE COMPETIDORES OFICIAL</h1>
            <p>Rally Sudamericano Jesús María Edición 2025</p>
        </div>
            <ContainerCard 
                titulo='LISTADO DE COMPETIDORES'
                estilos='p-5'
                tipo='big'
                Componente={<TablaCompetidores competidores={json_competidores}/>}/>
        <div>
         
        </div>
    </div>
    
)}

export default Competidores