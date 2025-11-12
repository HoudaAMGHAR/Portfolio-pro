import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
       
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/HoudaAMGHAR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/houdadataengeneer" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>HOUDA AMGHAR</h1>
          <p>Data Analyst / Data Ingénieure </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/HoudaAMGHAR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/houdadataengeneer" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;