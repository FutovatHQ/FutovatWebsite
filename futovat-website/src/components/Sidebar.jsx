import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

import Logo from "../assets/logo.png";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/admin");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={Logo} alt="Futovat Logo" className="sidebar-logo-image" />
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/admin/contacts"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          📨 Contacts
        </NavLink>
      </nav>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}
