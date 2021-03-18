import React from 'react'

const Miembro = ({ nombre, cargo, link }) => {
  return (
    <div className="w-90 text-center my-12 mx-4">
      <span className="mb-4 uppercase text-2xl tracking-widest">
          Agencia de publicidad independiente
          en constante adaptación
        </span>
      <h3 className="text-4xl font-bold uppercase mb-6">{nombre}</h3>
      <h5 className="bg-black text-white uppercase text-3xl font-medium p-4 mb-9">{cargo}</h5>
      <a href={link} rel="noreferrer" target="_blank" className="py-2 text-xl uppercase px-8 border-solid border-gray-900 border-2">Behance</a>
    </div>
  )
}

export default Miembro
