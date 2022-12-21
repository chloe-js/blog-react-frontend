import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Blogs = ({ props }) => {
  const [post, setPost] = useState("");
  const { articleId } = useParams();

  // try and catch

  useEffect(() => {
    if (articleId !== undefined) {
      fetch(`http://localhost:8080/user/${articleId}`)
        .then((res) => res.json())
        .then((result) => {
          setPost(result);
        });
    }
  }, []);

  return props === undefined ? (
    <div className="blog-holder">
      <div className="blog-top">
        <div className="container">
          <div className="grid">
            <section>
              <h1 className="blog-title">{post.title}</h1>
              <h2 className="blog-user">{post.name}</h2>

              <time className="-date">
                {new Date(post.lastUpdate).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <br></br>
              <time className="-date">
                {new Date(post.lastUpdate).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>
            </section>
            <section>
              <img className="blog-image" src={post.imageSrc} alt="" />
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <section>
          <p className="blog-review">{post.review}</p>
        </section>
      </div>
    </div>
  ) : (
    <div className="blog-holder">
      <div className="blog-top">
        <div className="container">
          <div className="grid">
            <section>
              <h1 className="blog-title">{props.title}</h1>
              <h2 className="blog-user">{props.name}</h2>
              <time className="-date">
                {new Date(Date.now()).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <br></br>
              <time className="-date">
                {new Date(Date.now()).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>
            </section>
            <section>
              <img className="blog-image" src={props.imageSrc} alt="" />
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <section>
          <p className="blog-review">{props.review}</p>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
