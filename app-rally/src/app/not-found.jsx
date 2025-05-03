export default function NotFound(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <img src="/images/rally-logo-ypf.png" className="w-50 p-5"></img>
            <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
            <p className="mt-4 text-lg">Lo sentimos, la página que buscas no existe.</p>
            <a href="/" className="mt-6 text-blue-950 hover:bg-blue-200 bg-white p-3 rounded-4xl shadow-md shadow-black/70 transition">Volver a la página principal</a>
        </div>
    )
}