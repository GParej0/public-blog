import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">Blog</Link>
            </div>
            <div className="nav-links">
                <Link to="https://mi-blog-privado.netlify.app/signup">Sign up</Link>
                <Link to="https://mi-blog-privado.netlify.app/login">Log in</Link>
            </div>
        </nav>
    );
}