import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteUserBtn() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Eliminar
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Emilinación de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>Estás seguro de que quieres eliminar tu usuario!? 
        Tus datos se eliminarán permanentemente</Modal.Body>
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

export default DeleteUserBtn;
