function Menu(props) {
    return (
      <div className="row menu">
      <div className="col-md-8 order-first ">
        <a href={props.href}>{props.title}</a>           
        <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className="container-fluid">
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Salvavidas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pelotas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sombrillas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Variados</a>
          </li>
      </ul>
      </div>
    </div>
   </nav>
</div>
      <div className="col order-last pt-1">
      <button type="button" className="btn btn-outline-success float-end"><i class="bi bi-cart"></i><span className='num-items'>2</span></button>
      
      </div>
    </div>
    )
  }
  
  export default Menu

  