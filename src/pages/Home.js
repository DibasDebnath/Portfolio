import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="summary-container">
        <div className="home-photo">
          <img src="./photos/home/profile.jpg" alt="Dibas Debnath" />
        </div>
        <div className="home-summary">
          <h2>Dibas Debnath</h2>
          <p>
            • 3+ years of experience with Unity using C# across both mobile and
            PC platforms, with 10+ published games both professionally and
            personally.
          </p>
          <p>
            • 4+ years of experience with Cocos using JavaScript for web
            platforms, having professionally published 15+ games, including
            Facebook Instant Games.
          </p>
          <p>
            • 1+ year of personal experience with Unreal Engine using Blueprint
            and C++ for mobile platforms; published an infinity runner game in
            2017 featuring Google Achievements and leaderboards.
          </p>
          <p>
            • Developed a Unity multiplayer game in 2020, utilizing Firebase for
            database management.
          </p>
          <p>
            • Specialized in game mechanics development, AI, complex data
            management systems, multiplayer services, and project management.
          </p>
          <br />
        </div>
      </div>

      <div className="experience">
        <h1>Skills & Proficiencies</h1>
        <br />
        <ul>
          <strong>Programming Languages: </strong>C#, JavaScript, C++, Java, C,
          PHP, Python, Oracle PL/SQL
        </ul>
        <ul>
          <strong>Game Engines: </strong>Unity 3D, Unreal Engine, Cocos Creator,
          LibGDX (Android Studio)
        </ul>
        <ul>
          <strong>Technology Stack: </strong>MERN Stack (MongoDB, Express,
          React, NodeJS), MySQL, PHP
        </ul>
        <ul>
          <strong>Management tools: </strong>Microsoft Project, Microsoft Teams,
          Trello, Slack
        </ul>
        <ul>
          <strong>Development Methodology: </strong>Agile, Scrum, Prototyping,
          Waterfall
        </ul>
        <ul>
          <strong>Version Control: </strong>GitHub, Source Tree/Bit bucket
        </ul>
        <ul>
          <strong>Other: </strong>Microsoft Word, Excel, PowerPoint
        </ul>
        <ul>
          <strong>Special Tools: </strong>Unity Machine Learning - Agent, Tensor
          Flow
        </ul>
      </div>

      <div className="experience">
        <h1>Experience</h1>
        <h2>Game Developer</h2>
        <p>
          <strong>Variant Group</strong> | Toronto, ON, Canada | April 2021 –
          Present
        </p>
        <ul>
          <li>
            Published 15+ web-based games using JavaScript, showcasing
            creativity and technical expertise.
          </li>
          <li>
            Developed 30+ prototype game mechanics for evaluation and iteration.
          </li>
          <li>
            Conceived and documented brain training game ideas, ensuring clear
            communication and effective development.
          </li>
          <li>
            Managed project timelines from initiation to publication, ensuring
            deadlines and quality standards are met.
          </li>
          <li>
            Innovated in game mechanics development, including complex dynamic
            scoring systems and collaboration with artists on visual elements
            and particle systems.
          </li>
        </ul>

        <h2>Game Developer (Contract)</h2>
        <p>
          <strong>Good Boy Games</strong> | Toronto, ON, Canada | May 2020 –
          October 2020
        </p>
        <ul>
          <li>
            Designed the base architecture for a strategy RPG PC game, focusing
            on foundational systems and scalability.
          </li>
          <li>
            Implemented dynamic level and map generation based on player
            statistics and game difficulty.
          </li>
          <li>
            Developed a Player Stats and Data Management System, enhancing game
            data tracking and user experience.
          </li>
          <li>
            Created dynamic visuals and environmental effects, contributing to
            immersive gameplay.
          </li>
          <li>
            Delivered high-quality results efficiently, meeting project goals
            and expectations.
          </li>
        </ul>

        <h2>Game Developer</h2>
        <p>
          <strong>Pechas Game Studios</strong> | Dhaka, Bangladesh | November
          2019 – December 2020
        </p>
        <ul>
          <li>
            Developed 15+ hyper-casual and casual mobile games, contributing to
            the studio’s diverse portfolio.
          </li>
          <li>
            Collaborated with experienced developers and designers to produce
            high-quality work within deadlines.
          </li>
          <li>
            Engaged with publishers such as Lion Studios, Good Job Games, and
            Green Panda, with multiple games undergoing testing phases.
          </li>
          <li>
            Utilized Unity, Cocos-2D, and Lib-GDX in C#, JavaScript, and Java,
            demonstrating versatility in programming languages and game engines.
          </li>
        </ul>
      </div>

      <div className="experience">
        <h1>Education</h1>
        <h2>Business Analytics</h2>
        <p>
          <strong>Graduate Certificate | Seneca College</strong> | Toronto, ON,
          Canada | September 2020 – April 2021
        </p>
        <ul>
          <li>
            Participated as an Analyst in the SAS Safe Road Competition,
            leveraging data preparation and visualization skills using Tableau.
          </li>
          <li>
            Developed expertise in Sentiment Analysis, Text Analysis, and
            Predictive Analytics with SAS Enterprise Miner.
          </li>
          <li>
            Conducted advanced data mining and modeling on real-world datasets
            from Amazon, Google, and Facebook.
          </li>
        </ul>

        <h2>Project Management - Information Technology</h2>
        <p>
          <strong>Graduate Certificate | Seneca College</strong> | Toronto, ON,
          Canada | January 2020 – August 2020
        </p>
        <ul>
          <li>Led a team as Project Manager at the Seneca Hackathon 2020.</li>
          <li>
            Utilized tools like Microsoft Project, Teams, and Excel to conduct
            requirement analysis, activity and resource planning, cost
            estimation, budgeting, and progress monitoring.
          </li>
          <li>
            Gained proficiency in development methodologies, including Agile,
            Scrum, Lean, Extreme Programming, and prototyping.
          </li>
        </ul>

        <h2>Software Engineering</h2>
        <p>
          <strong>
            Bachelor of Science | Daffodil International University
          </strong>
          | Dhaka, Bangladesh | May 2015 – April 2019
        </p>
        <ul>
          <li>
            Conducted research on Game AI using Machine Learning techniques,
            including Reinforcement Learning and Imitation Learning with Unity
            ML-Agents.
          </li>
          <li>
            Developed applications across multiple platforms (Android, iOS, web,
            and desktop), including a personal diary, contact management system,
            To-Let website, blogging platforms, e-commerce websites, a garments
            ERP system, food review website, and a personal messenger app.
          </li>
          <li>
            Created games using Unreal Engine, Unity, and Cocos2D; published a
            fully self-developed game on the Google Play Store featuring Google
            Analytics, AdMob integration, leaderboards, and achievements.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
