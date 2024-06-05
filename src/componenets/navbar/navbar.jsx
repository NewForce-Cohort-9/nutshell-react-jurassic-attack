import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-link">Home</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="articles">Articles</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="images">Images</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link">Tasks and Events</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link">Chat</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link">Logout</Link>
      </li>
    </ul>
  );
};
