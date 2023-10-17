import './Card.css'



function Card({id, title, img, description, price, category, setCartChild, cartChild}){

    const handleClickCart = (cartItem) =>{
        setCartChild([...cartChild, cartItem]);
    }

    return(
     
        <div className="itemContainer">
            <div className="itemImg">
                <img src={img} alt={title} />
            </div>
            <div className="itemTitle">
                <p>{title}</p>
            </div>
            <div className="itemDescription">
                <p>{description}</p>
            </div>
            <div className='itemCategory'>
                <p>{category}</p>
            </div>
            <div className="itemPrice">
                <p>{price}€/kg</p>
            </div>
            <div>
                <button onClick={() => handleClickCart(price)}>Ajouter au panier <img src="image/cart.png" alt="cart" className='cart'/></button>
            </div>


        </div>
        )
}
export default Card;