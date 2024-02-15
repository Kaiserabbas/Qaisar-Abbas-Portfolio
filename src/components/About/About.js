import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import photo from '../../Assets/photo.png';

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2em' }}>
              <span className="tech"> ABOUT </span>
              {' '}
              ME
            </h1>
            <p className="home-about-body">
              I'm Qaisar, your app developer. I sculpt pixels into front-end landscapes and forge backend logic into steel beams, crafting seamless experiences that feel as natural as a sunrise.

              <br />
              <br />
              With a dynamic background in both software development and agriculture, I bring a unique blend of technical expertise and industry experience. As a dedicated Software Developer, I've developed extensive knowledge in:
              <br />
              <br />
              <i>
                <b className="tech">Sofware Development:</b>
                {' '}
                Object-Oriented Programming, Pair-Programming, Test-driven development
              </i>
              <br />
              <i>
                <b className="tech">Frontend:</b>
                {' '}
                Front End Design, HTML5, CSS, Javascript/React, Redux, API, Frameworks, Bootstrap
              </i>
              <br />
              <i>
                <b className="tech">Backend:</b>
                {' '}
                Database-PostgreSQL, Ruby on Rails, Unit Testing, Deployment, Maintenance
              </i>
              <br />
              <i>
                <b className="tech">Test Driven Development:</b>
                {' '}
                RSpec, Capybara and Jest
              </i>
              <br />
              <i>
                <b className="tech">Tools & Methods:</b>
                {' '}
                Git, Github
              </i>
              <br />
              <br />
              I'm always eager to learn, experiment, and grow, embracing every opportunity to contribute meaningfully to the tech world. If you'd like to get in contact about potential job opportunities, please reach out!' or 'I love talking with other devs, feel free to connect if you'd like to chat.
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={photo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>FIND ME ON</h2>
            <p>
              Feel free to
              {' '}
              <span className="purple">connect </span>
              with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kaiserabbas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AbbasKayser"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaisar-abbas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/Kayser.qaas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default About;
