import { Link } from 'react-router-dom';


export const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <span className = "navbar-brand">SF</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className = "nav-link active" to = "/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link active" to = "/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link active" to = "/projects">Projects</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}