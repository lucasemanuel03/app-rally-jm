'use client'


function YoutubeVideo({titulo="La emoción en cada etapa",  width="632", height="356", src="https://www.youtube.com/embed/QYl0Ts6A-yE", title="Rally Sudamericano Jesús María 2025 I Resumen Etapa 2", frameborder="0", allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", referrerpolicy="" }){

    return(
        <div className="flex flex-col">
            <iframe 
                className="p-2 h-80 w-100  md:w-160 md:h-100 rounded-2xl"
                src={src}  frameborder={frameborder} allow={allow} referrerPolicy={referrerpolicy} allowfullscreen></iframe>
        </div>
    )
}

export default YoutubeVideo