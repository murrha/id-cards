import { Component } from "react";

class ClassCard extends Component {
    
    render() { 
        return (<div className="card w-25 float-start mx-1 my-1">
        <div className="card-body bg-info">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">{(this.props.age + " " + this.props.des)}</p>
        </div>
    </div>);
    }
}
 
export default ClassCard;

