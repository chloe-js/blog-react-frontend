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
              <div key={i} className="slider-individual">
                <Link to={"/article/" + post.id}>
                  <img
                    alt={post.title + " image"}
                    className="slider-main-image"
                    src={post.imageSrc}
                  ></img>
                </Link>
                <div>
                  <div>
                    <h2 className="slider-title">{post.title}</h2>
                  </div>
                  <div className="slider-text">
                    <div>
                      <p className="-username">By {post.name}</p>
                      <time className="-date">
                        {formattedDateAndTimeArray[i]}
                      </time>
                      <Link to={"/edit/" + post.id} className="edit">
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={i}></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
