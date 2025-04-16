'use client'
import Link from "next/link"
import { useState } from "react";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className=" sticky z-999 top bg-principal flex items-end  w-full shadow-md/30">
            <div className="">
                <img src="/images/rally-logo-ypf.png" 
                    className="h-15 sm:h-22 sm:p-2 p-1 ml-3 drop-shadow-md/40">
                </img>
            </div>

            <div className="flex-1 justify-items-center">
            
                <div className="hidden sm:flex  gap-5 font-bold m-6">
                    <Link className="link-nav" href={"/"}>INICIO</Link>
                    <Link className="link-nav" href={"/Resultados"}>RESULTADOS</Link>
                    <Link className="link-nav" href={"/Competidores"}>COMPETIDORES</Link>
                    <Link className="link-nav" href={"/Tramos"}>TRAMOS</Link>
                    <Link className="link-nav" href={"/Noticias"}>NOTICIAS</Link>
                </div>

            </div>
            <div className="sm:hidden flex-1 justify-items-center">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white text-3xl "
                >
                    <img src="/images/Menu.svg"></img>
                </button>
                {menuOpen && (
                <div className="flex flex-col gap-3 px-4 py-2 bg-[--principal] text-white font-bold">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">INICIO</Link>
                    <Link href="/Resultados" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">RESULTADOS</Link>
                    <Link href="/Tramos" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">TRAMOS</Link>
                    <Link href="/Noticias" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">NOTICIAS</Link>
                </div>)}
            </div>
            
        </div>
    )
}

export default Header