import { Outlet, Link } from "react-router-dom";
import "./layout.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h3>NoteUp</h3>
        <nav>
          <Link to="/">🏠 Home</Link>
          <hr style={{border:'0.5px solid #333'}}/>
          <Link to="/note/nota-1">📄 Nota 1</Link>
          <Link to="/note/nota-2">📄 Nota 2</Link>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
