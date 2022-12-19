import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Paper, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function User() {
  const navigate = useNavigate();
  // padding around the username and user review
  const paperStyle = {
    padding: "50px 20px",
    width: 600,
    margin: "20px auto",
    background: "#232324",
    border: "none",
  };
  // add useState == to be controlled add value={name} in textField
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  // allUsers data displayed into our react application === need Hook USE EFFECT, FETCH and USE STATE
  const [posts, setPosts] = useState([]);

  // pass the event and prevent default value and print name and address to the console
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
    const user = { name, review, title, imageSrc };
    //console.log(user);
    //save this data into the database === springboot application and xampp server and run. this route (localhost:8080/user/add) saves the data and we can use this to access it in our app
    // using the api call from react === need FETCH(azure library) !!!! CORS will block communication between local hosts === UserController in Java === @CrossOrigin //this will tell springboot application to connect to other applications
    fetch("http://localhost:8080/user/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user), // converts JS object to JSON string
    })
      .then((response) => response.json())
      .then((data) => {
        onNewPost(data);
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

  function onNewPost(post) {
    setPosts([...posts, post]);
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "darkBlue" }}>
          <u>Add New Blog Review</u>
        </h1>
        <form className={classes.root} noValidate autoComplete="off">
          {/* add some style with fullWidth=== full size stretch for user and review so they are underneath each other not side by side*/}
          {/* add useState == to be controlled add value={name} in textField. onChange === when write something it should indicate the event and set the name === the value that we are typing will be SAVED here  */}
          <TextField
            id="outlined-basic"
            label="Review Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="User Review"
            variant="outlined"
            fullWidth
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="User Image Source"
            variant="outlined"
            fullWidth
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
          />
          {/* add on click event when post it will get and add the data === add handleClick function above return*/}
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Post Review
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
