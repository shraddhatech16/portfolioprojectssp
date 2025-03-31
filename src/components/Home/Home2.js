import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/shreyash_profile.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am Passionate about optimising, and validating systems, while ensuring product quality through cross-functional 
            collaboration, data-driven decision-making, and process improvement for cost reduction
              <br />
              <br />At the confluence of creativity and precision, I harness programming expertise in 
                <b className="purple"> Python, MATLAB, R, SQL </b>
              <br />
              <br />
              and advanced tools such as  &nbsp;
              
                <b className="purple">SolidWorks, Ansys, Tableau, and Unity </b> and
                to craft solutions that transcend convention. My mastery in simulation, optimization, and predictive analytics empowers me to address complex, multifaceted challenges with a methodical, data-driven approach that drives transformative outcomes.{" "}
              <br />
              
             
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                 href="mailto:shreypar@umich.edu"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shreyash100402/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
