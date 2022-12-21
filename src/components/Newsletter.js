import React, { useState, useEffect } from "react";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    isOpen && (
      //    <div className="newsletter-page">
      <div className="newsletter-holder">
        <button className="x-button" onClick={closeModal}>
          X
        </button>
        <div className="newsletter">
          <div>
            <h1 className="newsletter-title">Subscribe to our Newsletter</h1>
          </div>
          <div>
            <form className="newsletter-form">
              <input
                type="text"
                placeholder="Email Address"
                className="newsletter-email"
              ></input>

              <input
                type="submit"
                className="form-submit button-small"
                value="Subscribe"
              ></input>
            </form>
          </div>
        </div>
      </div>
    )
    // </div>
  );
}
