export default function Slider({ posts }) {
  console.log(posts);
  return (
    <section className="slider-section">
      <div className="slider-main-holder">
        <div className="slider-main">
          {posts.map((post, i) => {
            return i !== posts.length - 1 ? (
              <div className="slider-individual">
                <div className="slider-text">
                  <h2>{post.title}</h2>
                  <a>{post.name}</a>
                  <a>date</a>
                </div>
                <img className="slider-main-image" src={post.imageSrc}></img>
              </div>
            ) : (
              <></>
            );
          })}
        </div>
      </div>
    </section>
  );
}
