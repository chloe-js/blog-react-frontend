export default function Slider({ posts }) {
  const postsReversed = posts.slice().reverse();
  return (
    <section className="slider-section">
      <div className="slider-main-holder">
        <div className="slider-main">
          {postsReversed.map((post, i) => {
            return i !== 0 ? (
              <div key={i} className="slider-individual">
                <div className="slider-text">
                  <div>
                    <h2 className="slider-title">{post.title}</h2>
                  </div>
                  <div>
                    <p className="-username">{post.name}</p>
                  </div>
                  <div>
                    <time className="-date">date</time>
                  </div>
                </div>
                <img
                  alt={post.title + "image"}
                  className="slider-main-image"
                  src={post.imageSrc}
                ></img>
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
