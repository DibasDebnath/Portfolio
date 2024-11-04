import React from "react";
import "./UnrealProjects.css";

const UnrealProjects = () => {
  return (
    <div className="unrealProjects-container">
      <h1 className="unrealProjects-headline">Unreal Engine Projects</h1>
      <p className="unrealProjects-summary">
        I have one year of personal experience with Unreal Engine, during which
        I developed several small games. One of my notable projects is an
        infinite runner game that was successfully published on the Google Play
        Store, featuring integrated Google achievements and leaderboards. This
        experience has enhanced my skills in game development and allowed me to
        explore various gameplay mechanics and user engagement strategies.
      </p>
      <div className="video-grid-unrealProjects">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ILLqXYJhDDU?si=A5OIRSiz_b3UfGD_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OdpIxGsmbwg?si=IGxQgvr6pAWNyGq8"
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

export default UnrealProjects;
