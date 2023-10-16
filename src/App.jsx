import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardList from './components/CardList'
import Card from './components/Card'
import Header from './components/Header'



function App() {

  return (
    <>
      <Navbar />    
      <Header />
      <CardList />
      <Footer />
    </>
  )
}

export default App
