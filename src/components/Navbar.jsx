import './Navbar.css';

function Navbar () {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          
          <a className="btn btn-ghost text-xl">Kenny Luu</a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-20">
            <li><button className="btn btn-accent">About Me</button></li>
            <li><button className="btn btn-secondary">Projects</button></li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar