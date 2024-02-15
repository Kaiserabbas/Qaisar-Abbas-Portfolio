import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiJavascript,
  DiNodejs,
  DiDatabase,
  DiPython,
  DiGit,
  DiRuby,
  DiOnedrive,
  DiBootstrap,
  DiDocker, DiGitBranch, DiGitCommit, DiGitMerge, DiGitPullRequest, DiPhotoshop, DiResponsive, DiSass
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiOnedrive />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitBranch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitCommit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitMerge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitPullRequest />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiResponsive />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
    </Row>
  );
}

export default Techstack;
