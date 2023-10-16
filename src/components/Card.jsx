import './Card.css'



function Card({id, title, img, description, price, category}){
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
                <p>{price}</p>
            </div>
            <div>
                <p>Ajouter au panier <img src="image/cart.png" alt="cart" className='cart'/></p>
            </div>


        </div>
        )
}
export default Card;