import "../MainContent.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import User from "./User";
export default function Topbar() {
  return (
    <BrowserRouter>
      <div className="topbar-holder">
        <div className="topbar">
          <div className="title main">bitBYTEbit</div>
          <nav className="topbar-list-holder">
            <ul className="topbar-list">
              <li>
                <Link to="/" className="title home">
                  bitBYTEbit
                </Link>
              </li>
              <span>/</span>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/create" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
