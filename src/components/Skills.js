// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';

// images
import videoImage1 from './images/swift.png';
import wthImage from './images/wth.png';
import posterImage from './images/poster.png';
import chartImage from './images/charts.png';
import svgImage from './images/svg.png';
import droneImage from './images/drone.png';
import plannerImage from './images/planner.png';

const SkillsSection = styled.section`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 100px 20px;

  h2 {
    color: ${({ theme }) => theme.sectionTitle};
  }
  h3 {
    margin-top: 12px;
    color: ${({ theme }) => theme.sectionSubTitle};
  }
  p {
    margin-top: 8px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;

const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.skillsCard};
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
`;

const ProjectsSection = styled.section`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 0px 0px;

  h2 {
    color: ${({ theme }) => theme.sectionTitle};
  }
  h3 {
    margin-top: 12px;
    color: ${({ theme }) => theme.sectionSubTitle};
  }
  p {
    margin-top: 8px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.projectCard};
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <div className="container">
        <h2>Skills</h2>
        <h3>Programming</h3>

        <SkillsGrid>
          <SkillCard>React 🔥</SkillCard>
          <SkillCard>PostgreSQL</SkillCard>
          <SkillCard>Leaflet & Mapbox</SkillCard>
          <SkillCard>ECMAScript</SkillCard>
          <SkillCard>Node.js</SkillCard>
          <SkillCard>WordPress</SkillCard>
          <SkillCard>React Native</SkillCard>
          <SkillCard>Swift & Kotlin</SkillCard>
        </SkillsGrid>

        <h3>Design & User Experience</h3>
        <p>
          In my free time, I volunteer with VATSIM Scandinavia as part of the staff, where I contribute to designing event banners, posters, and various visual elements. I also have experience creating custom icons, color profiles, and vector graphics.
        </p>

        <SkillsGrid>
          <SkillCard>Adobe Illustrator</SkillCard>
          <SkillCard>Adobe Photoshop</SkillCard>
          <SkillCard>Figma</SkillCard>
        </SkillsGrid>

        <ProjectsSection id="projects">
          <div className="container">
            <ProjectGrid>
              <ProjectCard>
                <img src={wthImage} alt="Event Banner" />
                <h3>Event Banners</h3>
              </ProjectCard>
              <ProjectCard>
                <img src={chartImage} alt="Chart Image" />
                <h3>Charts</h3>
              </ProjectCard>
              <ProjectCard>
                <img src={svgImage} alt="SVG Images" />
                <h3>SVG Images</h3>
              </ProjectCard>
              <ProjectCard>
                <img src={posterImage} alt="Poster Image" />
                <h3>Posters</h3>
              </ProjectCard>
            </ProjectGrid>
          </div>
        </ProjectsSection>

        <h3>Video Projects</h3>
        <p>I led a project at Tampere University of Applied Sciences focused on creating video tutorials for teaching drone operations. We produced eight detailed videos in both Finnish and English, including versions with subtitles.</p>

        <SkillsGrid>
          <SkillCard>Adobe Premiere Pro</SkillCard>
          <SkillCard>AI Audio (TTS)</SkillCard>
          <SkillCard>A1/A3 Drones</SkillCard>
          <SkillCard>Video manuals</SkillCard>
        </SkillsGrid>

        <ProjectsSection id="projects">
          <div className="container">
            <ProjectGrid>
              <ProjectCard>
                <img src={droneImage} alt="Video project" />
                <h3>DJI Mini 4 Pro</h3>
                <p>Video Manual</p>
              </ProjectCard>
              <ProjectCard>
                <img src={plannerImage} alt="Video project" />
                <h3>ArduPilot Mission Planner</h3>
                <p>Video Manual</p>
              </ProjectCard>
            </ProjectGrid>
          </div>
        </ProjectsSection>


      </div>
    </SkillsSection>
  );
};

export default Skills;
