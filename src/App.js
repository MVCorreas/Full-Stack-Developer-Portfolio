import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences
} from "../src/Editable/Config.js";
import MainBody from "./Components/home/MainBody.jsx";
import AboutMe from "./Components/home/AboutMe.jsx";
import Project from "./Components/home/Project.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/NavBar.jsx";
import Skills from "./Components/home/Skills.jsx";
import GetInTouch from "./Components/home/GetInTouch.jsx";
import Leadership from "./Components/home/Leadership.jsx";
import Experience from "./Components/home/Experience.jsx";

export const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
  
      
    </>
  );
});

export const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename="/Portfolio">
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
     
      
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      <Footer/>
    </BrowserRouter>
  );
};
