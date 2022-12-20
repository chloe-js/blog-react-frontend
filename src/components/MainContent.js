import "../MainContent.css";

import { Link } from "react-router-dom";
export default function MainContent({ posts }) {
  let firstPost;
  if (posts.length !== 0) {
    firstPost = posts[posts.length - 1];
  } else firstPost = "";
  return (
    <div>
      {firstPost !== "" ? (
        <article>
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
                  }) +
                    " " +
                    new Date(firstPost.lastUpdate).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                </time>
                <Link to={"/edit/" + firstPost.id} className="edit">
                  Edit
                </Link>
              </div>
            </div>
            <div className="main-image-holder">
              <img
                alt={firstPost.title + " image"}
                src={firstPost.imageSrc}
                className="main-image"
              ></img>
            </div>
          </Link>
        </article>
      ) : (
        <></>
      )}
    </div>
  );
}
