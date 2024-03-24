import React from "react";
import YouTubeVideo from "../youtube/Youtube";
import "./RacingTeam.css";

const RacingTeam = () => {
  return (
    <section id="racingteam" className="racingteam">
      <p>DINO LUZZI</p>
      <h1>RACING TEAM</h1>
      <div className="container">
        <YouTubeVideo videoId="CxTlagv8NF0" width="100%" height="400px" />
        <YouTubeVideo videoId="prWCRomiVic" width="100%" height="400px" />
      </div>
    </section>
  );
};

export default RacingTeam;
