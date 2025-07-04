import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-img-wrapper">
                <img
                    src="/public/heat.jpg"
                    alt="About"
                    className="about-img"
                />
            </div>
            <div className="about-content">
                <h2>About Us</h2>
                <p>🧪⚡ Non-PhD, high-voltage Data Scientist. I tame tensors like wild beasts 🦁, whisper secrets to PyTorch layers 🤫, and debug with the intensity of a sleep-deprived wizard 🧙‍♂️☕. Obsessed with reproducibility like a time traveler on espresso ⏳🚀. If it runs once, I’ll make it run twice—exactly the same 🧿. My brain is a matrix 🧠, my heart beats in epochs ⏱️</p>
            </div>
        </div>
    );
}

export default About;
