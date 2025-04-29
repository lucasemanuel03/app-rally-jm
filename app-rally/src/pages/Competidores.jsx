import '@/src/app/globals.css'
import TablaCompetidores from '../components/TablaCompetidores'
import json_competidores from "@/inscriptos_jesus_maria_2025.json"
import ContainerCard from '../components/ContainerCard'


function Competidores(){
    return(  
    <div>
        <div className='flex flex-col justify-items-center'>
            <h1>LISTADO DE COMPETIDORES</h1>
            <p>Rally Sudamericano Jesús María Edición 2025</p>
        </div>
            <ContainerCard 
                titulo='LISTADO DE COMPETIDORES'
            
                Componente={<TablaCompetidores competidores={json_competidores}/>}/>
        <div>
         
        </div>
    </div>
    
)}

export default Competidores