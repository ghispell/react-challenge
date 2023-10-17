import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardList from './components/CardList'
import Header from './components/Header'




function App() {

  const [filter, setFilter] = useState("Tous");
  const [cart, setCart] = useState([0])

  function handleClick(name){
      setFilter(name);
  }

console.log(cart);

  return (
    <>
      <Navbar cart={cart}/>    
      <Header />
      <div className='filterButton'>
        <button onClick={() => handleClick("Tous")}>Tout</button>
        <button onClick={() => handleClick("Légume")}>Légumes</button> 
        <button onClick={() => handleClick("Fruit")}>Fruit</button>
      </div>
      <CardList filter={filter} setCart={setCart} cart={cart}/>
      <Footer />
    </>
  )
}

export default App
