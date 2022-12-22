import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Preview from "./Preview";

export default function EditBlog() {
  const navigate = useNavigate();
  // padding around the username and user review
  // add useState == to be controlled add value={name} in textField
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const { articleId } = useParams();

  // allUsers data displayed into our react application === need Hook USE EFFECT, FETCH and USE STATE

  useEffect(() => {
    fetch(`http://localhost:8080/user/${articleId}`)
      .then((res) => res.json())
      .then((result) => {
        setName(result.name);
        setImageSrc(result.imageSrc);
        setTitle(result.title);
        setReview(result.review);
      });
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:8080/user/${articleId}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  // pass the event and prevent default value and print name and address to the console
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, review, title, imageSrc };
    //console.log(user);
    //save this data into the database === springboot application and xampp server and run. this route (localhost:8080/user/add) saves the data and we can use this to access it in our app
    // using the api call from react === need FETCH(azure library) !!!! CORS will block communication between local hosts === UserController in Java === @CrossOrigin //this will tell springboot application to connect to other applications
    fetch(`http://localhost:8080/user/${articleId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user), // converts JS object to JSON string
    })
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // allUsers data displayed into our react application === need Hook USE EFFECT, FETCH and USE STATE

  return (
    <div className="form-outside">
      <section className="form-holder">
        <form className="form" onSubmit={handleSubmit}>
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
            <input
              value="Preview"
              className="form-preview -button"
              type="button"
            ></input>
            <input className="form-submit -button" type="submit"></input>
            <input
              value="Delete"
              onClick={handleDelete}
              className="form-delete -button"
              type="button"
            ></input>
          </div>
        </form>
      </section>
      <Preview />
    </div>
  );
}
