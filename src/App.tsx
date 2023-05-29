import React, { useState } from 'react'
import './app.scss'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  
  let Links: {name: string, link: string}[] = [
    {name: "Home", link:"/"},
    {name: "About", link:"/"},
    {name: "Skills", link:"/"},
    {name: "Project", link:"/"},
    {name: "Contact", link:"/"},
  ]
  return (
    <>
    <Header Links={Links}/>
    <Banner/>
    <About/>
    <Skills/>
    <Projects showModal={showModal} setShowModal={setShowModal}/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
