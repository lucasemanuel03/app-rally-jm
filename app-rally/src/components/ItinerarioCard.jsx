function ItinerarioCard({ tituloTramo = "Default", date = "Miércoles 15", hora = "16:00", cantKm = 9.9, urlImage='/images/ItinerarioImages/Shakedown.jpeg' }) {
    return (
      <div
        className="relative cursor-pointer scale-animation hover:text-amber-300 hover:brightness-150 flex flex-col justify-end bg-cover bg-center rounded-2xl shadow-md overflow-hidden  min-w-70 mix-h-70"
        style={{
          backgroundImage: `url(${urlImage})`,
        }}
      >
        {/* Gradiente overlay */}
        <div className="absolute transition-opacity inset-0 bg-gradient-to-t from-(--dark-blue)/80 via-black/70 to-transparent " />
  
        <section className="relative mb-3 p-5 grid gap-1 text-shadow-md/20 z-10">
          <span>{date}</span>
          <h2 className="text-2xl font-extrabold">{tituloTramo}</h2>
          <span>
            {hora} hs - {cantKm} Km
          </span>
        </section>
      </div>
    );
  }
  

export default ItinerarioCard;