import '../App.css'



function Navbar(){
    return (
    <div className="navbar">
        <img src="image/logo.png" alt="logo" className='logo'/>
        <h2>Des fruits et légumes locaux et frais !</h2>
            <div className='navRight'>
            <img src="image/cart.png" alt="cart" className='cartNav'/>
            <h1>Gipe</h1>

            </div>
    </div>

    )
}

export default Navbar;