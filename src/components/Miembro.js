import React from 'react'

const Miembro = ({ nombre, cargo, link }) => {
  return (
    <div className="w-96 text-center m-12">
      <h3 className="text-6xl font-bold uppercase mb-6">{nombre}</h3>
      <h5 className="bg-gray-900 text-white uppercase text-3xl font-medium p-4 mb-8">{cargo}</h5>
      <a href={link} className="py-2 text-xl uppercase px-8 border-solid border-gray-900 border-2">Behance</a>
    </div>
  )
}

export default Miembro
