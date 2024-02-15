import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCards({
  imgPath, title, description, ghLink, isBlog, demoLink,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="purple">{title}</Card.Title>
        <Card.Text className="tech" style={{ textAlign: 'justify' }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub />
          {' '}
&nbsp;
          {isBlog ? 'Blog' : 'GitHub'}
        </Button>
        {'\n'}
        {'\n'}

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: '10px' }}
          >
            <CgWebsite />
            {' '}
&nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  isBlog: PropTypes.bool.isRequired,
  demoLink: PropTypes.string,
};
ProjectCards.defaultProps = {
  demoLink: null, // or provide a default value if needed
};

export default ProjectCards;
