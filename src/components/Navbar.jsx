import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ toggleSidebar, toggleTheme, theme }) => {
  const { user, logout } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <span className="welcome-text">Welcome, {user?.name}</span>

      <div className="nav-links">
        {user?.role === "Manager" && <Link to="/dashboard">Dashboard</Link>}
        <Link to="/products">Products</Link>

        {/* Theme Toggle Icon */}
        <button onClick={toggleTheme} className="icon-btn" title="Toggle Theme">
          {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
        </button>

        {/* Profile Dropdown */}
        <div className="profile-wrapper">
          <FaUserCircle
            className="profile-icon"
            onClick={() => setShowProfile(!showProfile)}
          />
          {showProfile && (
            <div className="profile-dropdown">
              <p className="profile-name"><strong>{user.name}</strong></p>
              <p className="profile-email">{user.email}</p>
              <button className="logout-btn" onClick={handleLogout}>
                <FaSignOutAlt style={{ marginRight: "6px" }} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;