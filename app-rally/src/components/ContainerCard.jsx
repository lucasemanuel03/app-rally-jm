
function ContainerCard({Componente=[], titulo="Default", estilos="p-5", tipo="default"}){
    let estiloPrincipal;

    switch(tipo){
        case "default":
            estiloPrincipal ="bg-gray-900 rounded-xl flex flex-col w-svw sm:max-w-2xl xl:max-w-5xl shadow-2xl pb-5"
            break;
        case "fit":
            estiloPrincipal ="bg-gray-900 rounded-xl flex flex-col w-fit max-w-2xl shadow-2xl"
            break;

        case "big":
            estiloPrincipal ="bg-gray-900 rounded-xl flex flex-col w-full max-w-4xl pb-5 shadow-2xl"
            break;
        default:
            estiloPrincipal ="bg-gray-900 rounded-xl flex flex-col w-svw max-w-2xl shadow-2xl"
    }


return(

    <div className= {estiloPrincipal}>
        <div
        className=" rounded-br-xl bg-principal w-fit flex mb-5">
            <h2 className="section-title">{titulo}</h2>
        </div>
        
        <div className={estilos}>
            {Componente}
        </div>
        
    </div>
)
}


export default ContainerCard;