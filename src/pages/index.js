import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Miembro from '../components/Miembro'

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <article className="texto"></article>
      <div className="md:flex-row flex-col m-8 flex justify-around py-40">
        <Miembro
          nombre="Daniel Alarcón"
          cargo="Director de Arte"
          link="https://www.behance.net/dalart" />
        <Miembro
          nombre="Elías Castro"
          cargo="Director Creativo"
          link="https://www.behance.net/donelias" />
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage
