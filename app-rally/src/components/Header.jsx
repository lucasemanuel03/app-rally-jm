'use client'
import Link from "next/link"
import { useState } from "react";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="sticky z-999 top-0 bg-principal flex items-end w-full shadow-md">
            <div>
                <img src="/images/rally-logo-ypf.png" 
                    className="h-15 sm:h-22 sm:p-2 p-1 ml-3 drop-shadow-md">
                </img>
            </div>

            <div className="flex-1 justify-items-center">
                <div className="hidden sm:flex gap-5 font-bold m-6">
                    <Link className="link-nav" href={"/"}>INICIO</Link>
{/*PROVISORIO ZONA DE ESPECTADORES, MODIFICAR PARA MOSTRAR SUB-MENU */}
                    <Link className="link-nav" href={"/Espectadores/ZonaEspectadores"}>ESPECTADORES</Link>
                    <Link className="link-nav" href={"/Competidores"}>COMPETIDORES</Link>
                    <Link className="link-nav" href={"/Tramos"}>TRAMOS</Link>
                    <Link className="link-nav" href={"/Resultados"}>RESULTADOS</Link>
                    <Link className="link-nav" href={"/Noticias"}>NOTICIAS</Link>
                </div>
            </div>

            <div className="sm:hidden mr-5 grid justify-items-center">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white text-3xl hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                    <img src="/images/Menu.svg" alt="Menu"></img>
                </button>
                {menuOpen && (
                <div className="absolute animate-fade-in animate-duration-250 top-full py-5 left-0 w-full h-40% bg-principal text-white font-bold grid justify-items-center gap-3 ">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-(--yellow) transition">INICIO</Link>
                    <Link href="/Espectadores/ZonaEspectadores" onClick={() => setMenuOpen(false)} className="hover:text-(--yellow) transition">ESPECTADORES</Link>
                    <Link href="/Competidores" onClick={() => setMenuOpen(false)} className="hover:text-(--yellow) transition">COMPETIDORES</Link>
                    <Link href="/Tramos" onClick={() => setMenuOpen(false)} className="hover:text-(--yellow) transition">TRAMOS</Link>
                    <Link href="/Resultados" onClick={() => setMenuOpen(false)} className="hover:text-(--yellow) transition">RESULTADOS</Link>
                    <Link href="/Noticias" onClick={() => setMenuOpen(false)} className="hover:text-(--yellow) transition">NOTICIAS</Link>
                </div>)}
            </div>
        </div>
    )
}

export default Header;