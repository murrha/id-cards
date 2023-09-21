import Card from "./Card";
import Data from '../json/Data.json';

const Cards = () => {

    console.log(Data.data); 
    return (<>
     {Data.data.map((ele) => {
        return <Card key={ele.id} name={ele.name} age= {ele.age} des={ele.des}/>
     })}
    
    </>) ;
}
 
export default Cards;