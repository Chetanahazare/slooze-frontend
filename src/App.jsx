import React, { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const { user } = useContext(AuthContext);
  const [showSidebar, setShowSidebar] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme; // Update body class for global styling
  };

  return (
    <div className={`${theme} app-container`}>
      {user ? (
        <>
          <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} toggleTheme={toggleTheme} />
          {showSidebar && <Sidebar />}
          <div className="main-content">
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute allowedRoles={["Manager"]}>
                    <Dashboard theme={theme} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <ProtectedRoute allowedRoles={["Manager", "Store Keeper"]}>
                    <Products theme={theme} />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </div>
  );
};

export default App;