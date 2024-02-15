import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h2 className="purple">About Me</h2>
          <p>
            Hello! I'm Qaisar Abbas, a dedicated software developer hailing from the vibrant city of Faisalabad, Pakistan.
          </p>

          Professional Background
          I've carved my path as a self-employed software developer, driven by a passion for crafting elegant solutions to complex problems. My journey led me through the rigorous Full-stack Development Program at Microverse, where I honed my skills and gained invaluable experience.

          Passion Beyond Code
          While I thrive in the realm of coding, I also indulge in various other pursuits:

          Gaming Enthusiast: I find joy and relaxation in exploring virtual worlds and conquering digital challenges.

          Wanderlust Spirit: Traveling allows me to broaden my horizons, immerse myself in diverse cultures, and draw inspiration from the beauty of our world.

          Philosophy
          In all my endeavors, my motto is simple yet profound: "Strive to build things that make a difference!" I believe in leveraging technology to create meaningful solutions that positively impact lives.
          <ul>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"
            {' '}
          </p>
          <footer className="blockquote-footer">Qaisar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
