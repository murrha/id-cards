import Amazon from "../json/amzdata.json";
import ClassImageCard from "./ClassImageCard";
import ImageCard from "./ImageCard";

const ImageCards = () => {

    console.log(Amazon.films);
    return ( <>

    <div className="container">
        {Amazon.films.map((film)=> {
        return <ClassImageCard key={film.FilmID} title={film.Title} img={film.Image}/>
        } )}

        {Amazon.films.map((film) =>{
            return <ImageCard key={film.FilmID} title={film.Title} img={film.Image}/>
        })}

        
    </div>
    
    </> );
}
 
export default ImageCards;