function GanadoresCard({piloto="Luis Rodriguez", copiloto="Roberto Galati", clase="Clase RC2", urlImagen="/images/ganadores/zaldivar.jpg"}){
    return(
        <div className="bg-principal rounded-2xl w-80 max-h-90 overflow-hidden">
            <section className="w-full h-45">
                <img src={urlImagen} className="object-cover h-full w-full"></img>
            </section>

            <section className="gap-2 flex flex-col">
                <div className="flex justify-center ">
                    <h2 className="font-bold text-white p-1 bg-amber-600 w-fit">{clase}</h2>
                </div>

                <div className="ml-5 mb-2">
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="text-2xl font-bold">{piloto}</h2>
                        <p className="text-xs text-gray-400">(Piloto)</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2 className="text-xl">{copiloto}</h2>
                        <p className="text-xs text-gray-400">(Navegante)</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default GanadoresCard;