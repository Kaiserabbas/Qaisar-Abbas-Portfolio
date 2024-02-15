import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import cuisine from '../../Assets/Projects/cuisine.png';
import space from '../../Assets/Projects/space.png';
import math from '../../Assets/Projects/math.png';
import motorcycle from '../../Assets/Projects/motorcycle.png';
import book from '../../Assets/Projects/book.png';
import crypto from '../../Assets/Projects/crypto.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some Completed
          {' '}
          <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: 'steelblue' }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motorcycle}
              isBlog={false}
              title="Motorcycle Showroom"
              description="This Final Capstone Project is a web application that allows users to book an appointment to try a motorcycle. We have followed the design guidelines provided to us, but we have also added some personal touches to the content."
              ghLink="https://github.com/Kaiserabbas/motorcycle_booking_front_end"
              demoLink="https://motobookingapp.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto-Currencies API"
              description="It is a redux/react web application that works with the real live data from the Crypto-Currencies API. The task is to build a web application for a company that provides Crypto-Currencies and their market price detail services. The application will allow users to view stock prices for Crypto-Currencies and anylize the details."
              ghLink="https://github.com/Kaiserabbas/crypto-currencies"
              demoLink="https://crypto-currencies-info.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuisine}
              isBlog={false}
              title="Continental-Cuisine"
              description="Welcome to the repository of Continental Classics Cuisine! At our restaurant, we take pride in serving timeless and beloved dishes from the heart of Europe. Explore a curated collection of recipes, cooking techniques, and culinary inspiration that have made our establishment a cherished dining destination."
              ghLink="https://github.com/Kaiserabbas/continental--cuisine"
              demoLink="https://continental--cuisine.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Store"
              description="Welcome to our bookstore! We are a community of book lovers dedicated to providing a convenient and enjoyable way to discover, read, and discuss books. Our website allows you to: Add books to your personal library Update the percentage of each book that you have read Delete books from your library Add new books to our catalog."
              ghLink="https://space-travelers-hub.pages.dev/"
              demoLink="https://dab46d98.bookstore-8aq.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space}
              isBlog={false}
              title="Space Travelers' Hub"
              description="It works with the real live data from the SpaceX API. The task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions."
              ghLink="https://space-travelers-hub.pages.dev/"
              demoLink="https://space-travelers-hub.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={math}
              isBlog={false}
              title="Calculator and Quotes"
              description="It contains React component that will hold the core functionality: a calculator. I have added the logic needed to make the Calculator component to actually work and fetched data from an external API to display quotes alongside your calculator."
              ghLink="https://github.com/Kaiserabbas/math-magician"
              demoLink="https://math-magician.pages.dev/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
