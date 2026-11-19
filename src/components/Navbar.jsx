import { BsMoonStarsFill } from "react-icons/bs";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="main-container">
      <div className="nav-container">

        <div>
          <h1>Expense Tracker</h1>
        </div>

        <div className="nav-link">
          <ul>
            <li><NavLink to="/" className="links">Home</NavLink></li>
          </ul>

          <ul>
            <li><NavLink to="/add-expense" className="links">Add Expense</NavLink></li>
          </ul>

          <ul>
            <li><a href="" className="links">Expense items</a></li>
          </ul>
        </div>

        <div className="nav-action">
          <button type="button" className="theme-toggle">
            <BsMoonStarsFill />
          </button>

          <a href="" className="links logout-btn">
            logout
          </a>
        </div>

      </div>
    </div>
  );
}