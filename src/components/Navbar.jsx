import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          
          <a className="btn btn-ghost text-xl">Kenny Luu</a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-20">
            <li>
              <button className="btn btn-accent">
                <Link to ="aboutme">About Me</Link>
              </button>
            </li>
            <li>
              <button className="btn btn-secondary">
                <Link to ="aboutme">Projects</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar