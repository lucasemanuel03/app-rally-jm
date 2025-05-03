function CuentaRegresiva(){
    return(
        <div className="grid scale-animation bg-gradient-to-tl from-slate-700 to-sky-700 rounded-4xl p-1  sm:gap-2  justify-items-center">
            <h2 className="p-3">EL RALLY COMIENZA EN</h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 justify-items-center">
                <h1 className="text-(--yellow) text-4xl">100 </h1>
                <h1 className="text-(--yellow) text-4xl"> 20</h1>
                <h1 className="text-(--yellow) text-4xl">: 33</h1>
                <h1 className="text-(--yellow) text-4xl">: 45</h1>
                <h3 className="text-gray-400">DIAS</h3>
                <h3 className="text-gray-400">HORAS</h3>
                <h3 className="text-gray-400">MIN.</h3>
                <h3 className="text-gray-400">SEG.</h3>
            </div>
        </div>
    )
}

export default CuentaRegresiva;