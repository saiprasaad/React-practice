import { Link } from "react-router-dom";

export function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a href = {`/`} className="navbar-brand">Navbar brand</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to = {`/home`} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to = {`/about`} className="nav-link">About</Link>
                </li>
            </ul>
        </div>
    </nav>
}