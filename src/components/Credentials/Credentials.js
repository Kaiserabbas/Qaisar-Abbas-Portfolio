import React, { useState } from 'react';
import {
  Container, Row, Col, Modal, Button,
} from 'react-bootstrap';
import full from '../../Assets/full.png';
import rubyrails from '../../Assets/rubyrails.png';
import ruby from '../../Assets/ruby.png';
import react from '../../Assets/react.png';
import javascript from '../../Assets/javascript.png';
import HTML from '../../Assets/HTML-CSS.png';

function Credentials() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCredential, setSelectedCredential] = useState(null);

  const credentials = [
    { id: 'full', imageUrl: full, link: 'https://www.credential.net/773f07aa-a60e-4f81-b02f-b23953166504#gs.566oes' },
    { id: 'rubyrails', imageUrl: rubyrails, link: 'https://www.credential.net/4d3426b8-cc79-4f2e-8558-0b2e45e2658e' },
    { id: 'ruby', imageUrl: ruby, link: 'https://www.credential.net/d63a617d-e026-4836-92d0-6c8e7b48d9c6#gs.566r6s' },
    { id: 'react', imageUrl: react, link: 'https://www.credential.net/d4fb2f85-6746-4f18-94b1-ae556b69266b#gs.566r2t' },
    { id: 'javascript', imageUrl: javascript, link: 'https://www.credential.net/6c6de026-44b6-48c8-8e6b-7f4348cc0d4d#gs.566rzk' },
    { id: 'HTML', imageUrl: HTML, link: 'https://www.credential.net/3988540d-df8c-4c6b-ac77-ed8a726ae0a6#gs.566rwt' },
  ];

  const handleOpenModal = (credential) => {
    setSelectedCredential(credential);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCredential(null);
  };

  return (
    <Container className="credentials">
      <Row>
        {credentials.map((credential) => (
          <Col key={credential.id} md={4}>
            <button className="credentials-button" type="button" onClick={() => handleOpenModal(credential)}>
              <img
                src={credential.imageUrl}
                alt={`Credential ${credential.id}`}
                style={{ maxWidth: '100%', height: 'auto' }}
                className="mb-4"
              />
            </button>
          </Col>
        ))}
      </Row>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton />
        <div>
          {selectedCredential && (
            <a href={selectedCredential.link} target="_blank" rel="noopener noreferrer">
              <img
                src={selectedCredential.imageUrl}
                alt={`Credential ${selectedCredential.id}`}
                style={{ maxWidth: '90%', height: 'auto' }}
              />
            </a>
          )}
        </div>
        <div className="close-button">
          <Button onClick={handleCloseModal}>Close</Button>
        </div>
      </Modal>
    </Container>
  );
}

export default Credentials;
