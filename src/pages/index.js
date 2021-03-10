import React from 'react'
import Hero from '../components/Hero'
import Miembro from '../components/Miembro'

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <article className="texto"></article>
      <div className="flex justify-around py-16">
        <Miembro
          nombre="Daniel Alarcón"
          cargo="Director de Arte"
          link="#" />
        <Miembro
          nombre="Elías Castro"
          cargo="Director Creativo"
          link="#" />
      </div>
      <footer />
    </main>
  )
}

export default IndexPage
