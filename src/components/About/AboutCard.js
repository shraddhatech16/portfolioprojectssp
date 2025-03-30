import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Driven by an unwavering passion for engineering and technology, I integrate expertise in Industrial and Operations Engineering, Mechanical Engineering, and Automobile Engineering with pioneering advancements in Artificial Intelligence, Machine Learning, Data Science, and Mechatronics. My intellectual curiosity spans vibrant disciplines, from the intricacies of aerospace systems and robotics to the precision of automotive design, thermal analysis, and fluid dynamics.
          <br/>
          <br/>
          At the confluence of creativity and precision, I harness programming expertise (Python, MATLAB, R, SQL) and advanced tools such as SolidWorks, Ansys, Tableau, and Unity to craft solutions that transcend convention. My mastery in simulation, optimization, and predictive analytics empowers me to address complex, multifaceted challenges with a methodical, data-driven approach that drives transformative outcomes.
          <br/>
          <br/>
          What inspires me most is the opportunity to push boundaries and redefine what is possible—whether by revolutionizing systems for unparalleled efficiency and performance, engineering groundbreaking products, or shaping the future of human-machine collaboration in safety-critical domains.
          <br/>
          <br/>
          Beyond my technical pursuits, I am committed to fostering innovation through collaboration and creativity, connecting with diverse communities, and advancing ideas that leave a lasting impact on society.
          <br/>
          <br/>
          Let’s connect to exchange ideas, build transformative solutions, and unlock the extraordinary potential of engineering and technology.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
