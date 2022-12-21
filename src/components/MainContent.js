import "../MainContent.css";

import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
export default function MainContent({ posts }) {
  let firstPost;
  if (posts.length !== 0) {
    firstPost = posts[posts.length - 1];
  } else firstPost = "";
  return (
    <div>
      {firstPost !== "" ? (
        <article>
          <Newsletter />
          <Link to={"/article/" + firstPost.id} className="main-holder">
            <div>
              <div className="main-title-holder">
                <h1 className="main-title">{firstPost.title}</h1>
              </div>
              <div className="username-holder">
                <p className="-username">By {firstPost.name}</p>
              </div>
              <div className="date-holder">
                <time className="-date">
                  {new Date(firstPost.lastUpdate).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            <div className="main-image-holder">
              <img
                alt={firstPost.title + " image"}
                src={firstPost.imageSrc}
                className="main-image"
              ></img>
            </div>
            <Link to={"/edit/" + firstPost.id} className="-main">
              Edit
            </Link>
          </Link>
        </article>
      ) : (
        <></>
      )}
    </div>
  );
}
