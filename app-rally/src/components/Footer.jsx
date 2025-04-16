function Footer(){
    return(
        <div className="bg-(--principal) mt-20 p-10 grid justify-items-center">

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
                <section >
                    <div>
                        <h2 className="bg-red-900 p-2 w-fit mb-2">Nuestra Ubicación</h2>
                    </div>
                    <div>
                        <p>Octavio Pinto 2676 - Bº Villa Cabrera X5009AAJ</p>
                        <p>Córdoba - Argentina</p>
                    </div>
                </section>
                <section>
                    <h2 className="bg-red-900 p-2 w-fit mb-2">Contacto</h2>
                    <ul className="flex flex-col">
                        <a href="mailto:prensa@maseventos.com.ar">pensa@maseventos.com.ar</a>
                        <a target="_blank" href="https://www.facebook.com/">Facebook</a>
                        <a target="_blank" href="https://www.instagram.com/rallyjesusmaria/">Instagram</a>
                    </ul>
                </section>
            </div>

            <section className="mt-15">
                <p> © 2024 RALLY JESÚS MARÍA </p>
                <p>Diseño: Lucas Emanuel Brollo</p>
            </section>
        </div>
    )
}

export default Footer;