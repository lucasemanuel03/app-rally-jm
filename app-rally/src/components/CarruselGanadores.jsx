'use client'
import { useEffect, useState } from "react";
import ganadores from "../data/ganadores";
import GanadoresCard from "./GanadoresCard";

import { AnimatePresence, motion } from "framer-motion";

function CarruselGanadores(){

    const [indexActual, setIndexAcutal] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndexAcutal(prev => (prev + 1) % ganadores.length)
        }, 5000)

        return () => clearInterval(intervalo); 
    }, [])

    return(
        <div className="flex justify-center items-center ">
            <AnimatePresence mode="wait">
                <motion.div
                    key={indexActual}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className=""
                >
                <GanadoresCard {...ganadores[indexActual]} />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default CarruselGanadores;