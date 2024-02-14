import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import developer from "../../Assets/developer3.png";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Qaisar </strong>
              </h1>
              <h2 style={{ paddingBottom: 15 }} className="heading">
                Software Developer | Code Reviewer | Team Player | Remote Cross-cultural Collaboration{" "}
              </h2>
              <p style={{ paddingBottom: 5 }} className="paragraph">
                 I can help you build a product, a feature or a website. Look through some of my work and experience. If you like what you see and have a project you need coded, don't hestiate to contact me.
              </p>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={developer}
                alt="home pic"
                className="developer"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
