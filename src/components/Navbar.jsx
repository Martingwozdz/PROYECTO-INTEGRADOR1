import  navbarimg  from "../imagenes/navbarimg.png";
import "../styles/navbar.css";


const Navbar = () => {

return (
 
<nav className="logoNavBar">
<div>
  <div className="imagennavbar">
    <a className="navbar-brand" href="/">
      <img src={ navbarimg } alt="home" />
    </a>
  </div>

<div className="botonesnavbar">
  <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href=""> Contacto </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/login">Login</a>
  </li>
  <li className="nav-item">
   
    <a className="nav-link" href="/register">Register</a>
  
  </li>
</ul>
</div>
</div>
</nav>

)}

export default Navbar;