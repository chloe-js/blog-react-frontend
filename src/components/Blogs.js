import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Blogs = ({ props }) => {
  const [post, setPost] = useState("");
  const { articleId } = useParams();

  // try and catch
  useEffect(() => {
    if (articleId !== undefined && props === undefined) {
      fetch(`http://localhost:8080/user/${articleId}`)
        .then((res) => res.json())
        .then((result) => {
          setPost(result);
        });
    } else {
      setPost(props);
    }
  }, []);

  return (
    <div className="blog-holder">
      <div className="blog-top">
        <div className="container">
          <div className="grid">
            <section>
              <h1 className="blog-title">{post.title}</h1>
              <h2 className="blog-user">{post.name}</h2>

              <time className="-date">
                {new Date(post.updateAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <br></br>
              <time className="-date">
                {new Date(post.updateAt).toLocaleTimeString("en-GB", {
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
  );
};

export default Blogs;
