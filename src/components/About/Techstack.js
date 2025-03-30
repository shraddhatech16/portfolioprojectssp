import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiUnitySmall,
  DiMysql,
  DiPython,
} from "react-icons/di";
import {
  SiTableau,
  SiAutodesk,
  SiAnsys,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaFileExcel } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUnitySmall />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsys />
      </Col>
      
    </Row>
  );
}

export default Techstack;
