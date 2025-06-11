import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBox } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <aside className="sidebar">
      <ul>
        {user?.role === "Manager" && (
          <li>
            <FontAwesomeIcon icon={faHome} />
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        <li>
          <FontAwesomeIcon icon={faBox} />
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;