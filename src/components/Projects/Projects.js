import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import heat from "../../Assets/Projects/heat.webp"
import diabetes from "../../Assets/Projects/diabetics.webp"
import turbine from "../../Assets/Projects/turbine.webp";
import antiglare from "../../Assets/Projects/antiglare.webp";
import fingerprint from "../../Assets/Projects/fingerprint.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="purple">Projects and Research Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={heat}
      isBlog={false}
      title="Design & Development of Transient Heat Flux Sensor."
      description={
        <ul>
          <li>Optimized the sensor's design through transient analysis with SolidWorks & Ansys and calibrated it for accurate temperature output. I used LabVIEW & Origin for signal processing and scripted a MATLAB code to calculate heat flux.</li>
          <li>Tested sensor thoroughly in a Hypersonic Shock Tunnel, proving its Response Time of 3ms and 99.35% Accuracy with the heat flux values from the Simulation performed on Ansys Fluent.</li>
        </ul>
      }
    />
  </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetes}
              isBlog={false}
              title="Development of an AI Tool for Diabetes Diagnosis and Prediction."
              description={<ul>
              <li>Developed a Classification Decision Tree algorithm trained on a large dataset, the model achieved 88% accuracy, a 0.92 ROC-AUC score, and 85% precision displaying good capability in Distinguishing between Diabetic and Non-Diabetic cases. </li>
              <li>Exhibited skills in Machine Learning and Data Analysis by focusing on this healthcare innovation in the project.</li>
              </ul>}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turbine}
              isBlog={false}
              title="Design and Development of a Turbine for Waste Heat Recovery System."
              description={<ul>
                <li>Designed and optimized a high-efficiency turbine blade for exhaust energy conversion, achieving 93.66% aerodynamic efficiency and generating 681.18 Watts under 2.5 bar conditions.</li>
                <li>Led the full lifecycle from simulation using Ansys Structural & Turbomachinery modules to manufacturing a compact turbine-generator architecture using SolidWorks & FDM techniques, delivering a solution with 48.16% overall efficiency.</li>
                </ul>}            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={antiglare}
              isBlog={false}
              title="Design and Development of Anti-Glare Inside Rear View Mirror."
              description={<ul>
                <li>Engineered an Anti-theft Ignition using Arduino Uno R3 and Fingerprint sensor, improving vehicle security through biometrics.</li>
                <li>Developed and optimized circuit simulations in Proteus and MATLAB Simulink, ensuring reliable performance and enabling seamless integration into automotive systems.</li>
                </ul>}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fingerprint}
              isBlog={false}
              title="Design of Fingerprint Operated Ignition System."
              description={<ul>
                <li>Engineered an Anti-theft Ignition using Arduino Uno R3 and Fingerprint sensor, improving vehicle security through biometrics.</li>
                 <li>Simulated and validated the circuit design in Tkinter, optimizing system reliability and ensuring seamless integration with the automotive Ignition System.</li>
                 </ul>}
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
