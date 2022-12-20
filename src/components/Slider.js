import { Link } from "react-router-dom";

export default function Slider({ posts }) {
  const postsReversed = posts.slice().reverse();

  let formattedDateAndTimeArray = [];
  postsReversed.forEach((post) => {
    formattedDateAndTimeArray.push(
      new Date(post.lastUpdate).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
        " " +
        new Date(post.lastUpdate).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
    );
  });

  return (
    <section className="slider-section">
      <div className="slider-main-holder">
        <div className="slider-main">
          {postsReversed.map((post, i) => {
            return i !== 0 ? (
              <Link
                key={i}
                to={"/article/" + post.id}
                className="slider-individual"
              >
                <img
                  alt={post.title + " image"}
                  className="slider-main-image"
                  src={post.imageSrc}
                ></img>
                <div>
                  <h2 className="slider-title">{post.title}</h2>
                </div>
                <div className="slider-text">
                  <div>
                    <p className="-username">{post.name}</p>
                    <time className="-date">
                      {formattedDateAndTimeArray[i]}
                    </time>
                  </div>
                </div>
              </Link>
            ) : (
              <div key={i}></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
