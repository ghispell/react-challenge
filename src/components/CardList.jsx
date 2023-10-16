import Card from "./Card";
import data from '../data/data.json'

function CardList(){
    return(
        <div className="articles">
            {data.map((article) => (
            <Card id={article.id} title={article.title} img={article.img} description={article.description} price={article.price} category={article.category} />
            
            ))}
            
        </div>

    )
}
export default CardList;
