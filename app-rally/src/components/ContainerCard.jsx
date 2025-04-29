
function ContainerCard({Componente=[], titulo="Default", estilos="p-5"}){


return(

    <div className="bg-(--dark-blue) rounded-xl mt-5 flex flex-col shadow-2xl">
        <div
        className=" rounded-br-4xl bg-principal w-fit flex p-0">
            <h2 className="section-title">{titulo}</h2>
        </div>
        
        <div className={estilos}>
            {Componente}
        </div>
        
    </div>
)
}

export default ContainerCard;