import React from "react";
import "./Research.css";

const Research = () => {
  return (
    <div className="research-container">
      <h1 className="research-headline">Unity ML Agent AI Research</h1>
      <p className="research-summary">
        In this Research, we trained a reinforcement learning agent and an
        imitation learning agent using one of the most recent policy gradient
        methods, proximal policy optimization, in an Arcade Car Racing game with
        a Movable car. We investigated how machine learning can be used to
        increase performance of a Game AI. Two agents were trained in two
        different Learning methods. The first method was Reinforcement learning
        and the second was with imitation learning. After training the agents,
        the agents were placed in the training environment where we compared
        them based on their performance. The performance was measured by the
        achieved cumulative reward. The result showed that there is a difference
        in performance between the agents. It was concluded that Game AI
        performance can be improved with machine learning with Unity ML Agents
        and Reinforcement learning is better to use in vast observable
        environment spectrum with complicated input system and Imitation
        learning is better to use for quick development of simple Game AIs which
        is better from monotonous pattern recognizable Scripted Bots.
      </p>
      <div className="video-grid-Research">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Oqo-zUNnNO8?si=FwG-Jw4BlWJEjINA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/64zj6eykYEk?si=Qf1OuGwPeYZIYpFM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/G-JENcau-PY?si=IcSCGm9ym3uy7g01"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KOKcMhaH28g?si=DUMF5jZnnQd2OjlV"
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

export default Research;
