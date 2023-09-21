const Card = (props) => {
    return (<>
    <div className="card w-25 float-start mx-1 my-1">
        <div className="card-body bg-info">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">{props.age + " " + props.des}</p>
        </div>
    </div>
    </>  );
}
 
export default Card;