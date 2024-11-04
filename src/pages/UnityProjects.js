import React from "react";
import "./UnityProjects.css";

const UnityProjects = () => {
  return (
    <div className="unityProjects-container">
      <h1 className="unityProjects-headline">Unity Projects</h1>
      <p className="unityProjects-summary">
        In my Unity projects, I have explored various aspects of game
        development, utilizing the Unity engine to create immersive and
        interactive experiences. Each project highlights my skills in
        programming, game mechanics, and design. From developing engaging
        gameplay features to implementing artificial intelligence using Unity
        ML-Agents, I aim to push the boundaries of what is possible in game
        design. Below, you will find a selection of videos showcasing these
        projects, demonstrating not only the technical aspects but also the
        creative vision that drives each creation.
      </p>
      <div className="video-grid-UnityProjects">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8PpxlURu7X4?si=rUxuOYOzDx8XHtbb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VfCpggcDLGY?si=VF_DF6n5oQBdsJGa"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/w143JTp_F0k?si=K9V81jNSY_RffVXA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jhFk2t2rPCo?si=znvIHAEezbLzf-R8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zfk-YupJbbI?si=vuBkrWh0QeULXU2U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="tictactoe">
        <h2 className="tictactoe-title">Tic Tac Toe (multiplayer)</h2>
        <p className="tictactoe-description">
          This is a classic Tic Tac Toe game developed for mobile platforms. The
          game features a simple yet engaging user interface, allowing players
          to challenge their friends or play against AI. Enjoy quick matches and
          test your strategic thinking as you try to outsmart your opponent!
        </p>
        <div className="tictactoe-images">
          <img
            src="photos/UnityProjects/tictactoe1.webp"
            alt="Tic Tac Toe Screenshot 1"
          />
          <img
            src="photos/UnityProjects/tictactoe2.webp"
            alt="Tic Tac Toe Screenshot 2"
          />
          <img
            src="photos/UnityProjects/tictactoe3.webp"
            alt="Tic Tac Toe Screenshot 3"
          />
          <img
            src="photos/UnityProjects/tictactoe4.webp"
            alt="Tic Tac Toe Screenshot 4"
          />
        </div>
      </div>
    </div>
  );
};

export default UnityProjects;
