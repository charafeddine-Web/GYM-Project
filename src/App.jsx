import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Services from './components/Services'
import Packes from './components/Packes'
import Client from './components/Client'
import About from './components/About'
import Comment from './components/Comment'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <NavBar />
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="services-packs">
        <Packes />
        <Services />
      </div>
      <div id="contact">
        <Client />
      </div>
      <Comment/>
      <Footer/>
    </>
  )
}

export default App
