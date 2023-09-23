const ImageCard = (props) => {
    return ( <>
        <div className="card w-25 float-start mx-1 my-1">
            <img className="card-img-top" src={`${props.img}`} alt="Title"></img>
            <div className="card-body bg-warning">
            <h4 className="card-title">{props.title}</h4>
            </div>
        </div>
    </> );
}
 
export default ImageCard;

