import Card from "./Card";
import Data from '../json/Data.json';
import ClassCard from "./ClassCard";

const Cards = () => {

    console.log(Data.data);  
    return (<>
    
    <div className="container">
    <h1>Working with Components</h1>
    <p>Class Components are in blue and Functional Components are in Yellow</p>
        {Data.data.map((ele) => {
            return <ClassCard key={ele.id} name={ele.name} age= {ele.age} des={ele.des}/>
        })}
        {Data.data.map((ele) => {
            return <Card key={ele.id} name={ele.name} age= {ele.age} des={ele.des}/>
        })}
    </div>

     
    
    </>) ;
}
 
export default Cards;