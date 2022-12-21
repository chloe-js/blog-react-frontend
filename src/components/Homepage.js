import MainContent from "./MainContent";
import Slider from "./Slider";
import React, { useState, useEffect } from "react";
import Newsletter from "./Newsletter";

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  return (
    <div className="width">
      <Newsletter />
      <MainContent posts={posts} />
      <Slider posts={posts} />
    </div>
  );
}
