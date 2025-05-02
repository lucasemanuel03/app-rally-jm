import React from 'react';

const TablaCompetidores = ({ competidores }) => {
    return (
      <div className="flex flex-col overflow-x-auto shadow-md shadow-black/50">
        <table className="min-w-full divide-y divide-gray-700 rounded-lg shadow-lg overflow-hidden text-white text-sm sm:text-base">
          <thead className="bg-blue-950 ">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-yellow-500">N°</th>
              <th className="px-4 py-3 text-left font-semibold text-yellow-500">Piloto</th>
              <th className="px-4 py-3 text-left font-semibold text-yellow-500">País</th>
              <th className="px-4 py-3 text-left font-semibold text-yellow-500">Navegante</th>
              <th className="px-4 py-3 text-left font-semibold text-yellow-500">País</th>
              <th className="px-4 py-3 text-left font-semibold text-yellow-500">Auto</th>
              <th className="px-4 py-3 text-left font-semibold text-yellow-500">Clase</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-gray-950 text-center">
            {competidores.map((competidor, index) => (
              <tr
                key={index}
                className="hover:bg-gray-800 transition duration-200"
              >
                <td className="px-4 py-2">{competidor.numero}</td>
                <td className="px-4 py-2 font-bold">{competidor.piloto}</td>
                <td className="px-4 py-2">{competidor.pais_piloto}</td>
                <td className="px-4 py-2">{competidor.navegante}</td>
                <td className="px-4 py-2">{competidor.pais_navegante}</td>
                <td className="px-4 py-2">{competidor.auto}</td>
                <td className="px-4 py-2">{competidor.clase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TablaCompetidores;
  