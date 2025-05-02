function CuentaRegresiva(){
    return(
        <div className=" scale-animation bg-gradient-to-tl from-slate-700 to-sky-700 rounded-4xl p-5 grid justify-items-center">
            <h2>EL RALLY COMIENZA EN</h2>
            <br/>
            <div className="grid grid-cols-4 grid-rows-2 gap-1">
                <h1 className="text-(--yellow) text-3xl">10</h1>
                <h1 className="text-(--yellow) text-3xl">20 : </h1>
                <h1 className="text-(--yellow) text-3xl">33 : </h1>
                <h1 className="text-(--yellow) text-3xl">45</h1>
                <h3>DIAS</h3>
                <h3>HS</h3>
                <h3>MIN.</h3>
                <h3>SEG.</h3>
            </div>
        </div>
    )
}

export default CuentaRegresiva;