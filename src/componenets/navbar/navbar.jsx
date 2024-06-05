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
        <Link className="navbar-link">Images</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="TaskEventContainer">Tasks and Events</Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link">Chat</Link>
      </li>
      {localStorage.getItem("nutshell_user") ? (
        <li className="navbar-item">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("nutshell_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
