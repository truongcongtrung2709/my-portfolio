import React,{ useRef, useState } from 'react'
import './app.scss'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About/About'
const App: React.FC = () => {
  let Links: {name: string, link: string}[] = [
    {name: "Home", link:"/"},
    {name: "About", link:"/"},
    {name: "Skills", link:"/"},
    {name: "Project", link:"/"},
    {name: "Contact", link:"/"},
  ]
  const titleRef = useRef<HTMLDivElement>(null)
  const scrollToView = () => {
    titleRef.current?.scrollIntoView({behavior: "smooth"})
  }
  return (
    <>
    <Header Links={Links} scrollToView={scrollToView}/>
    <Banner/>
    <About 
    titleRef={titleRef}
     scrollToView={scrollToView}
     />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    </>
  )
}

export default App
