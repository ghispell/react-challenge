import Card from "./Card";
import data from '../data/data.json'

function CardList({filter, setCart, cart}){

    return(
        <div className="articles">

           {filter === "Tous" ? 
           data.map((article) => (
            <Card id={article.id} title={article.title} img={article.img} description={article.description} price={article.price} category={article.category} setCartChild={setCart} cartChild={cart}/>)
           
           )
           : data.filter(element => element.category === filter).map((article) => (
            <Card id={article.id} title={article.title} img={article.img} description={article.description} price={article.price} category={article.category} setCartChild={setCart} cartChild={cart}/>
            
            ))}
            
        </div>

    )
}
export default CardList;
