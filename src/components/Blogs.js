import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Blogs = (props) => {

    console.log(posts)

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const [post, setPost] = useState("");
    const { articleId } = useParams();

    // try and catch

    useEffect(() => {
        fetch(`http://localhost:8080/user/${articleId}`)
          .then((res) => res.json())
          .then((result) => {
            setPost(result)
          });
      }, []);

    return ( 
        <main>
            <div class="blog-top">
                <div class="container">
                    <div class="grid">
                        <section>
                            <h1 class="blog-title">{post.title}</h1>
                            <h2 class="blog-user">{post.name}</h2>
                            <h3 class="blog-time">{post.date}</h3>
                            <time className="-date">
                                {new Date(post.lastUpdate).toLocaleDateString("en-GB", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                            <br></br>
                            <time>
                                {new Date(post.lastUpdate).toLocaleTimeString("en-GB", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </time>
                        </section>
                        <section>
                            <img class="blog-image" src={post.imageSrc} alt="" />
                        </section>
                    </div>
                </div>
            </div>
            <div class="container">
                <section>
                    <p class="blog-time">{post.review}</p>
                </section>
            </div>
        </main>
     );
}
 
export default Blogs;