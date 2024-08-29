import React, { Component } from "react";
//import Header from "../../components/header/Header";
//import Footer from "../../components/footer/Footer";
import GithubRepoCard from "./GithubRepoCard.jsx";
import PublicationCard from "./PublicationCardInfo.jsx";
//import Button from "../../components/button/Button";
//import TopButton from "../../components/topButton/TopButton";
import Reveal from 'react-reveal'; 
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "./portfolioInfo.jsx";
import ProjectsData from "./projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg.jsx";

class Projects extends Component {
  render() {
    return (
      <div className="projects-main">
        {/* <Header theme={theme} /> */}
        <div className="basic-projects">
          <Reveal.Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  // style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  // style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Reveal.Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} />;
          })}
        </div>
        {/* <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        /> */}

        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Reveal.Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    // style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    // style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
              </Reveal.Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} />;
          })}
        </div>

        {/* <Footer theme={this.props.theme} onToggle={this.props.onToggle} /> */}
        {/* <TopButton theme={this.props.theme} /> */}
        <div className="footer-div">
      <Reveal.Fade>
        <p className="footer-text" >
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Reveal.Fade>
    </div>

      </div>
    );
  }
}

export default Projects;
