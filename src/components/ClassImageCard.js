import { Component } from "react";

class ClassImageCard extends Component {

    render() { 
        return (<div className="card w-25 float-start mx-1 my-1">
        <img className="card-img-top" src={`${this.props.img}`} alt="Title"></img>
            <div className="card-body bg-info">
            <h4 className="card-title">{this.props.title}</h4>
            </div>
    </div>);
    }
}
 
export default ClassImageCard;