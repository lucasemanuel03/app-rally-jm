import React from 'react';

const TablaCompetidores = ({ competidores }) => {
    return (
        <div className='flex flex-col items-center p-5'>
        <table className=' text-sm sm:text-base justfy-center items-center w-s md:w-3xl sm:w-xl'>
            <thead className=''>
                <tr className=' bg-(--principal) text-(--yellow)'>
                    <th className='p-3'>N°</th>
                    <th className='p-3'>Piloto</th>
                    <th>País</th>
                    <th className='p-3'>Navegante</th>
                    <th className='p-3'>País</th>
                    <th className='p-3'>Auto</th>
                    <th className='p-3'>Clase</th>
                </tr>
            </thead>
            <tbody className='text-center bg-blue-950'>
                {competidores.map((competidor, index) => (
                    <tr key={index}>
                        <td className='p-2'>{competidor.numero}</td>
                        <td className='font-bold'>{competidor.piloto}</td>
                        <td>{competidor.pais_piloto}</td>
                        <td>{competidor.navegante}</td>
                        <td>{competidor.pais_navegante}</td>
                        <td>{competidor.auto}</td>
                        <td>{competidor.clase}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default TablaCompetidores;