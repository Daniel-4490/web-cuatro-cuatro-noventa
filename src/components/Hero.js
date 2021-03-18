import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import video from '../assets/video-fondo.webm'
import logo from '../assets/logo-cambiante.gif'

const StyledHero = styled.header`
  height: 950px;
`

const Hero = () => {
  return (
    <StyledHero className="w-full h-screen md:h-auto flex flex-col items-center justify-center overflow-hidden relative">
      <video src={video} autoPlay loop muted className="absolute top-0 left-0 w-full object-cover h-full" />
      <img src={logo} alt="cuatrocuatronoventa logo" className="z-10 py-20" />
      <div className="z-10 text-white flex flex-col items-center justify-center text-center">
        <span className="mb-4 uppercase text-2xl tracking-widest">
          En constante adaptación
        </span>
        <motion.div
          className="relative"
          animate={{ top: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop'
          }}>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-4xl" />
        </motion.div>
      </div>
    </StyledHero>
  )
}

export default Hero
