/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Coding Assessment Platform",
    description:
      " Developed a scalable online assessment platform using the MERN stack, enabling instructors to create and assign coding tests while providing students with real‐time code evaluation powered by Judge0 API",
    url: "  https://github.com/Avishkar-1505/Assessment-Platform",
  },
  {
    title: "ConvoCloud",
    description:
      "Developed a scalable web‐based chat application using React, Node.js, Express, and MongoDB, supporting real‐time communication with Socket.io. Containerized application services with Docker, optimizing deployment and ensuring portability across environments.",
    url: "https://github.com/Avishkar-1505/ConvoCloude",
  },
  {
    title: "EduStream",
    description:
      "An Edtech Platform, Designed and implemented interactive and dynamic learning modules enhancing student engagement and improving learning outcomes.",
    url: "https://github.com/Avishkar-1505/EduStream-MERN",
  },
  {
    title: "Resume Generation using NLP Python, BERT (Hugging Face)",
    description:
      "Development and integration of the resume generation pipeline, ensuring seamless processing from data input to structured output.",
    url: "",
  },
  {
    title: "Jobify",
    description:
      "Developed a full-stack web application using the MERN (MongoDB, Express.js, React, Node.js) stack to manage job applications. Features include user authentication, job tracking, contact management, and note-taking. Implemented responsive design for seamless usage on both desktop and mobile devices",
    url: "https://github.com/Avishkar-1505/Jobify-MERN",
  },
  {
    title: "Tetris",
    description:
      "Developed Classic Tetris Game in C++. Utilized the RaylibC++ GUI library to construct the GUI interface. Applied Object Oriented Programming principles to structure and implement the project. Applied design and implementation techniques to the game logic, fostering modular and scalable approach",
    url: "https://github.com/Avishkar-1505/Tetris-Raylib-Cpp",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {/* <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div> */}
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
