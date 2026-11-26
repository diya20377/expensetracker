import { BsMoonStarsFill } from "react-icons/bs";
import "../styles/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

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
            <li><NavLink to="/expense-items" className="links">Expense items</NavLink></li>
          </ul>
        </div>

        <div className="nav-action">
          <button type="button" className="theme-toggle">
            <BsMoonStarsFill />
          </button>

          <a href="" className="links logout-btn" to="" onClick={logout}>
            logout
          </a>
        </div>

      </div>
    </div>
  );
}