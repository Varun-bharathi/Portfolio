import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
/*import leaf from "../../Assets/Projects/leaf.png";*/
/*import emotion from "../../Assets/Projects/emotion.png";*/
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
/*import suicide from "../../Assets/Projects/suicide.png";*/
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="STUDENTS PORTAL"
              description="A web portal for students and staffs to maintain academic grades , achievements etc."
             /* ghLink="https://github.com/soumyajit4419/Chatify"*/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FARM TO MARKET"
              description="A webpage for farmers to post their products to sell them without the interference of middleman."
              /* ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"*/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MY PORTFOLIO"
              description="A portfolio site which contains my general details such as my qualifications, projects, my skill set etc"
            /*  ghLink="https://github.com/soumyajit4419/Editor.io"*/      
            />
          </Col>

           
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
