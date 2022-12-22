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
          <Link to="/" className="title main prevent-select">
            bitBYTEbit
          </Link>
          <nav className="topbar-list-holder">
            <ul className="topbar-list">
              <li>
                <Link to="/" className="title home">
                  bitBYTEbit
                </Link>
              </li>
              <span>/</span>
              <li>
                <Link to="/create">CREATE</Link>
              </li>
              <span>/</span>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/twitter-24.png"}
                    className="social-icon"
                  ></img>
                </a>
              </li>
              <span>/</span>
              <li>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/tiktok-24.png"}
                    className="social-icon"
                  ></img>
                </a>
              </li>
              <span>/</span>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/instagram-24.png"}
                    className="social-icon"
                  ></img>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/create" element={<CreateBlog />}></Route>
        <Route exact path="/article/:articleId" element={<Blogs />}></Route>
        <Route exact path="/edit/:articleId" element={<EditBlog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
