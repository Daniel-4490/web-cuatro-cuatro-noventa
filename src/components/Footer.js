import React from 'react'
import logoFooter from '../assets/logo-footer.png'

const Footer = () => {
  return (
    <footer className='flex-col items-center justify-center'>
      <div className='md:flex-row flex-col flex justify-center items-center text-center m-10 md:space-y-0.5 md:space-x-5'>
        <img src={logoFooter} className='max-h-20'></img>
        <span className="text-xl font-bold mb-6">
          Apoyamos a las ideas de negocio con creatividad y estrategia.
        </span>
      </div>
    </footer>
  )
}

export default Footer
