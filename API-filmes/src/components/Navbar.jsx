import { Link } from "react-router-dom";
const Navbar = () => {


<nav id="navbar">
          <h2>
            <Link to="/" >MoviesLib</Link>
          </h2>
          <form>
            <input type="text" placeholder="Busque um filme"/>
          </form>
</nav>
};

export default Navbar;