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
    }



)



  return (
    <div>
      <h1>Tramos</h1>
      <p>Esta es la página de tramos.</p>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col justify-center items-center'>
            <ContainerCard Componente={listaTramo1} titulo='VIERNES 11' tipo='big' estilos='flex flex-col gap-5'/>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <ContainerCard Componente={listaTramo2} titulo='SÁBADO 12' tipo='big' estilos='flex flex-col gap-5'/>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <ContainerCard Componente={listaTramo3} titulo='DOMINGO 13' tipo='big' estilos='flex flex-col gap-5'/>
        </div>

      </div>
    </div>
  );
}

export default Tramos;