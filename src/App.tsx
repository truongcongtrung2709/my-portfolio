import React, { useRef, useState } from 'react'
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
  // const ref:any = useRef(null);
  // const handleScrollIntoView= ()=> {
  //   ref.current?.scrollIntoView({behavior: "smooth"});
  // }

  
  let Links: {name: string, link: string}[] = [
    {name: "Home", link:"banner"},
    {name: "About", link:"about"},
    {name: "Skills", link:"skills"},
    {name: "Projects", link:"projects"},
    {name: "Contact", link:"contact"},
  ]
  return (
    <>
    <Header 
    // handleScrollIntoView={handleScrollIntoView}
     Links={Links}/>
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
