import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/mytechnobd.png";
import emotion from "../../Assets/Projects/facebooklogin.JPG";
import editor from "../../Assets/Projects/prayertimes.PNG";
import chatify from "../../Assets/Projects/hospitalbedfinding.JPG";
import suicide from "../../Assets/Projects/orbund.jpg";
import bitsOfCode from "../../Assets/Projects/bootstrap.JPG";

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
              title="Finding Available Bed In Hospital Java Desktop Application"
              description="Hospital bed finding System where people can find available ICU bed hospital. People can see which hospital has available bed, Hospital Location, Search box, Hospital profile, Update or delete hospital Information (Admin or hospital admin)   Technology: JAVA, Netbeans, swing, AWT, MySQL"
              link="https://github.com/FahimAdnan-CSE/Finding-Available-Bed-In-Hospital-Java-Desktop-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Web Development Company Website"
              description="This is a web development Company based website .There user can get software, Domain-Hosting, Mobile apps
              cloud services and many other solution. User can see the company’s recent works .If
              user login or signup our website they will conduct with a user dashboard .There are some
              extra option in nav bar like order status, setting, project purchase. Registered member
              can buy our project and can see their order status. And also can logout from the user
              dashboard .The backend is maintain by MySQL database and php."
              link="https://github.com/FahimAdnan-CSE/raw-php-web-development-company-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mulsilm Prayer auto time zone synchronization (Android App)"
              description="The app show the five-time salat times
              and there is division wise time. In our country eight-division, salat time can be shown in this
              app. When any salat waqt is running the app is indicated this waqt .In our app, there is a
              manual mode. When the watch user login in the manual mode he can manually update the
              watch time and send short notification messages into the watch.
              Technology: Java, Android Studio, XAML, JSON, API"
              link="https://github.com/FahimAdnan-CSE/muslim-prayer-times-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bootstrap project"
              description="A portfolio website page build with HTML,CSS and Bootstrap"
              link="https://github.com/FahimAdnan-CSE/web-development-company-portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mobile View"
              description="City University Orbund System In Mobile View (Android App)"
              link="https://github.com/FahimAdnan-CSE/City-University-Orbund-System-Mobile-View-Android-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Facebook login page"
              description="Facebook login page design using Html and CSS"
              link="https://github.com/FahimAdnan-CSE/facebook-login-page-design"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
