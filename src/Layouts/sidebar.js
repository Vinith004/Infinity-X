import "../Styles/sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Sidebar Menu</h3>
      <ul>
         <li><Link className="active link" to="/">Home</Link></li>
         <li><Link className="link" to="/Sector">Sector Detail</Link></li>
         <li><Link className="link" to="/contact">Contact</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
