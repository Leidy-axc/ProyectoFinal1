

const Item = ({ title, stock, price, pictureUrl }) => {
    return (
        
        <div className="card col-md-2">
          <img src={pictureUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
         <h5 className="card-title">$ {price}</h5>
         <p className="card-text"></p>
         <a href="#" className="btn btn-primary">Detalles</a>
         <span>{stock} unid</span>
       </div>
       </div>
     
    );
}

export default Item;