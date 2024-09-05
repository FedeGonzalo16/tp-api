import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModifyUserBtn() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Modificar
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Modificación de datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>Estás seguro que quieres actualizar tus datos? No podrás rehacer los cambios.</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Atrás
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Aceptar
        </Button>
        </Modal.Footer>
    </Modal>
    </>
);
}

export default ModifyUserBtn;