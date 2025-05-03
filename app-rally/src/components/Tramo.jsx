function Tramo({hora="10:00", tipo="S1", nombreTramo="LAS PEÑAS - AVELLANEDA (IDA)", distancia=5.19}){
    return(
        <div className="bg-gray-950/50 mx-5 rounded-lg shadow-md shadow-black/50 hover:brightness-120 scale-animation">
            <div className="flex flex-row justify-between items-center">
                
                <div className="flex flex-row items-center">
                    <div className="bg-gray-950 p-5 rounded-r-lg z-99">
                        <h1 className="text-amber-200">{hora} Hs</h1>
                    </div>

                    <div className="bg-red-900 p-5 rounded-lg -ml-3">
                        <h1>{tipo}</h1>
                    </div>

                </div>

               
                <div>
                    <h1>{nombreTramo}</h1>
                </div>
                <div className="p-5 bg-blue-950 rounded-lg">
                    <h1>{distancia} Km</h1>
                </div>
            </div>
        </div>
    )
}

export default Tramo;