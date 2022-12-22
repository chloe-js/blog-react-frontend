import React, { useState } from "react";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const useEmail = { email };
    fetch("http://localhost:8080/email/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(useEmail), // converts JS object to JSON string
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsOpen(false);
  };

  //openmodel function

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
          <div className="newsletter-form-holder">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email Address"
                className="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
