import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ConfirmationModal({ onDelete }) {
  const [show, setShow] = useState(false);

  const handleConfirm = () => {
    onDelete();
    setShow(false);
  };

  return (
    <>
      <Button variant="danger" onClick={() => setShow(true)}>
        Delete
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete forfait?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
