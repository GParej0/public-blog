import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">Blog</Link>
            </div>
            <div className="nav-links">
                <Link to="/auth/signup">Sign up</Link>
                <Link to="/auth/login">Log in</Link>
            </div>
        </nav>
    );
}