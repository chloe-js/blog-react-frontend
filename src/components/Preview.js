import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Blogs from "./Blogs";

export default function Preview() {

const [isOpen, setIsOpen] = useState(true)

function closeModal() {
    setIsOpen(false)
}

function openModal() {
    setIsOpen(true)
}

return (
    isOpen && (
        <div className="blog-preview">
            <button onClick={closeModal} className="x-button">
                x
            </button>
            <Blogs />
        </div>
        )
    )
}