function NoticiasCard({titulo="TITULO", subtitulo="Subtitulo de la noticia.", urlImage="/images/noticiasImage/noticia1.jpeg"}){
    return(
        <div className="relative rounded-xl bg-gray-800 max-w-sm sm:max-w-xl xl:max-w-2xl max-h-96 overflow-hidden group shadow-md">
            <section className="bg-red-400 h-50 w-full">
                <img className="w-full h-full object-cover" src={urlImage}></img>
            </section>
            <section className="relative bg-gray-800  p-4 h-35 transform translate-y-0 group-hover:-translate-y-15 transition-transform duration-300">          
                <h2 className="relative text-2xl font-bold mb-2 font-serif">{titulo}</h2>
                <p className="relative text-sm font-normal text-gray-300 text-ellipsis">{subtitulo}</p>
                <br/>
                <div className="flex justify-end mt-5">
                    <a href="/Noticias/noticiaurl" className="btn-secondary">Ver Nota competa</a>
                </div>
            </section>
        </div>
    )
}

export default NoticiasCard;