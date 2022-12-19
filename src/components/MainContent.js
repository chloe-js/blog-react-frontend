import "../MainContent.css";

export default function MainContent({ posts }) {
  let firstPost;
  if (posts.length !== 0) {
    firstPost = posts[posts.length - 1];
  } else firstPost = "Unavailable";
  return (
    <div>
      <article>
        <div className="main-holder">
          <div>
            <div className="main-title-holder">
              <h1 className="main-title">{firstPost.title}</h1>
            </div>
            <div className="username-holder">
              <p className="-username">By {firstPost.name}</p>
            </div>
            <div className="date-holder">
              <time className="-date">Date</time>
            </div>
          </div>
          <div className="main-image-holder">
            <img
              alt={firstPost.title + "image"}
              src={firstPost.imageSrc}
              className="main-image"
            ></img>
          </div>
        </div>
      </article>
    </div>
  );
}
