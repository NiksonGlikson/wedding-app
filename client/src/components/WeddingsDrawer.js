import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import WeddingsList from './WeddingList';

function WeddingsDrawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Свадьбы
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Мои Свадьбы</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <WeddingsList />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default WeddingsDrawer;
