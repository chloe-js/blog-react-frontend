import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Blogs from "./Blogs";

export default function Preview({ props }) {
  //   const { prop1, prop2: open } = props;
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return isOpen ? (
    <div>
      <input
        value="Preview"
        className="form-preview -button"
        type="button"
        onClick={openModal}
      ></input>
      <div className="blog-preview-holder">
        <div className="blog-preview">
          <button onClick={closeModal} className="x-button big-button">
            x
          </button>
          <Blogs props={props} />
        </div>
      </div>
    </div>
  ) : (
    <input
      value="Preview"
      className="form-preview -button"
      type="button"
      onClick={openModal}
    ></input>
  );
}
