import '@/src/app/globals.css';
function ZonaEspectadores() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='relative  flex flex-col justify-center items-center'>
            <img 
                className="object-cover w-screen max-h-130 h-70 sm:h-80 md:h-90 xl:h-100 mask-radial-at-center mask-radial-from-45% mask-radial-to-80%"
                alt="Fondo"
                src="/images/generales/zaldivar-corriendo.jpeg">
            </img>
            <div
                className="absolute inset-0 bg-gradient-to-bl from-(--principal)/90  via-black/70 to-yellow-300/60 mask-radial-at-center mask-radial-from-45% mask-radial-to-80%">
            </div>
            <div className=' absolute inset-0 flex flex-col justify-center items-center'>
                <h1 className='mb-5 text-xl font-bold sm:text-3xl md:text-5xl animate-fade-in-right animate-delay-300 animate-duration-700 text-shadow-black/60 text-shadow-lg'>ZONA DE ESPECTADORES</h1>
                <p className='text-(--yellow) text-md sm:text-2xl animate-fade-in-right animate-delay-800 animate-duration-700 text-shadow-black/60 text-shadow-lg'>Toda la información que tenes que saber</p>
            </div>

        </div>
        <div className='grid gap-5'>
            <section className='bg-gray-900 p-10 rounded-3xl -mt-20 relative z-20 flex flex-col justify-center'>
                <h1 className='text-(--yellow) text-xl'>INFORMACIÓN ESPECTADORES</h1>
                <p>Si tenes pensado asistir al Rally Jesús María en cuenta esta información:</p>
                <div className='mt-5'>
                    <h2 className='text-blue-300 text-lg'>INGRESO DEL PÚBLICO A LAS ZE</h2>
                    <ul className='list-disc list-inside'>
                        <li>EN VEHÍCULO: Hasta 2 horas antes de la largada de la especial.</li>
                        <li>PEATONAL: Hasta 30' minutos antes del inicio de la especial</li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <h2 className='text-red-500 text-lg'>ADVERTENCIAS:</h2>
                    <ul className='list-disc list-inside'>
                        <li>Está prohibido mover tú vehículo antes del paso del Auto Barrido (Vehículo de la organización). </li>
                        <li>NUNCA deberán ubicarse detras de cintas rojas o en zonas marcadas como vedadas.</li>
                    </ul>
                </div>
            </section>

            <section className='bg-gray-900 p-10 rounded-3xl  flex flex-col justify-center'>
                <h1 className='text-(--yellow) text-xl'>RECURSOS</h1>
                <div className='mt-5'>
                    <span>Mapa Zona de espectadores (ZE)</span>
                    <a className='btn-secondary ml-5'
                        href="https://rallyargentina.com/wp-content/uploads/2025/04/ZonasEspectadores2025.pdf" target="_blank" rel="noopener noreferrer">Descargar</a>
                </div>
            </section>

        </div>

    </div>
  );
}
export default ZonaEspectadores;