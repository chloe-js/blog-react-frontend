import "../MainContent.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";
import Blogs from "./Blogs";
export default function Topbar() {
  return (
    <BrowserRouter>
      <div className="topbar-holder">
        <div className="topbar">
          <div className="title main prevent-select">bitBYTEbit</div>
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
        <Route exact path="/create" element={<CreateBlog />}></Route>
        <Route
          exact
          path="/article/:articleId"
          element={<Blogs />}
        ></Route>
        <Route exact path="/edit/:articleId" element={<EditBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
