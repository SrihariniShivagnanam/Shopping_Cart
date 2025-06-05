import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="nav-header">
      <div className="nav-logo"></div>

      <div className="nav-buttons">
        <button onClick={() => navigate("/")} className={pathname === "/" ? "active" : ""}>Home</button>
        <button onClick={() => navigate("/login")} className={pathname === "/login" ? "active" : ""}>Login</button>
        <button onClick={() => navigate("/about")} className={pathname === "/about" ? "active" : ""}>About</button>
        <button onClick={() => navigate("/contact")} className={pathname === "/contact" ? "active" : ""}>Contact</button>
      </div>
    </nav>
  );
};

export default Header;
