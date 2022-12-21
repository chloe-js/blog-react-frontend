import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Preview from "./Preview";

export default function CreateBlog() {
  const navigate = useNavigate();
  // padding around the username and user review
  // add useState == to be controlled add value={name} in textField
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [post, setPost] = useState("");

  // allUsers data displayed into our react application === need Hook USE EFFECT, FETCH and USE STATE
  const [posts, setPosts] = useState([]);

  function onPreview() {
    const lastUpdate = Date.now();
    const prop = { title, name, review, imageSrc, lastUpdate };
    setPost(prop);
  }

  // pass the event and prevent default value and print name and address to the console
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, review, title, imageSrc };
    //save this data into the database === springboot application and xampp server and run. this route (localhost:8080/user/add) saves the data and we can use this to access it in our app
    // using the api call from react === need FETCH(azure library) !!!! CORS will block communication between local hosts === UserController in Java === @CrossOrigin //this will tell springboot application to connect to other applications
    fetch("http://localhost:8080/user/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user), // converts JS object to JSON string
    })
      /*.then((response) => response.json())*/
      .then((/*data*/) => {
        /*onNewPost(data);*/
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // allUsers data displayed into our react application === need Hook USE EFFECT, FETCH and USE STATE
  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  /*function onNewPost(post) {
    setPosts([...posts, post]);
  }*/

  return (
    <div className="form-outside">
      <section className="form-holder">
        <form
          className="form"
          onSubmit={handleSubmit}
          onClick={() => {
            onPreview();
          }}
        >
          <div className="form-breaker">
            <input
              type="text"
              id="username"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username..."
              autoComplete="off"
            ></input>
          </div>
          <div className="form-breaker">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
              autoComplete="off"
            ></input>
          </div>
          <div className="form-breaker">
            <textarea
              type="text"
              id="body"
              name="body"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Review..."
              autoComplete="off"
            ></textarea>
          </div>
          <div className="form-breaker">
            <input
              type="text"
              id="image"
              name="image"
              value={imageSrc}
              onChange={(e) => setImageSrc(e.target.value)}
              placeholder="Image Source..."
              autoComplete="off"
            ></input>
          </div>
          <div className="form-breaker buttons">
            <Preview props={post} />
            <input className="form-submit -button" type="submit"></input>
          </div>
        </form>
      </section>
    </div>
  );
}
