function NoticiasCard({titulo="TITULO", subtitulo="Subtitulo de la noticia.", urlImage="/images/noticiasImage/noticia1.jpeg"}){
    return(
        <div className="rounded-2xl scale-animation bg-amber-50 max-w-sm sm:max-w-xl max-h-90 overflow-hidden ">
            <section className="bg-red-400 h-50 w-full">
                <img className="w-full h-full object-cover" src={urlImage}></img>
            </section>
            <section className="bg-black/70 p-5 ">
                <h2 className="text-xl font-bold mb-2">{titulo}</h2>
                <p className=" text-sm font-extralight truncate hover:text-ellipsis" >{subtitulo}</p>
            </section>

        </div>
    )
}

export default NoticiasCard;