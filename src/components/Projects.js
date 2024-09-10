// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

// images
import merinavi from './images/merinavi.png';
import nysseLive from './images/nysseLive.png';
import sectorSplits from './images/sectorSplits.png';
import rcrImage from './images/rcr-generator.png';
import efsImage from './images/efs.png';
import statsImage from './images/stats.png';
import awosImage from './images/awos.png';
import swiftImage from './images/swift.png';

const ProjectsSection = styled.section`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 100px 20px;
  background: ${({ theme }) => theme.projectsBackground};

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

const TechTags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* Space between tags */
  justify-content: center;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.tagBackground};
  color: ${({ theme }) => theme.tagText};
  padding: 5px 10px;
  border-radius: 15px; /* Rounded corners */
  font-size: 14px;
  white-space: nowrap;
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <ProjectGrid>
          <ProjectCard>
            <img src={merinavi} alt="MeriNavi project" />
            <h3>Sailing App</h3>
            <TechTags>
              <TechTag>React</TechTag>
              <TechTag>Mapbox GL</TechTag>
              <TechTag>API</TechTag>
            </TechTags>
            <p>The purpose of this app is to help the crew during sailing races, or any other sea activity, with the necessary information and a bit more. The map base is Mapbox GL and the data is fetched from several Open Data sources such as Väylävirasto, Maanmittauslaitos, Fintraffic and Traficom.</p>
          </ProjectCard>
          <ProjectCard>
            <img src={nysseLive} alt="Nysse-Live project" />
            <h3>Public Transport Status Map</h3>
            <TechTags>
              <TechTag>React</TechTag>
              <TechTag>Mapbox GL</TechTag>
              <TechTag>GraphQL</TechTag>
            </TechTags>
            <p>'Nysse Live' React Mapbox JS application is used to track the public transportation system in Tampere, Finland. View timetables, alerts, save favourite stops, show routes on the map, filter by operator or line number and much more!</p>
          </ProjectCard>
          <ProjectCard>
            <img src={sectorSplits} alt="ACC-Sectors project" />
            <h3>ACC Sectorization</h3>
            <TechTags>
              <TechTag>React</TechTag>
              <TechTag>Mapbox GL</TechTag>
            </TechTags>
            <p>This app is designed to display various sectorization options for the Helsinki Area Control Centre in an intuitive manner. It is intended for simulation purposes only.</p>
          </ProjectCard>
          <ProjectCard>
            <img src={rcrImage} alt="RCR Generator project" />
            <h3>Runway Condition Report Generator</h3>
            <TechTags>
              <TechTag>HTML</TechTag>
              <TechTag>JavaScript</TechTag>
            </TechTags>
            <p>This tool is used to generate a realistic Runway Condition Report for Finnish aerodromes. The app will generate a report based on the imported SNOWTAM or during summer based on the latest METAR reports.</p>
          </ProjectCard>
          <ProjectCard>
            <img src={efsImage} alt="EFS project" />
            <h3>Electronic Flight Strips</h3>
            <TechTags>
              <TechTag>HTML</TechTag>
              <TechTag>Node.js</TechTag>
            </TechTags>
            <p>This tool is used to generate a realistic Runway Condition Report for Finnish aerodromes. The app will generate a report based on the imported SNOWTAM or during summer based on the latest METAR reports.</p>
          </ProjectCard>
          <ProjectCard>
            <img src={statsImage} alt="Statistics project" />
            <h3>Event Statistics Page</h3>
            <TechTags>
              <TechTag>React</TechTag>
              <TechTag>Chart.js</TechTag>
              <TechTag>SQL</TechTag>
            </TechTags>
            <p>This Web Application displays interesting statistics for the 'Welcome to HEL' event by VATSIM Scandinavia. The app shows various statistics including global movements, activity history, busiest days, runway usage, trendline, traffic peaks, ATCO activity and more.</p>
          </ProjectCard>
          <ProjectCard>
            <img src={awosImage} alt="AWOS project" />
            <h3>AWOS Weather Display</h3>
            <TechTags>
              <TechTag>Node.js</TechTag>
              <TechTag>OAuth2</TechTag>
              <TechTag>PostgreSQL</TechTag>
            </TechTags>
            <p>The Automatic Weather Observing System (AWOS) displays weather information useful for air traffic controllers connected to the VATSIM network in Finland. The app utilizes OAuth2 Authentication method which verifies user's VATSIM status.</p>
          </ProjectCard>
          <ProjectCard>
            <img src={swiftImage} alt="Swift Prototype App project" />
            <h3>Swift Prototype App</h3>
            <TechTags>
              <TechTag>Swift</TechTag>
              <TechTag>iOS</TechTag>
              <TechTag>SQL</TechTag>
            </TechTags>
            <p>This is a prototype application made with Swift for iOS devices. The app contains a connection to backend and possibility to add, change or remove data. The user interface is designed to be plain, modern and accessible.</p>
          </ProjectCard>
        </ProjectGrid>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
