import { Link } from "react-router-dom";

export default function Navbar1(){
   

return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="http://localhost:3000/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to={"/"} >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to={"/about"} >about <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to={"/CheckForfait"} >CheckForfait <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to={"/Test"} >Test <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to={"/plan_Tarrifaire"} >plan_Tarrifaire <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
</nav>



);

}