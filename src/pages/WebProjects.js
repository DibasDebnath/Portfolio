import React from "react";
import "./WebProjects.css";

const WebProjects = () => {
  return (
    <div className="webProjects-container">
      <h1 className="webProjects-headline">Web Projects</h1>
      <p className="webProjects-summary">
        While my career has shifted towards game development, I still possess
        strong skills in web application development. I am currently learning to
        create applications using React and have experience with PHP, C# .NET,
        and JavaScript in various web projects. Additionally, I have worked with
        MySQL and MongoDB databases to manage and structure data effectively. In
        addition to these documented experiences, I have worked on several other
        projects that are currently undocumented.
      </p>
      <div className="video-grid-webProjects">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/q665aYnr22I?si=E5ihKYuElm1jvFgF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default WebProjects;
