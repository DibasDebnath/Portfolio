import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-photo">
          <img src="photos/home/Profile.jpg" alt="Dibas Debnath" />
        </div>
        <div className="home-summary">
          <h2>Dibas Debnath</h2>
          <p>
            3+ years of experience with Unity using C# across both mobile and PC
            platforms, with 10+ published games both professionally and
            personally.
          </p>
           <p>
            4+ years of experience with Cocos using JavaScript for
            web platforms, having professionally published 15+ games, including
            Facebook Instant Games.
          </p>
           <p>
            1+ year of personal experience with Unreal
            Engine using Blueprint and C++ for mobile platforms; published an
            infinity runner game in 2017 featuring Google Achievements and
            leaderboards.
          </p>
           <p>
           Developed a Unity multiplayer game in 2020, utilizing Firebase for database management.
          </p>
           <p>
           Specialized in game mechanics development, AI, complex data management systems, multiplayer services, and project management.
          </p>
            <br/>
        </div>
      </div>
    </div>
  );
};

export default Home;
