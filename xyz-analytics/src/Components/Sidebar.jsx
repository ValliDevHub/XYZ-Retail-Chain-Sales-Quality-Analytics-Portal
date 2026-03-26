import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>XYZ</h2>
      <Link to="/">Home</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/quality">Quality</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Sidebar;