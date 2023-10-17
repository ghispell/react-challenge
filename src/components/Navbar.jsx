import '../App.css'



function Navbar({cart}){

    const cartNumber = cart.map(str =>{
        return parseFloat(str)
    });
    const price = cartNumber.reduce((a,b) => a + b)
    return (
    <div className="navbar">
        <div className='navLeft'>
            <img src="image/logo.png" alt="logo" className='logo'/> 
        </div>
        
        <h2>Des fruits et légumes locaux et frais !</h2>
            <div className='navRight'>
                <div className='cartNavDiv'>
                <img src="image/cart.png" alt="cart" className='cartNav'/>
                <p>{cart.length-1} article(s)</p>
                <p>{price} €</p>
                </div>
            
            <h1>Gipe</h1>

            </div>
    </div>

    )
}

export default Navbar;