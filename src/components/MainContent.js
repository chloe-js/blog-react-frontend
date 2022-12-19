import "../MainContent.css";
import React, { useState, useEffect } from "react";

import { Await } from "react-router-dom";

export default function MainContent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  return (
    <div>
      <article>
        <div className="main-holder">
          <div>
            <div className="main-title-holder">
              <Await>
                <h1 className="main-title">Title {console.log(posts)}</h1>
              </Await>
            </div>
            <div className="username-holder">
              <p className="main-username">By {}</p>
            </div>
            <div className="time-holder">
              <time className="time">19 December 2022</time>
            </div>
          </div>
          <div className="main-image-holder">
            <img
              src="https://cdn.vox-cdn.com/thumbor/wDJT7wsqvXd3tjL6BoHu84CoP4U=/0x0:2172x1128/1000x1000/filters:focal(1008x666:1009x667)/cdn.vox-cdn.com/uploads/chorus_asset/file/24277949/Screen_Shot_2022_12_08_at_9.30.25_PM.png"
              className="main-image"
            ></img>
          </div>
        </div>
      </article>
    </div>
  );
}
