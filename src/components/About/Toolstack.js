import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaUnity } from "react-icons/fa6";
import { FaWindows } from "react-icons/fa";

import {
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUnity />
      </Col>
    </Row>
  );
}

export default Toolstack;
